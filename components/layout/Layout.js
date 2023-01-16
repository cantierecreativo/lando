import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import SkipLinks from "components/layout/SkipLinks";
import MetaTags from "components/layout/MetaTags";
import { useEffect } from "react";

function Layout({ children, locale = "it", site, page }) {
  useEffect(() => {
    if (locale) {
      const currentLocale = document.documentElement.lang;
      if (!currentLocale || currentLocale != locale) {
        document.documentElement.lang = locale;
      }
    }
  }, [locale]);

  return (
    <>
      {page !== "404" && <MetaTags site={site} page={page} locale={locale} />}
      <SkipLinks locale={locale} />
      <Header page={page} locale={locale} site={site} />
      <main id="content">{children}</main>
      <Footer id="footer" site={site} locale={locale} />
    </>
  );
}

export default Layout;
