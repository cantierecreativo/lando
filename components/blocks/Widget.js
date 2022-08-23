import { renderHTML } from "lib/html";
import { uppercaseClass } from 'lib/visual';
import { Image } from "react-datocms";
import { useInView } from 'react-intersection-observer';

export default function Widget({ block, visual }) {
  const image = block.image;
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const inViewClass = inView ? 'fade-down-on' : 'fade-down-off';

  return (
    <section className="container text-center my-12 lg:my-0">
      <Image
        data={image.responsiveImage}
        alt={image.alt}
        title={image.title}
        usePlaceholder={false}
      />
      <div
        ref={ref}
        className={`${inViewClass} fade-down`}
      >
        <h3 className={`${uppercaseClass(visual)} font-heading font-medium uppercase break-words text-alt text-lg my-4 xl:text-[25px]`}>
          {block.title}
        </h3>
        <div className="text-sm">
          {renderHTML(block.text)}
        </div>
      </div>
    </section>
  );
}
