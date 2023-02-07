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

const videoImage = `
  responsiveImage(sizes: "100vw, 800px", imgixParams: {auto: [format, compress], fit: crop, ar: "16:9"}){
      ...imgFrag
    }
`;

const flagImage = `
  responsiveImage(sizes: "460px", imgixParams: {auto: [format, compress], w: 460, fit: crop}){
    ...imgFrag
  }
`;

const flagImageHp = `
  responsiveImage(sizes: "(min-width: 768px) 50vw, 100vw, 650px", imgixParams: {auto: [format, compress], fit: crop, ar: "4:3"}){
    ...imgFrag
  }
`;

const milestonImage = `
  responsiveImage(sizes: "(min-width: 768px) 50vw, 100vw, 500px", imgixParams: {auto: [format, compress], fit: crop, ar: "5:3"}){
    ...imgFrag
  }
`;

const squareImage = `
  responsiveImage(sizes: "(min-width:1024px) 40vw, 100vw", imgixParams: {auto: [format, compress], fit: crop, ar: "1:1"}){
    ...imgFrag
  }
`;

const CardImage = `
  responsiveImage(sizes: "(min-width:768px) 45vw, (min-width:1024px) 30vw, 90vw", imgixParams: {auto: [format, compress], fit: crop, ar: "7:6"}){
    ...imgFrag
  }
`;

const bgVerticalImage = `
  responsiveImage(sizes: "100vw", imgixParams: {auto: [format, compress], fit: crop, ar: "1:2"}){
    ...imgFrag
  }
`;

const standardImage = `
  responsiveImage(sizes: "100vw", imgixParams: {auto: [format, compress], h: 700, fit: max}){
    ...imgFrag
  }
`;

const heroImage = `
  responsiveImage(sizes: "100vw", imgixParams: {auto: [format, compress], fit: crop, ar: "7:3"}){
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

const thumbImage = `
responsiveImage(sizes: "125px", imgixParams: {auto: [format, compress], h: 150, w: 150, fit: max}){
    ...imgFrag
  }
`;

const carouselArtImage = `
responsiveImage(sizes: "240px", imgixParams: {auto: [format, compress], w: 240, fit: max}){
    ...imgFrag
  }
`;

const logoCarouselImage = `
responsiveImage(sizes: "125px", imgixParams: {auto: [format, compress], h: 125, w: 200, fit: max}){
    ...imgFrag
  }
`;

const menuLinks = `
... on ArtworksIndexRecord {
  id
  title
  model:_modelApiKey
}
... on ContactPageRecord {
  id
  title
  model:_modelApiKey
}
... on HistoryPageRecord {
  id
  title
  model:_modelApiKey
}
... on ItinerariesIndexRecord {
  id
  title
  model:_modelApiKey
}
... on MuseumsPageRecord {
  id
  title
  model:_modelApiKey
}
... on NewsIndexRecord {
  id
  title
  model:_modelApiKey
}
... on PageRecord {
  id
  title
  model:_modelApiKey
  slug
}
... on RoomRecord {
  id
  title
  model:_modelApiKey
  slug
}
... on RoomsIndexRecord {
  id
  title
  model:_modelApiKey
}
... on ThematicRoutesIndexRecord {
  id
  title
  model:_modelApiKey
}
... on TicketsPageRecord {
  id
  title
  model:_modelApiKey
}
... on VideosIndexRecord {
  id
  title
  model:_modelApiKey
}
`;

const allLinks = `
${menuLinks}
... on ArtworkRecord {
  id
  title
  model:_modelApiKey
  slug
}
... on CategoryNewsRecord {
  id
  title
  model:_modelApiKey
  slug
}
... on ItineraryRecord {
  id
  title
  model:_modelApiKey
  slug
}
... on NewsRecord {
  id
  title
  model:_modelApiKey
  slug
}
... on ThematicRouteRecord {
  id
  title
  model:_modelApiKey
  slug
}
... on VideoRecord {
  id
  title
  model:_modelApiKey
  slug
}
`;

const menuItem = `
linkMenu {
  ${menuLinks}
  ... on HomepageRecord {
    id
    title
    model:_modelApiKey
  }
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
    ${videoImage}
  }
`;

const seoBlock = `
tag
attributes
content
`;

const internalLink = `
  id
  label
  model: _modelApiKey
  link {
    ${allLinks}
  }
