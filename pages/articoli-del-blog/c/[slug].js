import Layout from "components/layout/Layout";
import * as queries from "lib/queries";
import fetchData from "lib/dato";
import Link from "next/link";
import { resolveLink } from "lib/utils";

function NewsCategory({ locale, site, page, items }) {
  return (
    <Layout site={site} locale={locale} page={page}>
      <div className="container py-20 text-5xl border-t">
        <p>Title: {page.title}</p>
        <p>Model: {page.model}</p>
        <ul className="pt-5 mt-5 text-xl border-t">
          ELENCO ARTICOLI FILTRATI PER CATEGORIA
          {items.map((i) => (
            <li key={i.id}>
              <Link href={resolveLink(i, locale)}>
                <a title="" className="">
                  {i.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const response = await fetchData(queries.getAllCategoryNews, {
    locale: "it",
  });
  const paths = response.allCategoryNews.map(({ slug }) => ({
    params: { slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale = "it", preview }) {
  const { slug } = params;
  const response = await fetchData(
    queries.getCategoryNews,
    { slug, locale },
    preview
  );
  const id = response.categoryNews.id;
  const filter = await fetchData(queries.getNewsByCategory, { id, locale });
  const site = await fetchData(queries.site, { locale });
  return {
    props: {
      locale,
      page: response.categoryNews,
      items: filter.allNews,
      site,
    },
  };
}

export default NewsCategory;
