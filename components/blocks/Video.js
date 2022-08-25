import i18n from "lib/i18n";
import { renderHTML } from "lib/html";
import { uppercaseClass } from "lib/visual";
import { anchorId } from "lib/anchors";
import { useInView } from "react-intersection-observer";
import VideoPlayer from "components/video/VideoPlayer";
import VideoEmbedded from "components/video/VideoEmbedded";

export default function Text({ block, visual, locale }) {
  const alignClass = block.alignCenter ? "text-center mx-auto " : "";

  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const inViewClass = inView ? "fade-down-on" : "fade-down-off";

  return (
    <section
      id={anchorId(block)}
      ref={ref}
      className={`${inViewClass} fade-down container scroll-mt-20 lg:scroll-mt-30 xl:scroll-mt-40 my-12 lg:my-24 xl:my-36`}
    >
      {block.title && (
        <h2
          className={`${alignClass} ${uppercaseClass(
            visual
          )} font-heading font-medium text-accent max-w-2xl text-xl mb-6 xl:text-2xl xl:mb-12`}
        >
          {block.title}
        </h2>
      )}
      <div className={`${alignClass}`}>{renderHTML(block.text)}</div>
      <div className="relative inline-block w-full mt-6 xl:mt-12">
        <div className="mt-[56.25%]" />
        <div className="absolute top-0 h-full w-full">
          {block.videoExternal?.url && (
            <VideoEmbedded record={block} video={block.videoExternal} />
          )}
          {block.videoInternal?.url && <VideoPlayer record={block} />}
        </div>
      </div>
    </section>
  );
}
