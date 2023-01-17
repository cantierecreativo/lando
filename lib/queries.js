const imgFrag = `
  fragment imgFrag on ResponsiveImage {
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
`;

const previewPageImage = `
  responsiveImage(sizes: "210px", imgixParams: {auto: [format, compress], h: 280, w: 210, fit: crop}){
    ...imgFrag
  }
`;

const bannerImage = `
  responsiveImage(sizes: "100vw", imgixParams: {auto: [format, compress], fit: crop, ar: "5:2"}){
    ...imgFrag
  }
`;

const squareImage = `
  responsiveImage(sizes: "(min-width:1024px) 40vw, 100vw", imgixParams: {auto: [format, compress], fit: crop, ar: "1:1"}){
    ...imgFrag
  }
`;

const CarouselImage = `
  responsiveImage(sizes: "(min-width:1024px) 70vw, 100vw", imgixParams: {auto: [format, compress], fit: crop, ar: "7:5"}){
    ...imgFrag
  }
`;

const standardImage = `
  responsiveImage(sizes: "100vw", imgixParams: {auto: [format, compress], h: 700, fit: max}){
    ...imgFrag
  }
`;

const coverImage = `
  responsiveImage(sizes: "100vw", imgixParams: {auto: [format, compress], h: 800, w: 1920, fit: crop}){
    ...imgFrag
  }
`;

const logoImage = `
responsiveImage(sizes: "125px", imgixParams: {auto: [format, compress], h: 125, w: 125, fit: max}){
    ...imgFrag
  }
`;

const logoCarouselImage = `
responsiveImage(sizes: "125px", imgixParams: {auto: [format, compress], h: 125, w: 200, fit: max}){
    ...imgFrag
  }
`;

const allLinks = `
... on PageRecord {
  id
  slug
  title
}
... on ArtworkRecord {
  id
  title
  _modelApiKey
  slug
}
... on ArtworksIndexRecord {
  id
  title
  _modelApiKey
}
... on CategoryNewsRecord {
  id
  title
  _modelApiKey
  slug
}
... on ContactPageRecord {
  id
  title
  _modelApiKey
}
... on HistoryPageRecord {
  id
  title
  _modelApiKey
}
... on ItinerariesIndexRecord {
  id
  title
  _modelApiKey
}
... on ItineraryRecord {
  id
  title
  _modelApiKey
  slug
}
... on MuseumsPageRecord {
  id
  title
  _modelApiKey
}
... on NewsIndexRecord {
  id
  title
  _modelApiKey
}
... on NewsRecord {
  id
  title
  _modelApiKey
  slug
}
... on PageRecord {
  id
  title
  _modelApiKey
  slug
}
... on RoomRecord {
  id
  title
  _modelApiKey
  slug
}
... on RoomsIndexRecord {
  id
  title
  _modelApiKey
}
... on ThematicRouteRecord {
  id
  title
  _modelApiKey
  slug
}
... on ThematicRoutesIndexRecord {
  id
  title
  _modelApiKey
}
... on TicketsPageRecord {
  id
  title
  _modelApiKey
}
... on VideoRecord {
  id
  title
  _modelApiKey
  slug
}
... on VideosIndexRecord {
  id
  title
  _modelApiKey
}
`;

const VideoBlock = `
  model: _modelApiKey
  externalVideo {
    url
    height
    width
    title
    provider
    providerUid
    thumbnailUrl
  }
  internalVideo {
    height
    width
    title
    url
    video {
      mp4Url
      thumbnailUrl
      streamingUrl
    }
  }
  poster {
    responsiveImage(sizes: "(min-width: 768px) 80vw, 100vw, 800px", imgixParams: {auto: [format, compress], fit: crop, ar: "16:9"}){
      ...imgFrag
    }
  }
`;

const seoBlock = `
tag
attributes
content
`;

const internalLink = `
  id
  title
  model: _modelApiKey
  cta
  link {
    ${allLinks}
  }
`;

const externalLink = `
  id
  model: _modelApiKey
  cta
  link
  title
`;

const textBlock = `
  id
  model: _modelApiKey
  text
`;

const imageBlock = `
  id
  model: _modelApiKey
  image {
    responsiveImage(sizes: "(min-width: 768px) 50vw, 100vw, 450px", imgixParams: {auto: [format, compress], fit: crop, ar: "16:9"}){
      ...imgFrag
    }
  }
`;

const forAllPages = `
  model: _modelApiKey
  id
  title
  seo: _seoMetaTags {
    ${seoBlock}
  }
`;

export const site = `
query site($locale: SiteLocale!) {
  site: _site(locale: $locale) {
    favicon: faviconMetaTags {
      tag
      content
      attributes
    }
  }
  allPages (locale: $locale, filter: {slug: {neq: null}}) {
    model: _modelApiKey
    id
    slug
  }
  allCategoryNews (locale: $locale, filter: {slug: {neq: null}}) {
    model: _modelApiKey
    title
    id
    slug
  }
  newsIndex (locale: $locale) {
    model: _modelApiKey
    id
  }
  contactPage (locale: $locale) {
    model: _modelApiKey
    id
  }
  ticketsPage (locale: $locale) {
    model: _modelApiKey
    id
  }
}
`;

export const getHomepage = `
query homepage($locale: SiteLocale!) {
  homepage(locale: $locale) {
    ${forAllPages}
  }
}
`;

export const getContactPage = `
query contactPage($locale: SiteLocale!) {
  contactPage(locale: $locale) {
    ${forAllPages}
  }
}
`;

export const getNewsIndex = `
query newsIndex($locale: SiteLocale!) {
  newsIndex(locale: $locale) {
    ${forAllPages}
  }
}
`;

export const getAllCategoryNews = `
query allCategoryNews ($locale: SiteLocale!){
  allCategoryNews (locale: $locale, filter: {slug: {neq: null}}) {
    slug
    id
    title
    model: _modelApiKey
  }
}
`;

export const getCategoryNews = `
query categoryNews($slug: String!, $locale: SiteLocale!){
  categoryNews(filter: {slug: {eq: $slug}}, locale: $locale) {
    ${forAllPages}
    alts: _allSlugLocales {
      locale
      value
    }
  }
}
`;

export const getAllSlugsPages = `
query allPages ($locale: SiteLocale!){
  allPages (locale: $locale, filter: {slug: {neq: null}}) {
    slug
  }
}
`;

export const getPage = `
query page($slug: String!, $locale: SiteLocale!){
  page(filter: {slug: {eq: $slug}}, locale: $locale) {
    ${forAllPages}
    alts: _allSlugLocales {
      locale
      value
    }
  }
}
`;

export const getAllSlugsNews = `
query allNews ($locale: SiteLocale!){
  allNews (locale: $locale, filter: {slug: {neq: null}}) {
    slug
  }
}
`;

export const getNews = `
query news($slug: String!, $locale: SiteLocale!){
  news(filter: {slug: {eq: $slug}}, locale: $locale) {
    ${forAllPages}
    category {
      title
      id
    }
    alts: _allSlugLocales {
      locale
      value
    }
  }
}
`;

export const getNewsByCategory = `
query allNews($id: ItemId!, $locale: SiteLocale!){
  allNews(filter: {category: {eq: $id}, slug: {neq: null}}, locale: $locale) {
    ${forAllPages}
    slug
  }
}
`;
