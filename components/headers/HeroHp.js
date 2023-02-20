import { Image as DatoImage } from "react-datocms";
import Image from "next/image";
import { renderHTML } from "lib/utils";

export default function HeroHp({ locale, page }) {
  return (
    <>
      <header className="px-4 py-3 lg:py-0 mx-auto">
        <div className="relative lg:after:absolute lg:after:inset-0 lg:after:bg-black/60 max-w-[1865px] mx-auto">
          <div className="h-80 md:h-[600px] xl:h-[550px] 2xl:h-[750px] w-full relative ">
            <div className="relative w-full h-full z-10 md:w-[80%] lg:w-1/2">
              <Image
                priority
                src="/images/logo_hero.svg"
                alt="Logo Museo Civico Siena"
                layout="fill"
                objectFit="contain"
                objectPosition="bottom"
              />
            </div>
            <DatoImage
              className="z-0"
              data={page.imageHero.responsiveImage}
              alt={page.imageHero.responsiveImage.alt}
              title={page.imageHero.responsiveImage.title}
              layout="fill"
              objectFit="cover"
              lazyLoad={false}
            />
          </div>
          <div className="py-10 xl:px-6 2xl:px-12 grid gap-4 lg:absolute lg:z-20 lg:right-6 lg:w-2/5 lg:text-right lg:top-1/2 lg:-translate-y-1/2">
            <h1 className="title">{page.titleHero}</h1>
            <h2 className="opacity-80">{renderHTML(page.textHero)}</h2>
          </div>
        </div>
      </header>
    </>
  );
}
