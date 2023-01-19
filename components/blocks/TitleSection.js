import { renderHTML } from "lib/utils";

export default function TitleSection({ title, text }) {
  return (
    <>
      <div className="grid gap-4 content-center">
        {title && <h2 className="title text-center">{title}</h2>}
        {text && <h3 className="opacity-80 text-center">{renderHTML(text)}</h3>}
      </div>
    </>
  );
}
