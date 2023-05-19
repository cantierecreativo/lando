"use client";

import { renderHTML } from "@/lib/utils";
import { anchorId } from "@/lib/anchors";
import Widget from "@/components/blocks/Widget";
import { useInView } from "react-intersection-observer";
import { uppercaseClass } from "@/lib/visual";
import { getFragmentData, graphql } from "@/gql";
import { VisualStyleRecord } from "@/gql/graphql";

const Focus_block = graphql(`
  fragment Focus_block on FocusBlockRecord {
    id
    _modelApiKey
    menuLabel
    mainTitle: title
    text
    elements {
      id
      title
      text
      image {
        responsiveImage(
          sizes: "(min-width: 1024px) 33vw, 100vw"
          imgixParams: { fit: crop, w: 800, h: 800, auto: [format, compress] }
        ) {
          ...DatoImage_responsiveImage
        }
      }
    }
  }
`);

type FocusProps = {
  block: any;
  visual: VisualStyleRecord | undefined | null;
};

export default function Focus(props: FocusProps) {
  const block = getFragmentData(Focus_block, props.block);
  const visual = props.visual;

  const { ref, inView, entry } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const inViewClass = inView ? "fade-down-on" : "fade-down-off";

  return (
    <section
      id={anchorId(block)}
      className="container scroll-mt-20 lg:scroll-mt-30 xl:scroll-mt-40 my-12 lg:my-24 xl:my-36"
    >
      <div
        ref={ref}
        className={`${inViewClass} fade-down max-w-xl mx-auto text-center mb-12`}
      >
        <h2
          className={`${uppercaseClass(
            visual
          )} font-heading font-medium text-accent break-words text-2xl mb-6 xl:text-2xl xl:mb-12`}
        >
          {block.mainTitle}
        </h2>
        <div className="xl:text-lg">{renderHTML(block.text)}</div>
      </div>
      <div className="lg:flex lg:justify-between lg:gap-12 xl:gap-18">
        {block.elements &&
          Object.values(block.elements).map((element) => (
            <Widget block={element} key={element.id} visual={visual} />
          ))}
      </div>
    </section>
  );
}
