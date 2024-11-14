import Badge from "./badge.jsx";
import skills from "../assets/skills.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { CardDemo } from "../components/skills/skillsComponent/skillsComponent.jsx";

export default function Skills() {
  return (
    <div className="flex flex-col text-white ">
      <h1 className="font-extrabold text-[3rem] text-center text-[#7e4aff]">
        My Skills
      </h1>
      <p className="font-bold text-[1.3rem] pb-[3rem] text-center">
        {" "}
        All the skils that i have learned and i'm still learning
      </p>
      <CardDemo />
    </div>
  );
}
