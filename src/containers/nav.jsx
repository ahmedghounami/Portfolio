import "../global.css";
import { HiHome } from "react-icons/hi2";
import { SiAboutdotme } from "react-icons/si";
import { RiContactsFill } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

export default function Nav() {
  return (
    <div className="fixed bottom-[5%] left-1/2 -translate-x-1/2 w-[70%] sm:w-[70%] md:w-[45%] lg:w-[30rem] bg-black bg-opacity-40 backdrop-blur-md shadow-xl z-50 p-3 rounded-full border border-purple-500/40">
      <div className="flex justify-between items-center px-4 text-white">
        <NavItem href="#home" icon={<HiHome size={24} />} />
        <NavItem href="#about" icon={<SiAboutdotme size={22} />} text="About" />
        <NavItem href="#skills" icon={<GiSkills size={22} />} text="Skills" />
        <NavItem href="#projects" icon={<FaLaptopCode size={22} />} text="Projects" />
        <NavItem href="#biography" icon={<RiContactsFill size={24} />} />
      </div>
    </div>
  );
}

function NavItem({ href, icon, text }) {
  return (
    <a
      href={href}
      className="group relative flex flex-col items-center px-4 py-2 text-center rounded-full transition-all duration-300 hover:scale-110 hover:text-purple-300"
    >
      <span className="text-[1.25rem] text-blue-300 group-hover:drop-shadow-glow transition">
        {icon}
      </span>
      {text && (
        <span className="text-[0.7rem] mt-1 opacity-70 group-hover:opacity-100 transition">
          {text}
        </span>
      )}
    </a>
  );
}
