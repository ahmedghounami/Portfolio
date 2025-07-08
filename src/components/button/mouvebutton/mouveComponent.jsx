import React from "react";
import { Meteors } from "../mouvebutton/mouvebutton";
import "../../../global.css";
import { MovingBorderDemo } from "../../../components/mouving/mouving-comp/mouving-Comp.jsx";

export function MeteorsDemo() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <div className="w-full relative max-w-[45em] px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 h-full w-full transform scale-[0.85] rounded-full blur-3xl bg-gradient-to-br from-[#1DBAD5] to-purple-800 opacity-20 pointer-events-none" />
        
        <div className="relative shadow-xl px-6 py-10 sm:p-12 rounded-3xl backdrop-blur-lg bg-black bg-opacity-40 border border-blue-500/30 overflow-hidden text-white">
          {/* Optional Meteor Particles */}
          {/* <Meteors number={60} /> */}
          
          <div className="flex flex-col gap-2">
            <h1 className="text-[2.5rem] sm:text-[3rem] font-bold text-white leading-tight">
              Hello, I'm <span className="text-[#1DBAD5]">Ahmed Ghounami</span>
            </h1>
            <h2 className="text-[1.6rem] sm:text-[2rem] font-semibold text-purple-400 mb-2">
              Full-Stack Web Developer
            </h2>
            <p className="text-white text-sm sm:text-base opacity-80 leading-relaxed mt-2">
              I specialize in building complete web applications — from clean, responsive frontends
              with <span className="text-blue-400 font-medium">React</span>, <span className="text-blue-300 font-medium">Next.js</span>, to powerful backends with 
              <span className="text-purple-300 font-medium"> Fastify</span>, <span className="text-purple-300 font-medium">Express.js</span>, and
              SQLite or other databases. I enjoy solving real-world problems with scalable and elegant code.
            </p>

            <div className="flex gap-4 mt-8 justify-center">
              <MovingBorderDemo content={"📬 Contact Me"} flag={1} />
              <MovingBorderDemo content={"🚀 See Projects"} flag={0} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
