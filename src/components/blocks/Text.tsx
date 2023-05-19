"use client";

import { renderHTML } from "@/lib/utils";
import { uppercaseClass } from "@/lib/visual";
import { anchorId } from "@/lib/anchors";
import { useInView } from "react-intersection-observer";
import { graphql } from "@/gql";
import { VisualStyleRecord } from "@/gql/graphql";
import { getFragmentData } from "../../gql/fragment-masking";
import t from "@/lib/locales";

const Text_block = graphql(`
  fragment Text_block on TextBlockRecord {
    id
    _modelApiKey
    menuLabel
    title
    mainText: text
    alignCenter
    colorsRev
    link {
      label
      url
    }
  }
`);

type TextProps = {
  block: any;
  visual: VisualStyleRecord | undefined | null;
  locale: string;
};

export default function Text(props: TextProps) {
  const block = getFragmentData(Text_block, props.block);
  const { visual, locale } = props;
  const alignClass = block.alignCenter ? "text-center mx-auto " : "";
  const colorsClass = block.colorsRev ? "bg-back-rev text-rev" : "text-alt";

  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const inViewClass = inView ? "fade-down-on" : "fade-down-off";

  return (
    <section
      id={anchorId(block)}
      ref={ref}
      className={`${inViewClass} ${colorsClass} fade-down scroll-mt-20 lg:scroll-mt-30 xl:scroll-mt-40`}
    >
      <div className="container py-12 lg:py-24 xl:py-36">
        <h2
          className={`${alignClass} ${colorsClass} ${uppercaseClass(
            visual
          )} font-heading font-medium text-accent max-w-2xl text-xl mb-6 xl:text-2xl xl:mb-12`}
        >
          {block.title}
        </h2>
        <div className={`${alignClass} max-w-xl xl:text-lg`}>
          {block.mainText && renderHTML(block.mainText)}
          {block.link && (
            <div className="mt-8">
              <a
                className="inline-flex rounded text-button bg-button-back uppercase tracking-wide transition-opacity hover:opacity-80 text-sm py-4 px-6 xl:text-lg"
                href={block.link.url}
                target="_blank"
                rel="noreferrer noopener"
                title={`${t("linkExternal", locale)} ${block.link.label}`}
              >
                {block.link.label}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
