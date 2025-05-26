import React from "react";
import { Meteors } from "../mouvebutton/mouvebutton";

import "../../../global.css";
import { MovingBorderDemo } from "../../../components/mouving/mouving-comp/mouving-Comp.jsx";
export function MeteorsDemo() {
  return (
    <div className="">
      <div className="w-full relative max-w-[40em]">
        <div className="absolute inset-0 h-full w-full  transform scale-[0.80] rounded-full blur-3xl" />
        <div className="relative shadow-xl  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          {/* <Meteors number={50} /> */}
          <div className="flex flex-col text-[white] mt-10">
            <p className="text-[#ffffff] text-[3rem] font-bold">Hello, I am</p>
            <p className=" text-[#1DBAD5] text-[3rem] font-bold">
              Ahmed Ghounami,
            </p>
            <p className="text-[#ffffff] text-[2rem] font-bold">
              an Aspiring Web Developer.
            </p>
            <p className="text-[white] pt-10 font-extralight">
              Experienced in web development with a strong command of
              front-end and back-end technologies. Skilled in modern frameworks
              like React, Node.js, next.js, fastify, express, creating responsive, high-performance
              Website, solving complex problems.
            </p>
            <div
              className="flex gap-4 mt-6 justify-center"
              
            >
              <MovingBorderDemo content={"Contact Me"} flag={1} />
              <MovingBorderDemo content={"Know More"} flag={0} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
