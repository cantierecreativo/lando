import { renderHTML } from "lib/utils";
import { Image as DatoImage } from "react-datocms";

export default function HeroImage({ page, visual }) {
  const { title, imageHero, descriptionImageHero, textHero } = page;

  return (
    <header className="container py-8 xl:py-12">
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-x-3 xl:gap-y-16">
        <h1 className="uppercase font-serif text-xl md:text-2xl lg:col-span-4 xl:text-4xl">
          {title}
        </h1>
        {textHero && (
          <h2 className="opacity-80 lg:col-span-6 lg:col-start-6 xl:mt-1">
            {renderHTML(textHero)}
          </h2>
        )}
        <div className="lg:col-span-12">
          {imageHero && (
            <DatoImage
              className="h-[80vw] mt-6 md:h-auto md:mt-2"
              data={imageHero.responsiveImage}
              alt={imageHero.responsiveImage.alt}
              title={imageHero.responsiveImage.title}
              layout=""
              objectFit="cover"
            />
          )}
          {descriptionImageHero && (
            <div className="font-serif text-xs font-normal mt-3">
              {renderHTML(descriptionImageHero)}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
