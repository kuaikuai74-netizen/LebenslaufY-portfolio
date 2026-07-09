import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import SectionHeader from './SectionHeader';
import { works } from '../data/portfolio';

function ImageWithStatus({ alt, className, src, ...props }) {
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    setStatus('loading');
  }, [src]);

  return (
    <span className="relative block h-full w-full">
      <img
        alt={alt}
        className={`${className} transition-opacity duration-300 ${
          status === 'loaded' ? 'opacity-100' : 'opacity-0'
        }`}
        src={src}
        onError={() => setStatus('error')}
        onLoad={() => setStatus('loaded')}
        {...props}
      />
      {status !== 'loaded' && (
        <span className="absolute inset-0 grid place-items-center bg-white px-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-sage">
          {status === 'error' ? 'Image unavailable' : 'Loading image'}
        </span>
      )}
    </span>
  );
}

function PlaceholderArtwork({ index }) {
  const variants = ['soft-photo', 'bg-mist', 'wave-card', 'bg-white'];

  return (
    <div className={`relative aspect-[4/3] overflow-hidden ${variants[index % variants.length]}`}>
      <div className="absolute inset-0 placeholder-grid opacity-50" />
      <div className="absolute left-5 top-5 border border-line bg-paper/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sage">
        Case 0{index + 1}
      </div>
      <div className="absolute bottom-0 left-0 right-0 border-t border-line bg-paper/80 p-5">
        <div className="h-px w-24 bg-ink/50" />
        <div className="mt-4 h-px w-40 bg-sage/35" />
      </div>
    </div>
  );
}

function WorkCover({ work, index }) {
  if (work.cover) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden bg-mist">
        <img
          alt={work.cover.alt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          src={work.cover.src}
        />
      </div>
    );
  }

  return <PlaceholderArtwork index={index} />;
}

function getPreviewClassName(aspect) {
  const aspectClassNames = {
    long: 'aspect-[9/16]',
    tall: 'aspect-[3/4]',
    wide: 'aspect-[2.44/1]',
    square: 'aspect-square',
  };

  return `w-full object-cover transition duration-500 group-hover:scale-[1.03] ${
    aspectClassNames[aspect] ?? aspectClassNames.square
  }`;
}

function getLightboxMediaClassName(aspect) {
  const baseClassName = 'bg-white object-contain';

  if (aspect === 'long') {
    return `${baseClassName} w-full max-w-[min(100%,52rem)]`;
  }

  if (aspect === 'tall') {
    return `${baseClassName} w-full max-w-[min(100%,54rem)]`;
  }

  return `${baseClassName} max-h-[calc(92vh-4rem)] w-auto max-w-full sm:max-h-[calc(92vh-5rem)]`;
}

function getThumbnailSrc(image) {
  return image.displaySrc ?? image.previewSrc ?? image.src;
}

function getLightboxSrc(image) {
  return image.src;
}

