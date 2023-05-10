import i18n from "lib/i18n";
import { uppercaseClass } from "lib/visual";
import { anchorId } from "lib/anchors";
import { useInView } from "react-intersection-observer";
import { Image as DatoImage } from "react-datocms";
import Image from "next/image";

export default function Text({ block, visual, locale }) {
  const alignClass = block.alignCenter ? "text-center mx-auto " : "";

  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const inViewClass = inView ? "fade-down-on" : "fade-down-off";

  return (
    <section
      id={anchorId(block)}
      ref={ref}
      className={`${inViewClass} fade-down scroll-mt-20 lg:scroll-mt-30 xl:scroll-mt-40 py-6 lg:py-12 xl:py-24 bg-white`}
    >
      <div className="container">
        <h2
          className={`${alignClass} ${uppercaseClass(
            visual
          )} text-rev font-bold text-sm uppercase tracking-widest my-2`}
        >
          {block.title}
        </h2>
        <div className="grid md:grid-cols-5 grid-cols-2 gap-2 mt-4 lg:mt-12">
          {block.images.map((img) => (
            <div className="relative h-14 lg:h-20" key={img.id}>
              {img.format === "svg" ? (
                <div className="w-[90%] h-[90%] relative mx-auto mt-[2%]">
                  <Image
                    src={img.url}
                    layout="fill"
                    title={img.title}
                    alt={img.alt}
                  />
                </div>
              ) : (
                <DatoImage
                  className="image-contain"
                  data={img.responsiveImage}
                  alt={img.responsiveImage.alt}
                  title={img.responsiveImage.title}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
