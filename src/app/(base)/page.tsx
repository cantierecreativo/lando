import { request } from "@/lib/dato";
import { graphql } from "@/gql";
import { renderMetaTags } from "react-datocms";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Blocks from "@/components/layout/Blocks";

import Iubenda from "@/components/scripts/Iubenda";
import GoogleAnalytics from "@/components/scripts/GoogleAnalytics";
import GoogleTagManager from "@/components/scripts/GoogleTagManager";
import FacebookPixel from "@/components/scripts/FacebookPixel";

const query = graphql(/* GraphQL */ `
  query Page {
    visual: visualStyle {
      logo {
        url
      }
      logoRev {
        url
      }
      uppercaseTitles
      colorButton {
        red
        green
        blue
      }
      colorButtonBack {
        red
        green
        blue
      }
      colorText {
        red
        green
        blue
      }
      colorBack {
        red
        green
        blue
      }
    }
    site: _site(locale: it) {
      locales
      globalSeo {
        siteName
      }
    }
    org: organization(locale: it) {
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
    page: landing(locale: it) {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
      _locales
      headerBlocks {
        ...Header_block
      }
      contentBlocks {
        ... on CarouselBlockRecord {
          id
        }
        ... on CoverBlockRecord {
          id
        }
        ... on FlagBlockRecord {
          id
          menuLabel
        }
        ... on FocusBlockRecord {
          id
          menuLabel
        }
        ... on ProductBlockRecord {
          id
        }
        ... on TextBlockRecord {
          id
          menuLabel
        }
        ... on QuoteBlockRecord {
          id
        }
        ... on PartnersBlockRecord {
          id
          menuLabel
        }
      }
      blocks: contentBlocks {
        ... on BannerCtaBlockRecord {
          ...Banner_block
        }
        ... on CarouselBlockRecord {
          ...Carousel_block
        }
        ... on CoverBlockRecord {
          ...Cover_block
        }
        ... on FlagBlockRecord {
          ...Flag_block
        }
        ... on FocusBlockRecord {
          ...Focus_block
        }
        ... on ProductBlockRecord {
          ...Product_block
        }
        ... on TextBlockRecord {
          ...Text_block
        }
        ... on QuoteBlockRecord {
          ...Quote_block
        }
        ... on PartnersBlockRecord {
          ...Partners_block
        }
      }
    }
  }
`);

const locale = "it";

export default async function Page() {
  const { org, visual, page, site } = await request(query);

  const blocks = page?.blocks;
  const headerBlocks = page?.headerBlocks;

  return (
    <>
      {renderMetaTags(page?.seo || [])}
      <Header
        page={page as any}
        visual={visual as any}
        site={site as any}
        org={org as any}
        locale={locale}
      />
      <main id="content">
        <Blocks
          blocks={headerBlocks as any}
          visual={visual as any}
          locale={locale}
        />
        <Blocks blocks={blocks as any} visual={visual as any} locale={locale} />
      </main>

      <Footer
        org={org as any}
        visual={visual as any}
        site={site as any}
        locale={locale}
      />

      <Iubenda
        siteId={org?.iubendaSiteId as any}
        policyId={org?.iubendaPolicyId as any}
        visual={visual as any}
        locale={locale}
      />

      {org?.googleTagManagerId && (
        <GoogleTagManager id={org.googleTagManagerId} />
      )}

      {org?.googleAnalyticsId && <GoogleAnalytics id={org.googleAnalyticsId} />}

      {org?.facebookPixelId && <FacebookPixel id={org.facebookPixelId} />}
    </>
  );
}
