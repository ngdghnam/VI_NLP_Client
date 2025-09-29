import React from "react";
import "../../index.css";
import type { ticket } from "@/interfaces";

const Ticket: React.FC<ticket> = ({
  afterBgImageURL,
  backgroundImageURL,
  imageURL,
  header,
  description,
  className,
  classNameForImg,
  classNameForBgImg,
  classNameForAfterBgImg,
  classNameForDescription,
  afterBgImgStyle = {},
  bgImgStyle = {},
  imgStyle = {},
}) => {
  return (
    <div
      style={{
        width: "1373px",
        height: "466px",
        borderRadius: "27px",
        border: "2px solid white",
        margin: "auto",
        zIndex: 200,
      }}
      className={`background-ticket ${className} flex justify-between px-6 gap-2 items-center`}
    >
      <div
        className="relative"
        style={{
          width: "60%",
          height: "100%",
        }}
      >
        <div
          className="absolute top-10 left-0 right-0 bottom-0 p-4 m-auto"
          style={{
            backgroundImage: `url(${afterBgImageURL})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "95%",
            height: "95%",
            zIndex: 100,
            backgroundPosition: "center center",
          }}
        >
          {/* <div className="absolute w-[100%] h-[85%] bg-white opacity-[40%] top-0 left-0 right-0 bottom-0 mx-auto "></div> */}
        </div>
        <div
          className="absolute top-0 left-0 right-0 bottom-0 mx-auto"
          style={{
            backgroundImage: `url(${backgroundImageURL})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "90%",
            zIndex: 130,
            backgroundPosition: "center center",
          }}
        ></div>
        <img src={imageURL} alt="" className="absolute z-140 bottom-2" />
      </div>
      <div
        style={{
          width: "30%",
        }}
        className={`flex flex-col gap-2 ${classNameForDescription}`}
      >
        <h1 className="font-extrabold text-[27px] uppercase mb-[20px]">
          {header}
        </h1>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
};

export default Ticket;
