import { useInView } from "react-intersection-observer";
import { renderHTML } from "lib/html";
import { anchorId } from "lib/anchors";
import { Image as DatoImage } from "react-datocms";
import Link from "next/link";

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
        <div className="py-12 px-4 z-10 relative text-center lg:px-12 xl:py-20 mx-auto max-w-prose grid gap-8 lg:gap-12">
          {title && (
            <h2 className="font-heading font-bold text-lg md:text-2xl xl:text-2xl">
              {title}
            </h2>
          )}
          {text && (
            <h2 className="text-sm md:text-base mb-6">{renderHTML(text)}</h2>
          )}
          {link && (
            <div className="inline-block">
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                title={`${title} ${("linkExternal", locale)}`}
              >
                <a className="button-big">{cta}</a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
