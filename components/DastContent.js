import { StructuredText } from "react-datocms";
import {
  renderRule,
  isHeading,
  isList,
  isParagraph,
  isListItem,
} from "datocms-structured-text-utils";

import { anchorId } from "lib/utils";
import ImageBlock from "./blocks/ImageBlock";
import VideoBlock from "./blocks/VideoBlock";
import MilestonBlock from "./blocks/MilestonBlock";
import CarouselBlock from "./blocks/CarouselBlock";
import BannerBlock from "./blocks/BannerBlock";
import FaqBlock from "./blocks/FaqBlock";
import PartnersBlock from "./blocks/PartnersBlock";
import FeaturesBlock from "./blocks/FeaturesBlock";
import AttachmentsBlock from "./blocks/AttachmentsBlock";
import TextImageBlock from "./blocks/TextImageBlock";
import ItemsBlock from "./blocks/ItemsBlock";
import NewsBlock from "./blocks/NewsBlock";
import NumbersBlock from "./blocks/NumbersBlock";
import InternalLink from "./blocks/InternalLink";

export default function DastContent({
  content,
  locale,
  page,
  site,
  wide = "small",
}) {
  return (
    <StructuredText
      data={content}
      renderBlock={({ record }) => {
        switch (record.model) {
          case "image_block":
            return (
              <div className="my-10 lg:my-20">
                <ImageBlock record={record} locale={locale} />
              </div>
            );
          case "video_block":
            return (
              <div className="my-10 lg:my-20">
                <VideoBlock record={record} locale={locale} />
              </div>
            );
          case "mileston_block":
            return (
              <div className="my-10 lg:my-20">
                <MilestonBlock record={record} locale={locale} />
              </div>
            );
          case "carousel_block":
            return (
              <div className="my-10 lg:my-20">
                <CarouselBlock record={record} locale={locale} />
              </div>
            );
          case "banner_block":
            return (
              <div className="my-10 lg:my-20">
                <BannerBlock record={record} locale={locale} />
              </div>
            );
          case "faq_block":
            return (
              <div className="my-10 lg:my-20">
                <FaqBlock record={record} locale={locale} />
              </div>
            );
          case "partners_block":
            return (
              <div className="my-10 lg:my-20">
                <PartnersBlock record={record} locale={locale} />
              </div>
            );
          case "features_block":
            return (
              <div className="my-10 lg:my-20">
                <FeaturesBlock record={record} locale={locale} />
              </div>
            );
          case "attachments_block":
            return (
              <div className="my-10 lg:my-20">
                <AttachmentsBlock record={record} locale={locale} />
              </div>
            );
          case "text_image_block":
            return (
              <div className="my-10 lg:my-20">
                <TextImageBlock record={record} locale={locale} />
              </div>
            );
          case "items_block":
            return (
              <div className="my-10 lg:my-20">
                <ItemsBlock record={record} locale={locale} wide={wide} />
              </div>
            );
          case "numbers_block":
            return (
              <div className="my-10 lg:my-20">
                <NumbersBlock record={record} locale={locale} />
              </div>
            );
          case "news_block":
            return (
              <NewsBlock
                lastNews={site.lastNews}
                newsIndex={site.newsIndex}
                record={record}
                locale={locale}
                wide={wide}
              />
            );
          case "label_block":
            return <section id={anchorId(record.label)} />;
          default:
            return null;
        }
      }}
      renderLinkToRecord={({ record, children }) => {
        return (
          <InternalLink element={record} label={record.title} locale={locale}>
            <span className="text-green underline">{children}</span>
          </InternalLink>
        );
      }}
      // customRules={[
      //   renderRule(isHeading, ({ node, children, key }) => {
      //     if (!children) return null;
      //     const Tag = `h${node.level}`;
      //     return (
      //       <div className="max-w-[1300px] px-4 lg:px-6 xl:px-24" key={key}>
      //         <Tag
      //           className={`${
      //             node.level == 2
      //               ? "font-sans text-2xl text-green xl:text-4xl"
      //               : "text-lg xl:text-2xl xl:font-bold"
      //           }`}
      //         >
      //           {children}
      //         </Tag>
      //       </div>
      //     );
      //   }),
      //   renderRule(isParagraph, ({ children, key }) => {
      //     if (!children) return null;
      //     return (
      //       <div className="max-w-[1300px] px-4 lg:px-6 xl:px-24" key={key}>
      //         <p>{children}</p>
      //       </div>
      //     );
      //   }),
      // renderRule(isList, ({ node, children, key }) => {
      //   if (!children) return null;
      //   return (
      //     <ul className="list-disc" key={key}>
      //       {children}
      //     </ul>
      //   );
      // }),
      // renderRule(isListItem, ({ node, children, key }) => {
      //   if (!children) return null;
      //   return (
      //     <li className="" key={key}>
      //       {children}
      //     </li>
      //   );
      // }),
      // ]}
    />
  );
}
