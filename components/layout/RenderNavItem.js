import { useRouter } from "next/router";
import Link from "next/link";
import { Disclosure, Transition } from "@headlessui/react";
import { resolveLink } from "lib/utils";
import Icon from "components/layout/Icon";

export default function RenderNavItem({ locale, item }) {
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
