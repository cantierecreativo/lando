import { renderHTML } from "lib/html";
import { uppercaseClass } from "lib/visual";
import { Image } from "react-datocms";
import { useInView } from "react-intersection-observer";

export default function Widget({ block, visual, numberOfBlocks }) {
  const image = block.image;
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const inViewClass = inView ? "fade-down-on" : "fade-down-off";

  return (
    <section className="container text-center my-12 lg:my-0">
      <Image
        data={image.responsiveImage}
        alt={image.alt}
        title={image.title}
        usePlaceholder={false}
      />
      <div ref={ref} className={`${inViewClass} fade-down`}>
        <h3
          className={`${uppercaseClass(
            visual
          )} font-heading font-medium uppercase break-words text-alt text-lg my-4`}
        >
          {block.title}
        </h3>
        <div
          className={`${
            numberOfBlocks === 4 ? "lg:text-xs text-sm" : "text-sm"
          }`}
        >
          {renderHTML(block.text)}
        </div>
      </div>
    </section>
  );
}
