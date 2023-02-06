import HeroNews from "components/headers/HeroNews";
import OtherPages from "components/layout/OtherPages";
import NewsCard from "components/cards/NewsCard";

export default function IndexNewsTmp({ locale, page, items }) {
  return (
    <>
      <HeroNews locale={locale} page={page} />
      <div className="container">
        <div className="grid-gap">
          <div className="grid gap-5 xl:gap-12 pb-12">
            {items.map((n) => (
              <NewsCard key={n.id} news={n} locale={locale} />
            ))}
          </div>
        </div>
      </div>
      <OtherPages locale={locale} pages={page.pagesRelated} />
    </>
  );
}
