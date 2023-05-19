"use client";

import Image from "next/image";
import Link from "next/link";
import { convertToSlug } from "@/lib/utils";
import t from "@/lib/locales";
import {
  LandingRecord,
  OrganizationRecord,
  Site,
  VisualStyleRecord,
} from "@/gql/graphql";

type HeaderProps = {
  site: Site | undefined | null;
  org: OrganizationRecord | undefined | null;
  visual: VisualStyleRecord | undefined | null;
  page: LandingRecord | undefined | null;
  locale: string;
};

export default function Header({
  site,
  visual,
  org,
  page,
  locale,
}: HeaderProps) {
  const locales = page?._locales || [];
  const contactsMenuLabel = org?.contactsMenuLabel;

  const menuItems: any = [];
  if (page?.contentBlocks) {
    page?.contentBlocks.map((b: any) => {
      if (b.menuLabel) menuItems.push(b.menuLabel);
    });
  }

  const srcLogo = visual?.logo?.url || null;

  return (
    <header className="sticky top-0 bg-back z-30">
      <div className="container flex items-center justify-between py-2 xl:py-4">
        <div className="flex-1 flex items-center max-w-[160px] xl:max-w-[220px]">
          {srcLogo && (
            <Image
              alt={`Logo ${site?.globalSeo && site.globalSeo.siteName}`}
              src={srcLogo}
              width={220}
              height={90}
            />
          )}
        </div>
        {menuItems && (
          <nav
            aria-label={t("mainNav", locale)}
            className="hidden lg:block flex-1"
          >
            <ul className="flex gap-6 items-center justify-end">
              {menuItems.map((item: string, n: any) => (
                <li className="flex-none" key={n}>
                  <a
                    className="button uppercase text-sm"
                    href={`#${convertToSlug(item)}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
              {contactsMenuLabel && (
                <li className="flex-none">
                  <a className="button uppercase text-sm" href={`#footer`}>
                    {contactsMenuLabel}
                  </a>
                </li>
              )}
            </ul>
          </nav>
        )}
        {locales.length >= 1 && (
          <nav className="flex-none" aria-label={t("localeNav", locale)}>
            <ul className="flex items-center gap-5">
              <li>
                {locales &&
                  locales.map((l: any) => {
                    if (l == locale) {
                      return;
                    }
                    return (
                      <Link href="/" locale={l} key={l}>
                        <a className="button-arrow uppercase text-sm">
                          {t("switchLocaleLabel", locale)}
                        </a>
                      </Link>
                    );
                  })}
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
