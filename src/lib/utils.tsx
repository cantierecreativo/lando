"use client";

export function convertToSlug(label: string) {
  if (label)
    return label
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
}

export function renderHTML(dirt: string) {
  return <div dangerouslySetInnerHTML={{ __html: `${dirt ?? ""}` }} />;
}
