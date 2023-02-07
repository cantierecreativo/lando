import { Image as DatoImage } from "react-datocms";

export default function ImageBlock({ record }) {
  return (
    <>
      <div className="container xl:grid xl:grid-cols-12 py-6 lg:py-12">
        <div className="xl:col-span-10 xl:col-start-2">
          <DatoImage
            className="w-100"
            data={record.image.responsiveImage}
            alt={record.image.responsiveImage.alt}
            title={record.image.responsiveImage.title}
            layout="responsive"
          />
        </div>
      </div>
    </>
  );
}
