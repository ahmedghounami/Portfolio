import projects from "../assets/projects.png";
import Profile from "../assets/person.jpg";
import exp from "../assets/exp.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0.5, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.3,
        duration: 1,
        ease: "easeInOut",
      }}
      className="flex gap-[6rem] text-[white] relative"
    >
      <div>
        <img src={Profile} alt="picture" className="w-[28rem] h-[35rem]" />
      </div>
      <div className="flex flex-col gap-4 text-[white]">
        <h1 className="font-extrabold text-[1rem] ">About Me</h1>
        <p className="font-extrabold text-[2rem] text-[#6641c4]">
          Student at 1337 School, <br></br> I am a Full Stack Web Developer.
          <br></br>
        </p>
        <p className=" font-extralight">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br></br>{" "}
          Enim consectetur, dicta dolor aliquid amet perferendis<br></br>{" "}
          laudantium saepe tempora distinctio
        </p>
        <div className="bg-[#181616] flex gap-6 p-4">
          <img src={projects} alt="projects" className="w-[8rem] h-[6rem]" />
          <div>
            <p className="font-bold text-[#743bd7]"> 20+ Complete Projects</p>
            <p className=" font-extralight text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br></br>{" "}
              Enim consectetur, dicta dolor aliquid amet perferendis<br></br>{" "}
              laudantium saepe tempora distinctio
            </p>
          </div>
        </div>
        <div className="bg-[#181616] flex gap-6 p-4">
          <img src={exp} alt="projects" className="w-[8rem] h-[6rem]" />
          <div>
            <p className="font-bold text-[#743bd7]"> 1 Year + Experience</p>
            <p className=" font-extralight text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br></br>{" "}
              Enim consectetur, dicta dolor aliquid amet perferendis<br></br>{" "}
              laudantium saepe tempora distinctio
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
