import { renderHTML } from "lib/utils";
import { Disclosure, Transition } from "@headlessui/react";
import Icon from "components/layout/Icon";

export default function FaqBlock({ locale, record }) {
  const { id, title, subtitle, faqBlocks } = record;
  return (
    <section>
      <div className="container py-6 grid xl:grid-cols-12 lg:py-12">
        <div className="xl:col-span-8 xl:col-start-3 grid gap-4">
          {title && <h2 class="text-lg xl:text-2xl">{title}</h2>}
          {subtitle && <h3 class="text-white/80">{subtitle}</h3>}
          <div className="border-b border-white/40 mt-4">
            {faqBlocks.map((r) => {
              return (
                <Disclosure
                  key={r.id}
                  as="div"
                  className="border-t border-white/40"
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex items-center py-3 justify-between w-full xl:p-5">
                        <span
                          className={`${
                            open ? "text-yellow" : ""
                          } duration-200 xl:text-lg`}
                        >
                          {renderHTML(r.question)}
                        </span>
                        <Icon
                          name="down"
                          size="28"
                          fill="white"
                          className={`${open ? "rotate-180 fill-yellow" : ""}`}
                        />
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-300 ease-out"
                        enterFrom="transform scale-100 opacity-0"
                        enterTo="transform scale-300 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-300 opacity-100"
                        leaveTo="transform scale-100 opacity-0"
                      >
                        <Disclosure.Panel>
                          <div className="text-sm pb-3 xl:pb-5 xl:px-5">
                            <span>{renderHTML(r.reply)}</span>
                          </div>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
