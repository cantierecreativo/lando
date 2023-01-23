import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import t from "lib/locales";
import { resolveLink } from "lib/utils";
import Script from "next/script";
import InternalLink from "components/blocks/InternalLink";

function RenderNavItem(locale, item) {
  if (!item.linkMenu) {
    return (
      <>
        <div className="grid content-start gap-4">
          <div
            key={item.id}
            className="uppercase text-xs font-normal xl:text-base"
          >
            {item.labelMenu}
          </div>
          <div className="grid text-xs gap-2 xl:text-base">
            {item.itemsMenu.map((p) => (
              <Link
                title={p.title}
                onClick={() => close()}
                key={p.id}
                href={resolveLink(p.linkMenu, locale)}
              >
                <span className="hover:opacity-100 opacity-80 duration-75">
                  {p.labelMenu}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default function Footer({ locale, site }) {
  const data = site.footer;
  const year = new Date().getFullYear();
  return (
    <>
      <div className="bg-black/20">
        <nav className="container">
          <div className="grid py-14 grid-cols-2 md:grid-cols-5 content-start gap-y-8 gap-x-2">
            {site.menu.groupsMenu.map((m) => RenderNavItem(locale, m))}
          </div>
        </nav>
      </div>
      <footer id="footer" data-datocms-noindex>
        <div className="container py-8">
          <div className="grid gap-6 md:flex md:justify-between">
            <div className="text-xs text-white/80 xl:flex xl:justify-between xl:gap-2">
              <span className="">© {year} Museo Civico di Siena</span>
              <span className="px-1 xl:px-0"> - </span>
              <span className="">P.IVA</span>
              <div className="">
                <a
                  href="//www.cantierecreativo.net"
                  title={`${t(
                    "externalLink",
                    locale
                  )} Cantiere Creativo Agenzia web Firenze`}
                  className="duration-200 underline hover:text-white"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Design & dev Cantiere Creativo
                </a>
                <span className="px-1"> - </span>
                <a
                  href="//datocms.com"
                  title={`${t("externalLink", locale)} DatoCMS headless CMS`}
                  className="duration-200 underline hover:text-white"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Made with DatoCMS
                </a>
              </div>
            </div>
            <div className="text-xs text-white/80">
              <a
                href={`//www.iubenda.com/privacy-policy/${t("cookiePolicyId")}`}
                title={`${t("externaLink", locale)} Privacy Policy`}
                className="underline duration-200 hover:text-white"
              >
                Privacy Policy
              </a>
              <span className="px-1"> - </span>
              <a
                href={`//www.iubenda.com/privacy-policy/${t(
                  "cookiePolicyId"
                )}/cookie-policy`}
                title={`${t("externaLink", locale)} Cookie Policy`}
                className="underline duration-200 hover:text-white"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
