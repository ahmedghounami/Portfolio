import Badge from "./badge.jsx";
import skills from "../assets/skills.png";
import Aos from "aos";
import { motion } from "framer-motion";
import { CardDemo } from "../components/skills/skillsComponent/skillsComponent.jsx";

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0.5, x: 150 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.3,
        duration: 1,
        ease: "easeInOut",
      }}
      className="flex flex-col text-white "
    >
      <h1 className="font-extrabold text-[3rem] text-center text-[#1DBAD5]">
        My Skills
      </h1>
      <p className="font-bold text-[1.3rem] pb-[3rem] text-center">
        {" "}
        All the skils that i have learned and i'm still learning
      </p>
      <CardDemo />
    </motion.div>
  );
}
