/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query Layout {\n    site: _site(locale: it) {\n      faviconMetaTags {\n        tag\n        attributes\n        content\n      }\n      locales\n      globalSeo {\n        siteName\n      }\n    }\n    visual: visualStyle {\n      logo {\n        url\n      }\n      uppercaseTitles\n      colorText {\n        red\n        green\n        blue\n      }\n      colorTextAlt {\n        red\n        green\n        blue\n      }\n      colorTextRev {\n        red\n        green\n        blue\n      }\n      colorBack {\n        red\n        green\n        blue\n      }\n      colorBackAlt {\n        red\n        green\n        blue\n      }\n      colorBackRev {\n        red\n        green\n        blue\n      }\n      colorAccent {\n        red\n        green\n        blue\n      }\n      colorAccentRev {\n        red\n        green\n        blue\n      }\n      colorButton {\n        red\n        green\n        blue\n      }\n      colorButtonBack {\n        red\n        green\n        blue\n      }\n      fontBody\n      fontHeading\n      fontBaseHeight\n      fontBaseSize\n      fontLgHeight\n      fontLgSize\n      fontSmHeight\n      fontXlHeight\n      fontSmSize\n      fontXlSize\n      fontXsHeight\n      fontXsSize\n      fontXxlHeight\n      fontXxlSize\n      fontXxxlHeight\n      fontXxxlSize\n    }\n  }\n": types.LayoutDocument,
    "\n  query Page {\n    visual: visualStyle {\n      logo {\n        url\n      }\n      logoRev {\n        url\n      }\n      uppercaseTitles\n      colorButton {\n        red\n        green\n        blue\n      }\n      colorButtonBack {\n        red\n        green\n        blue\n      }\n      colorText {\n        red\n        green\n        blue\n      }\n      colorBack {\n        red\n        green\n        blue\n      }\n    }\n    site: _site(locale: it) {\n      locales\n      globalSeo {\n        siteName\n      }\n    }\n    org: organization(locale: it) {\n      emailAddress\n      facebookUrl\n      instagramUrl\n      newsletterFormUrl\n      newsletterTitle\n      newsletterLabel\n      contactsMenuLabel\n      phoneNumber\n      streetAddress\n      facebookPixelId\n      googleAnalyticsId\n      googleTagManagerId\n      iubendaPolicyId\n      iubendaSiteId\n    }\n    page: landing(locale: it) {\n      seo: _seoMetaTags {\n        attributes\n        content\n        tag\n      }\n      _locales\n      headerBlocks {\n        ...Header_block\n      }\n      contentBlocks {\n        ... on CarouselBlockRecord {\n          id\n        }\n        ... on CoverBlockRecord {\n          id\n        }\n        ... on FlagBlockRecord {\n          id\n          menuLabel\n        }\n        ... on FocusBlockRecord {\n          id\n          menuLabel\n        }\n        ... on ProductBlockRecord {\n          id\n        }\n        ... on TextBlockRecord {\n          id\n          menuLabel\n        }\n        ... on QuoteBlockRecord {\n          id\n        }\n        ... on PartnersBlockRecord {\n          id\n          menuLabel\n        }\n      }\n      blocks: contentBlocks {\n        ... on BannerCtaBlockRecord {\n          ...Banner_block\n        }\n        ... on CarouselBlockRecord {\n          ...Carousel_block\n        }\n        ... on CoverBlockRecord {\n          ...Cover_block\n        }\n        ... on FlagBlockRecord {\n          ...Flag_block\n        }\n        ... on FocusBlockRecord {\n          ...Focus_block\n        }\n        ... on ProductBlockRecord {\n          ...Product_block\n        }\n        ... on TextBlockRecord {\n          ...Text_block\n        }\n        ... on QuoteBlockRecord {\n          ...Quote_block\n        }\n        ... on PartnersBlockRecord {\n          ...Partners_block\n        }\n      }\n    }\n  }\n": types.PageDocument,
    "\n  fragment DatoImage_responsiveImage on ResponsiveImage {\n    src\n    srcSet\n    base64\n    width\n    height\n    alt\n    title\n  }\n": types.DatoImage_ResponsiveImageFragmentDoc,
    "\n  fragment Banner_block on BannerCtaBlockRecord {\n    id\n    _modelApiKey\n    mainText: text\n    mainTitle: title\n    imageBg {\n      responsiveImage(\n        sizes: \"100vw\"\n        imgixParams: { fit: crop, w: 1550, h: 800, auto: [format, compress] }\n      ) {\n        ...DatoImage_responsiveImage\n      }\n    }\n    url: link\n    cta\n    menuLabel\n  }\n": types.Banner_BlockFragmentDoc,
    "\n  fragment Carousel_block on CarouselBlockRecord {\n    id\n    _modelApiKey\n    colorsRev\n    images {\n      id\n      responsiveImage(\n        sizes: \"(min-width: 1024px) 50vw, 100vw\"\n        imgixParams: { fit: clip, w: 1200, h: 600, auto: [format, compress] }\n      ) {\n        ...DatoImage_responsiveImage\n      }\n    }\n  }\n": types.Carousel_BlockFragmentDoc,
    "\n  fragment Cover_block on CoverBlockRecord {\n    id\n    _modelApiKey\n    colorsRev\n    images {\n      id\n      responsiveImage(\n        sizes: \"100vw\"\n        imgixParams: { fit: crop, w: 1550, h: 800, auto: [format, compress] }\n      ) {\n        ...DatoImage_responsiveImage\n      }\n    }\n  }\n": types.Cover_BlockFragmentDoc,
    "\n  fragment Flag_block on FlagBlockRecord {\n    _modelApiKey\n    menuLabel\n    label\n    text\n    title\n    alignRev\n    colorsRev\n    image {\n      responsiveImage(\n        sizes: \"(min-width: 1024px) 50vw, 100vw\"\n        imgixParams: { fit: max, w: 800, h: 800, auto: [format, compress] }\n      ) {\n        ...DatoImage_responsiveImage\n      }\n    }\n  }\n": types.Flag_BlockFragmentDoc,
    "\n  fragment Focus_block on FocusBlockRecord {\n    id\n    _modelApiKey\n    menuLabel\n    mainTitle: title\n    text\n    elements {\n      id\n      title\n      text\n      image {\n        responsiveImage(\n          sizes: \"(min-width: 1024px) 33vw, 100vw\"\n          imgixParams: { fit: crop, w: 800, h: 800, auto: [format, compress] }\n        ) {\n          ...DatoImage_responsiveImage\n        }\n      }\n    }\n  }\n": types.Focus_BlockFragmentDoc,
    "\n  fragment Partners_block on PartnersBlockRecord {\n    id\n    _modelApiKey\n    menuLabel\n    title\n    images {\n      format\n      url\n      title\n      alt\n      responsiveImage(\n        sizes: \"230px\"\n        imgixParams: { fit: clip, h: 100, auto: [format, compress] }\n      ) {\n        ...DatoImage_responsiveImage\n      }\n    }\n  }\n": types.Partners_BlockFragmentDoc,
    "\n  fragment Product_block on ProductBlockRecord {\n    id\n    _modelApiKey\n    label\n    title\n    text\n    subTitle\n    subText\n    alignRev\n    image {\n      responsiveImage(\n        sizes: \"(min-width: 1024px) 50vw, 80vw\"\n        imgixParams: { fit: max, h: 800, auto: [format, compress] }\n      ) {\n        ...DatoImage_responsiveImage\n      }\n    }\n    smallImages {\n      id\n      responsiveImage(\n        sizes: \"100vw\"\n        imgixParams: { fit: clip, h: 70, auto: [format, compress] }\n      ) {\n        ...DatoImage_responsiveImage\n      }\n    }\n  }\n": types.Product_BlockFragmentDoc,
    "\n  fragment Quote_block on QuoteBlockRecord {\n    id\n    _modelApiKey\n    text\n    authorName\n  }\n": types.Quote_BlockFragmentDoc,
    "\n  fragment Text_block on TextBlockRecord {\n    id\n    _modelApiKey\n    menuLabel\n    title\n    mainText: text\n    alignCenter\n    colorsRev\n    link {\n      label\n      url\n    }\n  }\n": types.Text_BlockFragmentDoc,
    "\n  fragment Header_block on HeroImageBlockRecord {\n    id\n    _modelApiKey\n    title\n    alignCenter\n    hideTitle\n    image {\n      responsiveImage(\n        sizes: \"100vw\"\n        imgixParams: { fit: max, w: 1550, h: 850, auto: [format, compress] }\n      ) {\n        ...DatoImage_responsiveImage\n      }\n    }\n  }\n": types.Header_BlockFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Layout {\n    site: _site(locale: it) {\n      faviconMetaTags {\n        tag\n        attributes\n        content\n      }\n      locales\n      globalSeo {\n        siteName\n      }\n    }\n    visual: visualStyle {\n      logo {\n        url\n      }\n      uppercaseTitles\n      colorText {\n        red\n        green\n        blue\n      }\n      colorTextAlt {\n        red\n        green\n        blue\n      }\n      colorTextRev {\n        red\n        green\n        blue\n      }\n      colorBack {\n        red\n        green\n        blue\n      }\n      colorBackAlt {\n        red\n        green\n        blue\n      }\n      colorBackRev {\n        red\n        green\n        blue\n      }\n      colorAccent {\n        red\n        green\n        blue\n      }\n      colorAccentRev {\n        red\n        green\n        blue\n      }\n      colorButton {\n        red\n        green\n        blue\n      }\n      colorButtonBack {\n        red\n        green\n        blue\n      }\n      fontBody\n      fontHeading\n      fontBaseHeight\n      fontBaseSize\n      fontLgHeight\n      fontLgSize\n      fontSmHeight\n      fontXlHeight\n      fontSmSize\n      fontXlSize\n      fontXsHeight\n      fontXsSize\n      fontXxlHeight\n      fontXxlSize\n      fontXxxlHeight\n      fontXxxlSize\n    }\n  }\n"): (typeof documents)["\n  query Layout {\n    site: _site(locale: it) {\n      faviconMetaTags {\n        tag\n        attributes\n        content\n      }\n      locales\n      globalSeo {\n        siteName\n      }\n    }\n    visual: visualStyle {\n      logo {\n        url\n      }\n      uppercaseTitles\n      colorText {\n        red\n        green\n        blue\n      }\n      colorTextAlt {\n        red\n        green\n        blue\n      }\n      colorTextRev {\n        red\n        green\n        blue\n      }\n      colorBack {\n        red\n        green\n        blue\n      }\n      colorBackAlt {\n        red\n        green\n        blue\n      }\n      colorBackRev {\n        red\n        green\n        blue\n      }\n      colorAccent {\n        red\n        green\n        blue\n      }\n      colorAccentRev {\n        red\n        green\n        blue\n      }\n      colorButton {\n        red\n        green\n        blue\n      }\n      colorButtonBack {\n        red\n        green\n        blue\n      }\n      fontBody\n      fontHeading\n      fontBaseHeight\n      fontBaseSize\n      fontLgHeight\n      fontLgSize\n      fontSmHeight\n      fontXlHeight\n      fontSmSize\n      fontXlSize\n      fontXsHeight\n      fontXsSize\n      fontXxlHeight\n      fontXxlSize\n      fontXxxlHeight\n      fontXxxlSize\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Page {\n    visual: visualStyle {\n      logo {\n        url\n      }\n      logoRev {\n        url\n      }\n      uppercaseTitles\n      colorButton {\n        red\n        green\n        blue\n      }\n      colorButtonBack {\n        red\n        green\n        blue\n      }\n      colorText {\n        red\n        green\n        blue\n      }\n      colorBack {\n        red\n        green\n        blue\n      }\n    }\n    site: _site(locale: it) {\n      locales\n      globalSeo {\n        siteName\n      }\n    }\n    org: organization(locale: it) {\n      emailAddress\n      facebookUrl\n      instagramUrl\n      newsletterFormUrl\n      newsletterTitle\n      newsletterLabel\n      contactsMenuLabel\n      phoneNumber\n      streetAddress\n      facebookPixelId\n      googleAnalyticsId\n      googleTagManagerId\n      iubendaPolicyId\n      iubendaSiteId\n    }\n    page: landing(locale: it) {\n      seo: _seoMetaTags {\n        attributes\n        content\n        tag\n      }\n      _locales\n      headerBlocks {\n        ...Header_block\n      }\n      contentBlocks {\n        ... on CarouselBlockRecord {\n          id\n        }\n        ... on CoverBlockRecord {\n          id\n        }\n        ... on FlagBlockRecord {\n          id\n          menuLabel\n        }\n        ... on FocusBlockRecord {\n          id\n          menuLabel\n        }\n        ... on ProductBlockRecord {\n          id\n        }\n        ... on TextBlockRecord {\n          id\n          menuLabel\n        }\n        ... on QuoteBlockRecord {\n          id\n        }\n        ... on PartnersBlockRecord {\n          id\n          menuLabel\n        }\n      }\n      blocks: contentBlocks {\n        ... on BannerCtaBlockRecord {\n          ...Banner_block\n        }\n        ... on CarouselBlockRecord {\n          ...Carousel_block\n        }\n        ... on CoverBlockRecord {\n          ...Cover_block\n        }\n        ... on FlagBlockRecord {\n          ...Flag_block\n        }\n        ... on FocusBlockRecord {\n          ...Focus_block\n        }\n        ... on ProductBlockRecord {\n          ...Product_block\n        }\n        ... on TextBlockRecord {\n          ...Text_block\n        }\n        ... on QuoteBlockRecord {\n          ...Quote_block\n        }\n        ... on PartnersBlockRecord {\n          ...Partners_block\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Page {\n    visual: visualStyle {\n      logo {\n        url\n      }\n      logoRev {\n        url\n      }\n      uppercaseTitles\n      colorButton {\n        red\n        green\n        blue\n      }\n      colorButtonBack {\n        red\n        green\n        blue\n      }\n      colorText {\n        red\n        green\n        blue\n      }\n      colorBack {\n        red\n        green\n        blue\n      }\n    }\n    site: _site(locale: it) {\n      locales\n      globalSeo {\n        siteName\n      }\n    }\n    org: organization(locale: it) {\n      emailAddress\n      facebookUrl\n      instagramUrl\n      newsletterFormUrl\n      newsletterTitle\n      newsletterLabel\n      contactsMenuLabel\n      phoneNumber\n      streetAddress\n      facebookPixelId\n      googleAnalyticsId\n      googleTagManagerId\n      iubendaPolicyId\n      iubendaSiteId\n    }\n    page: landing(locale: it) {\n      seo: _seoMetaTags {\n        attributes\n        content\n        tag\n      }\n      _locales\n      headerBlocks {\n        ...Header_block\n      }\n      contentBlocks {\n        ... on CarouselBlockRecord {\n          id\n        }\n        ... on CoverBlockRecord {\n          id\n        }\n        ... on FlagBlockRecord {\n          id\n          menuLabel\n        }\n        ... on FocusBlockRecord {\n          id\n          menuLabel\n        }\n        ... on ProductBlockRecord {\n          id\n        }\n        ... on TextBlockRecord {\n          id\n          menuLabel\n        }\n        ... on QuoteBlockRecord {\n          id\n        }\n        ... on PartnersBlockRecord {\n          id\n          menuLabel\n        }\n      }\n      blocks: contentBlocks {\n        ... on BannerCtaBlockRecord {\n          ...Banner_block\n        }\n        ... on CarouselBlockRecord {\n          ...Carousel_block\n        }\n        ... on CoverBlockRecord {\n          ...Cover_block\n        }\n        ... on FlagBlockRecord {\n          ...Flag_block\n        }\n        ... on FocusBlockRecord {\n          ...Focus_block\n        }\n        ... on ProductBlockRecord {\n          ...Product_block\n        }\n        ... on TextBlockRecord {\n          ...Text_block\n        }\n        ... on QuoteBlockRecord {\n          ...Quote_block\n        }\n        ... on PartnersBlockRecord {\n          ...Partners_block\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment DatoImage_responsiveImage on ResponsiveImage {\n    src\n    srcSet\n    base64\n    width\n    height\n    alt\n    title\n  }\n"): (typeof documents)["\n  fragment DatoImage_responsiveImage on ResponsiveImage {\n    src\n    srcSet\n    base64\n    width\n    height\n    alt\n    title\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Banner_block on BannerCtaBlockRecord {\n    id\n    _modelApiKey\n    mainText: text\n    mainTitle: title\n    imageBg {\n      responsiveImage(\n        sizes: \"100vw\"\n        imgixParams: { fit: crop, w: 1550, h: 800, auto: [format, compress] }\n      ) {\n        ...DatoImage_responsiveImage\n      }\n    }\n    url: link\n    cta\n    menuLabel\n  }\n"): (typeof documents)["\n  fragment Banner_block on BannerCtaBlockRecord {\n    id\n    _modelApiKey\n    mainText: text\n    mainTitle: title\n    imageBg {\n      responsiveImage(\n        sizes: \"100vw\"\n        imgixParams: { fit: crop, w: 1550, h: 800, auto: [format, compress] }\n      ) {\n        ...DatoImage_responsiveImage\n      }\n    }\n    url: link\n    cta\n    menuLabel\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Carousel_block on CarouselBlockRecord {\n    id\n    _modelApiKey\n    colorsRev\n    images {\n      id\n      responsiveImage(\n        sizes: \"(min-width: 1024px) 50vw, 100vw\"\n        imgixParams: { fit: clip, w: 1200, h: 600, auto: [format, compress] }\n      ) {\n        ...DatoImage_responsiveImage\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment Carousel_block on CarouselBlockRecord {\n    id\n    _modelApiKey\n    colorsRev\n    images {\n      id\n      responsiveImage(\n        sizes: \"(min-width: 1024px) 50vw, 100vw\"\n        imgixParams: { fit: clip, w: 1200, h: 600, auto: [format, compress] }\n      ) {\n        ...DatoImage_responsiveImage\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Cover_block on CoverBlockRecord {\n    id\n    _modelApiKey\n    colorsRev\n    images {\n      id\n      responsiveImage(\n        sizes: \"100vw\"\n        imgixParams: { fit: crop, w: 1550, h: 800, auto: [format, compress] }\n      ) {\n        ...DatoImage_responsiveImage\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment Cover_block on CoverBlockRecord {\n    id\n    _modelApiKey\n    colorsRev\n    images {\n      id\n      responsiveImage(\n        sizes: \"100vw\"\n        imgixParams: { fit: crop, w: 1550, h: 800, auto: [format, compress] }\n      ) {\n        ...DatoImage_responsiveImage\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Flag_block on FlagBlockRecord {\n    _modelApiKey\n    menuLabel\n    label\n    text\n    title\n    alignRev\n    colorsRev\n    image {\n      responsiveImage(\n        sizes: \"(min-width: 1024px) 50vw, 100vw\"\n        imgixParams: { fit: max, w: 800, h: 800, auto: [format, compress] }\n      ) {\n        ...DatoImage_responsiveImage\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment Flag_block on FlagBlockRecord {\n    _modelApiKey\n    menuLabel\n    label\n    text\n    title\n    alignRev\n    colorsRev\n    image {\n      responsiveImage(\n        sizes: \"(min-width: 1024px) 50vw, 100vw\"\n        imgixParams: { fit: max, w: 800, h: 800, auto: [format, compress] }\n      ) {\n        ...DatoImage_responsiveImage\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Focus_block on FocusBlockRecord {\n    id\n    _modelApiKey\n    menuLabel\n    mainTitle: title\n    text\n    elements {\n      id\n      title\n      text\n      image {\n        responsiveImage(\n          sizes: \"(min-width: 1024px) 33vw, 100vw\"\n          imgixParams: { fit: crop, w: 800, h: 800, auto: [format, compress] }\n        ) {\n          ...DatoImage_responsiveImage\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment Focus_block on FocusBlockRecord {\n    id\n    _modelApiKey\n    menuLabel\n    mainTitle: title\n    text\n    elements {\n      id\n      title\n      text\n      image {\n        responsiveImage(\n          sizes: \"(min-width: 1024px) 33vw, 100vw\"\n          imgixParams: { fit: crop, w: 800, h: 800, auto: [format, compress] }\n        ) {\n          ...DatoImage_responsiveImage\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Partners_block on PartnersBlockRecord {\n    id\n    _modelApiKey\n    menuLabel\n    title\n    images {\n      format\n      url\n      title\n      alt\n      responsiveImage(\n        sizes: \"230px\"\n        imgixParams: { fit: clip, h: 100, auto: [format, compress] }\n      ) {\n        ...DatoImage_responsiveImage\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment Partners_block on PartnersBlockRecord {\n    id\n    _modelApiKey\n    menuLabel\n    title\n    images {\n      format\n      url\n      title\n      alt\n      responsiveImage(\n        sizes: \"230px\"\n        imgixParams: { fit: clip, h: 100, auto: [format, compress] }\n      ) {\n        ...DatoImage_responsiveImage\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Product_block on ProductBlockRecord {\n    id\n    _modelApiKey\n    label\n    title\n    text\n    subTitle\n    subText\n    alignRev\n    image {\n      responsiveImage(\n        sizes: \"(min-width: 1024px) 50vw, 80vw\"\n        imgixParams: { fit: max, h: 800, auto: [format, compress] }\n      ) {\n        ...DatoImage_responsiveImage\n      }\n    }\n    smallImages {\n      id\n      responsiveImage(\n        sizes: \"100vw\"\n        imgixParams: { fit: clip, h: 70, auto: [format, compress] }\n      ) {\n        ...DatoImage_responsiveImage\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment Product_block on ProductBlockRecord {\n    id\n    _modelApiKey\n    label\n    title\n    text\n    subTitle\n    subText\n    alignRev\n    image {\n      responsiveImage(\n        sizes: \"(min-width: 1024px) 50vw, 80vw\"\n        imgixParams: { fit: max, h: 800, auto: [format, compress] }\n      ) {\n        ...DatoImage_responsiveImage\n      }\n    }\n    smallImages {\n      id\n      responsiveImage(\n        sizes: \"100vw\"\n        imgixParams: { fit: clip, h: 70, auto: [format, compress] }\n      ) {\n        ...DatoImage_responsiveImage\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Quote_block on QuoteBlockRecord {\n    id\n    _modelApiKey\n    text\n    authorName\n  }\n"): (typeof documents)["\n  fragment Quote_block on QuoteBlockRecord {\n    id\n    _modelApiKey\n    text\n    authorName\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Text_block on TextBlockRecord {\n    id\n    _modelApiKey\n    menuLabel\n    title\n    mainText: text\n    alignCenter\n    colorsRev\n    link {\n      label\n      url\n    }\n  }\n"): (typeof documents)["\n  fragment Text_block on TextBlockRecord {\n    id\n    _modelApiKey\n    menuLabel\n    title\n    mainText: text\n    alignCenter\n    colorsRev\n    link {\n      label\n      url\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Header_block on HeroImageBlockRecord {\n    id\n    _modelApiKey\n    title\n    alignCenter\n    hideTitle\n    image {\n      responsiveImage(\n        sizes: \"100vw\"\n        imgixParams: { fit: max, w: 1550, h: 850, auto: [format, compress] }\n      ) {\n        ...DatoImage_responsiveImage\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment Header_block on HeroImageBlockRecord {\n    id\n    _modelApiKey\n    title\n    alignCenter\n    hideTitle\n    image {\n      responsiveImage(\n        sizes: \"100vw\"\n        imgixParams: { fit: max, w: 1550, h: 850, auto: [format, compress] }\n      ) {\n        ...DatoImage_responsiveImage\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;