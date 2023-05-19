"use client";

import { uppercaseClass } from "@/lib/visual";
import DatoImage from "../DatoImage";
import { VisualStyleRecord } from "@/gql/graphql";
import { graphql, getFragmentData } from "@/gql";

const Header_block = graphql(`
  fragment Header_block on HeroImageBlockRecord {
    id
    _modelApiKey
    title
    alignCenter
    hideTitle
    image {
      responsiveImage(
        sizes: "100vw"
        imgixParams: { fit: max, w: 1550, h: 850, auto: [format, compress] }
      ) {
        ...DatoImage_responsiveImage
      }
    }
  }
`);

type HeaderProps = {
  block: any;
  visual: VisualStyleRecord | undefined | null;
};

export default function HeroImage(props: HeaderProps) {
  const data = getFragmentData(Header_block, props.block);
  const visual = props.visual;
  const image = data.image;
  const alignClass = data.alignCenter ? "text-center mx-auto " : "";
  const titleBgClass = data.hideTitle
    ? ""
    : "after:absolute after:z-10 after:inset-0 after:bg-gradient-to-t after:from-black/60";
  const titleClass = data.hideTitle ? "sr-only" : "";

  return (
    <header className={`${titleBgClass} mx-auto max-w-screen-2xl relative`}>
      <div className="cover">
        <DatoImage
          layout="fill"
          objectFit="cover"
          fragment={image.responsiveImage as any}
        />
        <div
          className={`${titleClass} absolute z-20 inset-x-0 bottom-0 container`}
        >
          <h1
            className={`${alignClass} ${uppercaseClass(
              visual
            )} max-w-[17ch] font-medium font-heading text-white py-4 text-xl lg:py-8 lg:text-2xl xl:text-3xl`}
          >
            {data.title}
          </h1>
        </div>
      </div>
    </header>
  );
}
