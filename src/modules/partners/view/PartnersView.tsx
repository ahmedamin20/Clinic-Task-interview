import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import PartnerModal from "./PartnerModal";

const PartnersView = ({ logos, onClickImage, open, filter, data }) => {
  return (
    <section className="py-8 w-full">
      <h2 className="text-2xl font-bold text-center text-blue-500 mb-6">
        partners
      </h2>
      <PartnerModal data={data} onClose={onClickImage} isOpen={open} />
      <div
        style={{ direction: "ltr" }}
        className="flex w-full py-5 overflow-hidden"
      >
        <div className="flex lg:justify-between gap-12 lg:gap-0 w-full px-4 lg:animate-none">
          <Marquee
            speed={80}
            className="rounded-lg p-[5rem] bg-gray-100"
            autoFill
            // gradient={true}
            // gradientWidth={150}
            pauseOnHover
          >
            {logos.map((logo) => (
              <Image
                onClick={() => {
                  filter(logo.id);
                  onClickImage();
                }}
                width={100}
                height={100}
                alt="logo"
                key={logo.id}
                src={logo.src}
                className="max-w-none cursor-pointer mx-12"
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default PartnersView;
