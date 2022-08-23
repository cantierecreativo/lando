import Head from 'next/head'
import { useRouter } from 'next/router';
import { request } from 'lib/datocms';
import { blockSetupFields, colorFields, responsiveImageFragment } from 'lib/fragments';
import { renderMetaTags } from 'react-datocms';
import { setGoogleFonts } from 'lib/fonts';

import CustomCssVars from 'components/layout/CustomCssVars';
import SkipLinks from 'components/layout/SkipLinks';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import Blocks from 'components/layout/Blocks';

import Iubenda from 'components/scripts/Iubenda';
import GoogleAnalytics from 'components/scripts/GoogleAnalytics';
import GoogleTagManager from 'components/scripts/GoogleTagManager';
import FacebookPixel from 'components/scripts/FacebookPixel';

export async function getStaticProps({ locale }) {
  const formattedLocale = locale.split("-")[0];
  const graphqlRequest = {
    query: `
      {
        site: _site(locale: ${formattedLocale}) {
          favicon: faviconMetaTags {
            attributes
            content
            tag
          }
          locales
          globalSeo {
            siteName
          }
        }
        visual: visualStyle {
          logo {
            url
          }
          uppercaseTitles
          colorText {
            ${colorFields}
          }
          colorTextAlt {
            ${colorFields}
          }
          colorTextRev {
            ${colorFields}
          }
          colorBack {
            ${colorFields}
          }
          colorBackAlt {
            ${colorFields}
          }
          colorBackRev {
            ${colorFields}
          }
          colorAccent {
            ${colorFields}
          }
          colorAccentRev {
            ${colorFields}
          }
          colorButton {
            ${colorFields}
          }
          colorButtonBack {
            ${colorFields}
          }
          fontBody
          fontHeading
          fontBaseHeight
          fontBaseSize
          fontLgHeight
          fontLgSize
          fontSmHeight
          fontXlHeight
          fontSmSize
          fontXlSize
          fontXsHeight
          fontXsSize
          fontXxlHeight
          fontXxlSize
          fontXxxlHeight
          fontXxxlSize
        }
        org: organization(locale: ${formattedLocale}) {
          emailAddress
          facebookUrl
          instagramUrl
          newsletterFormUrl
          newsletterTitle
          newsletterLabel
          contactsMenuLabel
          phoneNumber
          streetAddress
          facebookPixelId
          googleAnalyticsId
          googleTagManagerId
          iubendaPolicyId
          iubendaSiteId
        }
        page: landing(locale: ${formattedLocale}) {
          seo: _seoMetaTags {
            attributes
            content
            tag
          }
          _locales
          headerBlocks {
            ${blockSetupFields}
            title
            alignCenter
            hideTitle
            image {
              responsiveImage(sizes: "100vw", imgixParams: { fit: max, w: 1550, h: 850, auto: [format,compress] }) {
                ...responsiveImageFragment
              }
            }
          }
          contentBlocks {
            ... on CarouselBlockRecord {
               ${blockSetupFields}
               images {
                 id
                 responsiveImage(sizes: "(min-width: 1024px) 50vw, 100vw", imgixParams: { fit: clip, w: 1200, h: 600, auto: [format,compress] }) {
                   ...responsiveImageFragment
                 }
               }
            }
            ... on CoverBlockRecord {
               ${blockSetupFields}
               images {
                 id
                 responsiveImage(sizes: "100vw", imgixParams: { fit: crop, w: 1550, h: 800, auto: [format,compress] }) {
                   ...responsiveImageFragment
                 }
               }
            }
            ... on FlagBlockRecord {
              ${blockSetupFields}
              menuLabel
              label
              text
              title
              alignRev
              colorsRev
              image {
                responsiveImage(sizes: "(min-width: 1024px) 50vw, 100vw", imgixParams: { fit: max, w: 800, h: 800, auto: [format,compress] }) {
                  ...responsiveImageFragment
                }
              }
            }
            ... on FocusBlockRecord {
              ${blockSetupFields}
              menuLabel
              title
              text
              elements {
                id
                title
                text
                image {
                  responsiveImage(sizes: "(min-width: 1024px) 33vw, 100vw", imgixParams: { fit: crop, w: 800, h: 800, auto: [format,compress] }) {
                    ...responsiveImageFragment
                  }
                }
              }
            }
            ... on ProductBlockRecord {
              ${blockSetupFields}
              label
              title
              text
              subTitle
              subText
              alignRev
              image {
                responsiveImage(sizes: "(min-width: 1024px) 50vw, 80vw", imgixParams: { fit: max, h: 800, auto: [format,compress] }) {
                  ...responsiveImageFragment
                }
              }
              smallImages {
                id
                responsiveImage(sizes: "100vw", imgixParams: { fit: clip, h: 70, auto: [format,compress] }) {
                  ...responsiveImageFragment
                }
              }
            }
            ... on QuoteBlockRecord {
              ${blockSetupFields}
              text
              authorName
            }
            ... on TextBlockRecord {
              ${blockSetupFields}
              menuLabel
              title
              text
              alignCenter
              link {
                label
                url
              }
            }
          }
        }
      }
      ${responsiveImageFragment}
    `
  };

  return {
    props: {
      data: await request(graphqlRequest),
    },
  };
}

export default function Home({ data }) {
  const locale = useRouter().locale;
  const { site, page, org, visual } = data;

  return (
    <>
      <Head>
        {setGoogleFonts(visual)}
        {renderMetaTags(page.seo.concat(site.favicon))}
      </Head>

      <CustomCssVars data={visual} />
      <SkipLinks locale={locale} />
      <Header
        page={page}
        visual={visual}
        site={site}
        org={org}
        locale={locale}
      />

      <main id="content">
        <Blocks
          blocks={page.headerBlocks}
          visual={visual}
        />
        <Blocks
          blocks={page.contentBlocks}
          visual={visual}
          locale={locale}
        />
      </main>

      <Footer
        org={org}
        visual={visual}
        site={site}
        locale={locale}
      />

      <Iubenda
        siteId={org.iubendaSiteId}
        policyId={org.iubendaPolicyId}
        visual={visual}
        locale={locale}
      />

      {org.googleTagManagerId && (
        <GoogleTagManager id={org.googleTagManagerId} />
      )}

      {org.googleAnalyticsId && (
        <GoogleAnalytics id={org.googleAnalyticsId} />
      )}

      {org.facebookPixelId && (
        <FacebookPixel id={org.facebookPixelId} />
      )}
    </>
  )
}
