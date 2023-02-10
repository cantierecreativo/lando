import dynamic from "next/dynamic";
import React from "react";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import t from "lib/locales";

export default function VideoPlayer({ record, locale }) {
  const mp4Url = record.video.video.mp4Url;
  return (
    <ReactPlayer
      fluid={true}
      playing={true}
      autoPlay={false}
      width="100%"
      height="100%"
      light={record.imageHero?.responsiveImage.src}
      lightUrl={record.imageHero?.responsiveImage.src}
      url={mp4Url}
      controls={true}
      playIcon={
        <button>
          <div className="bg-yellow w-16 h-16 rounded-full centered">
            <div class="border-t-4 border-t-transparent border-l-8 border-black border-b-4 border-b-transparent scale-[2.5] centered"></div>
          </div>
          <div className="sr-only">{t("play_video", locale)}</div>
        </button>
      }
    />
  );
}