function CaseStudyOverlay({ caseStudy, onClose }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const lightboxScrollRef = useRef(null);
  const lightboxImage =
    lightboxIndex === null ? null : caseStudy.images[lightboxIndex];
  const isLightboxVideo = lightboxImage?.type === 'video';
  const lightboxMediaSrc = lightboxImage ? getLightboxSrc(lightboxImage) : undefined;
  const caseNumber = String(caseStudy.caseNumber ?? 1).padStart(2, '0');
  const isLongPreviewLayout = caseStudy.displayMode === 'long-preview';
  const showPreviousImage = () => {
    setLightboxIndex((currentIndex) =>
      currentIndex === null
        ? currentIndex
        : (currentIndex - 1 + caseStudy.images.length) % caseStudy.images.length,
    );
  };
  const showNextImage = () => {
    setLightboxIndex((currentIndex) =>
      currentIndex === null ? currentIndex : (currentIndex + 1) % caseStudy.images.length,
    );
  };

  useEffect(() => {
    lightboxScrollRef.current?.scrollTo({ top: 0, left: 0 });
  }, [lightboxIndex]);

  useEffect(() => {
    setLightboxIndex(null);
  }, [caseStudy]);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        if (lightboxIndex === null) {
          onClose();
        } else {
          setLightboxIndex(null);
        }
      }

      if (lightboxIndex === null) {
        return;
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        showPreviousImage();
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        showNextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, onClose]);

  return (
    <div
      className="fixed inset-0 z-[80] overflow-y-auto bg-ink/68 px-3 py-3 backdrop-blur-md sm:px-6 sm:py-6 lg:px-10"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div className="mx-auto flex min-h-full max-w-7xl flex-col overflow-hidden rounded-[1.25rem] border border-white/40 bg-paper shadow-[0_40px_120px_rgba(0,0,0,0.32)] sm:rounded-[2rem] lg:grid lg:h-[calc(100vh-3rem)] lg:min-h-0 lg:grid-cols-[1.22fr_0.78fr]">
        <div className="relative order-1 flex min-h-0 flex-col overflow-y-auto bg-white/82 p-5 sm:p-10 lg:order-2 lg:p-12">
          <button
            className={`fixed right-5 top-5 z-[85] h-11 w-11 place-items-center rounded-full border border-line bg-paper text-2xl font-light text-sage shadow-card transition hover:bg-ink hover:text-white sm:absolute sm:right-6 sm:top-6 sm:h-12 sm:w-12 ${
              lightboxImage ? 'hidden' : 'grid'
            }`}
            type="button"
            onClick={onClose}
            aria-label="关闭案例详情"
          >
            ×
          </button>

          <div className="pr-12 sm:pr-14">
            <div className="mb-6 inline-grid h-10 w-10 place-items-center rounded-2xl bg-mist text-sm font-semibold text-moss sm:mb-10 sm:h-12 sm:w-12 sm:text-lg">
              {caseNumber}
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-moss sm:tracking-[0.34em]">
              {caseStudy.eyebrow}
            </p>
            <h3 id="case-study-title" className="mt-4 text-[1.8rem] font-light leading-tight text-ink sm:mt-5 sm:text-[2.25rem] xl:text-[2.25rem]">
              {caseStudy.title}
            </h3>
            <p className="mt-5 border-l border-moss/50 pl-4 text-sm leading-7 text-sage sm:mt-7 sm:pl-5 sm:text-[0.95rem] sm:leading-7">
              {caseStudy.summary}
            </p>
          </div>

          {caseStudy.meta && (
            <dl className="mt-6 grid gap-3 border-y border-line py-4 sm:mt-8 sm:grid-cols-3 sm:py-5">
              {caseStudy.meta.map((item) => (
                <div key={item.label}>
                  <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-moss">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-[0.82rem] leading-6 text-ink sm:text-sm">{item.value}</dd>
                </div>
              ))}
            </dl>
          )}

          {caseStudy.structure && (
            <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2">
              {caseStudy.structure.map((item) => (
                <section className="border border-line bg-white/58 p-4" key={item.label}>
                  <h4 className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-moss">
                    {item.label}
                  </h4>
                  <p className="mt-3 text-[0.82rem] leading-6 text-sage sm:text-sm sm:leading-7">{item.value}</p>
                </section>
              ))}
            </div>
          )}

          <div className="mt-7 grid gap-3 sm:mt-10 sm:gap-4">
            {caseStudy.details.map((detail) => (
              <p className="border-t border-line pt-3 text-[0.82rem] leading-6 text-sage sm:pt-4 sm:text-sm sm:leading-7" key={detail}>
                {detail}
              </p>
            ))}
          </div>

          <div className="mt-8 border-t border-line pt-5 text-xs font-semibold uppercase tracking-[0.24em] text-sage sm:tracking-[0.28em] lg:pt-8">
            Scroll images
          </div>
        </div>

        <div className="order-2 flex min-h-0 flex-col border-t border-line lg:order-1 lg:border-r lg:border-t-0">
          <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {caseStudy.images.map((image, index) => (
                <button
                  className="group block w-full overflow-hidden rounded-[1.25rem] border border-line bg-white text-left shadow-card"
                  key={image.src}
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  aria-label={`打开原图 ${index + 1}`}
                >
                  <ImageWithStatus
                    alt={image.alt}
                    className={
                      isLongPreviewLayout
                        ? 'aspect-[3/4] w-full bg-white object-cover object-top transition duration-500 group-hover:scale-[1.03]'
                        : getPreviewClassName(image.aspect)
                    }
                    decoding="async"
                    fetchpriority={index < 6 ? 'high' : 'auto'}
                    loading={index < 6 ? 'eager' : 'lazy'}
                    src={getThumbnailSrc(image)}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {lightboxImage && createPortal(
        <div className="fixed inset-0 z-[90] grid place-items-center bg-ink/78 p-3 sm:p-4">
          <button
            className="absolute inset-0 cursor-zoom-out"
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="关闭原图预览背景"
          />
          <div className="pointer-events-none absolute inset-0 opacity-12 placeholder-grid" />

          <div className="relative z-10 grid h-[92vh] w-full max-w-7xl overflow-hidden border border-white/35 bg-paper md:grid-cols-[4.5rem_1fr_16rem] xl:grid-cols-[5rem_1fr_21rem]">
            <button
              className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full border border-line bg-white/88 text-2xl font-light text-ink shadow-card transition hover:bg-ink hover:text-white sm:right-5 sm:top-5 sm:h-12 sm:w-12"
              type="button"
              onClick={() => setLightboxIndex(null)}
              aria-label="关闭原图预览"
            >
              ×
            </button>

            <div className="hidden border-r border-line bg-white p-3 md:flex md:flex-col md:gap-3 md:overflow-y-auto">
              {caseStudy.images.map((image, index) => (
                <button
                  className={`aspect-square overflow-hidden rounded-2xl border bg-white transition ${
                    lightboxIndex === index
                      ? 'border-moss ring-2 ring-moss/20'
                      : 'border-line opacity-55 hover:opacity-100'
                  }`}
                  key={image.src}
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  aria-label={`切换到原图 ${index + 1}`}
                >
                  {image.type === 'video' ? (
                    <video
                      aria-label={image.alt}
                      className="h-full w-full object-cover"
                      muted
                      playsInline
                      preload="metadata"
                      src={image.src}
                    />
                  ) : (
                    <ImageWithStatus
                      alt=""
                      className="h-full w-full object-cover"
                      decoding="async"
                      loading="lazy"
                      src={getThumbnailSrc(image)}
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="relative min-h-0 bg-white">
              <div ref={lightboxScrollRef} className="h-full overflow-auto overscroll-contain p-3 sm:p-5">
                <div className="grid min-h-full place-items-start justify-center">
                  {isLightboxVideo ? (
                    <video
                      aria-label={lightboxImage.alt}
                      className={getLightboxMediaClassName(lightboxImage.aspect)}
                      controls
                      playsInline
                      src={lightboxMediaSrc}
                    />
                  ) : (
                    <ImageWithStatus
                      alt={lightboxImage.alt}
                      className={getLightboxMediaClassName(lightboxImage.aspect)}
                      decoding="async"
                      loading="eager"
                      src={lightboxMediaSrc}
                    />
                  )}
                </div>
              </div>

              <button
                className="absolute bottom-4 left-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-line bg-white/86 text-2xl text-ink shadow-card transition hover:bg-ink hover:text-white sm:bottom-auto sm:left-8 sm:top-1/2 sm:h-12 sm:w-12 sm:-translate-y-1/2"
                type="button"
                onClick={showPreviousImage}
                aria-label="查看上一张原图"
              >
                ←
              </button>
              <button
                className="absolute bottom-4 right-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-line bg-white/86 text-2xl text-ink shadow-card transition hover:bg-ink hover:text-white sm:bottom-auto sm:right-8 sm:top-1/2 sm:h-12 sm:w-12 sm:-translate-y-1/2"
                type="button"
                onClick={showNextImage}
                aria-label="查看下一张原图"
              >
                →
              </button>
            </div>

            <aside className="hidden border-l border-line bg-white p-6 md:flex md:flex-col xl:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-moss">
                {caseStudy.eyebrow}
              </p>
              <h4 className="mt-5 text-2xl font-light leading-tight text-ink xl:text-3xl">
                {lightboxImage.alt}
              </h4>
              <p className="mt-7 border-l border-moss/50 pl-5 text-sm leading-7 text-sage">
                点击缩略图可以快速切换图片，也可以使用左右箭头或键盘方向键浏览完整主图与详情页视觉。
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
                <div className="border border-line bg-paper/70 p-4">
                  <span className="block text-xs uppercase tracking-[0.22em] text-sage">
                    Current
                  </span>
                  <strong className="mt-3 block text-2xl font-light text-ink">
                    {String(lightboxIndex + 1).padStart(2, '0')}
                  </strong>
                </div>
                <div className="border border-line bg-paper/70 p-4">
                  <span className="block text-xs uppercase tracking-[0.22em] text-sage">
                    Total
                  </span>
                  <strong className="mt-3 block text-2xl font-light text-ink">
                    {String(caseStudy.images.length).padStart(2, '0')}
                  </strong>
                </div>
              </div>
              <div className="mt-auto border-t border-line pt-6 text-xs font-semibold uppercase tracking-[0.28em] text-sage">
                Full image viewer
              </div>
            </aside>
          </div>
        </div>,
        document.body,
      )}
    </div>
  );
}

export default function Works() {
  const [activeCase, setActiveCase] = useState(null);

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10" id="works">
      <div className="mb-12 flex flex-col gap-6 border-b border-line pb-10 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeader
          eyebrow="Selected Works"
          title="精选作品"
          description="在创意与技术之间寻找平衡"
        />
        <a
          className="group relative w-fit overflow-hidden border border-ink bg-ink px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(31,41,40,0.16)] transition hover:-translate-y-0.5 hover:bg-white hover:text-ink hover:shadow-[0_24px_70px_rgba(31,41,40,0.22)]"
          href="#contact"
        >
          <span className="relative z-10 inline-flex items-center gap-3">
            获取完整作品集
            <span className="h-px w-8 bg-current transition group-hover:w-10" aria-hidden="true" />
          </span>
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {works.map((work, index) => (
          <article
            className="group border border-line bg-white/58 p-4 transition duration-300 hover:-translate-y-2 hover:shadow-card"
            key={work.title}
          >
            <button
              className="block w-full text-left outline-none"
              type="button"
              onClick={() =>
                work.caseStudy &&
                setActiveCase({ ...work.caseStudy, caseNumber: index + 1 })
              }
              disabled={!work.caseStudy}
            >
              <WorkCover work={work} index={index} />
            </button>
            <div className="border-t border-line p-4 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-moss">
                {work.tag}
              </p>
              <h3 className="mt-3 text-2xl font-light text-ink">{work.title}</h3>
              <p className="mt-4 leading-7 text-sage">{work.description}</p>
              {work.caseStudy && (
                <button
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-moss"
                  type="button"
                  onClick={() => setActiveCase({ ...work.caseStudy, caseNumber: index + 1 })}
                >
                  查看案例详情
                  <span aria-hidden="true">→</span>
                </button>
              )}
            </div>
          </article>
        ))}
      </div>

      {activeCase && (
        createPortal(
          <CaseStudyOverlay caseStudy={activeCase} onClose={() => setActiveCase(null)} />,
          document.body,
        )
      )}
    </section>
  );
}
