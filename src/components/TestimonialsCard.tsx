import React, { PropsWithChildren } from "react";
import { Meteors } from "@/components/ui/meteors";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import Image, { StaticImageData } from "next/image";

export const TestimonialsCard = (
  {children,
    name,
    position,
    text,
    avatar
  } : PropsWithChildren<{
    name: String, 
    position: string,
    text: string,
    avatar: StaticImageData
  }>
) => {
  return (
    <div className="m-6 p-6">
      <div className=" w-full relative max-w-md">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
        <div className="flex gap-1 items-center justify-center">
        <div className="flex items-center justify-center size-60">
          <Image src={avatar} alt="" />
        </div>
        <div className="-px-2">
          <h1 className="font-bold text-.5xl text-white mb-4 relative z-50">
            {name}
          </h1>
          <h2>{position}</h2>
          <p className="font-normal text-sm text-slate-500 mb-2 relative z-50">
            {text}
          </p>
          </div>
          </div>
          <Meteors number={50} />
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCard