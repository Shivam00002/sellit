
import React from "react";

const Yearbox = ({ text, imgUrl, ptag }) => {
  return (
    <>
    
        <div className="md:w-fit w-[80%]   h-full  px-2 py-2  mx:mx-0 mx-auto  mb-5  md:mb-0 flex  items-center gap-4  ">
          <img src={imgUrl} width={55} height={55} alt="smlimg" />
          <div>
            <h1 className="md:text-[38px] text-[32px] font-bold ">{text}</h1>
            <p className="text-gray-500 text-[16px] font-semibold px-1 mt-[-2px] ">
              {ptag}
            </p>
          </div>
        </div>
  
    </>
  );
};

export default Yearbox;
