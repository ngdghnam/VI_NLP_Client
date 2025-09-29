import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import "../../index.css";

const Header = () => {
  return (
    <div className="w-full p-4 h-[105.66px] flex text-white justify-between gap-1.5 items-center background-header">
      <h1 className="uppercase font-extrabold text-xl text-[#F3F3F3] z-100">
        virtual idols times
      </h1>
      <Input className="w-[946px] h-[48px] z-100"></Input>
      <Select>
        <SelectTrigger className="z-100">
          <SelectValue placeholder="Langs"></SelectValue>
        </SelectTrigger>
        <SelectContent className="text-xl">
          <SelectItem value="vi">Vietnam</SelectItem>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="kr">Korea</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Header;
