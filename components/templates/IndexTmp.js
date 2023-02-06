import Hero from "components/headers/Hero";
import OtherPages from "components/layout/OtherPages";
import StandardCard from "components/cards/StandardCard";
import VideoCard from "components/cards/VideoCard";

export default function IndexTmp({ locale, page, items }) {
  return (
    <>
      <Hero locale={locale} page={page} />
      <div className="container">
        <div className="grid-gap">
          <div className="grid gap-5 py-12 md:py-20 xl:pb-32 md:grid-cols-2 lg:grid-cols-3">
            {items.map((card) => {
              switch (card.model) {
                case "video":
                  return (
                    <VideoCard key={card.id} record={card} locale={locale} />
                  );
                default:
                  return (
                    <StandardCard key={card.id} record={card} locale={locale} />
                  );
              }
            })}
          </div>
        </div>
      </div>
      <OtherPages locale={locale} pages={page.pagesRelated} />
    </>
  );
}
