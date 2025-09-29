import type { introduceCard } from "@/interfaces";
import React from "react";

const IntroduceCard: React.FC<introduceCard> = ({
  header,
  description,
  className,
}) => {
  return (
    <div
      className={`w-[383px] h-[117px] flex flex-col px-4 justify-center rounded-[27px] background-introduce-card ${
        className || ""
      } text-white`}
    >
      <h1 className="text-[21px] font-extrabold mb-1">{header}</h1>
      <p className="text-[14px] font-normal">{description}</p>
    </div>
  );
};

export default IntroduceCard;
