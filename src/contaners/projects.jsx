import { ThreeDCardDemo } from "../components/AceternityUI/3D-cardEffect/3d-cardComponent";
import { AnimatedPinDemo } from "../components/pin/3d-pin/3d-pinComponent";
import Binary from "../assets/binary.gif";

import Cub from "../assets/cub.png";
import Mini from "../assets/mini.png";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0.5, x: -150 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.3,
        duration: 1,
        ease: "easeInOut",
      }}
      className="flex flex-col   text-[white] justify-center relative "
    >
      <h1 className="z-40 -mb-10 font-extrabold text-[2rem] text-center text-[#7e4aff]">
        My spotlight projects in 42 network school 🚀
      </h1>
      <div className="flex gap-6 justify-between relative flex-col sm:flex-col md:flex-col lg:flex-row">
        {/* <ThreeDCardDemo pic={Cub} />
        <ThreeDCardDemo pic={Mini} /> */}
        <AnimatedPinDemo
          pic={Cub}
          destination="https://github.com/aghounami/CUB3D"
          title="Cub3D"
          description="CUB3D is an exciting project that allows you to explore the principles of ray-casting by creating a dynamic 3D view inside a maze."
        />
        <AnimatedPinDemo
          pic={Mini}
          destination="https://github.com/aghounami/minishell"
          title="Minishell"
          description="Welcome to the Minishell project! This project involves creating a simple shell, akin to your own little version of bash."
        />
        {/* <img src={Binary} alt="cub" className="absolute top-0 left-0 w-full h-full" /> */}
      </div>
    </motion.div>
  );
}
