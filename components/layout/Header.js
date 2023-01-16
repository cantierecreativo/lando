import Link from "next/link";
import Image from "next/image";
import Icon from "components/layout/Icon";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import MenuMobile from "components/layout/MenuMobile";
import t from "lib/locales";
import LanguageSwitcher from "./LanguageSwitcher";
import { resolveLink } from "lib/utils";

function RenderNavItem(item, navNewsCategories, locale) {
  const router = useRouter();
  const classNameActive = "text-red";
  const classNameItem =
    "group inline-flex items-center text-sm text-black duration-200 hover:text-orange focus:ring-orange";
  const classDropdownItem =
    "block whitespace-nowrap py-3 px-4 pr-12 text-sm text-black";
  if (item.model === "news_index") {
    return (
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`${
                Object(router.pathname).indexOf() > -1
                  ? { classNameActive }
                  : ""
              } ${classNameItem}`}
            >
              <span>Categorie news</span>
              <Icon
                name="down"
                size="15"
                fill="#4F3143"
                className={`${open ? "rotate-180" : ""}`}
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-auto max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid divide-y divide-black/5 bg-white text-xs">
                    {navNewsCategories.map((p) => (
                      <Link key={p.id} href={resolveLink(p, locale)}>
                        <a title={p.title} onClick={() => close()}>
                          <span className={classDropdownItem}>{p.title}</span>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  }
  return (
    <Link key={item.id} href={resolveLink(item, locale)}>
      <a
        key={item.slug}
        title={item.title}
        className={`${
          Object(router.asPath).indexOf(item.slug) > -1
            ? { classNameActive }
            : "none"
        }`}
      >
        <span className="text-black duration-200 hover:text-orange">
          {item.menuLabel}
        </span>
      </a>
    </Link>
  );
}

function Header(props) {
  const { locale, site, page } = props;
  const navNewsCategories = site.allCategoryNews;
  const navItems = [...site.allPages, site.newsIndex, site.contactPage].filter(
    (item) => item !== null
  );
  const prefix = locale === "it" ? "/" : "/en";

  return (
    <header className="relative z-40 bg-red-100 py-1">
      <Popover className="">
        <div className="">
          <div className="container">
            <div className="flex items-center justify-between lg:justify-start lg:space-x-5">
              <Link href={prefix} key="homepage">
                <a title="Homepage" className="flex items-center">
                  <div className="relative h-7 w-20 lg:h-12 lg:w-32">
                    {/* <Image
                        priority
                        src="/images/logo.svg"
                        alt="Logo Voc Services"
                        layout="fill"
                      /> */}
                  </div>
                </a>
              </Link>
              <div className="flex items-center lg:hidden">
                <Popover.Button className="inline-flex items-center justify-center text-black">
                  <span className="sr-only">Open menu</span>
                  <Icon
                    name="menu"
                    fill="#4F3143"
                    className="mx-auto"
                    size="25"
                  />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden space-x-5 lg:flex">
                {navItems.map((item) => (
                  <div key={item.id}>
                    {RenderNavItem(item, navNewsCategories, locale)}
                  </div>
                ))}
                <div className="hidden items-center space-x-1 lg:flex">
                  <LanguageSwitcher page={page} locale={locale} />
                </div>
              </Popover.Group>
            </div>
          </div>
        </div>
        <MenuMobile
          site={site}
          page={page}
          locale={locale}
          navItems={navItems}
          navNewsCategories={navNewsCategories}
        />
      </Popover>
    </header>
  );
}

export default Header;
