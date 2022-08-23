import HeroImage from 'components/headers/HeroImage';
import Carousel from 'components/blocks/Carousel';
import Cover from 'components/blocks/Cover';
import Flag from 'components/blocks/Flag';
import Focus from 'components/blocks/Focus';
import Product from 'components/blocks/Product';
import Quote from 'components/blocks/Quote';
import Text from 'components/blocks/Text';

function renderBlock(block, visual, locale) {
  switch (block._modelApiKey) {
    case 'carousel_block':
      return (
        <Carousel
          block={block}
          key={block.id}
        />
      );

    case 'cover_block':
      return (
        <Cover
          block={block}
          key={block.id}
        />
      );

    case 'flag_block':
      return (
        <Flag
          block={block}
          visual={visual}
          key={block.id}
        />
      );

    case 'focus_block':
      return (
        <Focus
          block={block}
          visual={visual}
          key={block.id}
        />
      );

    case 'hero_image_block':
      return (
        <HeroImage
          block={block}
          visual={visual}
          key={block.id}
        />
      );

    case 'product_block':
      return (
        <Product
          block={block}
          visual={visual}
          key={block.id}
        />
      );

    case 'quote_block':
      return (
        <Quote
          block={block}
          key={block.id}
        />
      );

    case 'text_block':
      return (
        <Text
          block={block}
          visual={visual}
          key={block.id}
          locale={locale}
        />
      );
  }
}

export default function Blocks({ blocks, visual, locale }) {
  return (
    blocks && Object.values(blocks).map((block) => (
      renderBlock(block, visual, locale)
    ))
  );
}
