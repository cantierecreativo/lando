import { renderHTML } from "lib/html";
import { uppercaseClass } from "lib/visual";
import { anchorId } from "lib/anchors";
import { Image } from "react-datocms";
import { useInView } from "react-intersection-observer";

export default function Flag({ block, visual }) {
  const image = block.image;
  const alignClass = block.alignRev ? "flex-row-reverse" : "";
  const titleClass = block.colorsRev ? "text-accent-rev" : "text-accent";
  const textClass = block.colorsRev ? "!text-base-rev" : "!text-base";
  const colorsClass = block.colorsRev ? "bg-back-rev text-rev" : "text-alt";
  const spacingClass = block.colorsRev
    ? "py-8 lg:py-24 xl:py-36"
    : "py-8 lg:py-24 xl:py-36";

  const { ref, inView, entry } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const inViewClass = inView ? "fade-down-on" : "fade-down-off";

  return (
    <section
      id={anchorId(block)}
      ref={ref}
      className={`${colorsClass} ${spacingClass}`}
    >
      <div
        className={`${alignClass} container lg:flex lg:items-center lg:gap-12 xl:gap-24`}
      >
        <div ref={ref} className={`${inViewClass} fade-down flex-1 my-8`}>
          <div className="font-bold text-xs uppercase tracking-widest my-2">
            {block.label}
          </div>
          <h2
            className={`${uppercaseClass(
              visual
            )} ${titleClass} font-heading font-medium break-words text-lg md:text-xl my-4 xl:my-6`}
          >
            {block.title}
          </h2>
          <div className={`${textClass} text-sm md:text-base`}>
            {renderHTML(block.text)}
          </div>
        </div>
        <div className="flex-1 my-8 lg:my-0">
          <div className="lg:px-12">
            <Image
              data={image.responsiveImage}
              alt={image.alt}
              title={image.title}
              usePlaceholder={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
