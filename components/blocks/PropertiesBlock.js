import { renderHTML } from "lib/utils";

export default function PropertiesBlock({ locale, record }) {
  return (
    <>
      <div className="container py-6 lg:py-12">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-10 xl:col-start-2">
            {record.title && (
              <h2 className="text-lg xl:text-2xl">{record.title}</h2>
            )}
            <div className="grid gap-5 mt-8 xl:mt-12">
              {record.blocks.map((b) =>
                record.style == true ? (
                  <div key={b.id} className="grid gap-1">
                    <div className="xl:text-lg font-semibold">
                      {renderHTML(b.title)}
                    </div>
                    <div className="text-white/80 xl:text-lg">
                      {renderHTML(b.text)}
                    </div>
                  </div>
                ) : (
                  <div key={b.id} className="grid gap-1 xl:grid-cols-10">
                    <div className="xl:text-lg xl:col-span-3 font-semibold">
                      {renderHTML(b.title)}
                    </div>
                    <div className="text-white/80 xl:text-lg xl:col-span-7">
                      {renderHTML(b.text)}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
