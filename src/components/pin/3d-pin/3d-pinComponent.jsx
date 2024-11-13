"use client";

import { PinContainer } from "../3d-pin/3d-pin";

export function AnimatedPinDemo({ pic, destination, title, description }) {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center">
      <PinContainer title="/ui.aceternity.com" href={destination}>
        <div className="flex basis-full bg-[#170744] flex-col p-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[24rem] h-[28rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100 text-center">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-[#a19b9b] ">
              {description}
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br" />
          <img
            src={pic}
            className="w-full h-full object-cover rounded-lg"
            alt="thumbnail"
          />
        </div>
      </PinContainer>
    </div>
  );
}
