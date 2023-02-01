import NewsCard from "components/cards/NewsCard";
import StandardCard from "components/cards/StandardCard";

export default function CardBlock({ locale, record }) {
  return (
    <>
      <div className="container">
        <div className="grid-gap">
          <div className="grid gap-5 mt-6 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
            {record.links.map((card) => {
              switch (card.model) {
                default:
                  return (
                    <StandardCard key={card.id} record={card} locale={locale} />
                  );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}
