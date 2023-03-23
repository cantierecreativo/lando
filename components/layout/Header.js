import Image from "next/image";
import Link from "next/link";
import i18n from "lib/i18n";
import slugify from "@sindresorhus/slugify";
import { useEffect, useState } from "react";

export default function Header({ site, visual, org, page, locale }) {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const locales = page._locales;
  const { contactsMenuLabel } = org;
  const menuItems = page.contentBlocks
    .map(({ menuLabel }) => menuLabel)
    .filter((e) => e);

  return (
    <header
      className={`${
        scroll ? "bg-back-alt" : "bg-transparent"
      } sticky top-0 z-30 border-b border-white duration-300`}
    >
      <div className="container flex items-center justify-between xl:py-2">
        <div className="h-20 w-44 xl:w-60 relative">
          <Image
            src={visual.logo.url}
            alt={`Logo ${site.globalSeo && site.globalSeo.siteName}`}
            priority="true"
            layout="fill"
            objectPosition="left"
            objectFit="contain"
          />
        </div>
        {menuItems && (
          <nav
            aria-label={i18n.mainNav.label[locale]}
            className="hidden lg:block flex-1"
          >
            <ul className="flex gap-6 items-center justify-end">
              {menuItems.map((item) => (
                <li className="flex-none" key={item}>
                  <a
                    className="button uppercase text-xs"
                    href={`#${slugify(item)}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
              {contactsMenuLabel && (
                <li className="flex-none">
                  <a className="button uppercase text-xs" href={`#footer`}>
                    {contactsMenuLabel}
                  </a>
                </li>
              )}
            </ul>
          </nav>
        )}
        {locales.length >= 1 && (
          <nav className="flex-none" aria-label={i18n.localeNav.label[locale]}>
            <ul className="flex items-center gap-5">
              <li>
                {locales &&
                  locales.map((l, i) => {
                    if (l == locale) {
                      return;
                    }
                    return (
                      <Link href="/" locale={l} key={i}>
                        <a className="button-arrow uppercase text-sm">
                          {i18n.switchLocale.label[locale]}
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
