import React from "react";
import { Input } from "../ui/input";
import { Select } from "react-day-picker";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const Header = () => {
  return (
    <div className="w-100 flex">
      <h1 className="uppercase">virtual idols times</h1>
      <Input />
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="EN"></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectLabel>Languages</SelectLabel>
          <SelectItem value="">EN</SelectItem>
          <SelectItem value="">VI</SelectItem>
          <SelectItem value="">KR</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Header;
