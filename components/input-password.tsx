"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

interface InputPasswordProps {
  isShow: boolean;
  placeholder: string;
  onToggle: () => void;
}

export const InputPassword: React.FC<InputPasswordProps> = ({
  isShow,
  placeholder,
  onToggle,
}) => {
  return (
    <div className="relative">
      <Input
        className={cn("w-[327px] h-[51px]")}
        type={isShow ? "text" : "password"}
        placeholder={placeholder}
      />
      <span className="absolute translate-y-[-50%] translate-x-[-50%] top-[50%] right-[5px] cursor-pointer">
        <Image
          src={`/icons/${isShow ? "Eye" : "EyeOff"}.svg`}
          alt={"alt"}
          width="20"
          height="17"
          onClick={onToggle}
        />
      </span>
    </div>
  );
};
