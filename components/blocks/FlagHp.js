import { renderHTML } from "lib/utils";
import { Image as DatoImage } from "react-datocms";
import InternalLink from "./InternalLink";
import Button from "components/layout/Button";
import t from "lib/locales";

export default function FlagHp({ locale, record, site }) {
  return (
    <>
      <section className="py-6 grid gap-6 md:grid-cols-2 md:py-12 xl:grid-cols-12 xl:gap-4">
        <div className="px-6 xl:px-0 xl:col-span-4 xl:col-start-2">
          <DatoImage
            className=""
            data={record.imageHistory.responsiveImage}
            alt={record.imageHistory.responsiveImage.alt}
            title={record.imageHistory.responsiveImage.title}
            layout=""
            // lazyLoad="false"
            usePlaceholder={false}
          />
          {record.descriptionImageHistory && (
            <div className="text-xs font-serif py-3 font-light">
              {renderHTML(record.descriptionImageHistory)}
            </div>
          )}
        </div>
        <div className="grid gap-3 content-start md:content-center lg:gap-5 xl:col-span-5 xl:col-start-7">
          <h2 className="title">{record.titleHistory}</h2>
          <h3 className="opacity-80">{record.titleHistory}</h3>
          <InternalLink
            element={site.historyPage}
            locale={locale}
            label={site.historyPage.title}
            className="group"
          >
            <Button
              label={t("more", locale)}
              color="transparent"
              arrow={true}
            />
          </InternalLink>
        </div>
      </section>
    </>
  );
}
