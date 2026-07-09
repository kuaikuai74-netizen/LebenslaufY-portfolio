import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import SectionHeader from './SectionHeader';
import { serviceProfiles, services, servicesSection } from '../data/portfolio';

function ServiceProfileOverlay({ profile, onClose }) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[90] overflow-y-auto bg-ink/58 px-4 py-6 backdrop-blur-md sm:px-6 sm:py-10"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div className="relative mx-auto grid max-h-[calc(100vh-3rem)] max-w-5xl overflow-hidden rounded-[1.25rem] border border-white/50 bg-paper shadow-[0_40px_120px_rgba(0,0,0,0.26)] sm:max-h-[calc(100vh-5rem)] sm:rounded-[2rem] lg:h-[calc(100vh-5rem)] lg:min-h-0 lg:grid-cols-[0.34fr_0.66fr]">
        <button
          className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full border border-line bg-white/90 text-2xl font-light text-ink shadow-card transition hover:bg-ink hover:text-white sm:right-6 sm:top-6"
          type="button"
          onClick={onClose}
          aria-label={`关闭${profile.title}`}
        >
          ×
        </button>

        <aside className="relative border-b border-line bg-white/62 p-7 sm:p-9 lg:border-b-0 lg:border-r">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-mist text-2xl font-light text-moss">
            人
          </div>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-moss">
            Personal Profile
          </p>
          <h2 id="resume-title" className="mt-4 text-4xl font-light leading-tight text-ink sm:text-5xl">
            {profile.title}
          </h2>
          <p className="mt-5 max-w-xs text-xs font-semibold uppercase leading-6 tracking-[0.22em] text-sage">
            {profile.subtitle}
          </p>
          <div className="mt-8 h-px w-20 bg-sage/35" />
        </aside>

        <div className="relative flex min-h-0 flex-col overflow-y-auto p-7 pt-16 sm:p-9 sm:pt-20 lg:h-full lg:p-10 lg:pt-16">
          <div className="space-y-6">
            {profile.sections.map((section) => (
              <section className="border-t border-line pt-5" key={section.label}>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-moss" aria-hidden="true" />
                  <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-moss">
                    {section.label}
                  </h3>
                </div>
                <p className="mt-4 whitespace-pre-line text-sm leading-8 text-sage sm:text-base sm:leading-8">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          <button
            className="mt-8 inline-flex w-fit items-center gap-3 border border-ink bg-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-ink"
            type="button"
            onClick={onClose}
          >
            <span aria-hidden="true">×</span>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [activeProfile, setActiveProfile] = useState(null);

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10" id="services">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-moss">
            {servicesSection.eyebrow}
          </p>
          <h2 className="text-3xl font-light leading-tight text-ink sm:text-4xl lg:text-5xl">
            {servicesSection.title}
          </h2>
          <p className="mt-5 text-sm leading-7 text-sage sm:text-base">
            {servicesSection.description}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <button
              className="border border-line bg-white/58 p-5 text-left text-base font-semibold text-ink transition hover:-translate-y-1 hover:shadow-card"
              key={service}
              type="button"
              onClick={() => setActiveProfile(serviceProfiles[service])}
            >
              <span className="mb-5 block h-px w-12 bg-sage" />
              {service}
            </button>
          ))}
        </div>
      </div>
      {activeProfile && (
        createPortal(
          <ServiceProfileOverlay
            profile={activeProfile}
            onClose={() => setActiveProfile(null)}
          />,
          document.body,
        )
      )}
    </section>
  );
}
