import Image from "next/image";
import React from "react";
import image1 from "../../../../public/media/Doctors/doc1.png";
import image2 from "../../../../public/media/Doctors/doc2.png";
import image3 from "../../../../public/media/Doctors/doc3.jpg";
import image4 from "../../../../public/media/Doctors/doc4.jpg";
import image5 from "../../../../public/media/Doctors/doc5.jpg";
import image6 from "../../../../public/media/Doctors/17.jpg";

const GalleryView = () => {
  return (
    <section className="py-8 w-full">
      <h2 className="text-2xl font-bold text-center text-blue-500 mb-6">
        Gallary
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 px-4">
        {/* First Column */}
        <div className="col-span-1 md:col-span-1 row-span-2 flex flex-col gap-4">
          <Image
            src={image1}
            width={900}
            height={900}
            alt="Gallery Image 1"
            className="rounded-lg w-full h-[200px] object-cover"
          />
          <Image
            src={image2}
            width={900}
            height={900}
            alt="Gallery Image 2"
            className="rounded-lg w-full h-[200px] object-cover"
          />
        </div>

        {/* Second Column */}
        <div className="col-span-1 sm:col-span-2 md:col-span-2 row-span-2 flex justify-center items-center">
          <Image
            src={image3}
            width={900}
            height={900}
            alt="Gallery Image 3"
            className="rounded-lg w-full h-[400px] object-cover"
          />
        </div>

        {/* Third Column */}
        <div className="col-span-1 sm:col-span-2 md:col-span-2 row-span-2 flex flex-col gap-4">
          <div className="w-full">
            <Image
              src={image6}
              alt="Gallery Image 6"
              width={900}
              height={900}
              className="w-full h-[200px] rounded-lg object-cover"
            />
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="col-span-1">
              <Image
                src={image4}
                alt="Gallery Image 4"
                width={900}
                height={900}
                className="w-full h-[200px] rounded-lg object-cover"
              />
            </div>
            <div className="col-span-1 sm:col-span-1 md:col-span-2">
              <Image
                src={image5}
                alt="Gallery Image 5"
                width={900}
                height={900}
                className="w-full h-[200px] rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryView;
