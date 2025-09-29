import type { circle } from "@/interfaces";
import React from "react";

const Circle: React.FC<circle> = ({
  children,
  className,
  width,
  height,
  style = {},
}) => {
  return (
    <div
      style={{
        width: width,
        height: height,
        borderRadius: "50%",
        ...style,
      }}
      className={`flex justify-center items-center ${className}`}
    >
      {children}
    </div>
  );
};

export default Circle;
