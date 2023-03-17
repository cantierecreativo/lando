import { Image } from "react-datocms";
import { uppercaseClass } from "lib/visual";
import Link from "next/link";

export default function HeroImage({ block, visual }) {
  const image = block.image;
  const alignClass = block.alignCenter ? "text-center mx-auto " : "";
  const titleClass = block.hideTitle ? "sr-only" : "";

  return (
    <header className="mx-auto relative -mt-[100px] xl:-mt-[121px]">
      <div className="h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[900px]">
        <div className="w-full h-full relative">
          <Image
            data={image.responsiveImage}
            alt={image.alt}
            title={image.title}
            layout="fill"
            objectFit="cover"
            lazyLoad={false}
          />
        </div>
        <div
          className={`${titleClass} absolute z-20 inset-x-0 bottom-0 container`}
        >
          <h1
            className={`${alignClass} ${uppercaseClass(
              visual
            )} max-w-prose font-bold font-heading text-white py-4 text-base md:text-lg xl:text-xl lg:py-8 lg:max-w-[32ch]`}
          >
            {block.title}
          </h1>
          <div className="inline-block mb-8 lg:mb-20">
            <Link
              href={block.ctaHeader.url}
              target="blank"
              title={`Contact us (open in new tab)`}
            >
              <a className="button-big">{block.ctaHeader.label}</a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
