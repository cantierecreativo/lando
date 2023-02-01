import DastContent from "components/DastContent";
import { convertToSlug } from "lib/utils";

export default function Section({ locale, blocks, site }) {
  return (
    <>
      <div className="py-12 lg:py-20 gap-24 grid">
        {blocks.map((b) => (
          <div
            className="gap-6 grid scroll-mt-24"
            id={convertToSlug(b.label)}
            key={b.id}
          >
            <div className="grid gap-2 lg:gap-5 container text-center lg:py-6">
              {b.title && (
                <h2 className="font-serif text-xl lg:text-4xl">{b.title}</h2>
              )}
              {b.subtitle && <h3 className="text-white/80">{b.subtitle}</h3>}
            </div>
            <DastContent content={b.content} locale={locale} site={site} />
          </div>
        ))}
      </div>
    </>
  );
}
