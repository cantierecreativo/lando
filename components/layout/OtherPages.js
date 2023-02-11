import Button from "./Button";
import InternalLink from "components/blocks/InternalLink";
import t from "lib/locales";

export default function OtherPages({ locale, pages }) {
  return (
    <>
      <div className="md:grid md:grid-cols-2">
        {pages?.map((p, n) => (
          <InternalLink
            key={p.id}
            element={p}
            label={p.title}
            slug={p.slug}
            locale={locale}
            className="group"
          >
            <div
              className={`${
                n === 0 ? "bg-yellow" : "bg-white"
              } text-center p-8 text-black py-12 md:py-24 2xl:py-32`}
            >
              <div className="font-serif text-xl pb-4 md:pb-6 lg:text-3xl">
                {p.title}
              </div>
              <Button
                label={t("more", locale)}
                color="transparentInv"
                arrow={true}
              />
            </div>
          </InternalLink>
        ))}
      </div>
    </>
  );
}
