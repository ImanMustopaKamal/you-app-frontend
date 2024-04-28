"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

import { InputPassword } from "@/components/input-password";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="mb-4 w-full text-white text-[24px] font-[700] ml-[24px]">
        Santika
      </h1>
      <Input
        className={cn("w-[327px] h-[51px]")}
        type="email"
        placeholder="Enter Username/Email"
      />
      <InputPassword placeholder="Enter Password" isShow={show} onToggle={() => setShow(!show)} />
      <Button
        className={cn("btn-primary mt-6")}
        variant={"primary"}
        size={"xl"}
      >
        Login
      </Button>

      <span className="text-white mt-[32px]">
        No account?&nbsp;
        <Button
          className={cn(
            "golden gradient-underline p-0 mb-2 text-[16px] underline-offset-1"
          )}
          size={"sm"}
          variant={"link"}
          onClick={() => router.push("/register")}
        >
          Register here
        </Button>
      </span>
    </div>
  );
}
