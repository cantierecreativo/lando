import { useInView } from "react-intersection-observer";
import { renderHTML } from "lib/html";
import { anchorId } from "lib/anchors";
import dynamic from "next/dynamic";

const DynamicLazyMap = dynamic(() => import("./MyMap"), {
  loading: () => (
    <div className="w-full bg-white relative">
      <svg
        className="animate-spin h-5 w-5 mr-3 absolute -mt-2.5 -ml-2.5 inset-1/2"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-0"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className=""
          fill="fill-current text-violet"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  ),
  ssr: false,
});

export default function MapBlock({ locale, block }) {
  const { ref, inView, entry } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { title, text, map, token, style, zoom } = block;
  const inViewClass = inView ? "fade-down-on" : "fade-down-off";

  return (
    <section
      ref={ref}
      id={anchorId(block)}
      className={`${inViewClass} fade-down relative`}
    >
      <div className="container my-8 lg:my-20 xl:my-28">
        <div className="z-10 relative bg-back text-center mx-auto">
          {title && (
            <h2 className="uppercase font-heading font-medium text-accent text-lg md:text-xl mb-6 xl:text-2xl xl:mb-12">
              {title}
            </h2>
          )}
          {text && (
            <h2 className="text-sm md:text-base mb-6 xl:mb-12">
              {renderHTML(text)}
            </h2>
          )}
          <div className="relative aspect-square lg:aspect-video xl:w-10/12 mx-auto">
            <DynamicLazyMap
              latitude={map.latitude}
              longitude={map.longitude}
              token={token}
              style={style}
              zoom={zoom}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
