export function renderHTML(dirt) {
  return <div dangerouslySetInnerHTML={{ __html: dirt }} />;
}
