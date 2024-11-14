import React from "react";
import { motion } from "framer-motion";
import Badge from "./badge.jsx";
import { BackgroundBoxesDemo } from "../components/progress/progress-Comp/progress-Comp.jsx";

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
      {/* <div className="flex justify-between "> */}
        <BackgroundBoxesDemo />
      {/* </div> */}
    </motion.div>
  );
}
