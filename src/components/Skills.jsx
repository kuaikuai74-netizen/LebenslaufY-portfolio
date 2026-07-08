import SectionHeader from './SectionHeader';
import LogoLoop from './LogoLoop';
import { skills } from '../data/portfolio';

function SkillCard({ skill, index }) {
  return (
    <article className="group relative min-h-[21rem] w-[19rem] overflow-hidden border border-line bg-white/68 p-6 text-base leading-normal transition duration-300 hover:-translate-y-2 hover:border-moss/32 hover:bg-mist/45 hover:shadow-[0_24px_68px_rgba(31,41,40,0.08)] sm:w-[22rem]">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-moss via-sage/35 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full border border-moss/15 opacity-0 transition group-hover:opacity-100" />
      <div className="flex items-start justify-between gap-6">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line bg-paper text-sm font-bold text-sage transition group-hover:border-moss/35 group-hover:bg-white/70 group-hover:text-ink">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="mt-5 h-px flex-1 bg-line transition group-hover:bg-sage/30" aria-hidden="true" />
      </div>
      <h3 className="mt-7 text-xl font-light text-ink transition group-hover:text-ink">
        {skill.title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-sage transition group-hover:text-ink/75">
        {skill.description}
      </p>
      <div className="mt-8 h-px w-16 bg-sage/35 transition group-hover:w-28 group-hover:bg-moss/55" />
    </article>
  );
}

export default function Skills() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10" id="skills">
      <SectionHeader
        eyebrow="Creative Ability"
        title="能力模块"
        description="从 AI 工具、商业视觉到团队流程，把单点技能组合成可持续的创作系统。"
      />

      <div className="relative mt-12 overflow-hidden py-3">
        <LogoLoop
          logos={skills}
          speed={58}
          direction="left"
          gap={20}
          logoHeight={28}
          hoverSpeed={0}
          fadeOut
          fadeOutColor="#fdfcf9"
          ariaLabel="能力模块循环展示"
          renderItem={(skill, key) => (
            <SkillCard
              skill={skill}
              index={Number(String(key).split('-').at(-1))}
            />
          )}
        />
      </div>
    </section>
  );
}
