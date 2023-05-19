"use client";

import { uppercaseClass } from "@/lib/visual";
import { anchorId } from "@/lib/anchors";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import DatoImage from "../DatoImage";
import { getFragmentData, graphql } from "@/gql";
import { VisualStyleRecord } from "@/gql/graphql";

const Partners_block = graphql(`
  fragment Partners_block on PartnersBlockRecord {
    id
    _modelApiKey
    menuLabel
    title
    images {
      format
      url
      title
      alt
      responsiveImage(
        sizes: "230px"
        imgixParams: { fit: clip, h: 100, auto: [format, compress] }
      ) {
        ...DatoImage_responsiveImage
      }
    }
  }
`);

type PartnersProps = {
  block: any;
  visual: VisualStyleRecord | undefined | null;
  locale: string;
};

export default function Partners(props: PartnersProps) {
  const block = getFragmentData(Partners_block, props.block);
  const { locale, visual } = props;
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const inViewClass = inView ? "fade-down-on" : "fade-down-off";

  return (
    <section
      id={anchorId(block)}
      ref={ref}
      className={`${inViewClass} fade-down scroll-mt-20 lg:scroll-mt-30 xl:scroll-mt-40 py-6 lg:py-12 xl:py-24 bg-white`}
    >
      <div className="container">
        <h2
          className={`${uppercaseClass(
            visual
          )} text-rev font-bold text-sm uppercase tracking-widest my-2`}
        >
          {block.title}
        </h2>
        <div className="grid md:grid-cols-5 grid-cols-2 gap-2 mt-4 lg:mt-12">
          {block.images.map((img, c) => (
            <div className="relative h-14 lg:h-20" key={c}>
              {img.format === "svg" ? (
                <div className="w-[90%] h-[90%] relative mx-auto mt-[2%]">
                  <Image
                    src={img.url}
                    layout="fill"
                    title={img.title}
                    alt={img.alt}
                  />
                </div>
              ) : (
                <DatoImage
                  fragment={img.responsiveImage as any}
                  objectFit="contain"
                  className="mx-auto"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
