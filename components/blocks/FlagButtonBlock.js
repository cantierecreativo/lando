import { Image as DatoImage } from "react-datocms";
import { renderHTML } from "lib/utils";

export default function FlagButtonBlock({ locale, record }) {
  const { image, title, text, description, alignRev } = record;
  return (
    <>
      <section className="container xl:grid xl:grid-cols-12 py-6 lg:py-12">
        <div
          className={`${
            alignRev == true ? "lg:flex-row-reverse" : ""
          } lg:flex xl:col-span-10 xl:col-start-2 lg:justify-between`}
        >
          <div className="lg:w-2/5 flex-none grid gap-4 content-start">
            {title && <h2 className="text-xl xl:text-2xl">{title}</h2>}
            {text && <h3 className="text-white/80">{renderHTML(text)}</h3>}
          </div>
          <div className="lg:w-1/2 flex-none grid gap-4 mt-6 lg:mt-0">
            <DatoImage
              className=""
              data={image.responsiveImage}
              alt={image.responsiveImage.alt}
              title={image.responsiveImage.title}
              layout=""
            />
            {description && (
              <div className="text-xs font-serif font-light">
                {renderHTML(description)}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
