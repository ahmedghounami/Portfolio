import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import '../global.css'

export default function Biography() {
  return (
    <motion.div
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 1,
        ease: "easeInOut",
      }}
      className="flex flex-col gap-[2rem] text-[white] justify-center relative"
      id="biography"
    >
      <h1 className="font-extrabold text-[4rem] text-center text-[#1DBAD5]">
        My Biography
      </h1>
      <div className="flex justify-between gap-4  flex-col sm:flex-col md:flex-col lg:flex-row">
        <ul className="flex flex-col">
          <ul className="flex list-disc justify-between gap-24 mx-2 pl-4 pb-[1.5rem] pt-[2rem] border-b-2 border-[#848282]">
            <li className="font-extrabold text-[#1DBAD5]">Name</li>
            <p className="font-extralight">Ahmed Ghounami</p>
          </ul>
          <ul className="flex gap-24 mx-2 list-disc justify-between pl-4 pb-[1.5rem] pt-[2rem] border-b-2 border-[#848282]">
            <li className="font-extrabold text-[#1DBAD5]">Email</li>
            <p className="font-extralight">ahmedghounami0@gmail.com</p>
          </ul>
        </ul>
        <ul className="flex flex-col">
          
          <ul className="flex gap-24 mx-2 list-disc justify-between pl-4 pb-[1.5rem] pt-[2rem] border-b-2 border-[#848282]">
            <li className="font-extrabold text-[#1DBAD5]">Phone</li>
            <p className="font-extralight">+212 620399298</p>
          </ul>
          <ul className="flex gap-24 mx-2 list-disc justify-between pl-4 pb-[1.5rem] pt-[2rem] border-b-2 border-[#848282]">
            <li className="font-extrabold text-[#1DBAD5]">linkedin</li>
            <a
              href="https://www.linkedin.com/in/ahmed-ghounami-a675b1294/"
              className="font-extralight "
            >
              @Ahmed Ghounami
            </a>
          </ul>
        </ul>
      </div>
    </motion.div>
  );
}
