"use client";

import { VisualStyleRecord } from "@/gql/graphql";
import { renderHTML } from "@/lib/utils";
import DatoImage from "../DatoImage";
import { uppercaseClass } from "@/lib/visual";
import { useInView } from "react-intersection-observer";

type WidgetProps = {
  block: any;
  visual: VisualStyleRecord | undefined | null;
};

export default function Widget(props: WidgetProps) {
  const { block, visual } = props;
  const image = block.image;
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const inViewClass = inView ? "fade-down-on" : "fade-down-off";

  return (
    <section className="container text-center my-12 lg:my-0">
      <DatoImage fragment={image.responsiveImage} />
      <div ref={ref} className={`${inViewClass} fade-down`}>
        <h3
          className={`${uppercaseClass(
            visual
          )} font-heading font-medium uppercase break-words text-alt text-lg my-4 xl:text-[25px]`}
        >
          {block.title}
        </h3>
        <div className="text-sm">{renderHTML(block.text)}</div>
      </div>
    </section>
  );
}
