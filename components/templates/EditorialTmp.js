import Hero from "components/headers/Hero";
import Menu from "components/layout/Menu";
import OtherPages from "components/layout/OtherPages";

export default function EditorialTmp({ locale, page, children }) {
  return (
    <>
      <Hero locale={locale} page={page} />
      <Menu page={page} locale={locale} />
      <div className="bg-black color-white">{children}</div>
      <OtherPages locale={locale} pages={page.pagesRelated} />
    </>
  );
}
