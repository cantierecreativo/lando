import HeroNewsDetail from "components/headers/HeroNewsDetail";
import Menu from "components/layout/Menu";
import OtherPages from "components/layout/OtherPages";

export default function NewsTmp({ locale, page, children }) {
  return (
    <>
      <HeroNewsDetail locale={locale} page={page} />
      <Menu page={page} locale={locale} color="light" />
      <div className="bg-yellow-light text-black formatted-text">
        {children}
      </div>
    </>
  );
}
