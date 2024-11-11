import Badge from "./badge.jsx";
import skills from "../assets/skills.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  return (
    <div className="flex flex-col text-white " >
      <h1 className="font-extrabold text-[3rem] text-center text-[#7e4aff]">
        My Skills
      </h1>
      <p className="font-bold text-[1.3rem] pb-[3rem] text-center">
        {" "}
        All the skils that i have learned and i'm still learning
      </p>
      <div className="flex justify-between gap-4 p-4 bg-[#1C2028]">
        <div className="flex flex-col gap-10 p-4 rounded-[1rem] bg-[#0f1014]">
          <h1 className="font-extrabold text-[1.5rem] text-[#7e4aff]">
            im specialize in multiple creative <br></br>fields sush a Web
            Development.
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>Voluptates voluptatibus excepturi pariatur similique</p>
        </div>
        <img src={skills} alt="skills" width={500} />
      </div>
    </div>
  );
}
