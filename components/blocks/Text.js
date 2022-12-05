import i18n from "lib/i18n";
import { renderHTML } from "lib/html";
import { uppercaseClass } from "lib/visual";
import { anchorId } from "lib/anchors";
import { useInView } from "react-intersection-observer";

export default function Text({ block, visual, locale }) {
  const alignClass = block.alignCenter ? "text-center mx-auto " : "";
  const labelClass = block.colorsRev ? "text-accent-rev" : "text-accent";
  const colorsClass = block.colorsRev ? "bg-back-rev text-rev" : "text-alt";
  const spacingClass = block.colorsRev
    ? "py-8 lg:py-24 xl:py-36"
    : "my-8 lg:my-24 xl:my-36";

  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const inViewClass = inView ? "fade-down-on" : "fade-down-off";

  return (
    <section
      id={anchorId(block)}
      ref={ref}
      className={`${colorsClass} ${spacingClass} overflow-hidden`}
    >
      <div className={`container`}>
        {block.title && (
          <h2
            className={`${alignClass} ${uppercaseClass(
              visual
            )} font-heading font-medium text-accent-rev text-xl mb-6 xl:text-2xl xl:mb-12`}
          >
            {block.title}
          </h2>
        )}
        <div>
          {renderHTML(block.text)}
          {block.link && (
            <div className="mt-8">
              <a
                className="inline-flex text-button bg-button-back uppercase tracking-wide transition-opacity hover:opacity-80 text-sm py-4 px-4"
                href={block.link.url}
                target="_blank"
                rel="noreferrer noopener"
                title={`${i18n.linkExternal.label[locale]} ${block.link.label}`}
              >
                {block.link.label}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
