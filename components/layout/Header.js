import Image from 'next/image';
import Link from 'next/link';
import i18n from "lib/i18n";
import slugify from '@sindresorhus/slugify';

export default function Header({ site, visual, org, page, locale }) {
  const locales = page._locales;
  const { contactsMenuLabel } = org;

  const menuItems = page.contentBlocks.map(({ menuLabel }) => menuLabel)
    .filter(e => e)

  return (
    <header className="sticky top-0 bg-back z-30">
      <div className="container flex items-center justify-between py-2 xl:py-4">
        <div className="flex-1 flex items-center max-w-[160px] xl:max-w-[220px]">
          <Image
            src={visual.logo.url}
            alt={`Logo ${site.globalSeo && site.globalSeo.siteName}`}
            width={220}
            height={90}
            priority='true'
          />
        </div>
        {menuItems && (
          <nav
            aria-label={i18n.mainNav.label[locale]}
            className="hidden lg:block flex-1"
          >
            <ul
              className="flex gap-6 items-center justify-end"
            >
              {menuItems.map((item) => (
                <li
                  className="flex-none"
                  key={item}
                >
                  <a
                    className="button uppercase text-sm"
                    href={`#${slugify(item)}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
              {contactsMenuLabel && (
                <li
                  className="flex-none"
                >
                  <a
                    className="button uppercase text-sm"
                    href={`#footer`}
                  >
                    {contactsMenuLabel}
                  </a>
                </li>
              )}
            </ul>
          </nav>
        )}
        {locales.length >= 1 && (
          <nav
            className="flex-none"
            aria-label={i18n.localeNav.label[locale]}
          >
            <ul
              className="flex items-center gap-5"
            >
              <li>
                {locales && locales.map((l, i) => {
                  if (l == locale) {
                    return
                  }
                  return (
                    <Link href="/" locale={l} key={i}>
                      <a className="button-arrow uppercase text-sm">
                        {i18n.switchLocale.label[locale]}
                      </a>
                    </Link>
                  )
                })}
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
