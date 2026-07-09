import { useState } from 'react';
import { contact, profile } from '../data/portfolio';
import Cubes from './Cubes';

export default function Contact() {
  const [isEmailVisible, setIsEmailVisible] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus('已复制');
    } catch {
      setCopyStatus('请手动复制');
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10" id="contact">
      <div className="brand-board relative overflow-hidden border border-line p-8 shadow-card sm:p-12 lg:p-16">
        <div className="absolute bottom-0 right-0 h-72 w-72 wave-card opacity-[0.12]" />
        <div className="absolute right-10 top-10 hidden h-32 w-32 rounded-full border border-line sm:block" />
        <div className="absolute left-10 top-10 h-px w-32 bg-sage/35" />
        <div className="pointer-events-auto absolute -right-8 bottom-4 hidden w-[24rem] opacity-[0.18] mix-blend-multiply sm:block lg:right-6 lg:w-[28rem]">
          <Cubes
            gridSize={7}
            maxAngle={34}
            radius={2.8}
            cellGap={5}
            borderStyle="1px solid rgba(31, 41, 40, 0.18)"
            faceColor="#eef1ea"
            rippleColor="#6f7a70"
            rippleSpeed={1.6}
            shadow="0 12px 26px rgba(31, 41, 40, 0.08)"
            autoAnimate
            rippleOnClick
          />
        </div>

        <div className="relative z-10 max-w-[44rem]">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-moss">
            {contact.eyebrow}
          </p>
          <h2 className="text-3xl font-light leading-tight text-ink sm:whitespace-nowrap sm:text-4xl lg:text-[2.75rem]">
            {contact.title}
          </h2>
          <div className="mt-7 grid gap-3 border-l border-moss/45 pl-5 sm:max-w-2xl">
            <p className="text-sm leading-7 text-sage sm:text-[0.95rem]">
              {contact.description}
            </p>
            <div className="flex flex-wrap gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-moss">
              <span className="border border-line bg-paper/70 px-3 py-2">AIGC Design</span>
              <span className="border border-line bg-paper/70 px-3 py-2">Brand Visual</span>
              <span className="border border-line bg-paper/70 px-3 py-2">Workflow</span>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <button
              className="rounded-full bg-ink px-7 py-4 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sage"
              type="button"
              onClick={() => {
                setIsEmailVisible(true);
                setCopyStatus('');
              }}
            >
              {contact.emailCta}
            </button>
            <a
              className="rounded-full border border-line bg-white/60 px-7 py-4 text-center text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-mist"
              href={`tel:${profile.phone}`}
            >
              {contact.phoneCta}
            </a>
          </div>

          {isEmailVisible && (
            <div className="mt-5 flex flex-col gap-3 border border-line bg-white/70 p-4 sm:max-w-xl sm:flex-row sm:items-center sm:justify-between">
              <p className="select-all break-all text-sm font-semibold text-ink">
                {profile.email}
              </p>
              <button
                className="w-fit border border-ink bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-ink"
                type="button"
                onClick={handleCopyEmail}
              >
                {copyStatus || '复制邮箱'}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
