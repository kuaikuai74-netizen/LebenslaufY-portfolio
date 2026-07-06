import SectionHeader from './SectionHeader';
import { services, servicesSection } from '../data/portfolio';

export default function Services() {
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
            <div
              className="border border-line bg-white/58 p-5 text-base font-semibold text-ink transition hover:-translate-y-1 hover:shadow-card"
              key={service}
            >
              <span className="mb-5 block h-px w-12 bg-sage" />
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
