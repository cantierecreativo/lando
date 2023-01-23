// import MilestonBlock from "components/blocks/MilestonBlock";
import Banner from "components/blocks/Banner";
import ArtworksBlock from "components/blocks/ArtworksBlock";
// import QuoteBlock from "components/blocks/QuoteBlock";
// import TextImageBlock from "components/blocks/TextImageBlock";
// import NewsBlock from "components/blocks/NewsBlock";

export default function PostContent({ record, locale, site }) {
  switch (record.model) {
    case "banner_block":
      return <Banner record={record} locale={locale} />;
    case "artworks_block":
      return <ArtworksBlock locale={locale} site={site} />;
    // case "mileston_block":
    //   return <MilestonBlock record={record} locale={locale} />;
    // case "news_block":
    //   return (
    //     <NewsBlock
    //       record={record}
    //       locale={locale}
    //       lastNews={site.lastNews}
    //       newsIndex={site.newsIndex}
    //     />
    //   );
    // case "quote_block":
    //   return <QuoteBlock record={record} locale={locale} />;
    // case "text_image_block":
    //   return <TextImageBlock record={record} locale={locale} />;
    default:
      return null;
  }
}
