import Link from "next/link";
import InternalLink from "components/blocks/InternalLink";
import Icon from "components/layout/Icon";

export default function Breadcrumbs({ page, parent, grandParent, locale }) {
  const breadcrumbItemClass = "gap-2 items-center text-xxs lg:text-xs";
  return (
    <nav
      aria-label="Breadcrumbs"
      className="py-3 border-b border-white/20 lg:py-4"
    >
      <div className="container">
        <ol className="flex items-center gap-1">
          <li className={breadcrumbItemClass}>
            <div className="flex items-center gap-1">
              <Link
                href={`${locale === "en" ? "/en" : "/"}`}
                className="duration-200 xl:hover:text-yellow fill-white hover:fill-yellow"
                title="Homepage"
                key="homepage"
              >
                <Icon name="home" size="28" />
              </Link>
              {page.model !== "homepage" && (
                <Icon name="down" className="-rotate-90 fill-siena" size="23" />
              )}
            </div>
          </li>
          {grandParent && (
            <li className={breadcrumbItemClass}>
              <div className="flex max-w-[150px] items-center gap-1">
                <InternalLink
                  locale={locale}
                  label={grandParent.title}
                  element={grandParent}
                  className="truncate duration-200 xl:hover:text-yellow"
                >
                  {grandParent.menuLabel}
                </InternalLink>
                <Icon name="down" className="-rotate-90 fill-siena" size="23" />
              </div>
            </li>
          )}
          {parent && (
            <li className={breadcrumbItemClass}>
              <div className="flex max-w-[150px] items-center gap-1">
                <InternalLink
                  locale={locale}
                  label={parent.title}
                  element={parent}
                  slug={parent.slug}
                  className="truncate duration-200 xl:hover:text-yellow"
                >
                  {parent.menuLabel !== undefined
                    ? parent.menuLabel
                    : parent.title}
                </InternalLink>
                <Icon name="down" className="-rotate-90 fill-siena" size="23" />
              </div>
            </li>
          )}
          {page.model !== "homepage" && (
            <li
              className={`${breadcrumbItemClass} truncate`}
              aria-current="page"
            >
              {page.title}
            </li>
          )}
        </ol>
      </div>
    </nav>
  );
}
