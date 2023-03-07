import { useInView } from "react-intersection-observer";
import { renderHTML } from "lib/html";
import { anchorId } from "lib/anchors";
import { Image as DatoImage } from "react-datocms";

export default function Banner({ locale, block }) {
  const { ref, inView, entry } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { title, text, imageBg, cta, link } = block;
  const inViewClass = inView ? "fade-down-on" : "fade-down-off";

  return (
    <section
      ref={ref}
      id={anchorId(block)}
      className={`${inViewClass} fade-down relative`}
    >
      <DatoImage
        className=""
        data={imageBg.responsiveImage}
        alt={imageBg.responsiveImage.alt}
        title={imageBg.responsiveImage.title}
        layout="fill"
        objectFit="cover"
      />
      <div className="container py-8 lg:py-20 xl:py-28">
        <div className="py-12 px-4 z-10 relative bg-back text-center lg:px-12 xl:py-20 max-w-[1000px] mx-auto max-w-prose">
          {title && (
            <h2 className="uppercase font-heading font-medium text-accent text-lg md:text-xl mb-6 xl:text-2xl xl:mb-12">
              {title}
            </h2>
          )}
          {text && (
            <h2 className="text-sm md:text-base mb-6 xl:mb-12">
              {renderHTML(text)}
            </h2>
          )}
          <a
            className="inline-flex font-heading text-button bg-button-back uppercase tracking-wide transition-opacity hover:opacity-80 text-sm py-4 px-4"
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            title={`${title} ${("linkExternal", locale)}`}
          >
            {cta}
          </a>
        </div>
      </div>
    </section>
  );
}
