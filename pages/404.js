import Link from "next/link";
import Layout from "components/layout/Layout";
import * as queries from "lib/queries";
import fetchData from "lib/dato";
import { useEffect, useState } from "react";
import t from "lib/locales";

function Template404({ site }) {
  const [locale, setLocale] = useState();

  useEffect(() => {
    const lang = () =>
      navigator.languages && navigator.languages.length
        ? navigator.languages[0]
        : navigator.userLanguage ||
          navigator.language ||
          navigator.browserLanguage ||
          "en";
    if (lang().indexOf("it") !== -1) {
      setLocale("it");
    } else {
      setLocale("en");
    }
  }, []);

  return (
    <Layout site={site} locale={locale} page="404">
      <div className="relative bg-green-dark/90 pt-48">
        <div className="container text-white lg:py-12 xl:py-20">
          <div className="grid gap-4 pb-10">
            <div className="flex gap-1">
              <div className="prefix">{t("404title", locale)}</div>
            </div>
            <h1 className="titleBig">{t("404text", locale)}</h1>
            <Link href="/">
              <span className="cursor-pointer">{t("404cta", locale)}</span>
            </Link>
          </div>
          <div className="absolute bottom-0 right-0 z-10 h-14 w-14 bg-green-light lg:left-[56%] lg:-translate-x-1/2 xl:h-20 xl:w-20"></div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale = "it" }) {
  const site = await fetchData(queries.site, { locale });
  return {
    props: {
      locale,
      site,
    },
  };
}

export default Template404;
