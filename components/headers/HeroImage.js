import { Image } from "react-datocms";
import { uppercaseClass } from "lib/visual";
import Link from "next/link";

export default function HeroImage({ block, visual }) {
  const image = block.image;
  const alignClass = block.alignCenter ? "text-center mx-auto " : "";
  const titleBgClass = block.hideTitle
    ? ""
    : "after:absolute after:z-10 after:inset-0 after:bg-gradient-to-t after:from-black/60";
  const titleClass = block.hideTitle ? "sr-only" : "";

  return (
    <header className={`${titleBgClass} mx-auto max-w-screen-2xl relative`}>
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
            )} max-w-[17ch] font-medium font-heading text-white py-4 text-xl lg:py-8 lg:text-2xl xl:text-3xl`}
          >
            {block.title}
          </h1>
          {block.ctaHeader && (
            <div className="my-2 text-center mb-12 xl:mb-20">
              <Link href={block.ctaHeader.url}>
                <a
                  target="_blank"
                  title={`${block.ctaHeader.label} ${i18n.linkExternal[locale]}`}
                  rel="noreferrer noopener"
                  className="button-arrow bg-back mx-auto"
                >
                  {block.ctaHeader.label}
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