`;

const externalLink = `
  id
  model: _modelApiKey
  url
  label
  title
`;

const dynamicLinks = `
  ... on ExternalLinkRecord {
    ${externalLink}
  }
  ... on InternalLinkRecord {
    ${internalLink}
}
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

const previewRoom = `
  model: _modelApiKey
  id
  slug
  title
  textHero
  imageHero {
    ${CardImage}
  }
`;

const previewStandard = `
  model: _modelApiKey
  id
  slug
  title
  textHero
  imageHero {
    ${CardImage}
  }
`;

const previewVideo = `
  model: _modelApiKey
  id
  slug
  title
  textHero
`;

const previewNews = `
  model: _modelApiKey
  id
  slug
  category {
    id
    title
    slug
    model: _modelApiKey
  }
  abstract
  info
  title
  image {
    ${flagImageHp}
  }
`;

const previewArtworks = `
  model: _modelApiKey
  id
  slug
  title
  textHero
  author
  year
  carouselHero {
    id
    description
    image {
      ${carouselArtImage}
    }
  }
`;

const BannerBlock = `
  model: _modelApiKey
  id
  title
  text
  link {
    ${dynamicLinks}
  }
  imageBg {
    ${coverImage}
  }
`;

const ArtworksBlock = `
  id
  model:_modelApiKey
`;

const AttachmentsBlock = `
  id
  model:_modelApiKey
  title
  attachments {
    id
    model:_modelApiKey
    title
    label
    file {
      url
    }
  }
`;

const CardBlock = `
  id
  model:_modelApiKey
  links {
    ... on ArtworkRecord {
      ${previewArtworks}
    }
    ... on ItineraryRecord {
      ${previewStandard}
    }
    ... on RoomRecord {
      ${previewRoom}
    }
    ... on ThematicRouteRecord {
      ${previewStandard}
    }
    ... on VideoRecord {
      ${previewVideo}
    }
  }
`;

const FaqBlock = `
  id
  model:_modelApiKey
  title
  subtitle
  faqBlocks{
    question
    reply
  }
`;

const FlagButtonBlock = `
  id
  model:_modelApiKey
  title
  text
  image {
    ${flagImageHp}
  }
  description
  alignRev
  button {
    ${dynamicLinks}
  }
`;

const GalleryBlock = `
  id
  model:_modelApiKey
  images {
    image {
      ${coverImage}
    }
    description
    id
  }
`;

const LogosBlock = `
  id
  model:_modelApiKey
  title
  images {
    ${logoCarouselImage}
  }
`;

const MilestonBlock = `
  id
  model:_modelApiKey
  title
  text
  blocks {
    id
    year
    title
    text
    image {
      ${milestonImage}
    }
  }
`;

const PropertiesBlock = `
  id
  model:_modelApiKey
  title
  subtitle
  style
  blocks {
    id
    title
    text
  }
`;

const editorialTemplate = `
imageHero {
  ${heroImage}
}
descriptionImageHero
textHero
blocks {
  id
  model:_modelApiKey
  label
  title
  subtitle
  content {
    blocks {
      ... on ArtworksBlockRecord {
        ${ArtworksBlock}
      }
      ... on AttachmentsBlockRecord {
        ${AttachmentsBlock}
      }
      ... on BannerBlockRecord {
        ${BannerBlock}
      }
      ... on CardBlockRecord {
        ${CardBlock}
      }
      ... on FaqBlockRecord {
        ${FaqBlock}
      }
      ... on FlagButtonBlockRecord {
        ${FlagButtonBlock}
      }
      ... on GalleryBlockRecord {
        ${GalleryBlock}
      }
      ... on LogosBlockRecord {
        ${LogosBlock}
      }
      ... on MilestonBlockRecord {
        ${MilestonBlock}
      }
      ... on PropertiesBlockRecord {
        ${PropertiesBlock}
      }
    }
    value
    links
  }
}
`;

const newsTemplate = `
image {
  ${heroImage}
}
info
abstract
blocks {
  id
  model:_modelApiKey
  label
  content {
    blocks {
      ... on AttachmentsBlockRecord {
        ${AttachmentsBlock}
      }
      ... on BannerBlockRecord {
        ${BannerBlock}
      }
      ... on CardBlockRecord {
        ${CardBlock}
      }
      ... on GalleryBlockRecord {
        ${GalleryBlock}
      }
      ... on ImageBlockRecord {
        ${imageBlock}
      }
    }
    value
    links
  }
}
`;

