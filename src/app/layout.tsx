import "src/app/globals.css";
import { Playfair_Display, Poppins } from "next/font/google";
import { request } from "@/lib/dato";
import { renderMetaTags } from "react-datocms/seo";
import { graphql } from "@/gql";
import SkipLinks from "@/components/layout/SkipLinks";
import { CSSProperties } from "react";

const locale = "it";

const query = graphql(/* GraphQL */ `
  query Layout {
    site: _site(locale: it) {
      faviconMetaTags {
        tag
        attributes
        content
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
        red
        green
        blue
      }
      colorTextAlt {
        red
        green
        blue
      }
      colorTextRev {
        red
        green
        blue
      }
      colorBack {
        red
        green
        blue
      }
      colorBackAlt {
        red
        green
        blue
      }
      colorBackRev {
        red
        green
        blue
      }
      colorAccent {
        red
        green
        blue
      }
      colorAccentRev {
        red
        green
        blue
      }
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
  }
`);

// function nameForGoogleFonts(name) {
//   return name.replace(/\s+/g, "+");
// }

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  weight: "700",
  display: "swap",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { visual, site } = await request(query);

  function colorToRule(color: { red: number; green: number; blue: number }) {
    return `${color.red} ${color.green} ${color.blue}`;
  }

  function sizeToPx(size: number) {
    return size + "px";
  }

  return (
    <html lang={locale}>
      {renderMetaTags(site.faviconMetaTags)}
      <body
        className={`${playfairDisplay.variable} ${poppins.variable}`}
        style={
          visual
            ? ({
                "--color-white": "255 255 255",
                "--color-text": colorToRule(visual.colorText),
                "--color-text-alt": colorToRule(visual.colorTextAlt),
                "--color-text-rev": colorToRule(visual.colorTextRev),
                "--color-back": colorToRule(visual.colorBack),
                "--color-back-alt": colorToRule(visual.colorBackAlt),
                "--color-back-rev": colorToRule(visual.colorBackRev),
                "--color-accent": colorToRule(visual.colorAccent),
                "--color-accent-rev": colorToRule(visual.colorAccentRev),
                "--color-button": colorToRule(visual.colorButton),
                "--color-button-back": colorToRule(visual.colorButtonBack),
                "--font-body": visual.fontBody,
                "--font-heading": visual.fontHeading,
                "--font-xs-size": sizeToPx(visual.fontXsSize),
                "--font-xs-height": sizeToPx(visual.fontXsHeight),
                "--font-sm-size": sizeToPx(visual.fontSmSize),
                "--font-sm-height": sizeToPx(visual.fontSmHeight),
                "--font-base-height": sizeToPx(visual.fontBaseHeight),
                "--font-base-size": sizeToPx(visual.fontBaseSize),
                "--font-lg-size": sizeToPx(visual.fontLgSize),
                "--font-lg-height": sizeToPx(visual.fontLgHeight),
                "--font-xl-size": sizeToPx(visual.fontXlSize),
                "--font-xl-height": sizeToPx(visual.fontXlHeight),
                "--font-xxl-size": sizeToPx(visual.fontXxlSize),
                "--font-xxl-height": sizeToPx(visual.fontXxlHeight),
                "--font-xxxl-size": sizeToPx(visual.fontXxxlSize),
                "--font-xxxl-height": sizeToPx(visual.fontXxxlHeight),
                "--swiper-theme-color": colorToRule(visual.colorAccent),
                "--swiper-pagination-bullet-inactive-color": "#ffffff",
                "--swiper-pagination-bullet-inactive-opacity": 1,
                "--swiper-navigation-size": "2.5rem",
                "--swiper-pagination-bullet-horizontal-gap": "1rem",
                "--swiper-margin": "0.8rem",
              } as CSSProperties)
            : undefined
        }
      >
        <SkipLinks locale={locale} />
        {children}
      </body>
    </html>
  );
}
