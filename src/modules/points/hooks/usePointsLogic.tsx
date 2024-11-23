'use client'
import { useState } from "react";
import { TPointsProps } from "../types";
import doctor from "../../../../public/media/Doctors/doc3.jpg";
const usePointsLogic = (): TPointsProps => {
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const handleSlideChange = (swiper) => {
    setIsPrevDisabled(swiper.isBeginning);
    setIsNextDisabled(swiper.isEnd);
  };
  const Points = [
    {
      id: 1,
      date: "October 19, 2024",
      text: "اعمل login الآن واحصل على 400 نقطة وخصم بقيمة 5% على اول طلب",
      buttonText: "login",
      image: doctor,
    },
    {
      id: 4,
      date: "October 19, 2024",
      text: "اعمل login الآن واحصل على 400 نقطة وخصم بقيمة 5% على اول طلب",
      buttonText: "login",
      image: doctor,
    },
    {
      id: 5,
      date: "October 19, 2024",
      text: "اعمل login الآن واحصل على 400 نقطة وخصم بقيمة 5% على اول طلب",
      buttonText: "login",
      image: doctor,
    },
    {
      id: 6,
      date: "October 19, 2024",
      text: "اعمل login الآن واحصل على 400 نقطة وخصم بقيمة 5% على اول طلب",
      buttonText: "login",
      image: doctor,

    },
    {
      id: 7,
      date: "October 19, 2024",
      text: "اعمل login الآن واحصل على 400 نقطة وخصم بقيمة 5% على اول طلب",
      buttonText: "login",
      image: doctor,
    },
    {
      id: 2,
      date: "October 19, 2024",
      text: "اعمل login الآن واحصل على 400 نقطة وخصم بقيمة 5% على اول طلب",
      buttonText: "login",
      image: doctor,
    },
    {
      id: 3,
      date: "October 19, 2024",
      text: "اعمل login الآن واحصل على 400 نقطة وخصم بقيمة 5% على اول طلب",
      buttonText: "login",
      image: doctor,
    },
  ];
  return {
    data: Points,
    handleSlideChange,
    isPrevDisabled, setIsPrevDisabled,
    isNextDisabled, setIsNextDisabled
  };
};

export default usePointsLogic;
