import React from "react";
import { motion } from "framer-motion";
import Badge from "./badge.jsx";
import Pool from "../assets/piscine.png";
export default function Progress() {
  return (
    <motion.div
      initial={{ opacity: 0.5, x: -150 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.3,
        duration: 1,
        ease: "easeInOut",
      }}
      className="flex flex-col gap-20 text-[white] justify-center relative "
    >
      <h className="z-40 -mb-10 font-extrabold text-[3rem] text-center text-[#7e4aff]">
        My Experience
      </h>
      <div className="h-auto p-10 gap-2 justify-between relative w-full bg-slate-900 items-center rounded-lg flex flex-col sm:flex-col md:flex-col lg:flex-row">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <p className="font-extralight text-[#fbfbfb] text-[1rem] mb-10">
          The 1337 piscine was my first encounter with coding—a month
          <br />
          filled with invaluable experience and knowledge that kickstarted
          <br />
          my journey in programming.
        </p>
        <a href="https://github.com/aghounami/42_piscine">
          <img
            src={Pool}
            alt="piscine"
            className="h-[20rem] w-auto object-cover rounded-lg hover:scale-105 transition-all duration-500"
          />
        </a>

        <div className="flex flex-col justify-center items-center text-[#472699] mt-10">
          <h1 className="font-bold text-[#9aa9fc] text-[1.3rem] mb-5">
            My current progress on 1337 coding school
          </h1>
          <Badge />
        </div>
      </div>
    </motion.div>
  );
}