const indexTemplate = `
imageHero {
  ${heroImage}
}
descriptionImageHero
textHero
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
  allArtworks (locale: $locale, filter: {slug: {neq: null}}) {
    ${previewArtworks}
  }
  artworksIndex (locale: $locale) {
    model: _modelApiKey
    id
  }
  thematicRoutesIndex (locale: $locale) {
    model: _modelApiKey
    title
    id
  }
  newsIndex (locale: $locale) {
    model: _modelApiKey
    id
    title
  }
  contactPage (locale: $locale) {
    model: _modelApiKey
    id
  }
  roomsIndex (locale: $locale) {
    model: _modelApiKey
    id
    title
  }
  ticketsPage (locale: $locale) {
    model: _modelApiKey
    id
  }
  historyPage (locale: $locale) {
    model: _modelApiKey
    id
    title
  }
  museumPage: allPages(locale: $locale, filter: {id: {eq: "93446145"}}) {
    model: _modelApiKey
    id
    title
    slug
  }
  siena: allPages(locale: $locale, filter: {id: {eq: "93446323"}}) {
    model: _modelApiKey
    id
    title
    slug
  }
  menu (locale: $locale) {
    id
    groupsMenu {
      labelMenu
      ${menuItem}
      itemsMenu {
        labelMenu
        ${menuItem}
      }
    }
  }
  organization {
    contactsMenuLabel
    emailAddress
    hour
    instagramUrl
    facebookUrl
    twitterUrl
    linkTicket
    phoneNumber
    streetAddress
    ticketsInfo
    linkInfo
  }
}
${imgFrag}
`;

export const getHomepage = `
query homepage($locale: SiteLocale!) {
  homepage(locale: $locale) {
    ${forAllPages}
    imageHero {
      ${coverImage}
    }
    imageBgIntro {
      ${bgVerticalImage}
    }
    titleHero
    textHero
    titleIntro
    subtitleIntro
    imageHistory {
      ${flagImage}
    }
    descriptionImageHistory
    titleHistory
    textHistory
    titleRoom
    titleBuilding
    subtitleBuilding
    imageBlockBuilding {
      ${flagImageHp}
    }
    prefixBlockBuilding
    titleBlockBuilding
    textBlockBuilding
    imageBlockSiena {
      ${flagImageHp}
    }
    prefixBlockSiena
    titleBlockSiena
    textBlockSiena
    blocks {
      ... on BannerBlockRecord {
        ${BannerBlock}
      }
      ... on ArtworksBlockRecord {
        id
        model: _modelApiKey
      }
    }
  }
  allRooms(locale: $locale, filter: {slug: {neq: null}}) {
    ${previewRoom}
  }
  allArtworks(locale: $locale, filter: {slug: {neq: null}}) {
    ${previewArtworks}
  }
  allNews(filter: {slug: {neq: null}}, first: "1", locale: $locale) {
    ${previewNews}
  }
}
${imgFrag}
`;

export const getContactPage = `
query contactPage($locale: SiteLocale!) {
  contactPage(locale: $locale) {
    ${forAllPages}
  }
}
`;

export const getThematicRoutesIndex = `
query thematicRoutesIndex($locale: SiteLocale!) {
  page: thematicRoutesIndex(locale: $locale) {
    ${forAllPages}
    ${indexTemplate}
    pagesRelated {
      ${allLinks}
    }
  }
  items: allThematicRoutes(locale: $locale, filter: {slug: {neq: null}}) {
    ${previewStandard}
  }
}
${imgFrag}
`;

export const getRoomsIndex = `
query roomsIndex($locale: SiteLocale!) {
  page: roomsIndex(locale: $locale) {
    ${forAllPages}
    ${indexTemplate}
    pagesRelated {
      ${allLinks}
    }
  }
  items: allRooms(locale: $locale, filter: {slug: {neq: null}}) {
    ${previewStandard}
  }
}
${imgFrag}
`;

export const getItinerariesIndex = `
query itinerariesIndex($locale: SiteLocale!) {
  page: itinerariesIndex(locale: $locale) {
    ${forAllPages}
    ${indexTemplate}
    pagesRelated {
      ${allLinks}
    }
  }
  items: allItineraries(locale: $locale, filter: {slug: {neq: null}}) {
    ${previewStandard}
  }
}
${imgFrag}
`;

