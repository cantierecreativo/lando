import Form from "components/form/Form";
import { renderHTML } from "lib/html";

export default function FormBlock({ locale, record }) {
  const { title, text } = record;
  return (
    <>
      <section className="container py-6 lg:py-12">
        <div className="grid md:grid-cols-8 lg:grid-cols-12">
          <div className="grid gap-3 md:col-span-6 md:col-start-2 xl:col-start-2 xl:col-span-4 content-start">
            {title && <h2 className="text-lg xl:text-2xl">{title}</h2>}
            {text && (
              <h3 className="text-inherit/80 xl:text-lg">{renderHTML(text)}</h3>
            )}
          </div>
          <div className="lg:col-span-10 lg:col-start-2 md:col-span-6 md:col-start-2 xl:col-start-7 xl:col-span-5">
            <Form locale={locale} />
          </div>
        </div>
      </section>
    </>
  );
}
