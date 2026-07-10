import { hero, profile, stats } from '../data/portfolio';
import Cubes from './Cubes';
import Prism from './Prism';
import ToolLogoStack from './ToolLogoStack';

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 pb-14 pt-5 sm:min-h-screen sm:px-8 sm:pb-20 sm:pt-8 lg:px-10" id="top">
      <div className="grid overflow-hidden border border-line bg-white/82 shadow-card lg:min-h-[calc(100vh-8rem)] lg:grid-cols-[0.82fr_1.18fr]">
        <div className="relative min-h-[300px] border-b border-line bg-[#fbfcf7] sm:min-h-[470px] lg:min-h-[420px] lg:border-b-0 lg:border-r">
          <div className="absolute inset-0 opacity-[0.06] mix-blend-multiply grayscale saturate-0 contrast-75">
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
          <ToolLogoStack />
        </div>

        <div className="hero-content-panel relative flex flex-col justify-between gap-6 p-5 sm:gap-12 sm:p-12 lg:p-16">
          <div className="hero-interaction-field" aria-hidden="true">
            <div className="hero-interaction-cubes">
              <Cubes
                gridSize={7}
                maxAngle={32}
                radius={2.6}
                cellGap={5}
                borderStyle="1px solid rgba(31, 41, 40, 0.12)"
                faceColor="#f0f3ed"
                rippleColor="#6f7a70"
                rippleSpeed={1.7}
                shadow="0 12px 28px rgba(31, 41, 40, 0.06)"
                autoAnimate
                rippleOnClick
              />
            </div>
            <div className="hero-interaction-wave" />
          </div>

          <div className="relative z-10 hidden justify-center sm:flex">
            <div className="leaf-mark scale-75 sm:scale-100" aria-hidden="true" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl text-center">
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

          <div className="relative z-10 grid grid-cols-4 gap-2 sm:gap-3">
            {stats.map((item) => (
              <div className="border-t border-line pt-4 sm:pt-5" key={item.label}>
                <strong className="block text-2xl font-light text-ink sm:text-3xl">{item.value}</strong>
                <span className="mt-2 block text-[0.68rem] leading-4 text-sage sm:text-xs sm:leading-5">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="relative z-10 rounded-2xl border border-line bg-paper/80 p-4 sm:rounded-3xl sm:p-5">
            <p className="text-sm font-semibold text-ink">{profile.name}</p>
            <p className="mt-2 max-h-28 overflow-hidden text-xs leading-6 text-sage sm:max-h-none sm:text-[0.82rem]">{profile.summary}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
