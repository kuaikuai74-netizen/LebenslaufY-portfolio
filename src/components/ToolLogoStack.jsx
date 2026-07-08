import { useRef } from 'react';

const toolCards = [
  {
    name: 'ComfyUI',
    shortName: 'CU',
    meta: 'Node Workflow',
    tone: 'tool-icon--secondary',
    variant: 'tool-card--secondary',
    style: {
      '--card-left': '64%',
      '--card-top': '14%',
      '--card-width': '13rem',
      '--card-rotate': '1.2deg',
      '--card-depth': '0px',
      '--card-delay': '-0.4s',
    },
  },
  {
    name: 'Photoshop',
    shortName: 'Ps',
    meta: 'Image Editing',
    tone: 'tool-icon--primary',
    variant: 'tool-card--primary',
    style: {
      '--card-left': '39%',
      '--card-top': '24%',
      '--card-width': '13.8rem',
      '--card-rotate': '-1.4deg',
      '--card-depth': '0px',
      '--card-delay': '0s',
    },
  },
  {
    name: 'Vibe Coding',
    shortName: 'VC',
    meta: 'AI Workflow',
    tone: 'tool-icon--secondary',
    variant: 'tool-card--secondary',
    style: {
      '--card-left': '66%',
      '--card-top': '34%',
      '--card-width': '13.2rem',
      '--card-rotate': '1.1deg',
      '--card-depth': '0px',
      '--card-delay': '-0.8s',
    },
  },
  {
    name: 'Illustrator',
    shortName: 'Ai',
    meta: 'Vector Design',
    tone: 'tool-icon--primary',
    variant: 'tool-card--primary',
    style: {
      '--card-left': '61%',
      '--card-top': '44%',
      '--card-width': '13.4rem',
      '--card-rotate': '1deg',
      '--card-depth': '0px',
      '--card-delay': '-1.2s',
    },
  },
  {
    name: 'Cinema 4D',
    shortName: 'C4D',
    meta: '3D Visual',
    tone: 'tool-icon--secondary',
    variant: 'tool-card--secondary',
    style: {
      '--card-left': '39%',
      '--card-top': '55%',
      '--card-width': '12.8rem',
      '--card-rotate': '-1.2deg',
      '--card-depth': '0px',
      '--card-delay': '-2.8s',
    },
  },
  {
    name: 'Codex',
    shortName: 'CX',
    meta: 'AI Coding',
    tone: 'tool-icon--primary',
    variant: 'tool-card--primary',
    style: {
      '--card-left': '41%',
      '--card-top': '66%',
      '--card-width': '14rem',
      '--card-rotate': '-1.2deg',
      '--card-depth': '0px',
      '--card-delay': '-2.1s',
    },
  },
  {
    name: '剪映',
    shortName: '剪',
    meta: 'Short Video',
    tone: 'tool-icon--tertiary',
    variant: 'tool-card--tertiary',
    style: {
      '--card-left': '67%',
      '--card-top': '77%',
      '--card-width': '11.7rem',
      '--card-rotate': '1.2deg',
      '--card-depth': '0px',
      '--card-delay': '-1.7s',
    },
  },
  {
    name: 'Premiere Pro',
    shortName: 'Pr',
    meta: 'Video Editing',
    tone: 'tool-icon--tertiary',
    variant: 'tool-card--tertiary',
    style: {
      '--card-left': '40%',
      '--card-top': '88%',
      '--card-width': '13rem',
      '--card-rotate': '-1.1deg',
      '--card-depth': '0px',
      '--card-delay': '-3.4s',
    },
  },
];

export default function ToolLogoStack() {
  const stackRef = useRef(null);

  const handlePointerMove = (event) => {
    const stack = stackRef.current;
    if (!stack) {
      return;
    }

    const rect = stack.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    stack.style.setProperty('--stack-rotate-x', `${(-y * 2).toFixed(2)}deg`);
    stack.style.setProperty('--stack-rotate-y', `${(x * 3).toFixed(2)}deg`);
  };

  const handlePointerLeave = () => {
    const stack = stackRef.current;
    if (!stack) {
      return;
    }

    stack.style.setProperty('--stack-rotate-x', '0deg');
    stack.style.setProperty('--stack-rotate-y', '0deg');
  };

  return (
    <div
      className="tool-logo-stage"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      aria-label="AIGC 视觉设计工具动效展示"
    >
      <div className="tool-logo-stage__grid" aria-hidden="true" />
      <div className="tool-logo-stage__beam" aria-hidden="true" />

      <div className="tool-logo-stack" ref={stackRef}>
        {toolCards.map((tool) => (
          <article
            className={`tool-card ${tool.variant}`}
            key={tool.name}
            style={tool.style}
          >
            <span className={`tool-icon ${tool.tone}`} aria-hidden="true">
              {tool.shortName}
            </span>
            <span className="tool-card__content">
              <span className="tool-card__name">{tool.name}</span>
              <span className="tool-card__meta">{tool.meta}</span>
            </span>
          </article>
        ))}
      </div>

    </div>
  );
}
