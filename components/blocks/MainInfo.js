import { renderHTML } from "lib/utils";
import Icon from "components/layout/Icon";

export default function MainInfo({ locale, site }) {
  const info = site.organization;
  return (
    <>
      <section className="container pb-12">
        <div className="grid gap-3">
          <div className="flex gap-2">
            <div className="w-9 h-9 flex-none rounded-full bg-white/10 relative">
              <Icon name="clock" size="23" className="centered" fill="white" />
            </div>
            <div className="opacity-80">{renderHTML(info.hour)} </div>
          </div>
        </div>
      </section>
    </>
  );
}
