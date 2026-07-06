import { hero, profile, stats } from '../data/portfolio';
import Prism from './Prism';

export default function Hero() {
  return (
    <section className="relative mx-auto min-h-screen max-w-7xl px-5 pb-20 pt-28 sm:px-8 lg:px-10" id="top">
      <div className="grid overflow-hidden border border-line bg-white/82 shadow-card lg:min-h-[calc(100vh-8rem)] lg:grid-cols-[0.82fr_1.18fr]">
        <div className="relative min-h-[280px] border-b border-line bg-[#fbfcf7] sm:min-h-[360px] lg:min-h-[420px] lg:border-b-0 lg:border-r">
          <div className="absolute inset-0 opacity-[0.1] mix-blend-multiply grayscale saturate-0 contrast-75">
            <Prism
              animationType="rotate"
              timeScale={0.16}
              height={3.2}
              baseWidth={5}
              scale={3.1}
              hueShift={0}
              colorFrequency={0.45}
              noise={0.03}
              glow={0.24}
              bloom={0.28}
              suspendWhenOffscreen
            />
          </div>
          <div className="absolute left-8 top-10 h-56 w-24 rounded-t-full bg-[#eef4e9]/45" />
          <div className="absolute bottom-0 left-0 h-52 w-56 soft-photo" />
          <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full border border-moss/14" />
          <div className="absolute right-16 top-24 h-72 w-16 rounded-full bg-white/95 shadow-[0_18px_48px_rgba(31,41,40,0.07)]" />
          <div className="absolute right-28 top-12 h-64 w-px rotate-[-18deg] bg-moss/16" />
          <div className="absolute right-36 top-20 h-52 w-px rotate-[18deg] bg-moss/10" />
          <div className="absolute left-10 top-36 h-40 w-px rotate-[28deg] bg-moss/18" />
          <div className="absolute left-16 top-28 h-48 w-px rotate-[-18deg] bg-moss/14" />
        </div>

        <div className="relative flex flex-col justify-between gap-8 p-6 sm:gap-12 sm:p-12 lg:p-16">
          <div className="flex justify-center">
            <div className="leaf-mark scale-75 sm:scale-100" aria-hidden="true" />
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.36em] text-moss">
              {hero.eyebrow}
            </p>
            <h1 className="text-4xl font-light uppercase tracking-[0.18em] text-ink sm:text-6xl lg:whitespace-nowrap lg:text-6xl xl:text-7xl">
              {hero.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-sage lg:whitespace-nowrap">
              {hero.tagline}
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                className="rounded-full bg-ink px-7 py-4 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sage"
                href="#works"
              >
                {hero.primaryCta}
              </a>
              <a
                className="rounded-full border border-line bg-white px-7 py-4 text-center text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-mist"
                href="#contact"
              >
                {hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((item) => (
              <div className="border-t border-line pt-5" key={item.label}>
                <strong className="block text-3xl font-light text-ink">{item.value}</strong>
                <span className="mt-2 block text-xs leading-5 text-sage">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-line bg-paper/80 p-5">
            <p className="text-sm font-semibold text-ink">{profile.name}</p>
            <p className="mt-2 text-xs leading-6 text-sage sm:text-[0.82rem]">{profile.summary}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
