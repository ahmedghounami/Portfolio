"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../../header/header-Comp/header";
export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-40 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Welcome to my Portfolio <br></br>and My First Project with <br></br>React js
        and TailwindCSS
      <p className="text-[white] font-extralight text-[1.5rem] tracking-wider pt-10">Developed by Ahmed Ghounami</p>
      </motion.h1>
    </LampContainer>
  );
}
