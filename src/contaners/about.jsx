import projects from "../assets/projects.png";
import Profile from "../assets/me.jpeg";
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
      className="flex gap-[4rem] text-[white] relative flex-col sm:flex-col md:flex-col lg:flex-row"
    >
      <div>
        <img src={Profile} alt="picture" className="w-[28rem] h-[30rem] rounded-lg shadow-lg object-cover " />
      </div>
      <div className="flex flex-col text-[white] ">
        <h1 className="font-extrabold text-[2rem] mb-[2rem]">About Me</h1>
        <p className="font-extrabold text-[2rem] text-[#1DBAD5] mb-[1rem]">
          Student at 1337 School, <br></br> Full Stack Web Developer.
          <br></br>
        </p>
        <p className="font-extralight">
          I started my programming journey with the 1337 piscine,<br></br> a
          month-long immersion that was both challenging <br></br>and rewarding.
          It was during this time that I gained <br></br> invaluable knowledge,
          which set the foundation for my future<br></br> as a developer. After
          being selected as a student at 1337,<br></br> I continued to push
          myself through more complex challenges,<br></br> gaining over a year
          of experience. I am constantly evolving,<br></br> building projects,
          and growing in the tech field, always eager to face the next
          challenge.
        </p>
        {/* <div className="bg-[#181616] flex gap-6 p-4">
          <img src={projects} alt="projects" className="w-[8rem] h-[6rem]" />
          <div>
            <p className="font-bold text-[#743bd7]"> 20+ Complete Projects</p>
            <p className=" font-extralight text-sm"></p>
          </div>
        </div>
        <div className="bg-[#181616] flex gap-6 p-4">
          <img src={exp} alt="projects" className="w-[8rem] h-[6rem]" />
          <div>
            <p className="font-bold text-[#743bd7]"> 1 Year + Experience</p>
            <p className=" font-extralight text-sm">
              The 1337 piscine was my first encounter with coding—a month
              <br />
              filled with invaluable experience and knowledge that kickstarted
              <br />
              my journey in programming.
            </p>
          </div>
        </div> */}
      </div>
    </motion.div>
  );
}
