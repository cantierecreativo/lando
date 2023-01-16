import Layout from "components/layout/Layout";
import * as queries from "lib/queries";
import fetchData from "lib/dato";
import Link from "next/link";
import { resolveLink } from "lib/utils";

export default function IndexBlog({ locale, site, page, categories }) {
  return (
    <Layout site={site} locale={locale} page={page}>
      <div className="container py-20 text-5xl border-t">
        <p>Title: {page.title}</p>
        <p>Model: {page.model}</p>
        <ul className="pt-5 mt-5 text-xl border-t">
          ELENCO CATEGORIE
          {categories.map((c) => (
            <li key={c.id}>
              <Link href={resolveLink(c, locale)}>
                <a title="" className="">
                  {c.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale = "it", preview }) {
  const response = await fetchData(queries.getNewsIndex, { locale }, preview);
  const categories = await fetchData(
    queries.getAllCategoryNews,
    { locale },
    preview
  );
  const site = await fetchData(queries.site, { locale });
  return {
    props: {
      locale,
      page: response.newsIndex,
      categories: categories.allCategoryNews,
      site,
    },
  };
}
