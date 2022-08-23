import { renderHTML } from "lib/html";
import { uppercaseClass } from 'lib/visual';
import { Image } from "react-datocms";
import { useInView } from 'react-intersection-observer';

export default function Product({ block, visual }) {
  const image = block.image;
  const alignClass = block.alignRev ? 'lg:flex-row-reverse' : 'lg:flex-row';
  const contentClass = block.alignRev ? 'product-bg-rev' : 'product-bg';

  const { ref, inView, entry } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const inViewClass = inView ? 'fade-down-on' : 'fade-down-off';

  return (
    <section className="my-8 lg:my-24 xl:my-36">
      <div className={`${alignClass} xl:container flex flex-col-reverse lg:items-start`}>
        <div
          ref={ref}
          className={`${contentClass} ${inViewClass} fade-down container flex-1 px-8 py-8 relative lg:py-24 lg:pl-24 lg:flex-auto lg:w-1/2`}
        >
          <div className="font-bold text-xs text-accent uppercase tracking-widest my-2">
            {block.label}
          </div>
          <h2 className={`${uppercaseClass(visual)} font-heading font-medium text-alt break-words text-xl xl:text-2xl my-4`}>
            {block.title}
          </h2>
          <div className="my-3 text-alt">
            {renderHTML(block.text)}
          </div>
          {block.subTitle && (
            <h3 className="font-medium uppercase text-sm my-3">
              {block.subTitle}
            </h3>
          )}
          {block.subText && (
            <div className="my-3 text-alt">
              {renderHTML(block.subText)}
            </div>
          )}
          {block.smallImages && (
            <div className="flex gap-8 mt-6">
              {Object.values(block.smallImages).map((smallImage) => (
                <Image
                  key={smallImage.id}
                  data={smallImage.responsiveImage}
                  alt={smallImage.alt}
                  title={smallImage.title}
                  usePlaceholder={false}
                />
              ))}
            </div>
          )}
        </div>
        <div className="my-8 flex justify-center flex-1 lg:my-0 lg:flex-auto lg:w-1/2">
          <div className="w-48 mx-auto text-center md:w-60 lg:w-full lg:px-12 lg:pt-6">
            <Image
              data={image.responsiveImage}
              alt={image.alt}
              title={image.title}
              className="inline-block"
              usePlaceholder={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
