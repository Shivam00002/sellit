
import React from "react";

export const ScrollCard = ({ title, text }) => {
  return (
    <div class="flex flex-col gap-2  h-fit  md:h-[350px] w-fit   bg-white  shadow-md snap-start transition-transform ease-linear delay-1000 ">
      <div className="relative md:w-80 w-[337px] h-64  md:h-full overflow-hidden  grid place-content-center delay-1000">
        <img
          className="object-cover hover:scale-110 transition-all "
          fill
          src="https://images.doclify.net/bayswater-web/d/e0682c25-8fb6-4b4f-a776-e8691a896c7f.jpeg?enlarge=0&format=webp&w=500"
          alt="justnow"
        />
        <p className="font-semibold text-3xl mt-[-120px] ml-[90px]  relative z-20 text-white">
          Shivam
        </p>
      </div>
    </div>
  );
};
