import { useCallback, useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Cubes.css';

export default function Cubes({
  gridSize = 10,
  cubeSize,
  maxAngle = 45,
  radius = 3,
  easing = 'power3.out',
  duration = { enter: 0.3, leave: 0.6 },
  cellGap,
  borderStyle = '1px solid #fff',
  faceColor = '#120F17',
  shadow = false,
  autoAnimate = true,
  rippleOnClick = true,
  rippleColor = '#fff',
  rippleSpeed = 2,
}) {
  const sceneRef = useRef(null);
  const rafRef = useRef(null);
  const idleTimerRef = useRef(null);
  const userActiveRef = useRef(false);
  const simPosRef = useRef({ x: 0, y: 0 });
  const simTargetRef = useRef({ x: 0, y: 0 });
  const simRAFRef = useRef(null);

  const colGap =
    typeof cellGap === 'number'
      ? `${cellGap}px`
      : cellGap?.col !== undefined
        ? `${cellGap.col}px`
        : '5%';
  const rowGap =
    typeof cellGap === 'number'
      ? `${cellGap}px`
      : cellGap?.row !== undefined
        ? `${cellGap.row}px`
        : '5%';

  const enterDur = duration.enter;
  const leaveDur = duration.leave;

  const tiltAt = useCallback(
    (rowCenter, colCenter) => {
      if (!sceneRef.current) {
        return;
      }

      sceneRef.current.querySelectorAll('.cube').forEach((cube) => {
        const r = Number(cube.dataset.row);
        const c = Number(cube.dataset.col);
        const dist = Math.hypot(r - rowCenter, c - colCenter);

        if (dist <= radius) {
          const pct = 1 - dist / radius;
          const angle = pct * maxAngle;
          gsap.to(cube, {
            duration: enterDur,
            ease: easing,
            overwrite: true,
            rotateX: -angle,
            rotateY: angle,
          });
        } else {
          gsap.to(cube, {
            duration: leaveDur,
            ease: 'power3.out',
            overwrite: true,
            rotateX: 0,
            rotateY: 0,
          });
        }
      });
    },
    [radius, maxAngle, enterDur, leaveDur, easing],
  );

  const resetAll = useCallback(() => {
    if (!sceneRef.current) {
      return;
    }

    sceneRef.current.querySelectorAll('.cube').forEach((cube) =>
      gsap.to(cube, {
        duration: leaveDur,
        rotateX: 0,
        rotateY: 0,
        ease: 'power3.out',
      }),
    );
  }, [leaveDur]);

  const onPointerMove = useCallback(
    (event) => {
      if (!sceneRef.current) {
        return;
      }

      userActiveRef.current = true;
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }

      const rect = sceneRef.current.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;
      const colCenter = (event.clientX - rect.left) / cellW;
      const rowCenter = (event.clientY - rect.top) / cellH;

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(() => tiltAt(rowCenter, colCenter));

      idleTimerRef.current = setTimeout(() => {
        userActiveRef.current = false;
      }, 3000);
    },
    [gridSize, tiltAt],
  );

  const onTouchMove = useCallback(
    (event) => {
      if (!sceneRef.current) {
        return;
      }

      event.preventDefault();
      userActiveRef.current = true;
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }

      const rect = sceneRef.current.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;
      const touch = event.touches[0];
      const colCenter = (touch.clientX - rect.left) / cellW;
      const rowCenter = (touch.clientY - rect.top) / cellH;

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(() => tiltAt(rowCenter, colCenter));

      idleTimerRef.current = setTimeout(() => {
        userActiveRef.current = false;
      }, 3000);
    },
    [gridSize, tiltAt],
  );

  const onTouchStart = useCallback(() => {
    userActiveRef.current = true;
  }, []);

  const onTouchEnd = useCallback(() => {
    resetAll();
  }, [resetAll]);

  const onClick = useCallback(
    (event) => {
      if (!rippleOnClick || !sceneRef.current) {
        return;
      }

      const rect = sceneRef.current.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;
      const clientX = event.clientX || event.touches?.[0]?.clientX;
      const clientY = event.clientY || event.touches?.[0]?.clientY;
      const colHit = Math.floor((clientX - rect.left) / cellW);
      const rowHit = Math.floor((clientY - rect.top) / cellH);

      const spreadDelay = 0.15 / rippleSpeed;
      const animDuration = 0.3 / rippleSpeed;
      const holdTime = 0.6 / rippleSpeed;
      const rings = {};

      sceneRef.current.querySelectorAll('.cube').forEach((cube) => {
        const r = Number(cube.dataset.row);
        const c = Number(cube.dataset.col);
        const ring = Math.round(Math.hypot(r - rowHit, c - colHit));
        if (!rings[ring]) {
          rings[ring] = [];
        }
        rings[ring].push(cube);
      });

      Object.keys(rings)
        .map(Number)
        .sort((a, b) => a - b)
        .forEach((ring) => {
          const delay = ring * spreadDelay;
          const faces = rings[ring].flatMap((cube) =>
            Array.from(cube.querySelectorAll('.cube-face')),
          );

          gsap.to(faces, {
            backgroundColor: rippleColor,
            duration: animDuration,
            delay,
            ease: 'power3.out',
          });
          gsap.to(faces, {
            backgroundColor: faceColor,
            duration: animDuration,
            delay: delay + animDuration + holdTime,
            ease: 'power3.out',
          });
        });
    },
    [rippleOnClick, gridSize, faceColor, rippleColor, rippleSpeed],
  );

  useEffect(() => {
    if (!autoAnimate || !sceneRef.current) {
      return undefined;
    }

    simPosRef.current = {
      x: Math.random() * gridSize,
      y: Math.random() * gridSize,
    };
    simTargetRef.current = {
      x: Math.random() * gridSize,
      y: Math.random() * gridSize,
    };

    const speed = 0.02;
    const loop = () => {
      if (!userActiveRef.current) {
        const pos = simPosRef.current;
        const target = simTargetRef.current;
        pos.x += (target.x - pos.x) * speed;
        pos.y += (target.y - pos.y) * speed;
        tiltAt(pos.y, pos.x);

        if (Math.hypot(pos.x - target.x, pos.y - target.y) < 0.1) {
          simTargetRef.current = {
            x: Math.random() * gridSize,
            y: Math.random() * gridSize,
          };
        }
      }

      simRAFRef.current = requestAnimationFrame(loop);
    };

    simRAFRef.current = requestAnimationFrame(loop);

    return () => {
      if (simRAFRef.current != null) {
        cancelAnimationFrame(simRAFRef.current);
      }
    };
  }, [autoAnimate, gridSize, tiltAt]);

  useEffect(() => {
    const el = sceneRef.current;
    if (!el) {
      return undefined;
    }

    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerleave', resetAll);
    el.addEventListener('click', onClick);
    el.addEventListener('touchmove', onTouchMove, { passive: false });
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerleave', resetAll);
      el.removeEventListener('click', onClick);
      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);

      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
      }
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
    };
  }, [onPointerMove, resetAll, onClick, onTouchMove, onTouchStart, onTouchEnd]);

  const cells = Array.from({ length: gridSize });
  const sceneStyle = {
    gridTemplateColumns: cubeSize ? `repeat(${gridSize}, ${cubeSize}px)` : `repeat(${gridSize}, 1fr)`,
    gridTemplateRows: cubeSize ? `repeat(${gridSize}, ${cubeSize}px)` : `repeat(${gridSize}, 1fr)`,
    columnGap: colGap,
    rowGap: rowGap,
  };
  const wrapperStyle = {
    '--cube-face-border': borderStyle,
    '--cube-face-bg': faceColor,
    '--cube-face-shadow': shadow === true ? '0 0 6px rgba(0,0,0,.5)' : shadow || 'none',
    ...(cubeSize
      ? {
          width: `${gridSize * cubeSize}px`,
          height: `${gridSize * cubeSize}px`,
        }
      : {}),
  };

  return (
    <div className="default-animation" style={wrapperStyle} aria-hidden="true">
      <div ref={sceneRef} className="default-animation--scene" style={sceneStyle}>
        {cells.map((_, r) =>
          cells.map((__, c) => (
            <div className="cube" data-row={r} data-col={c} key={`${r}-${c}`}>
              <div className="cube-face cube-face--top" />
              <div className="cube-face cube-face--bottom" />
              <div className="cube-face cube-face--left" />
              <div className="cube-face cube-face--right" />
              <div className="cube-face cube-face--front" />
              <div className="cube-face cube-face--back" />
            </div>
          )),
        )}
      </div>
    </div>
  );
}
