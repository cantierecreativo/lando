import { connectStateResults } from "react-instantsearch-dom";
import translate from "lib/locales";

const Hits = ({
  items,
  searchState,
  searchResults,
  locale,
  isSearchStalled,
  component: Component,
}) => {
  if (isSearchStalled) {
    return <></>;
  }

  if (!searchResults) {
    return <></>;
  }
  const hitsIds = searchResults.hits.map((e) => e.objectID);
  const filteredItems = items.filter((e) => hitsIds.includes(e.id));
  return (
    <>
      {filteredItems.length === 0 ? (
        <div className="border-t-2 border-black p-8 text-center text-lg md:border-t-0 xl:text-xl">
          {translate("zero-results", locale)}
        </div>
      ) : (
        <>
          <div className="grid gap-6 md:grid-cols-2 lg:col-span-2 xl:col-span-3 xl:grid-cols-3">
            {filteredItems.map((item, n) => {
              const searchResult = searchResults.hits.find(
                (e) => e.objectID === item.id
              );
              return (
                <Component
                  locale={locale}
                  key={item.id}
                  hit={searchResult}
                  n={n}
                  {...item}
                  item={item}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default connectStateResults(Hits);
