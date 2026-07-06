export default function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';
  const descriptionLines =
    typeof description === 'string' ? description.split('\n') : [];

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-moss">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-light leading-tight text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-sage sm:text-lg">
          {descriptionLines.map((line) => (
            <span className="block" key={line}>
              {line}
            </span>
          ))}
        </p>
      ) : null}
    </div>
  );
}
