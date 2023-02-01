import Link from "next/link";
import { Fragment } from "react";
import { resolveLink } from "lib/utils";
import t from "lib/locales";
import Icon from "./Icon";

function LanguageSwitcher({ page, locale }) {
  const locales = ["it", "en"];
  const alts = page.alts;
  return (
    <>
      {locales &&
        locales.map((l, i) => {
          const link = alts?.find((alt) => alt.locale === l)?.value || null;
          if ((alts && alts.length == 1) || locale === l) {
            return;
          } else
            return (
              <Fragment key={l}>
                <Link
                  className="text-xxs font-bold lg:text-sm lg:font-normal"
                  href={resolveLink(page, l, link)}
                >
                  <div className="hidden lg:flex items-center">
                    {t(`${l}`, locale)}
                    <Icon
                      name="down"
                      className="mx-auto fill-white -rotate-90"
                      fill="white"
                      size="25"
                    />
                  </div>
                </Link>
              </Fragment>
            );
        })}
    </>
  );
}

export default LanguageSwitcher;
