"use client";
import React from "react";
import { Boxes } from "./progress.jsx";
import { cn } from "../../../utils/cn.js";
import Badge from "../../../contaners/badge.jsx";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <p className="font-extralight text-[#fbfbfb] text-[1rem] mb-10">
        The 1337 piscine was my first encounter with coding—a month filled with
        <br></br>
        invaluable experience and knowledge that kickstarted my journey in
        <br></br>
        programming.
      </p>
      <div className="flex flex-col justify-center items-center text-[#472699]">
        <h1 className="font-bold text-[#ffffff] mb-10">
          My current progress on 1337 coding school
        </h1>
        <Badge />
      </div>
    </div>
  );
}
