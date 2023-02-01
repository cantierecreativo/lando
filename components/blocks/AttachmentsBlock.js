import Icon from "components/layout/Icon";
import t from "lib/locales";
import ExternalLink from "./ExternalLink";

export default function AttachmentsBlock({ locale, record }) {
  return (
    <>
      <div className="container py-6 lg:py-12">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-5 lg:col-start-3">
            {record.title && (
              <h2 className="text-lg xl:text-2xl">{record.title}</h2>
            )}
            <div className="grid gap-3 mt-4 xl:mt-7 xl:gap-5">
              {record.attachments.map((a) => (
                <ExternalLink
                  locale={locale}
                  url={a.file.url}
                  title={a.title}
                  key={a.id}
                  className="group"
                >
                  <div className="rounded-[5px] bg-white/10 p-4 xl:grid xl:grid-cols-5 duration-150 group-hover:bg-white/20">
                    <div className="text-sm font-semibold xl:col-span-3">
                      {a.title}
                    </div>
                    <div className="flex items-center text-xs gap-2 pt-1 xl:col-span-2 xl:pt-0">
                      <div className="xl:flex-none">
                        {t("downloadLabel", locale)}
                      </div>
                      <Icon
                        name="download"
                        size="15"
                        fill="white"
                        className="xl:flex-none"
                      />
                    </div>
                  </div>
                </ExternalLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
