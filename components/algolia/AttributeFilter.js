import t from "lib/locales";
import CheckboxCustom from "components/layout/CheckboxCustom";

import { connectRefinementList } from "react-instantsearch-dom";
import { Disclosure } from "@headlessui/react";
import Icon from "components/layout/Icon";

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
          <Disclosure.Button className="flex w-full justify-between items-center border-dashed border-t border-white py-3 focus:outline-none lg:hidden uppercase">
            <span>{t(attribute, locale)}</span>
            <div
              className={`${
                open ? "bg-yellow/20" : "bg-white/10"
              } w-6 h-6 relative rounded-full`}
            >
              <Icon
                className={`${
                  open ? "rotate-180 fill-yellow" : "fill-white"
                } centered`}
                size="20"
                name="down"
              />
            </div>
          </Disclosure.Button>
          <Disclosure.Panel className="pb-4 lg:hidden">
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
                    <label
                      className="cursor-pointer text-white/80 text-sm"
                      htmlFor={itemId}
                    >
                      <span>{item.label}</span>
                      <span className="ml-1">({item.count})</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </Disclosure.Panel>
          <div
            aria-hidden="true"
            className="hidden w-full border-t border-black pt-4 text-lg focus:outline-none lg:block"
          >
            {t(attribute, locale)}
          </div>
          <div aria-hidden="true" className="hidden py-4 lg:block">
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
