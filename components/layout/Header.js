import Link from "next/link";
import Image from "next/image";
import Icon from "components/layout/Icon";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import MenuMobile from "components/layout/MenuMobile";
import t from "lib/locales";
import InternalLink from "components/blocks/InternalLink";
import LanguageSwitcher from "./LanguageSwitcher";
import { resolveLink } from "lib/utils";
import Button from "./Button";

function RenderNavItem(item, locale) {
  const router = useRouter();
  const classNameActive = "text-red";
  const classNameItem =
    "inline-flex items-center text-sm xl:text-base text-white font-light duration-200 relative focus:ring-siena after:absolute group-hover:color-red group-hover:after:right-0 after:duration-300 after:-bottom-1 group-hover:after:left-0 after:h-px after:bg-white after:right-1/2 after:left-1/2";
  const classDropdownItem =
    "block whitespace-nowrap py-3 px-4 pr-12 text-xs xl:text-sm text-black";
  if (!item.linkMenu) {
    return (
      <Popover className="relative group">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`${
                Object(router.pathname).indexOf() > -1
                  ? { classNameActive }
                  : ""
              } ${classNameItem}`}
            >
              <span>{item.labelMenu}</span>
              <Icon
                name="down"
                size="25"
                fill="white"
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
                    {item.itemsMenu.map((p) => (
                      <Link
                        title={p.title}
                        className="group"
                        onClick={() => close()}
                        key={p.id}
                        href={resolveLink(p.linkMenu, locale)}
                      >
                        <span className={classDropdownItem}>{p.labelMenu}</span>
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
    <Link
      key={item.id}
      href={resolveLink(item.linkMenu, locale)}
      title={item.labelMenu}
      className={`${
        Object(router.asPath).indexOf(item.slug) > -1 ? { classNameActive } : ""
      } group`}
    >
      <span className={classNameItem}>{item.labelMenu}</span>
    </Link>
  );
}

function Header(props) {
  const { locale, site, page } = props;
  const prefix = locale === "it" ? "/" : "/en";

  return (
    <header className="relative z-40 bg-red-100 py-3 border-b border-white/20 lg:pt-5 lg:pb-0 lg:border-0">
      <Popover className="">
        <div className="">
          <div className="container">
            <div className="flex items-center justify-between lg:space-x-5">
              <Link
                title="Homepage"
                className="flex items-center"
                href={prefix}
                key="homepage"
              >
                <div className="relative h-8 w-24 lg:h-16 lg:w-44">
                  <Image
                    priority
                    src="/images/logo.svg"
                    alt="Logo Museo Civico Siena"
                    layout="fill"
                  />
                </div>
              </Link>
              <div className="flex items-center gap-2 lg:gap-5">
                <InternalLink
                  element={site.contactPage}
                  label={t("contact_us", locale)}
                  locale={locale}
                  className="group hidden lg:block"
                >
                  <Button label={t("contact_us", locale)} color="white" />
                </InternalLink>
                <InternalLink
                  element={site.ticketsPage}
                  label={t("tickets", locale)}
                  locale={locale}
                  className="group"
                >
                  <Button
                    label={t("tickets", locale)}
                    color="yellow"
                    icon="ticket"
                  />
                </InternalLink>
                <Popover.Button className="lg:hidden">
                  <span className="sr-only">Open menu</span>
                  <Icon
                    name="menu"
                    className="mx-auto fill-white"
                    fill="white"
                    size="35"
                  />
                </Popover.Button>
                <div className="hidden lg:flex items-center">
                  <LanguageSwitcher page={page} locale={locale} />
                  <Icon
                    name="down"
                    className="mx-auto fill-white -rotate-90"
                    fill="white"
                    size="25"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Popover.Group
          as="nav"
          className="hidden space-x-5 lg:flex lg:container lg:justify-end py-3 pb-5"
        >
          {site.menu.groupsMenu.map((item) => (
            <div key={item.id}>{RenderNavItem(item, locale)}</div>
          ))}
        </Popover.Group>
        <MenuMobile site={site} page={page} locale={locale} />
      </Popover>
    </header>
  );
}

export default Header;
