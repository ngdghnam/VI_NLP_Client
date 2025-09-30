import type { contact } from "@/interfaces";
import React from "react";
import "../../index.css";
import { Label } from "../ui/label";
import mail from "@/assets/mail.png";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import map from "@/assets/map.png";

const Contact: React.FC<contact> = ({ className, style }) => {
  return (
    <div
      className={`mt-[141px] w-full h-[595px] items-center  flex border-2 border-solid rounded-t-[27px] background-contact py-4 px-6  ${className}`}
      style={{
        ...style,
      }}
    >
      <div className="w-[394px] z-[200] ml-3 mr-4">
        <div className="flex justify-center items-center">
          <Label className="text-[40px] uppercase font-extrabold">
            contact us
          </Label>
          <img
            src={mail}
            alt=""
            style={{
              width: "90px",
              height: "90px",
            }}
          />
        </div>
        <form action="" className="flex flex-col gap-1">
          <div>
            <Label className="text-base">Name</Label>
            <Input className="h-[41px] contact-input"></Input>
          </div>
          <div>
            <Label className="text-base">Email</Label>
            <Input className="h-[41px] contact-input"></Input>
          </div>
          <div>
            <Label className="text-base">Phone number</Label>
            <Input className="h-[41px] contact-input"></Input>
          </div>
          <div>
            <Label className="text-base">Message</Label>
            <Textarea className="h-[116px] contact-input"></Textarea>
          </div>
          <Button className="mt-4 submit-btn font-extrabold text-xl">
            Send
          </Button>
        </form>
      </div>
      <div className="ml-8 relative">
        <img src={map} alt="" />
        <div className="absolute contact-info border-[2px] border-solid w-[436px] h-[105px] top-0 left-0 right-0 bottom-0 m-auto flex flex-col justify-center px-4">
          <Label className="text-3xl font-extrabold uppercase text-center mx-auto">
            Ho chi minh, viet nam
          </Label>
          <Label className="text-xl font-light text-end ml-auto pr-3 mt-2">
            0923905635
          </Label>
          <div
            className="w-[20.57px] h-[20px] absolute bottom-[-12px] right-[-12px] flex justify-center items-center"
            style={{
              backgroundColor: "#ed4f2d",
            }}
          >
            <div className="w-[14.4px] h-[14px] contact-box"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
