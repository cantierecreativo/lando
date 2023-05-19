"use client";

import { useInView } from "react-intersection-observer";
import { renderHTML } from "@/lib/utils";
import { anchorId } from "@/lib/anchors";
import DatoImage from "../DatoImage";
import { getFragmentData, graphql } from "@/gql";
import { VisualStyleRecord } from "@/gql/graphql";
import Link from "next/link";
import t from "@/lib/locales";

const Banner_block = graphql(`
  fragment Banner_block on BannerCtaBlockRecord {
    id
    _modelApiKey
    mainText: text
    mainTitle: title
    imageBg {
      responsiveImage(
        sizes: "100vw"
        imgixParams: { fit: crop, w: 1550, h: 800, auto: [format, compress] }
      ) {
        ...DatoImage_responsiveImage
      }
    }
    url: link
    cta
    menuLabel
  }
`);

type BannerProps = {
  block: any;
  visual: VisualStyleRecord | undefined | null;
  locale: string;
};

export default function Banner(props: BannerProps) {
  const block = getFragmentData(Banner_block, props.block);
  const { locale } = props;

  const { ref, inView, entry } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { mainTitle, mainText, imageBg, cta, url } = block;
  const inViewClass = inView ? "fade-down-on" : "fade-down-off";

  return (
    <section
      ref={ref}
      id={anchorId(block)}
      className={`${inViewClass} fade-down relative`}
    >
      <DatoImage
        fragment={imageBg.responsiveImage as any}
        layout="fill"
        objectFit="cover"
      />
      <div className="container py-8 lg:py-20 xl:py-28">
        <div className="py-12 px-4 z-10 relative bg-back text-center lg:px-12 xl:py-20 mx-auto max-w-prose">
          {mainTitle && (
            <h2 className="uppercase font-heading font-medium text-accent text-lg md:text-xl mb-6 xl:text-2xl xl:mb-12">
              {mainTitle}
            </h2>
          )}
          {mainText && (
            <h2 className="text-sm md:text-base mb-6 xl:mb-12">
              {renderHTML(mainText)}
            </h2>
          )}
          {url && (
            <Link
              className="inline-flex font-heading text-button bg-button-back uppercase tracking-wide transition-opacity hover:opacity-80 text-sm py-4 px-4"
              href={url}
              target="_blank"
              rel="noreferrer noopener"
              title={`${mainTitle} ${t("linkExternal", locale)}`}
            >
              {cta}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
