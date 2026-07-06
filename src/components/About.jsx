import { about } from '../data/portfolio';

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10" id="about">
      <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
        <div className="relative h-full min-h-[34rem] overflow-hidden border border-line bg-white/58 p-7 shadow-[0_18px_70px_rgba(31,41,40,0.06)] sm:p-9">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,41,40,0.035)_1px,transparent_1px),linear-gradient(rgba(31,41,40,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-45" />
          <div className="absolute -right-16 top-8 h-48 w-48 rounded-full border border-moss/16" />
          <div className="absolute right-9 top-20 h-28 w-28 rounded-full border border-line bg-paper/45" />
          <div className="absolute bottom-10 right-8 text-[8rem] font-light leading-none tracking-[0.02em] text-mist/60">
            AI
          </div>
          <div className="absolute bottom-8 left-8 h-px w-32 bg-sage/30" />
          <div className="absolute left-8 top-8 h-16 w-px bg-moss/35" />

          <div className="relative flex h-full flex-col">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.38em] text-moss">
                  {about.eyebrow}
                </p>
                <div className="mt-6 h-px w-24 bg-sage/35" />
              </div>
              <span className="border border-line bg-paper/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sage">
                Profile
              </span>
            </div>

            <div className="mt-14">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage">
                AIGC Visual Design
              </p>
              <h2 className="mt-5 text-5xl font-light leading-none text-ink sm:text-6xl">
                {about.title}
              </h2>
              <p className="mt-7 max-w-sm text-lg leading-8 text-sage">
                {about.description.split('\n').map((line) => (
                  <span className="block" key={line}>
                    {line}
                  </span>
                ))}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-moss">
              <span className="border border-line bg-paper/70 px-3 py-2">AIGC</span>
              <span className="border border-line bg-paper/70 px-3 py-2">Visual</span>
              <span className="border border-line bg-paper/70 px-3 py-2">Workflow</span>
            </div>

            <div className="mt-auto flex items-end justify-between border-t border-line pt-7 text-xs uppercase tracking-[0.24em] text-sage">
              <span>Design System</span>
              <span>2026</span>
            </div>
          </div>
        </div>

        <div className="relative h-full overflow-hidden border border-line bg-white/70 p-6 shadow-card sm:p-8 lg:p-10">
          <div className="absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-mist/55 to-transparent" />
          <div className="relative">
            <div className="mb-8 flex flex-col gap-3 border-b border-line pb-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-moss">
                Capability Narrative
              </p>
              <span className="w-fit border border-line bg-paper/70 px-3 py-1 text-xs font-semibold text-sage">
                AI Portfolio
              </span>
            </div>

            <p className="max-w-3xl text-lg font-light leading-9 text-ink sm:text-xl">
              {about.body}
            </p>

            <div className="mt-9 grid gap-4">
              {about.highlights.map((item, index) => (
                <div
                  className="group grid gap-4 border border-line bg-paper/70 p-4 transition hover:-translate-y-1 hover:border-moss/30 hover:bg-mist/45 hover:shadow-[0_16px_44px_rgba(31,41,40,0.07)] sm:grid-cols-[4rem_1fr]"
                  key={item}
                >
                  <span className="text-sm font-semibold text-moss transition group-hover:text-ink">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm leading-7 text-sage transition group-hover:text-ink">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
