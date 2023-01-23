import { renderHTML } from "lib/html";
import { Image as DatoImage } from "react-datocms";
import Button from "components/layout/Button";
import t from "lib/locales";
import Link from "next/link";

export default function HpCard({ locale, title, url, text, prefix, image }) {
  return (
    <>
      <Link title={title} className="group" href={url}>
        <div className="bg-black/20 text-white p-3 lg:p-8 md:p-6">
          <div className="grid gap-8 content-start lg:grid-cols-2">
            <div className="lg:flex gap-2 lg:flex-row-reverse pt-4 lg:pt-0">
              <div className="grid gap-4 content-start lg:gap-6 lg:pr-28">
                {prefix && (
                  <div className="uppercase text-xs mb-1 xl:text-base">
                    {prefix}
                  </div>
                )}
                <h2 className="title">{title}</h2>
                {text && (
                  <h3 className="opacity-80 mb-1 xl:text-base">
                    {renderHTML(text)}
                  </h3>
                )}
                <Button
                  locale={locale}
                  arrow={true}
                  color="transparent"
                  label={t("more", locale)}
                />
              </div>
            </div>
            <DatoImage
              className="mb-2"
              data={image.responsiveImage}
              alt={image.responsiveImage.alt}
              title={image.responsiveImage.title}
              layout=""
            />
          </div>
        </div>
      </Link>
    </>
  );
}
