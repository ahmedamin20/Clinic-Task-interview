// components/OffersSlider.js
import React from "react";
import { TPointsProps } from "@/modules/points/types";
import Image from "next/image";
import { BsCalendarDate } from "react-icons/bs";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../style/swiper.module.css";
const PointsView = ({
  data,
  handleSlideChange,
  isNextDisabled,
  isPrevDisabled,
  setIsNextDisabled,
  setIsPrevDisabled,
}: TPointsProps) => {
  return (
    <div className="text-center relative p-6">
      <h2 className="text-2xl font-bold mb-9">العروض</h2>
      <div className="">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: `.${styles.swiperNextButton}`,
            prevEl: `.${styles.swiperPrevButton}`,
          }}
          spaceBetween={20}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
          onReachBeginning={() => setIsPrevDisabled(true)}
          onReachEnd={() => setIsNextDisabled(true)}
          onFromEdge={() => {
            setIsPrevDisabled(false);
            setIsNextDisabled(false);
          }}
          breakpoints={{
            320: { slidesPerView: 1 }, // Extra small screens (mobile)
            640: { slidesPerView: 2 }, // Small screens
            768: { slidesPerView: 2 }, // Medium screens (tablet)
            1024: { slidesPerView: 2 }, // Large screens
            1280: { slidesPerView: 3 }, // Extra large screens
          }}
        >
          {data.map((point) => (
            <SwiperSlide key={point.id}>
              <div className="bg-white w-full rounded-lg shadow-md p-4 flex flex-col items-center">
                <Image
                  src={point.image}
                  className="w-full h-full object-cover"
                  width={500}
                  height={100}
                  loading="lazy"
                  quality={100}
                  alt={`${point.id}-image`}
                />
                <div className="w-full flex flex-row justify-between my-2 items-center">
                  <div className="flex flex-row gap-[10px]">
                    <BsCalendarDate className="text-gray-500" size={20} />
                    <p className="text-gray-500 text-sm mb-2">{point.date}</p>
                  </div>
                  <span className="text-green-500">ينتهي في</span>
                </div>
                <p className="text-gray-800 text-base mb-4">
                  {point.text.split("login").map((part, index) => (
                    <React.Fragment key={index}>
                      {part}
                      {index < point.text.split("login").length - 1 && (
                        <span className="text-blue-500">login</span>
                      )}
                    </React.Fragment>
                  ))}
                </p>

                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  {point.buttonText}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="absolute top-9 right-0 flex justify-between items-center gap-2 p-2">
          <button
            disabled={isPrevDisabled}
            className={`${styles.swiperPrevButton} disabled:bg-gray-500/25 text-white p-3 border-none bg-blue-600 rounded-full hover:bg-blue-700`}
          >
            <MdArrowBackIosNew />
          </button>
          <button
            disabled={isNextDisabled}
            className={`${styles.swiperNextButton} disabled:bg-gray-500/25 text-white p-3 border-none bg-blue-600 rounded-full hover:bg-blue-700`}
          >
            <MdArrowForwardIos />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PointsView;
