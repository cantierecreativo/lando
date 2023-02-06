import { renderHTML } from "lib/utils";
import { Image as DatoImage } from "react-datocms";

export default function HeroNews({ page, visual }) {
  const { title, textHero } = page;

  return (
    <header className="container py-8 xl:py-12">
      <div className="grid gap-6">
        <h1 className="uppercase font-serif text-xl md:text-2xl xl:text-4xl">
          {title}
        </h1>
        {textHero && (
          <h2 className="opacity-80 xl:mt-1">{renderHTML(textHero)}</h2>
        )}
      </div>
    </header>
  );
}
