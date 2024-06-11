import { useInView } from "react-intersection-observer";
import { anchorId } from "lib/anchors";
import VideoEmbedded from "./video/VideoEmbedded.js";
import VideoInternal from "./video/VideoInternal.js";

export default function VideoBlock({ locale, block }) {
  const { ref, inView, entry } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { externalVideo, internalVideo } = block;
  const inViewClass = inView ? "fade-down-on" : "fade-down-off";

  return (
    <section
      ref={ref}
      id={anchorId(block)}
      className={`${inViewClass} fade-down relative`}
    >
      <div className="container my-8 lg:my-20 xl:my-28">
        {externalVideo && (
          <div className="aspect-video xl:w-10/12 mx-auto">
            <VideoEmbedded video={externalVideo} />
          </div>
        )}
        {internalVideo && (
          <div className="aspect-video">
            <VideoInternal video={internalVideo} />
          </div>
        )}
      </div>
    </section>
  );
}
