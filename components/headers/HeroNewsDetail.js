import { renderHTML } from "lib/utils";
import { Image as DatoImage } from "react-datocms";
import InternalLink from "components/blocks/InternalLink";

export default function Hero({ page, locale }) {
  const { title, image, descriptionImageHero, category, info } = page;
  const categoryClass =
    "uppercase white text-xxs bg-black text-white tracking-wide rounded-2xl py-2 px-4 relative hover:bg-siena duration-200 inline-block";

  return (
    <header className=" bg-yellow-light text-black">
      <div className="container py-8 xl:py-12">
        <div className="text-xxs font-semibold grid md:flex md:items-center gap-2 lg:text-xs md:gap-4 md:pb-3 lg:pb-6">
          <InternalLink
            element={category}
            locale={locale}
            label={category.title}
            className="group z-20 relative"
          >
            <div aria-hidden="true" className={`${categoryClass}`}>
              {page.category.title}
            </div>
          </InternalLink>
          <div className="">{info}</div>
        </div>
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-x-3">
          <div className="lg:col-span-12">
            {image && (
              <DatoImage
                className="h-[80vw] mt-6 md:h-auto md:mt-2"
                data={image.responsiveImage}
                alt={image.responsiveImage.alt}
                title={image.responsiveImage.title}
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
          <div className="lg:col-span-8 lg:col-start-3 lg:py-3 xl:py-5">
            <h1 className="font-serif text-xl md:text-2xl lg:col-span-4 xl:text-3xl">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}
