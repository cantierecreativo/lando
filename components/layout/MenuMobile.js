import { useRouter } from "next/router";
import { Popover, Disclosure, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import Icon from "components/layout/Icon";
import { Fragment } from "react";
import t from "lib/locales";
import LanguageSwitcher from "./LanguageSwitcher";
import { resolveLink } from "lib/utils";

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
                    <Link key={p.id} href={resolveLink(p, locale)}>
                      <a title={p.title} onClick={() => close()}>
                        <span className={classDropdownItem}>{p.title}</span>
                      </a>
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
    <Link key={item.id} href={resolveLink(item, locale)}>
      <a
        key={item.slug}
        title={item.title}
        className={`${
          Object(router.asPath).indexOf(item.slug) > -1
            ? { classNameActiveMobile }
            : "none"
        }`}
      >
        <span className="text-black duration-200">{item.menuLabel}</span>
      </a>
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
          <div className="relative z-40 min-h-[100vh] bg-yellow-200">
            <div className="pt-5 pb-6">
              <div className="flex items-center justify-between px-4">
                <div>
                  {/* <Image
                      priority
                      src="/logo/logo.svg"
                      height={35}
                      width={150}
                      alt="Logo"
                    /> */}
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange">
                    <span className="sr-only">Close menu</span>
                    <Icon
                      name="close"
                      fill="#4F3143"
                      className="mx-auto"
                      size="25"
                    />
                  </Popover.Button>
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
            <div className="space-y-6 px-5 pb-6">
              <div className="mb-2 text-xxs text-white/70">Lingua</div>
              <LanguageSwitcher page={page} locale={locale} />
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </>
  );
}
