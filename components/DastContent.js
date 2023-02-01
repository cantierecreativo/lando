import { StructuredText } from "react-datocms";
import {
  renderRule,
  isHeading,
  isThematicBreak,
  isList,
  isBlockquote,
  isParagraph,
  isListItem,
} from "datocms-structured-text-utils";

import ArtworksBlock from "./blocks/ArtworksBlock";
import AttachmentsBlock from "./blocks/AttachmentsBlock";
import Banner from "./blocks/Banner";
import CardBlock from "./blocks/CardBlock";
import FaqBlock from "./blocks/FaqBlock";
import FlagButtonBlock from "./blocks/FlagButtonBlock";
import GalleryBlock from "./blocks/GalleryBlock";
import LogosBlock from "./blocks/LogosBlock";
import MilestonBlock from "./blocks/MilestonBlock";
import PropertiesBlock from "./blocks/PropertiesBlock";
import Icon from "./layout/Icon";

export default function DastContent({ content, locale, site }) {
  return (
    <StructuredText
      data={content}
      renderBlock={({ record }) => {
        switch (record.model) {
          case "artworks_block":
            return (
              <div>
                <ArtworksBlock record={record} locale={locale} site={site} />
              </div>
            );
          case "attachments_block":
            return (
              <div>
                <AttachmentsBlock record={record} locale={locale} />
              </div>
            );
          case "banner_block":
            return (
              <div>
                <Banner record={record} locale={locale} />
              </div>
            );
          case "card_block":
            return (
              <div>
                <CardBlock record={record} locale={locale} />
              </div>
            );
          case "faq_block":
            return (
              <div>
                <FaqBlock record={record} locale={locale} />
              </div>
            );
          case "flag_button_block":
            return (
              <div>
                <FlagButtonBlock record={record} locale={locale} />
              </div>
            );
          case "gallery_block":
            return (
              <div>
                <GalleryBlock record={record} locale={locale} />
              </div>
            );
          case "logos_block":
            return (
              <div>
                <LogosBlock record={record} locale={locale} />
              </div>
            );
          case "mileston_block":
            return (
              <div>
                <MilestonBlock record={record} locale={locale} />
              </div>
            );
          case "properties_block":
            return (
              <div>
                <PropertiesBlock record={record} locale={locale} />
              </div>
            );
          default:
            return <></>;
        }
      }}
      customRules={[
        renderRule(isHeading, ({ node, children, key }) => {
          const Tag = `h${node.level}`;
          let classTitle;
          if (node.level == 2) {
            classTitle = "text-lg xl:text-2xl";
          } else classTitle = "font-bold xl:text-lg";
          return (
            <div key={key} className="container xl:grid xl:grid-cols-12">
              <div className="xl:col-span-10 xl:col-start-2">
                <Tag className={classTitle}>{children}</Tag>
              </div>
            </div>
          );
        }),
        renderRule(isParagraph, ({ children, key }) => {
          return (
            <div key={key} className="container xl:grid xl:grid-cols-12 ">
              <div className="xl:col-span-10 xl:col-start-2">
                <p className="text-white/80 xl:text-lg">{children}</p>
              </div>
            </div>
          );
        }),
        renderRule(isThematicBreak, () => {
          return (
            <div className="container ">
              <hr className="opacity-40" />
            </div>
          );
        }),
        renderRule(isBlockquote, ({ node, children, key }) => {
          return (
            <blockquote
              key={key}
              className="px-4 py-6 container xl:grid xl:grid-cols-12 lg:py-12"
            >
              <div className="border border-white/10 py-12 xl:py-20 px-4 xl:col-span-10 xl:col-start-2">
                <div className="px-4 mb-2 xl:px-20">
                  <Icon
                    name="quote"
                    className="xl:scale-150 ml-1"
                    size="25"
                    fill="#E0AA4C"
                  />
                </div>
                {children}
                <footer className="text-xxs uppercase font-semibold pt-6 px-4 xl:px-20">
                  {node.attribution}
                </footer>
              </div>
              {console.log("node:", node)}
            </blockquote>
          );
        }),
      ]}
    />
  );
}
