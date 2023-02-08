import t from "lib/locales";
import CheckboxCustom from "components/layout/CheckboxCustom";

import { connectRefinementList } from "react-instantsearch-dom";
import { Disclosure } from "@headlessui/react";

const AttributeFilter = ({
  attribute,
  items,
  currentRefinement,
  refine,
  locale,
}) => {
  {
    console.log("attribute:", attribute);
    console.log("items:", items);
    console.log("refine:", refine);
    // console.log("attribute:", attribute);
  }
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between border-t border-black py-2 focus:outline-none md:hidden">
            <span>{t(attribute, locale)}</span>
            {/* <ChevronUpIcon
              className={`${
                open ? "" : "rotate-180 transform"
              } h-5 w-5 text-red`}
            /> */}
          </Disclosure.Button>
          <Disclosure.Panel className="py-4 md:hidden">
            <ul role="list" className="text-gray-dark">
              {items.map((item, index) => {
                const itemId = `${item.label}-${index}`;
                return (
                  <li
                    className="flex items-center gap-2 py-[2px]"
                    key={item.label}
                  >
                    <input
                      id={itemId}
                      name={item.label}
                      type="checkbox"
                      checked={item.isRefined}
                      className="checkbox-custom"
                      onChange={(e) => refine(item.value)}
                    />
                    <CheckboxCustom layout="small" />
                    <label className="cursor-pointer text-sm" htmlFor={itemId}>
                      <span>{item.label}</span>
                      <span className="ml-1 text-gray">({item.count})</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </Disclosure.Panel>
          <div
            aria-hidden="true"
            className="hidden w-full border-t border-black pt-4 text-lg focus:outline-none md:block"
          >
            {t(attribute, locale)}
          </div>
          <div aria-hidden="true" className="hidden py-4 md:block">
            <ul role="list" className="text-gray-dark">
              {items.map((item, index) => {
                const itemId = `${item.label}-${index}`;
                return (
                  <li className="flex items-center gap-2 py-1" key={item.label}>
                    <input
                      id={itemId}
                      name={item.label}
                      type="checkbox"
                      checked={item.isRefined}
                      className="checkbox-custom"
                      onChange={(e) => refine(item.value)}
                    />
                    <CheckboxCustom layout="small" />
                    <label className="cursor-pointer text-xs" htmlFor={itemId}>
                      <span>{item.label}</span>
                      <span className="ml-1 text-gray">({item.count})</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default connectRefinementList(AttributeFilter);
