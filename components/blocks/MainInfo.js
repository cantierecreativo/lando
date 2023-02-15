import { renderHTML } from "lib/utils";
import Icon from "components/layout/Icon";
import Link from "next/link";
import t from "lib/locales";
import ExternalLink from "./ExternalLink";
import Button from "components/layout/Button";

export default function MainInfo({ locale, site, social = false }) {
  const info = site.organization;
  return (
    <>
      <section className="container pt-16 pb-16 lg:py-20">
        <div className="grid gap-8 md:grid-cols-8 lg:grid-cols-12">
          <div
            className={`${
              social == true ? "" : "xl:col-span-6"
            } flex gap-3 md:col-span-4`}
          >
            <div className="w-9 h-9 flex-none rounded-full bg-white/10 relative">
              <Icon name="clock" size="23" className="centered" fill="white" />
            </div>
            <div className="grid gap-2 content-start">
              {social == true ? (
                <div className="uppercase">
                  {t("info_title_museum", locale)}
                </div>
              ) : null}
              <div className="opacity-80">{renderHTML(info.hour)}</div>
              <Link
                href={info.linkInfo}
                className="group text-[15px]"
                title={t("info_museum", locale)}
              >
                <div className="flex gap-x-2 duration-100 group-hover:gap-3 items-center">
                  <span className="uppercase text-sm">{t("info_museum")}</span>
                  <Icon name="arrow" size="23" className="" fill="white" />
                </div>
              </Link>
            </div>
          </div>

          <div
            className={`${
              social == true ? "" : "xl:col-span-3"
            } flex gap-3 md:col-span-4`}
          >
            <div className="w-9 h-9 flex-none rounded-full bg-white/10 relative">
              <Icon name="ticket" size="23" className="centered" fill="white" />
            </div>
            <div className="grid gap-2 content-start">
              {social == true ? (
                <div className="uppercase">
                  {t("info_title_ticket", locale)}
                </div>
              ) : null}
              <div className="opacity-80">{renderHTML(info.ticketsInfo)}</div>
              <Link
                href={info.linkInfo}
                className="group text-[15px]"
                title={t("info_ticket")}
              >
                <div className="flex gap-x-2 duration-100 group-hover:gap-3 items-center">
                  <span className="uppercase text-sm">{t("info_ticket")}</span>
                  <Icon name="arrow" size="23" className="" fill="white" />
                </div>
              </Link>
            </div>
          </div>

          <div
            className={`${
              social == true ? "xl:col-span-4" : "xl:col-span-3 lg:text-right"
            } md:col-span-8 lg:col-span-4`}
          >
            {social == false ? (
              <div className="inline-block">
                <ExternalLink
                  url={info.linkTicket}
                  title={t("buy_tickets", locale)}
                  locale={locale}
                  className="group text-[15px]"
                >
                  <Button
                    label={t("buy_tickets", locale)}
                    color="yellow"
                    icon="ticket"
                  />
                </ExternalLink>
              </div>
            ) : (
              <>
                <div className="mb-4">Social</div>
                <div className="flex gap-2">
                  {info.facebookUrl && (
                    <ExternalLink
                      url={info.facebookUrl}
                      className=""
                      title="Facebook"
                    >
                      <div className="w-12 h-12 bg-white/10 rounded-full relative">
                        <Icon
                          fill="white"
                          name="facebook"
                          className="centered"
                          size="28"
                        />
                      </div>
                    </ExternalLink>
                  )}
                  {info.instagramUrl && (
                    <ExternalLink
                      url={info.instagramUrl}
                      className=""
                      title="Instagram"
                    >
                      <div className="w-12 h-12 bg-white/10 rounded-full relative">
                        <Icon
                          fill="white"
                          name="instagram"
                          className="centered"
                          size="28"
                        />
                      </div>
                    </ExternalLink>
                  )}
                  {info.twitterUrl && (
                    <ExternalLink
                      url={info.twitterUrl}
                      className=""
                      title="Twitter"
                    >
                      <div className="w-12 h-12 bg-white/10 rounded-full relative">
                        <Icon
                          fill="white"
                          name="twitter"
                          className="centered"
                          size="45"
                        />
                      </div>
                    </ExternalLink>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
