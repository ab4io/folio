import React, { PropsWithChildren } from "react";
import { Meteors } from "@/components/ui/meteors";
import Image, { StaticImageData } from "next/image";

export const TestimonialsCard = (
  { name,
    position,
    text,
    avatar
  }: PropsWithChildren<{
    name: String,
    position: string,
    text: string,
    avatar: StaticImageData
  }>
) => {
  return (
    <div className="m-2 p-6 relative">
      <div className=" w-full relative max-w-md">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-secondary to-primary transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="flex flex-col justify-start">
            <p className="font-normal text-md text-gray-400 mb-2 relative z-50 font-serif pl-6">
              {text}
            </p>
            <div className="flex p-1 items-center">
              <div className="flex items-center justify-center size-30">
                <Image src={avatar} alt="" />
              </div>
              <div>
                <h1 className="font-semibold text-.5xl text-gray-200 mb-2 relative z-50 ">
                  {name}
                </h1>
                <h2 className="font-semibold text-.5xl text-gray-200">{position}</h2>
              </div>
            </div>
          </div>
          <Meteors number={100} className="" />
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCard