import t from "lib/locales";
import DOMPurify from "isomorphic-dompurify";
import parse from "html-react-parser";
import * as dayjs from "dayjs";
import "dayjs/locale/it";

export function getStaticGrandParent(page) {
  switch (page.model) {
    case "thematic_route":
      return "museum";
    case "itinerary":
      return "siena";
  }
}

export function getStaticParent(page) {
  switch (page.model) {
    case "news":
    case "news_category":
      return "news_index";
    case "history_page":
    case "thematic_routes_index":
    case "thematic_route":
      return "museum";
    case "room":
      return "rooms_index";
    case "artwork":
      return "artworks_index";
    case "museums_page":
    case "itineraries_index":
      return "siena";
    case "itinerary":
      return "itineraries_index";
    case "video":
      return "videos_index";
  }
}

export function getStaticSlug(model, locale) {
  const name = `slug_${model}`;
  return t(name, locale);
}

export function resolveLink(page, locale, slug = null) {
  let pageSlug = "";
  let staticGrandParentPath = "";
  let staticParentPath = "";
  let prefixPath = "";
  let staticParent = getStaticParent(page);
  let staticGrandParent = getStaticGrandParent(page);
  let language = locale === "it" ? "/" : "/" + locale + "/";
  const model = page.model;

  if (staticGrandParent) {
    staticGrandParentPath = `${getStaticSlug(staticGrandParent, locale)}/`;
  }

  if (staticParent) {
    staticParentPath = `${getStaticSlug(staticParent, locale)}/`;
  }

  if (model?.includes("category")) {
    prefixPath = "c/";
  }

  if (page.model !== "homepage") {
    pageSlug = slug
      ? slug
      : page.slug
      ? page.slug
      : getStaticSlug(page.model, locale);
  }

  return `/${language}${staticGrandParentPath}${staticParentPath}${pageSlug}`.replace(
    "//",
    "/"
  );
}

export function renderHTML(dirt) {
  const clean = DOMPurify.sanitize(dirt, {
    USE_PROFILES: { html: true },
    ADD_ATTR: ["target"],
  });
  return parse(clean);
}

export function showCategories(category) {
  let categoryTitle;
  if (category) {
    if (Array.isArray(category)) {
      categoryTitle = category
        .map((cat) => {
          return cat.title;
        })
        .join(", ");
    } else {
      categoryTitle = category.title;
    }
  }
  return categoryTitle;
}

export function formatDate(str, locale) {
  const fmt = "DD MMMM YYYY";
  return dayjs(str).locale(locale).format(fmt);
}

// Show common array from 2 objects by ID
export function getCommon(array1, array2) {
  return array1.filter((object1) => {
    return array2.some((object2) => {
      return object1.id === object2.id;
    });
  });
}
