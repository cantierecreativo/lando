import slugify from "@sindresorhus/slugify";

export function anchorId(block: any) {
  const label = block.menuLabel;
  return slugify(label);
}
