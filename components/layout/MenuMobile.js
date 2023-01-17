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

function RenderMobileNavItem(item, navNewsCategories, locale) {
  const router = useRouter();
  const classNameActiveMobile = "text-red";
  const classNameItemMobile =
    "group inline-flex items-center text-sm text-black duration-200 hover:text-orange focus:ring-orange";
  const classDropdownItem =
    "block whitespace-nowrap py-3 px-4 pr-12 text-sm text-black";
  if (item.model === "news_index") {
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
              <span>Categorie news</span>
              <Icon
                name="down"
                size="15"
                fill="#4F3143"
                className={`${open ? "rotate-180" : ""}`}
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
              <Disclosure.Panel className="p-8">
                <div className="relative grid divide-y divide-black/5 bg-white text-xs">
                  {navNewsCategories.map((p) => (
                    <Link
                      title={p.title}
                      onClick={() => close()}
                      key={p.id}
                      href={resolveLink(p, locale)}
                    >
                      <span className={classDropdownItem}>{p.title}</span>
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
      href={resolveLink(item, locale)}
      title={item.title}
      className={`${
        Object(router.asPath).indexOf(item.slug) > -1
          ? { classNameActiveMobile }
          : "none"
      }`}
    >
      <span className="text-black duration-200">{item.menuLabel}</span>
    </Link>
  );
}

export default function MenuMobile({
  site,
  locale,
  page,
  navItems,
  navNewsCategories,
}) {
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
          <div className="min-h-[100vh] relative z-40 bg-red border-b border-white/20">
            <div className="pt-3 pb-6">
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
              <div className="bg-yellow-light">
                <div className="bg-white/40">
                  <div className="space-y-6 px-5 pb-6">
                    <div className="mb-2 text-xxs text-white/70">Lingua</div>
                    <LanguageSwitcher page={page} locale={locale} />
                  </div>
                </div>
                <nav className="mt-3">
                  <div className="grid border-b border-gray/20">
                    {navItems.map((item) => (
                      <div key={item.id}>
                        {RenderMobileNavItem(item, navNewsCategories, locale)}
                      </div>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </>
  );
}
