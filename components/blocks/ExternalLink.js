import t from "lib/locales";
import Link from "next/link";

export default function ExternalLink({
  children,
  url,
  title,
  className,
  locale,
}) {
  return (
    <Link
      href={url}
      className={className}
      rel="noreferrer"
      target="_blank"
      title={`${title} ${t("externaLink", locale)}`}
    >
      {children}
    </Link>
  );
}
