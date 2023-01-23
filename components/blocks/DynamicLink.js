import ExternalLink from "./ExternalLink";
import InternalLink from "./InternalLink";

export default function DynamicLink({ children, link, className, locale }) {
  return (
    <>
      {link.model === "internal_link" ? (
        <InternalLink
          element={link.link}
          className={className}
          locale={locale}
          label={link.label}
        >
          {children}
        </InternalLink>
      ) : (
        <ExternalLink
          url={link.url}
          title={link.label}
          locale={locale}
          className={className}
        >
          {children}
        </ExternalLink>
      )}
    </>
  );
}
