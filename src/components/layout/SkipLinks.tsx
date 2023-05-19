"use client";

import t from "@/lib/locales";

export default function Skiplinks(locale: any) {
  return (
    <div className="relative z-40">
      <a href="#content" className="skiplink">
        {t("skipContent", locale)}
      </a>
      <a href="#footer" className="skiplink">
        {t("skipFooter", locale)}
      </a>
    </div>
  );
}
