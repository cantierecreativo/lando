import i18n from "lib/i18n";

export default function Skiplinks({ locale }) {
  return (
    <div className="relative z-40">
      <a href="#content" className="skiplink">
        {i18n.skipLinks.content[locale]}
      </a>
      <a href="#footer" className="skiplink">
        {i18n.skipLinks.footer[locale]}
      </a>
    </div>
  );
}
