import { Image as DatoImage } from "react-datocms";

export default function LogosBlock({ locale, record }) {
  return (
    <>
      <section className="container xl:grid xl:grid-cols-12 py-6 lg:py-12">
        <div className="xl:col-span-10 xl:col-start-2">
          {record.title && (
            <h2 className="text-lg mb-8 xl:text-2xl">{record.title}</h2>
          )}

          <div className="grid md:grid-cols-3 lg:grid-cols-5 grid-cols-2 gap-6 lg:mt-12">
            {record.images.map((img) => (
              <div className="relative h-16 w-full lg:h-20" key={img.id}>
                <DatoImage
                  data={img.responsiveImage}
                  alt={img.alt}
                  title={img.title}
                  layout="fill"
                  objectPosition="center"
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
