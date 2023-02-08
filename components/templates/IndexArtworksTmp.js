import Hero from "components/headers/Hero";
import ArtworkCard from "components/cards/ArtworkCard";
import React from "react";
import fetchDato from "lib/dato";
import { gql } from "graphql-request";
import { queryParams, searchStateToUrl, urlToSearchState } from "lib/url";
import { request } from "lib/dato";
import * as queries from "lib/queries";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { InstantSearch } from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";

import AttributeFilter from "components/algolia/AttributeFilter";
import CardSearch from "components/cards/CardSearch";
import Search from "components/algolia/Search";
import Pagination from "components/algolia/Pagination";
import Hits from "components/algolia/Hits";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
);
const facetingAttributes = ["typology", "room"];

export default function IndexArtworksTmp({ locale, page, items }) {
  const { allArtworks } = items;
  const router = useRouter();
  const { asPath, pathname } = router;
  const [searchState, setSearchState] = useState({});

  const onSearchStateChange = (updatedSearchState) => {
    router.push(searchStateToUrl(updatedSearchState, pathname));
  };

  const clearSearchState = () => router.push(pathname);

  useEffect(() => {
    const query = queryParams(asPath);
    const params = urlToSearchState(query);
    setSearchState(urlToSearchState(params));
  }, [asPath]);

  return (
    <>
      <Hero locale={locale} page={page} />
      <div className="bg-black text-white">
        <div className="container">
          {searchClient && (
            <InstantSearch
              searchClient={searchClient}
              searchState={searchState}
              onSearchStateChange={onSearchStateChange}
              indexName={`artworks_${locale}`}
            >
              <div className="grid gap-10 md:grid-cols-3 md:gap-0 xl:grid-cols-4">
                <aside className="border-black px-6 md:border-r-[2px] md:pt-8 lg:pt-12 xl:pt-16 xl:pl-16 xl:pr-12">
                  <div className="flex w-full justify-between">
                    <Search locale={locale} />
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md border border-transparent bg-blue px-3 py-2 text-sm font-medium leading-4 text-white hover:bg-red hover:text-white focus:outline-none"
                      onClick={() => clearSearchState()}
                    >
                      {/* <RefreshIcon className="h-5 w-5" /> */}
                      <span className="sr-only">Reload</span>
                    </button>
                  </div>
                  <div className="mt-8 border-b border-black">
                    {facetingAttributes.map((attribute) => (
                      <AttributeFilter
                        key={attribute}
                        locale={locale}
                        attribute={attribute}
                      />
                    ))}
                  </div>
                </aside>
                <section className="md:col-span-2 xl:col-span-3 xl:pr-16">
                  {/* <ScrollTo> */}
                  <Hits
                    locale={locale}
                    items={allArtworks}
                    component={CardSearch}
                  />
                  {/* </ScrollTo> */}
                  <div className="relative border-y-[2px] border-black py-8 md:border-0 md:after:absolute md:after:left-0 md:after:top-0 md:after:h-[2px] md:after:w-[100vw] md:after:bg-black">
                    <div className="container">
                      <Pagination defaultRefinement={1} />
                    </div>
                  </div>
                </section>
              </div>
            </InstantSearch>
          )}
          {/* <div className="grid-gap">
            <div className="grid gap-5 py-12 md:py-20 xl:pb-32 md:grid-cols-2 lg:grid-cols-3">
              {items.map((i) => (
                <ArtworkCard locale={locale} record={i} />
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
