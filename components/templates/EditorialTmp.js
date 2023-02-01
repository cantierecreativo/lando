import Hero from "components/headers/Hero";
import Menu from "components/layout/Menu";

export default function EditorialTmp({ locale, page, children }) {
  return (
    <>
      <Hero locale={locale} page={page} />
      <Menu page={page} locale={locale} />
      <div className="bg-black color-white">{children}</div>
    </>
  );
}
