"use client";

import HeroImage from "@/components/headers/HeroImage";
import Carousel from "@/components/blocks/Carousel";
import Cover from "@/components/blocks/Cover";
import Flag from "@/components/blocks/Flag";
import Focus from "@/components/blocks/Focus";
import Product from "@/components/blocks/Product";
import Quote from "@/components/blocks/Quote";
import Text from "@/components/blocks/Text";
import Partners from "@/components/blocks/Partners";
import Banner from "@/components/blocks/Banner";
import {
  BannerCtaBlockRecord,
  CarouselBlockRecord,
  CoverBlockRecord,
  FlagBlockRecord,
  FocusBlockRecord,
  HeroImageBlockRecord,
  PartnersBlockRecord,
  ProductBlockRecord,
  QuoteBlockRecord,
  TextBlockRecord,
  VisualStyleRecord,
} from "@/gql/graphql";

function renderBlock(block: any, visual: any, locale: string) {
  // return <div>{block._modelApiKey}</div>;
  switch (block._modelApiKey) {
    case "banner_cta_block":
      return (
        <Banner block={block} visual={visual} key={block.id} locale={locale} />
      );

    case "carousel_block":
      return <Carousel block={block} key={block.id} />;

    case "cover_block":
      return <Cover block={block} key={block.id} />;

    case "flag_block":
      return <Flag block={block} visual={visual} key={block.id} />;

    case "focus_block":
      return <Focus block={block} visual={visual} key={block.id} />;

    case "hero_image_block":
      return <HeroImage block={block} visual={visual} key={block.id} />;

    case "product_block":
      return <Product block={block} visual={visual} key={block.id} />;

    case "quote_block":
      return <Quote block={block} key={block.id} />;

    case "text_block":
      return (
        <Text block={block} visual={visual} key={block.id} locale={locale} />
      );

    case "partners_block":
      return (
        <Partners
          block={block}
          visual={visual}
          key={block.id}
          locale={locale}
        />
      );
  }
}

type BlocksProps = {
  blocks:
    | BannerCtaBlockRecord
    | CarouselBlockRecord
    | CoverBlockRecord
    | FlagBlockRecord
    | FocusBlockRecord
    | HeroImageBlockRecord
    | PartnersBlockRecord
    | ProductBlockRecord
    | TextBlockRecord
    | QuoteBlockRecord
    | undefined
    | [];
  visual: VisualStyleRecord | undefined | null;
  locale: string;
};

export default function Blocks({ blocks, visual, locale }: BlocksProps) {
  return (
    <>
      {blocks &&
        Object.values(blocks).map((block) =>
          renderBlock(block, visual, locale)
        )}
    </>
  );
}
