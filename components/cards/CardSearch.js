import { Image as DatoImage } from "react-datocms";
import Link from "next/link";
import translate from "lib/locales";

export default function CardCollectionSmall({
  hit,
  image,
  author,
  locale,
  epoch,
  n,
}) {
  return (
    <>
      {console.log("hit:", hit)}
      <Link
        href={`/${translate("collection_url", locale)}/${hit.slug}`}
        locale={locale}
      >
        <a title={hit.title} className="group">
          <div
            className={`${
              n == 0
                ? "relative md:border-t-0 xl:border-r-[2px] xl:after:absolute xl:after:left-0 xl:after:-bottom-[2px] xl:after:h-[2px] xl:after:w-[100vw] xl:after:bg-black"
                : n == 1
                ? "md:border-t-0 xl:border-r-[2px]"
                : n == 2
                ? "xl:border-t-0 xl:border-r-white"
                : n == 3
                ? "xl:border-r-[2px]"
                : n == 4
                ? "xl:border-r-[2px]"
                : "border-r-white"
            } h-full border-t-[2px] border-black py-10 px-6 md:py-8 md:group-odd:border-r-[2px] xl:p-14`}
          >
            <DatoImage
              data={image.responsiveImage}
              alt={image.responsiveImage.alt}
              title={image.responsiveImage.title}
            />
            <div className="flex justify-between overflow-hidden pt-2 md:min-h-20 lg:min-h-32 lg:pt-6">
              <div className="text-left">
                <h2 className="mt-1 font-serif text-xl duration-200 group-hover:text-red">
                  {hit.title}
                </h2>
                <h3 className="mt-2 mb-1 flex text-xs text-gray-dark duration-200 md:block">
                  {author.map((a) => (
                    <div key={a.id}>{a.title}</div>
                  ))}
                  <span className="px-1 md:hidden">-</span>
                  {epoch.map((e) => (
                    <div key={e.id}>{e.title}</div>
                  ))}
                </h3>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mt-1 h-6 w-6 -rotate-45 text-red duration-500 group-hover:rotate-0 lg:h-8 lg:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1"
              aria-hidden={true}
              focusable={false}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </a>
      </Link>
    </>
  );
}
