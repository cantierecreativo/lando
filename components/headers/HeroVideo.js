import { renderHTML } from "lib/utils";
import "@splidejs/splide/css/core";
import React, { useRef, useEffect } from "react";
import VideoPlayer from "components/video/VideoPlayer";
import VideoEmbedded from "components/video/VideoEmbedded";

export default function Hero({ page, visual }) {
  const { title, imageHero, textHero, carouselHero } = page;
  const slideShow = useRef();
  const thumbs = useRef();
  useEffect(() => {
    if (slideShow.current && thumbs.current && thumbs.current.splide) {
      slideShow.current.sync(thumbs.current.splide);
    }
  }, slideShow);

  return (
    <header className="container py-12 xl:py-24 carousel-artworks">
      <div className="grid gap-12 lg:flex lg:gap-0">
        <div className="lg:flex lg:gap-4 lg:flex-row-reverse lg:flex-none xl:w-1/2 lg:w-2/3 lg:justify-end">
          <div className="relative aspect-video w-full">
            {page.externalVideo?.url && (
              <VideoEmbedded record={page} video={page.externalVideo} />
            )}
            {page.video?.url && <VideoPlayer record={page} />}
          </div>
        </div>
        <div className="xl:w-1/2 xl:flex-none xl:pl-24">
          <h1 className="uppercase font-serif text-xl md:text-2xl lg:col-span-4 xl:text-4xl mb-2 xl:mb-6">
            {title}
          </h1>
          {textHero && (
            <h2 className="opacity-80 lg:col-span-6 lg:col-start-6 xl:mt-1">
              {renderHTML(textHero)}
            </h2>
          )}
        </div>
      </div>
    </header>
  );
}
