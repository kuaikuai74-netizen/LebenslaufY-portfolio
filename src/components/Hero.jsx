import { hero, profile, stats } from '../data/portfolio';
import Prism from './Prism';

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 pb-14 pt-24 sm:min-h-screen sm:px-8 sm:pb-20 sm:pt-28 lg:px-10" id="top">
      <div className="grid overflow-hidden border border-line bg-white/82 shadow-card lg:min-h-[calc(100vh-8rem)] lg:grid-cols-[0.82fr_1.18fr]">
        <div className="relative min-h-[210px] border-b border-line bg-[#fbfcf7] sm:min-h-[360px] lg:min-h-[420px] lg:border-b-0 lg:border-r">
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
          <div className="absolute left-6 top-8 h-40 w-20 rounded-t-full bg-[#eef4e9]/45 sm:left-8 sm:top-10 sm:h-56 sm:w-24" />
          <div className="absolute bottom-0 left-0 h-36 w-44 soft-photo sm:h-52 sm:w-56" />
          <div className="absolute bottom-8 right-8 h-32 w-32 rounded-full border border-moss/14 sm:bottom-10 sm:right-10 sm:h-48 sm:w-48" />
          <div className="absolute right-12 top-16 h-44 w-12 rounded-full bg-white/95 shadow-[0_18px_48px_rgba(31,41,40,0.07)] sm:right-16 sm:top-24 sm:h-72 sm:w-16" />
          <div className="absolute right-24 top-10 h-44 w-px rotate-[-18deg] bg-moss/16 sm:right-28 sm:top-12 sm:h-64" />
          <div className="absolute right-28 top-14 h-36 w-px rotate-[18deg] bg-moss/10 sm:right-36 sm:top-20 sm:h-52" />
          <div className="absolute left-8 top-28 h-28 w-px rotate-[28deg] bg-moss/18 sm:left-10 sm:top-36 sm:h-40" />
          <div className="absolute left-12 top-24 h-32 w-px rotate-[-18deg] bg-moss/14 sm:left-16 sm:top-28 sm:h-48" />
        </div>

        <div className="relative flex flex-col justify-between gap-6 p-5 sm:gap-12 sm:p-12 lg:p-16">
          <div className="hidden justify-center sm:flex">
            <div className="leaf-mark scale-75 sm:scale-100" aria-hidden="true" />
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-moss sm:mb-6 sm:text-xs sm:tracking-[0.36em]">
              {hero.eyebrow}
            </p>
            <h1 className="text-4xl font-light uppercase tracking-[0.12em] text-ink sm:text-6xl sm:tracking-[0.18em] lg:whitespace-nowrap lg:text-6xl xl:text-7xl">
              {hero.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xs leading-6 text-sage sm:mt-6 sm:text-sm lg:whitespace-nowrap">
              {hero.tagline}
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:mt-9 sm:flex-row">
              <a
                className="rounded-full bg-ink px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sage sm:py-4"
                href="#works"
              >
                {hero.primaryCta}
              </a>
              <a
                className="rounded-full border border-line bg-white px-7 py-3.5 text-center text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-mist sm:py-4"
                href="#contact"
              >
                {hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {stats.map((item) => (
              <div className="border-t border-line pt-4 sm:pt-5" key={item.label}>
                <strong className="block text-2xl font-light text-ink sm:text-3xl">{item.value}</strong>
                <span className="mt-2 block text-[0.68rem] leading-4 text-sage sm:text-xs sm:leading-5">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-line bg-paper/80 p-4 sm:rounded-3xl sm:p-5">
            <p className="text-sm font-semibold text-ink">{profile.name}</p>
            <p className="mt-2 max-h-28 overflow-hidden text-xs leading-6 text-sage sm:max-h-none sm:text-[0.82rem]">{profile.summary}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
