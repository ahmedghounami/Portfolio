import { ThreeDCardDemo } from "../components/AceternityUI/3D-cardEffect/3d-cardComponent";
import { AnimatedPinDemo } from "../components/pin/3d-pin/3d-pinComponent";

import Cub from "../assets/cub.png";
import Mini from "../assets/mini.png";
import incep from "../assets/inception.jpg";
import webser from "../assets/webserv.png";

import { motion } from "framer-motion";

import '../global.css'

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
      className="flex flex-col   text-[white] justify-between relative "
      id="projects"
    >
      <h1 className="z-40 -mb-10 font-extrabold text-[2rem] text-center text-[#1DBAD5]">
        My spotlight projects in 42 network school 🚀
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
        <AnimatedPinDemo
          pic={Cub}
          destination="https://github.com/ahmedghounami/CUB3D"
          title="Cub3D"
          description="CUB3D is an exciting project that allows you to explore the principles of ray-casting by creating a dynamic 3D view inside a maze."
        />
        <AnimatedPinDemo
          pic={Mini}
          destination="https://github.com/ahmedghounami/minishell"
          title="Minishell"
          description="Welcome to the Minishell project! This project involves creating a simple shell, akin to your own little version of bash."
        />
        <AnimatedPinDemo
          pic={incep}
          destination="https://github.com/ahmedghounami/42-inception"
          title="inception"
          description="Inception is a project that introduces you to the basics of system and network administration."
        />
        <AnimatedPinDemo
          pic={webser}
          destination="https://github.com/ahmedghounami/httpserver"
          title="httpserver"
          description="HTTP Server is a project that allows you to create a simple HTTP server that can handle basic requests and responses."
        />
      </div>
    </motion.div>
  );
}
