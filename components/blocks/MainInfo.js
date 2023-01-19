import { renderHTML } from "lib/utils";
import Icon from "components/layout/Icon";
import InternalLink from "./InternalLink";
import Link from "next/link";
import t from "lib/locales";
import ExternalLink from "./ExternalLink";
import Button from "components/layout/Button";

export default function MainInfo({ locale, site }) {
  const info = site.organization;
  return (
    <>
      <section className="container pb-16 lg:py-10">
        <div className="grid gap-8 md:grid-cols-8 lg:grid-cols-12 xl:gap-0">
          <div className="flex gap-3 md:col-span-4 xl:col-span-6">
            <div className="w-9 h-9 flex-none rounded-full bg-white/10 relative">
              <Icon name="clock" size="23" className="centered" fill="white" />
            </div>
            <div className="grid gap-2 content-start">
              <div className="opacity-80">{renderHTML(info.hour)}</div>
              <Link
                href={info.linkInfo}
                className="group"
                title={t("info_museum")}
              >
                <div className="flex gap-x-2 duration-100 group-hover:gap-3 items-center">
                  <span className="uppercase text-sm">{t("info_museum")}</span>
                  <Icon name="arrow" size="23" className="" fill="white" />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex gap-3 md:col-span-4 xl:col-span-3">
            <div className="w-9 h-9 flex-none rounded-full bg-white/10 relative">
              <Icon name="ticket" size="23" className="centered" fill="white" />
            </div>
            <div className="grid gap-2 content-start">
              <div className="opacity-80">{renderHTML(info.ticketsInfo)}</div>
              <Link
                href={info.linkInfo}
                className="group"
                title={t("info_ticket")}
              >
                <div className="flex gap-x-2 duration-100 group-hover:gap-3 items-center">
                  <span className="uppercase text-sm">{t("info_ticket")}</span>
                  <Icon name="arrow" size="23" className="" fill="white" />
                </div>
              </Link>
            </div>
          </div>
          <div className="md:col-span-8 lg:col-span-4 xl:col-span-3 lg:text-right">
            <div className="inline-block">
              <ExternalLink
                url={info.linkTicket}
                title={t("buy_tickets", locale)}
                locale={locale}
                className="group"
              >
                <Button
                  label={t("buy_tickets", locale)}
                  color="yellow"
                  icon="ticket"
                />
              </ExternalLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
