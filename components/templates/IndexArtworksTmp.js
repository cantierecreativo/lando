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
import Icon from "components/layout/Icon";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
);
const facetingAttributes = ["typology", "room"];

export default function IndexArtworksTmp({ locale, page, items }) {
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
              <div className="pt-6 grid gap-6 lg:grid-cols-3 xl:grid-cols-4 lg:py-12">
                <aside className="mt-4 lg:mt-0">
                  <div className="flex w-full justify-between mb-6 lg:gap-2">
                    <Search locale={locale} />
                    <button
                      type="button"
                      className="bg-white/10 inline-flex items-center rounded-md border border-transparent bg-blue px-3 py-2 text-sm font-medium leading-4 text-white hover:bg-red hover:text-white focus:outline-none"
                      onClick={() => clearSearchState()}
                    >
                      <Icon name="reload" size="20" />
                      <span className="sr-only">Reload</span>
                    </button>
                  </div>

                  <div className="border-b border-white border-dashed lg:border-none">
                    {facetingAttributes.map((attribute) => (
                      <AttributeFilter
                        key={attribute}
                        locale={locale}
                        attribute={attribute}
                      />
                    ))}
                  </div>
                </aside>
                <Hits locale={locale} items={items} component={CardSearch} />
              </div>

              <Pagination defaultRefinement={1} />
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

export async function getStaticProps({ locale = "it", preview }) {
  const data = await request({
    query: gql`
      query allArtworks($locale: SiteLocale!) {
        allArtworks(
          first: "100"
          locale: $locale
          filter: { _locales: { allIn: [$locale] } }
        ) {
          model: _modelApiKey
          id
          slug
          title
          textHero
          author
          year
          typology {
            id
            title
          }
          room {
            id
            slug
            title
          }
          carouselHero {
            id
            description
            image {
              responsiveImage(
                sizes: "240px"
                imgixParams: { auto: [format, compress], w: 240, fit: max }
              ) {
                fragment
                imgFrag
                on
                ResponsiveImage {
                  aspectRatio
                  base64
                  height
                  sizes
                  src
                  srcSet
                  webpSrcSet
                  width
                  alt
                  title
                }
              }
            }
          }
        }
      }
    `,
    variables: { locale },
    preview,
  });
  const response = await fetchDato(
    queries.getArtworksIndex,
    { locale },
    preview
  );
  const site = await fetchDato(queries.site, { locale });
  return {
    props: {
      locale,
      data,
      site,
      page: response.artworksIndex,
    },
  };
}
