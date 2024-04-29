"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start h-[calc(100%-10%)] w-full gap-4">
      <div className="w-[359px] mb-4 rounded-[16px]">
        <AspectRatio ratio={16 / 9}>
          <Image
            src="/test3.jpeg"
            alt="Image"
            className="rounded-[16px] object-cover"
            fill
            priority
          />
        </AspectRatio>
      </div>
      <Card className={cn("w-[359px] bg-[#0E191F] rounded-[16px] border-none")}>
        <CardHeader
          className={cn("flex-row justify-between items-baseline px-4 py-2")}
        >
          <CardTitle className={cn("text-[14px] font-[700]")}>About</CardTitle>
          <Image
            style={{ marginTop: "0px !important" }}
            src="/icons/edit-2.svg"
            width={17}
            height={17}
            alt="edit-icon"
          ></Image>
        </CardHeader>
        <CardContent className={cn("px-4 py-2 pb-4")}>
          <p className="text-[#FFFFFF85] text-[14px] font-[500]">Add in your your to help others know you better</p>
        </CardContent>
      </Card>
      <div className="w-[359px] m-h-[120px] bg-[#0E191F]">
        <h1 className="text-white">hehehe</h1>
        <h1 className="text-white">hehehe</h1>
        <h1 className="text-white">hehehe</h1>
        <h1 className="text-white">hehehe</h1>
        <h1 className="text-white">hehehe</h1>
        <h1 className="text-white">hehehe</h1>
        <h1 className="text-white">hehehe</h1>
        <h1 className="text-white">hehehe</h1>
        <h1 className="text-white">hehehe</h1>
        <h1 className="text-white">hehehe</h1>
        <h1 className="text-white">hehehe</h1>
        <h1 className="text-white">hehehe</h1>
        <h1 className="text-white">hehehe</h1>
        <h1 className="text-white">hehehe</h1>
      </div>
      <div className="w-[359px] m-h-[120px] h-[120px] bg-[#0E191F]">
        <h1 className="text-white">hehehe</h1>
      </div>
    </div>
  );
}
