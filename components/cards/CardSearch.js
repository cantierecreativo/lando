import { Image as DatoImage } from "react-datocms";
import InternalLink from "components/blocks/InternalLink";

export default function CardCollectionSmall({
  hit,
  author,
  locale,
  typology,
  room,
  item,
}) {
  const image = item.carouselHero[0].image;
  return (
    <>
      <InternalLink
        element={item}
        locale={locale}
        className="group"
        label={hit.title}
      >
        <div className="h-full">
          <div className="border border-white/20 bg-white/5 h-72 relative md:h-[350px] xl:h-[400px]">
            <div className="w-[86%] h-[80%] centered">
              <DatoImage
                data={image.responsiveImage}
                alt={image.responsiveImage.alt}
                title={image.responsiveImage.title}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="py-4 text-white z-30 relative grid gap-2 xl:gap-3">
            <h2 className="font-serif text-xl">{hit.title}</h2>
            <h3 className="text-xs xl:text-base">{item.year}</h3>
            {author && (
              <h4 className="text-xs font-bold xl:text-base">{author}</h4>
            )}
            {/* {typology.title} --
            {room.title} */}
          </div>
        </div>
      </InternalLink>
    </>
  );
}
