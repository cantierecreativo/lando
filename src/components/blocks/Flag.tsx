"use client";

import { getFragmentData, graphql } from "@/gql";
import { renderHTML } from "@/lib/utils";
import { uppercaseClass } from "@/lib/visual";
import { useInView } from "react-intersection-observer";
import DatoImage from "../DatoImage";
import { VisualStyleRecord } from "@/gql/graphql";

const Flag_block = graphql(`
  fragment Flag_block on FlagBlockRecord {
    _modelApiKey
    menuLabel
    label
    text
    title
    alignRev
    colorsRev
    image {
      responsiveImage(
        sizes: "(min-width: 1024px) 50vw, 100vw"
        imgixParams: { fit: max, w: 800, h: 800, auto: [format, compress] }
      ) {
        ...DatoImage_responsiveImage
      }
    }
  }
`);

type FlagProps = {
  block: any;
  visual: VisualStyleRecord | undefined | null;
};

export default function FlagBlock(props: FlagProps) {
  const block = getFragmentData(Flag_block, props.block);
  const visual = props.visual;
  const image = block.image;
  const alignClass = block.alignRev ? "flex-row-reverse" : "";
  const labelClass = block.colorsRev ? "text-accent-rev" : "text-accent";
  const colorsClass = block.colorsRev ? "bg-back-rev text-rev" : "text-alt";
  const spacingClass = block.colorsRev
    ? "py-8 lg:py-24 xl:py-36"
    : "my-8 lg:my-24 xl:my-36";

  const { ref, inView, entry } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const inViewClass = inView ? "fade-down-on" : "fade-down-off";

  return (
    <section ref={ref} className={`${colorsClass} ${spacingClass}`}>
      <div
        className={`${alignClass} container lg:flex lg:items-center lg:gap-12 xl:gap-24`}
      >
        <div ref={ref} className={`${inViewClass} fade-down flex-1 my-8`}>
          <div
            className={`${labelClass} font-bold text-xs uppercase tracking-widest my-2`}
          >
            {block.label}
          </div>
          <h2
            className={`${uppercaseClass(
              visual
            )} font-heading font-medium break-words text-xl my-4 xl:text-2xl xl:my-6`}
          >
            {block.title}
          </h2>
          <div className="xl:text-lg">{renderHTML(block.text)}</div>
        </div>
        <div className="flex-1 my-8 lg:my-0">
          <div className="lg:px-12">
            <DatoImage fragment={image.responsiveImage as any} />
          </div>
        </div>
      </div>
    </section>
  );
}