export const getVideosIndex = `
query videosIndex($locale: SiteLocale!) {
  page: videosIndex(locale: $locale) {
    ${forAllPages}
    ${indexTemplate}
    pagesRelated {
      ${allLinks}
    }
  }
  items: allVideos(locale: $locale, filter: {slug: {neq: null}}) {
    ${previewStandard}
  }
}
${imgFrag}
`;

export const getNewsIndex = `
query newsIndex($locale: SiteLocale!) {
  page: newsIndex(locale: $locale) {
    ${forAllPages}
    textHero
    pagesRelated {
      ${allLinks}
    }
  }
  items: allNews(locale: $locale, filter: {slug: {neq: null}}) {
    ${previewNews}
  }
}
${imgFrag}
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
    textHero
    pagesRelated {
      ${allLinks}
    }
    slug
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

export const getAllSlugsRooms = `
query allRooms ($locale: SiteLocale!){
  allRooms (locale: $locale, filter: {slug: {neq: null}}) {
    slug
  }
}
`;

export const getAllSlugsThematicRoutes = `
query allThematicRoutes ($locale: SiteLocale!){
  allThematicRoutes (locale: $locale, filter: {slug: {neq: null}}) {
    slug
  }
}
`;

export const getAllSlugsItineraries = `
query allItineraries ($locale: SiteLocale!){
  allItineraries (locale: $locale, filter: {slug: {neq: null}}) {
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
    ${editorialTemplate}
    pagesRelated {
      ${allLinks}
    }
  }
}
${imgFrag}
`;

export const getThematicRoute = `
query thematicRoute($slug: String!, $locale: SiteLocale!){
  thematicRoute(filter: {slug: {eq: $slug}}, locale: $locale) {
    ${forAllPages}
    alts: _allSlugLocales {
      locale
      value
    }
    steps {
      model: _modelApiKey
      id
      title
      text
      image {
        ${standardImage}
      }
      thumbImage:image {
        ${thumbImage}
      }
      descriptionImage
    }
    content {
      blocks {
        ${PropertiesBlock}
      }
      value
      links
    }
    pagesRelated {
      id
      title
      model:_modelApiKey
      slug
    }
  }
}
${imgFrag}
`;

export const getItinerary = `
query itinerary($slug: String!, $locale: SiteLocale!){
  itinerary(filter: {slug: {eq: $slug}}, locale: $locale) {
    ${forAllPages}
    alts: _allSlugLocales {
      locale
      value
    }
    steps {
      model: _modelApiKey
      id
      title
      text
      image {
        ${standardImage}
      }
      thumbImage:image {
        ${thumbImage}
      }
      descriptionImage
    }
    content {
      blocks {
        ${PropertiesBlock}
      }
      value
      links
    }
    pagesRelated {
      id
      title
      model:_modelApiKey
      slug
    }
  }
}
${imgFrag}
`;

export const getRoom = `
query room($slug: String!, $locale: SiteLocale!){
  room(filter: {slug: {eq: $slug}}, locale: $locale) {
    ${forAllPages}
    alts: _allSlugLocales {
      locale
      value
    }
    ${editorialTemplate}
    pagesRelated {
      id
      model:_modelApiKey
      title
      slug
    }
  }
}
${imgFrag}
`;

export const getHistoryPage = `
query historyPage($locale: SiteLocale!){
  historyPage(locale: $locale) {
    ${forAllPages}
    ${editorialTemplate}
    pagesRelated {
      ${allLinks}
    }
  }
}
${imgFrag}
`;

export const getMuseumsPage = `
query museumsPage($locale: SiteLocale!){
  museumsPage(locale: $locale) {
    ${forAllPages}
    ${editorialTemplate}
    pagesRelated {
      ${allLinks}
    }
  }
}
${imgFrag}
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
      slug
      model: _modelApiKey
    }
    alts: _allSlugLocales {
      locale
      value
    }
    ${newsTemplate}
  }
}
${imgFrag}
`;

export const getNewsByCategory = `
query allNews($id: ItemId!, $locale: SiteLocale!){
  allNews(filter: {category: {eq: $id}, slug: {neq: null}}, locale: $locale) {
    ${previewNews}
  }
}
${imgFrag}
`;
