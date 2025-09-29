import type { contact } from "@/interfaces";
import React from "react";
import "../../index.css";

const Contact: React.FC<contact> = ({ className, style, children }) => {
  return (
    <div
      className={`mt-30 w-full h-[595px] border-2 border-solid rounded-t-[27px] background-contact  ${className}`}
      style={{
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Contact;
