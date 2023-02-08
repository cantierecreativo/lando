import InternalLink from "components/blocks/InternalLink";
import { Image as DatoImage } from "react-datocms";

export default function ArtworkCard({ locale, record }) {
  const { title, author, year } = record;
  const image = record.carouselHero[0].image;

  return (
    <>
      <InternalLink
        element={record}
        locale={locale}
        className="group"
        label={title}
      >
        <div className="h-full">
          <div className="border border-white/20 bg-white/5 h-52 relative md:h-[350px] xl:h-[400px]">
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
            <h2 className="font-serif text-xl">{title}</h2>
            <h3 className="text-xs xl:text-base">{year}</h3>
            {author && (
              <h4 className="text-xs font-bold xl:text-base">{author}</h4>
            )}
            {record.typology.title} --
            {record.room.title}
          </div>
        </div>
      </InternalLink>
    </>
  );
}