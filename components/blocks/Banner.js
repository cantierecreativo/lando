import { renderHTML } from "lib/html";
import { Image as DatoImage } from "react-datocms";
import Button from "components/layout/Button";
import DynamicLink from "components/blocks/DynamicLink";

export default function Banner({ locale, record }) {
  const { title, text, imageBg, cta, link } = record;

  return (
    <section className="relative overflow-hidden">
      <DynamicLink link={link} locale={locale} className="group">
        <div className="bg-gradient-to-b md:bg-gradient-to-r from-black absolute inset-0 z-10 md:w-[200%] h-[300%]" />
        <DatoImage
          className="hover-image"
          data={imageBg.responsiveImage}
          alt={imageBg.responsiveImage.alt}
          title={imageBg.responsiveImage.title}
          layout="fill"
          objectFit="cover"
        />
        <div className="container py-8 md:px-20 lg:py-20">
          <div className="py-16 z-10 relative bg-back max-w-[1000px]">
            {title && <h2 className="text-xs lg:text-sm mb-6">{title}</h2>}
            {text && (
              <h3 className="max-w-sm title text-3xl lg:text-4xl lg:max-w-md mb-8 xl:mb-12">
                {renderHTML(text)}
              </h3>
            )}
            <div className="inline-block">
              <Button label={link.label} color="yellow" />
            </div>
          </div>
        </div>
      </DynamicLink>
    </section>
  );
}
