import { Image } from "react-datocms";
import { uppercaseClass } from "lib/visual";

export default function HeroImage({ block, visual }) {
  const image = block.image;
  const alignClass = block.alignCenter ? "text-center mx-auto " : "";
  const titleClass = block.hideTitle ? "sr-only" : "";

  return (
    <header className="mx-auto max-w-screen-2xl relative">
      <div className="cover">
        <Image
          data={image.responsiveImage}
          alt={image.alt}
          title={image.title}
          layout="fill"
          objectFit="cover"
          lazyLoad={false}
        />
        <div
          className={`${titleClass} absolute z-20 inset-x-0 bottom-0 container`}
        >
          <h1
            className={`${alignClass} ${uppercaseClass(
              visual
            )} max-w-[17ch] font-medium font-heading text-white py-4 text-lg md:text-xl lg:py-8 lg:text-2xl xl:text-3xl`}
          >
            {block.title}
          </h1>
        </div>
      </div>
    </header>
  );
}
