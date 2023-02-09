import { connectSearchBox } from "react-instantsearch-dom";
import { useDebouncedCallback } from "use-debounce";
import translate from "lib/locales";
import Icon from "components/layout/Icon";

const SearchBar = ({ refine, locale }) => {
  const debounced = useDebouncedCallback((value) => refine(value), 1000);

  return (
    <div className="relative rounded-md overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <Icon size={25} className="" name="search" />
      </div>
      <label className="sr-only" htmlFor="search">
        {translate("search", locale)}
      </label>
      <input
        id="search"
        type="search"
        className="block w-full bg-white/10 py-3 px-2 pl-10 focus:border-red focus:ring-red sm:text-sm"
        onChange={(e) => debounced(e.currentTarget.value)}
      />
    </div>
  );
};

export default connectSearchBox(SearchBar);
