import { useState } from "react";
import logo1 from "../../../../public/media/logos/pinPoint.svg";
import logo2 from "../../../../public/media/logos/rise.svg";
const useLogosLogic = () => {
    const [open, setOpen] = useState(false);
    const [oneItem, setOneItem] = useState(null); 
  
    const logos = [
      { id: 1, src: logo1 },
      { id: 2, src: logo2 },
    ];
  
    const onClickImage = () => {
      setOpen(!open);
    };
  
    const data = [
      {
        id: 1,
        src: logo1,
        name: "pinPoint",
        description: "pinPoint is a company that does something",
      },
      {
        id: 2,
        src: logo2,
        name: "rise",
        description: "rise is a company that does something",
      },
    ];
  
    const filterData = (id) => {
      const item = data.find((item) => item.id === id); 
      setOneItem(item); 
    };
  
    return {
      logos,
      setOpen,
      open,
      data,
      onClickImage,
      filterData,
      oneItem,
    };
  };
  
  export default useLogosLogic;
  