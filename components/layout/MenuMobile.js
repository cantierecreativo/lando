import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import Icon from "components/layout/Icon";
import { Fragment } from "react";
import t from "lib/locales";
import LanguageSwitcher from "./LanguageSwitcher";
import InternalLink from "components/blocks/InternalLink";
import Button from "./Button";
import Socials from "./Socials";
import RenderNavItem from "./RenderNavItem";

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
                <div className="flex items-center lg:hidden gap-2">
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
                  <Popover.Button className="">
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
                    <RenderNavItem key={m.id} locale={locale} item={m} />
                  ))}
                </div>
                <Socials site={site} locale />
              </nav>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </>
  );
}
