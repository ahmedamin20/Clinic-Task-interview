import { StaticImageData } from "next/image";

export type TPointItem = {
    id: number;
    date: string;
    text: string;
    image: StaticImageData | string;
    buttonText: string;
  };

  export type TPointsProps = {
    data: TPointItem[];
    handleSlideChange: (swiper: { isBeginning: boolean; isEnd: boolean }) => void;
    isPrevDisabled: boolean;
    setIsPrevDisabled: React.Dispatch<React.SetStateAction<boolean>>;
    isNextDisabled: boolean;
    setIsNextDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  };