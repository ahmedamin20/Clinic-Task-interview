import Image from "next/image";

const PartnerModal = ({ isOpen, onClose, data }) => {
    if (!isOpen || !data) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white w-[90%] max-w-lg rounded-lg shadow-lg p-6 relative">
          <button
            className="absolute top-2 p-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            ✖
          </button>
  
          {/* Modal Content */}
          <div className="flex flex-col items-center">
            {/* <div className="w-[200px] h-[200px] mb-4"> */}
              <Image
                src={data.src}
                alt={data.name}
                width={128}
                height={128}
                className=" w-[100px] h-[100px] rounded-full"
              />
            {/* </div> */}
  
            <h2 className="text-xl font-bold mb-2">{data.name}</h2>
  
            <p className="text-gray-600 text-center">{data.description}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default PartnerModal;
  