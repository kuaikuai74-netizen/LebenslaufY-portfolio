import { useEffect, useRef } from 'react';
import { Mesh, Program, Renderer, Triangle } from 'ogl';
import './Prism.css';

export default function Prism({
  height = 3.5,
  baseWidth = 5.5,
  animationType = 'rotate',
  glow = 1,
  offset = { x: 0, y: 0 },
  noise = 0.5,
  transparent = true,
  scale = 3.6,
  maxDpr = 1.25,
  maxFps = 30,
  hueShift = 0,
  colorFrequency = 1,
  hoverStrength = 2,
  inertia = 0.05,
  bloom = 1,
  suspendWhenOffscreen = false,
  timeScale = 0.5,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const H = Math.max(0.001, height);
    const baseHalf = Math.max(0.001, baseWidth) * 0.5;
    const dpr = Math.min(maxDpr, window.devicePixelRatio || 1);
    const renderer = new Renderer({ dpr, alpha: transparent, antialias: false });
    const gl = renderer.gl;

    gl.disable(gl.DEPTH_TEST);
    gl.disable(gl.CULL_FACE);
    gl.disable(gl.BLEND);

    Object.assign(gl.canvas.style, {
      position: 'absolute',
      inset: '0',
      width: '100%',
      height: '100%',
      display: 'block',
    });
    container.appendChild(gl.canvas);

    const vertex = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragment = `
      precision highp float;

      uniform vec2 iResolution;
      uniform float iTime;
      uniform float uHeight;
      uniform float uBaseHalf;
      uniform mat3 uRot;
      uniform int uUseBaseWobble;
      uniform float uGlow;
      uniform vec2 uOffsetPx;
      uniform float uNoise;
      uniform float uSaturation;
      uniform float uScale;
      uniform float uHueShift;
      uniform float uColorFreq;
      uniform float uBloom;
      uniform float uCenterShift;
      uniform float uInvBaseHalf;
      uniform float uInvHeight;
      uniform float uMinAxis;
      uniform float uPxScale;
      uniform float uTimeScale;

      vec4 tanh4(vec4 x) {
        vec4 e2x = exp(2.0 * x);
        return (e2x - 1.0) / (e2x + 1.0);
      }

      float rand(vec2 co) {
        return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453123);
      }

      float sdOctaAnisoInv(vec3 p) {
        vec3 q = vec3(abs(p.x) * uInvBaseHalf, abs(p.y) * uInvHeight, abs(p.z) * uInvBaseHalf);
        float m = q.x + q.y + q.z - 1.0;
        return m * uMinAxis * 0.5773502691896258;
      }

      float sdPyramidUpInv(vec3 p) {
        float oct = sdOctaAnisoInv(p);
        float halfSpace = -p.y;
        return max(oct, halfSpace);
      }

      mat3 hueRotation(float a) {
        float c = cos(a), s = sin(a);
        mat3 W = mat3(
          0.299, 0.587, 0.114,
          0.299, 0.587, 0.114,
          0.299, 0.587, 0.114
        );
        mat3 U = mat3(
           0.701, -0.587, -0.114,
          -0.299,  0.413, -0.114,
          -0.300, -0.588,  0.886
        );
        mat3 V = mat3(
           0.168, -0.331,  0.500,
           0.328,  0.035, -0.500,
          -0.497,  0.296,  0.201
        );
        return W + U * c + V * s;
      }

      void main() {
        vec2 f = (gl_FragCoord.xy - 0.5 * iResolution.xy - uOffsetPx) * uPxScale;
        float z = 5.0;
        float d = 0.0;
        vec3 p;
        vec4 o = vec4(0.0);
        mat2 wob = mat2(1.0);

        if (uUseBaseWobble == 1) {
          float t = iTime * uTimeScale;
          float c0 = cos(t);
          float c1 = cos(t + 33.0);
          float c2 = cos(t + 11.0);
          wob = mat2(c0, c1, c2, c0);
        }

        for (int i = 0; i < 56; i++) {
          p = vec3(f, z);
          p.xz = p.xz * wob;
          p = uRot * p;
          vec3 q = p;
          q.y += uCenterShift;
          d = 0.1 + 0.2 * abs(sdPyramidUpInv(q));
          z -= d;
          o += (sin((p.y + z) * uColorFreq + vec4(0.0, 1.0, 2.0, 3.0)) + 1.0) / d;
        }

        o = tanh4(o * o * (uGlow * uBloom) / 1e5);
        vec3 col = o.rgb;
        float n = rand(gl_FragCoord.xy + vec2(iTime));
        col += (n - 0.5) * uNoise;
        col = clamp(col, 0.0, 1.0);

        float L = dot(col, vec3(0.2126, 0.7152, 0.0722));
        col = clamp(mix(vec3(L), col, uSaturation), 0.0, 1.0);

        if (abs(uHueShift) > 0.0001) {
          col = clamp(hueRotation(uHueShift) * col, 0.0, 1.0);
        }

        gl_FragColor = vec4(col, o.a);
      }
    `;

    const iResolution = new Float32Array(2);
    const offsetPx = new Float32Array(2);
    const rot = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        iResolution: { value: iResolution },
        iTime: { value: 0 },
        uHeight: { value: H },
        uBaseHalf: { value: baseHalf },
        uUseBaseWobble: { value: animationType === 'rotate' ? 1 : 0 },
        uRot: { value: rot },
        uGlow: { value: Math.max(0, glow) },
        uOffsetPx: { value: offsetPx },
        uNoise: { value: Math.max(0, noise) },
        uSaturation: { value: transparent ? 1.5 : 1 },
        uScale: { value: Math.max(0.001, scale) },
        uHueShift: { value: hueShift || 0 },
        uColorFreq: { value: Math.max(0, colorFrequency || 1) },
        uBloom: { value: Math.max(0, bloom || 1) },
        uCenterShift: { value: H * 0.25 },
        uInvBaseHalf: { value: 1 / baseHalf },
        uInvHeight: { value: 1 / H },
        uMinAxis: { value: Math.min(baseHalf, H) },
        uPxScale: { value: 1 },
        uTimeScale: { value: Math.max(0, timeScale || 1) },
      },
    });
    const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });

    const resize = () => {
      const width = container.clientWidth || 1;
      const nextHeight = container.clientHeight || 1;
      renderer.setSize(width, nextHeight);
      iResolution[0] = gl.drawingBufferWidth;
      iResolution[1] = gl.drawingBufferHeight;
      offsetPx[0] = (offset?.x ?? 0) * dpr;
      offsetPx[1] = (offset?.y ?? 0) * dpr;
      program.uniforms.uPxScale.value = 1 / ((gl.drawingBufferHeight || 1) * 0.1 * Math.max(0.001, scale));
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    const setMat3FromEuler = (yawY, pitchX, rollZ, out) => {
      const cy = Math.cos(yawY);
      const sy = Math.sin(yawY);
      const cx = Math.cos(pitchX);
      const sx = Math.sin(pitchX);
      const cz = Math.cos(rollZ);
      const sz = Math.sin(rollZ);

      out[0] = cy * cz + sy * sx * sz;
      out[1] = cx * sz;
      out[2] = -sy * cz + cy * sx * sz;
      out[3] = -cy * sz + sy * sx * cz;
      out[4] = cx * cz;
      out[5] = sy * sz + cy * sx * cz;
      out[6] = sy * cx;
      out[7] = -sx;
      out[8] = cy * cx;
      return out;
    };

    let frame = 0;
    const startTime = performance.now();
    let yaw = 0;
    let pitch = 0;
    let roll = 0;
    let targetYaw = 0;
    let targetPitch = 0;
    let lastRenderTime = 0;
    const pointer = { x: 0, y: 0, inside: true };
    const hoverEase = Math.max(0, Math.min(1, inertia || 0.12));
    const hoverPower = Math.max(0, hoverStrength || 1);
    const timeMultiplier = Math.max(0, timeScale || 1);
    const frameInterval = maxFps > 0 ? 1000 / maxFps : 0;

    const lerp = (a, b, t) => a + (b - a) * t;
    const onMove = (event) => {
      const cx = Math.max(1, window.innerWidth) * 0.5;
      const cy = Math.max(1, window.innerHeight) * 0.5;
      pointer.x = Math.max(-1, Math.min(1, (event.clientX - cx) / cx));
      pointer.y = Math.max(-1, Math.min(1, (event.clientY - cy) / cy));
      pointer.inside = true;
    };
    const onLeave = () => {
      pointer.inside = false;
    };

    if (animationType === 'hover') {
      window.addEventListener('pointermove', onMove, { passive: true });
      window.addEventListener('mouseleave', onLeave);
      window.addEventListener('blur', onLeave);
    }

    const render = (time) => {
      if (frameInterval && lastRenderTime && time - lastRenderTime < frameInterval) {
        frame = requestAnimationFrame(render);
        return;
      }
      lastRenderTime = time;

      const elapsed = (time - startTime) * 0.001;
      program.uniforms.iTime.value = elapsed;

      if (animationType === 'hover') {
        targetYaw = (pointer.inside ? -pointer.x : 0) * 0.6 * hoverPower;
        targetPitch = (pointer.inside ? pointer.y : 0) * 0.6 * hoverPower;
        yaw = lerp(yaw, targetYaw, hoverEase);
        pitch = lerp(pitch, targetPitch, hoverEase);
        roll = lerp(roll, 0, 0.1);
        program.uniforms.uRot.value = setMat3FromEuler(yaw, pitch, roll, rot);
      } else if (animationType === '3drotate') {
        const t = elapsed * timeMultiplier;
        program.uniforms.uRot.value = setMat3FromEuler(t * 0.35, Math.sin(t * 0.27) * 0.45, Math.sin(t * 0.19) * 0.3, rot);
      } else {
        program.uniforms.uRot.value = rot;
      }

      renderer.render({ scene: mesh });
      frame = requestAnimationFrame(render);
    };

    const start = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };
    const stop = () => {
      if (!frame) return;
      cancelAnimationFrame(frame);
      frame = 0;
    };

    let intersectionObserver = null;
    if (suspendWhenOffscreen) {
      intersectionObserver = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) start();
        else stop();
      });
      intersectionObserver.observe(container);
    }
    start();

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver?.disconnect();
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('blur', onLeave);
      if (gl.canvas.parentElement === container) container.removeChild(gl.canvas);
    };
  }, [
    height,
    baseWidth,
    animationType,
    glow,
    noise,
    offset?.x,
    offset?.y,
    scale,
    transparent,
    maxDpr,
    maxFps,
    hueShift,
    colorFrequency,
    timeScale,
    hoverStrength,
    inertia,
    bloom,
    suspendWhenOffscreen,
  ]);

  return <div className="prism-container" ref={containerRef} />;
}
