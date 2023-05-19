import { getFragmentData, graphql } from "@/gql";
import { renderHTML } from "@/lib/utils";
import DatoImage from "../DatoImage";
import { uppercaseClass } from "@/lib/visual";
import { useInView } from "react-intersection-observer";
import { VisualStyleRecord } from "@/gql/graphql";

const Product_block = graphql(`
  fragment Product_block on ProductBlockRecord {
    id
    _modelApiKey
    label
    title
    text
    subTitle
    subText
    alignRev
    image {
      responsiveImage(
        sizes: "(min-width: 1024px) 50vw, 80vw"
        imgixParams: { fit: max, h: 800, auto: [format, compress] }
      ) {
        ...DatoImage_responsiveImage
      }
    }
    smallImages {
      id
      responsiveImage(
        sizes: "100vw"
        imgixParams: { fit: clip, h: 70, auto: [format, compress] }
      ) {
        ...DatoImage_responsiveImage
      }
    }
  }
`);

type ProductProps = {
  block: any;
  visual: VisualStyleRecord | undefined | null;
};

export default function Product(props: ProductProps) {
  const block = getFragmentData(Product_block, props.block);
  const image = block.image;
  const visual = props.visual;
  const alignClass = block.alignRev ? "lg:flex-row-reverse" : "lg:flex-row";
  const contentClass = block.alignRev ? "product-bg-rev" : "product-bg";

  const { ref, inView, entry } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const inViewClass = inView ? "fade-down-on" : "fade-down-off";

  return (
    <section className="my-8 lg:my-24 xl:my-36">
      <div
        className={`${alignClass} xl:container flex flex-col-reverse lg:items-center`}
      >
        <div
          ref={ref}
          className={`${contentClass} ${inViewClass} fade-down container flex-1 px-8 py-8 relative lg:py-24 lg:pl-24 lg:flex-auto lg:w-1/2`}
        >
          <div className="font-bold text-xs text-accent uppercase tracking-widest my-2">
            {block.label}
          </div>
          <h2
            className={`${uppercaseClass(
              visual
            )} font-heading font-medium text-alt break-words text-xl xl:text-2xl my-4`}
          >
            {block.title}
          </h2>
          <div className="my-3 text-alt">{renderHTML(block.text)}</div>
          {block.subTitle && (
            <h3 className="font-medium uppercase text-sm my-3">
              {block.subTitle}
            </h3>
          )}
          {block.subText && (
            <div className="my-3 text-alt">{renderHTML(block.subText)}</div>
          )}
          {block.smallImages && (
            <div className="flex gap-8 mt-6">
              {Object.values(block.smallImages).map((smallImage) => (
                <DatoImage
                  key={smallImage.id}
                  fragment={smallImage.responsiveImage as any}
                />
              ))}
            </div>
          )}
        </div>
        <div className="flex justify-center flex-1 lg:my-0 lg:flex-auto lg:w-1/2">
          <div className="w-48 mx-auto text-center md:w-60 lg:w-full lg:px-12">
            <DatoImage
              fragment={image.responsiveImage as any}
              className="inline-block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
