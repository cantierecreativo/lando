import Banner from "components/blocks/Banner";
import ArtworksBlock from "components/blocks/ArtworksBlock";

export default function PostContent({ record, locale, site }) {
  switch (record.model) {
    case "banner_block":
      return <Banner record={record} locale={locale} />;
    case "artworks_block":
      return <ArtworksBlock locale={locale} site={site} />;
    default:
      return null;
  }
}
