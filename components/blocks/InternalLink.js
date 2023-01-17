import Link from "next/link";
import { resolveLink } from "lib/utils";

export default function InternalLink({
  children,
  element,
  label,
  className,
  locale,
  slug = null,
}) {
  return (
    <Link
      title={label}
      className={className}
      href={resolveLink(element, locale, slug)}
    >
      {children}
    </Link>
  );
}
