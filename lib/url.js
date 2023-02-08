import qs from "qs";

export const createUrl = (state, pathname) =>
  `${pathname}?${qs.stringify(state)}`;

export const queryParams = (url) => {
  const [path, query] = url.split("?");

  return query;
};

export const searchStateToUrl = (searchState, pathname) =>
  searchState ? createUrl(searchState, pathname) : "";

export const urlToSearchState = (query) => qs.parse(query);
