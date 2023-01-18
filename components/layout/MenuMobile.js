import { useRouter } from "next/router";
import { Popover, Disclosure, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import Icon from "components/layout/Icon";
import { Fragment } from "react";
import t from "lib/locales";
import LanguageSwitcher from "./LanguageSwitcher";
import { resolveLink } from "lib/utils";
import InternalLink from "components/blocks/InternalLink";
import Button from "./Button";

function RenderMobileNavItem(item, locale) {
  const router = useRouter();
  const classNameActiveMobile = "text-red";
  const classNameItemMobile =
    "group flex items-center text-sm text-black/80 uppercase font-sans justify-between w-full py-3 border-b border-black/20";
  const classDropdownItem =
    "block whitespace-nowrap py-2 text-xs text-black/80";
  if (!item.linkMenu) {
    return (
      <Disclosure className="relative">
        {({ open, close }) => (
          <>
            <Disclosure.Button
              className={`${
                Object(router.pathname).indexOf() > -1
                  ? { classNameActiveMobile }
                  : ""
              } ${classNameItemMobile}`}
            >
              <span>{item.labelMenu}</span>
              <Icon
                name="down"
                size="20"
                className={`${open ? "rotate-180" : ""} fill-siena`}
              />
            </Disclosure.Button>

            <Transition
              enter="transition duration-500 ease-out"
              enterFrom="transform opacity-0"
              enterTo="transform opacity-100"
              leave="transition duration-100 ease-out"
              leaveFrom="transform opacity-100"
              leaveTo="transform opacity-0"
            >
              <Disclosure.Panel className="">
                <div className="relative grid text-xs py-4">
                  {item.itemsMenu.map((p) => (
                    <Link
                      title={p.title}
                      onClick={() => close()}
                      key={p.id}
                      href={resolveLink(p.linkMenu, locale)}
                    >
                      <span className={classDropdownItem}>{p.labelMenu}</span>
                    </Link>
                  ))}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    );
  }
  return (
    <Link
      key={item.id}
      href={resolveLink(item.linkMenu, locale)}
      title={item.labelMenu}
      className={`${
        Object(router.asPath).indexOf(item.slug) > -1
          ? { classNameActiveMobile }
          : "none"
      }`}
    >
      <span className={classNameItemMobile}>{item.labelMenu}</span>
    </Link>
  );
}

export default function MenuMobile({ site, locale, page }) {
  return (
    <>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="fixed inset-x-0 top-0 origin-top transform overflow-hidden transition lg:hidden"
        >
          <div className="min-h-[100vh] relative z-40 bg-yellow-light border-b border-white/20">
            <div className="py-3 bg-red">
              <div className="flex items-center justify-between px-4">
                <div className="relative h-8 w-24 lg:h-12 lg:w-32">
                  <Image
                    priority
                    src="/images/logo.svg"
                    alt="Logo Museo Civico Siena"
                    layout="fill"
                  />
                </div>
                <div className="flex items-center lg:hidden">
                  <Popover.Button className="flex items-center gap-2 justify-center text-black">
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
                    <span className="sr-only">Close menu</span>
                    <Icon
                      name="close"
                      className="mx-auto fill-white"
                      fill="white"
                      size="35"
                    />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="bg-white/40 text-black">
              <div className="container py-2 pb-3">
                <LanguageSwitcher page={page} locale={locale} />
              </div>
            </div>
            <div className="overflow-scroll h-[calc(100vh-129px)]">
              <nav className="container">
                <div className="grid py-4">
                  {site.menu.groupsMenu.map((m) => (
                    <div key={m.id}>{RenderMobileNavItem(m, locale)}</div>
                  ))}
                </div>
                <div className="py-4 text-black">Social</div>
              </nav>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </>
  );
}
