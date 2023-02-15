export default function Tags({ locale, tags }) {
  return (
    <>
      <div className="container pb-12 lg:pb-20">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-5 lg:col-start-2 lg:grid lg:grid-cols-6 lg:gap-12">
            <div className="text-lg mb-3">Tags</div>
            <div className="flex flex-wrap gap-4 lg:col-span-5">
              {tags.map((t) => (
                <div
                  className="rounded-3xl border border-white/40 uppercase text-xs p-3 px-5"
                  key={t.id}
                >
                  {t.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
