import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import t from "lib/locales";
import { resolveLink } from "lib/utils";
import Script from "next/script";

export default function Footer({ locale, site }) {
  const data = site.footer;
  const year = new Date().getFullYear();
  return (
    <>
      <footer
        id="footer"
        data-datocms-noindex
        className="border-t border-black"
      >
        <div className="border-y border-white">
          <div className="mx-auto xl:container">
            <div className="lg:flex xl:justify-between">
              <div className="text-xs opacity-70">
                <span>© {year} xxxxx</span>
                <span className="px-1"> - </span>
                <span>P.IVA XXXXXXXXX</span>
              </div>
              <div className="text-xs opacity-70">
                <a
                  href="//www.cantierecreativo.net"
                  title={`${t(
                    "externalLink",
                    locale
                  )} Cantiere Creativo Agenzia web Firenze`}
                  className="duration-200"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Design & dev Cantiere Creativo
                </a>
                <span className="px-1"> - </span>
                <a
                  href="//datocms.com"
                  title={`${t(
                    "externalLink",
                    locale
                  )} Cantiere Creativo Agenzia web Firenze`}
                  className="duration-200"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Made with DatoCMS
                </a>
              </div>
              <div className="text-xs opacity-70">
                <a
                  href={`//www.iubenda.com/privacy-policy/${t(
                    "cookiePolicyId"
                  )}`}
                  title={`${t("externaLink", locale)} Privacy Policy`}
                  className="iubenda-nostyle no-brand iubenda-embed iubenda-noiframe duration-200"
                >
                  Privacy Policy
                </a>
                <span className="px-1"> - </span>
                <a
                  href={`//www.iubenda.com/privacy-policy/${t(
                    "cookiePolicyId"
                  )}/cookie-policy`}
                  title={`${t("externaLink", locale)} Cookie Policy`}
                  className="iubenda-nostyle no-brand iubenda-embed iubenda-noiframe duration-200"
                >
                  Cookie Policy
                </a>
              </div>
              {/* <Script
                id="modal-iubenda"
                dangerouslySetInnerHTML={{
                  __html: `(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);`,
                }}
              /> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
