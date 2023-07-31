import React, { useRef, useState } from "react";
import { ScrollCard } from "./ScrollCard";
import { BiSolidRightArrowAlt } from "react-icons/bi";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
export const AutoScrollCards = () => {
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(true);
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
    if (ref.current.scrollLeft + scrollOffset >= ref.current.scrollLeftMax)
      return setRight(false);
    if (ref.current.scrollLeft + scrollOffset < 0) return setLeft(false);
    if (left !== true) setLeft(true);
    if (right !== true) setRight(true);
  };

  return (
    <div className="px-6 relative  text-center  w-full md:px-0 mt-24   mx-auto py-10 md:mt-16">
      <h1 className="md:text-[66px] text-[25px] whitespace-nowrap  font-semibold text-[#1c1c60]">
        Country destination
      </h1>
      <div
        className="grid text-left mt-4  grid-flow-col gap-[10px] py-[25px] overflow-x-scroll snap-x cards w-full scroll-smooth"
        ref={ref}
      >
        <ScrollCard
          title={"service 1"}
          text={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis exercitationem repudiandae, dolorum placeat velit tenetur dignissimos  vitae odit quisquam quas laudantium, sequi natus eos nisi ratione ipsum"
          }
        />
        <ScrollCard
          title={"service 2"}
          text={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis exercitationem repudiandae, dolorum placeat velit tenetur dignissimos  vitae odit quisquam quas laudantium, sequi natus eos nisi ratione ipsum"
          }
        />
        <ScrollCard
          title={"service 3"}
          text={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis exercitationem repudiandae, dolorum placeat velit tenetur dignissimos  vitae odit quisquam quas laudantium, sequi natus eos nisi ratione ipsum"
          }
        />
        <ScrollCard
          title={"service 4"}
          text={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis exercitationem repudiandae, dolorum placeat velit tenetur dignissimos  vitae odit quisquam quas laudantium, sequi natus eos nisi ratione ipsum"
          }
        />
        <ScrollCard
          title={"service 4"}
          text={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis exercitationem repudiandae, dolorum placeat velit tenetur dignissimos  vitae odit quisquam quas laudantium, sequi natus eos nisi ratione ipsum"
          }
        />
        <ScrollCard
          title={"service 4"}
          text={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis exercitationem repudiandae, dolorum placeat velit tenetur dignissimos  vitae odit quisquam quas laudantium, sequi natus eos nisi ratione ipsum"
          }
        />
        <ScrollCard
          title={"service 4"}
          text={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis exercitationem repudiandae, dolorum placeat velit tenetur dignissimos  vitae odit quisquam quas laudantium, sequi natus eos nisi ratione ipsum"
          }
        />
      </div>
      <div className="flex justify-center gap-5   items-center mt-10 ">
        <GoArrowLeft
          onClick={() => scroll(-300)}
          size={50}
          color="teal"
          className="border p-2 cursor-pointer  hover:shadow-md  hover:pr-4  rounded-full"
        />
        <GoArrowRight
          onClick={() => scroll(300)}
          size={50}
          color="teal"
          className="border p-2 hover:shadow-md  cursor-pointer hover:pl-4  rounded-full"
        />
      </div>
    </div>
  );
};
