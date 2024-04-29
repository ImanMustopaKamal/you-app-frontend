"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputPassword } from "@/components/input-password";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const [show, setShow] = useState([false, false]);
  const [isDisabled, setDisabled] = useState(true);

  const onToggle = (number: number) => {
    const updatedShow = [...show];
    updatedShow[number] = !show[number];
    setShow(updatedShow);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="mb-4 w-full text-white text-[24px] font-[700] ml-[24px]">
        Register
      </h1>
      <Input
        className={cn("w-[327px] h-[51px]")}
        type="email"
        placeholder="Enter Email"
      />
      <Input
        className={cn("w-[327px] h-[51px]")}
        type="text"
        placeholder="Create Username"
      />
      <InputPassword
        placeholder="Create Password"
        isShow={show[0]}
        onToggle={() => onToggle(0)}
      />
      <InputPassword
        placeholder="Confirm Password"
        isShow={show[1]}
        onToggle={() => onToggle(1)}
      />
      <Button
        disabled={isDisabled}
        className={cn("btn-primary mt-6")}
        variant={"primary"}
        size={"xl"}
      >
        Register
      </Button>

      <span className="text-white mt-[32px]">
        Have an account?&nbsp;
        <Button
          className={cn(
            "golden gradient-underline p-0 mb-2 text-[16px] underline-offset-1"
          )}
          size={"sm"}
          variant={"link"}
          onClick={() => router.push("/login")}
        >
          Login here
        </Button>
      </span>
    </div>
  );
}
