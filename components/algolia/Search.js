import { connectSearchBox } from "react-instantsearch-dom";
import { useDebouncedCallback } from "use-debounce";
import translate from "lib/locales";

const SearchBar = ({ refine, locale }) => {
  const debounced = useDebouncedCallback((value) => refine(value), 1000);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        {/* <SearchIcon className="relative h-5 w-5 text-black" /> */}
      </div>
      <label className="sr-only" htmlFor="search">
        {translate("search", locale)}
      </label>
      <input
        id="search"
        type="search"
        className="block w-full bg-gray-light py-3 pl-10 focus:border-red focus:ring-red sm:text-sm"
        onChange={(e) => debounced(e.currentTarget.value)}
      />
    </div>
  );
};

export default connectSearchBox(SearchBar);
