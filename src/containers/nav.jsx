import "../global.css";
import { HiHome } from "react-icons/hi2";
import { SiAboutdotme } from "react-icons/si";
import { RiContactsFill } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#020616] shadow-lg rounded-b-lg">
      <div className="flex flex-wrap sm:flex-nowrap justify-between items-center px-2 sm:px-4 py-2 sm:py-3 text-white gap-2 sm:gap-0">
        <NavItem href="#home" icon={<HiHome size={24} />} />
        <NavItem href="#about" icon={<SiAboutdotme size={20} />} text="About" />
        <NavItem href="#skills" icon={<GiSkills size={20} />} text="Skills" />
        <NavItem href="#projects" icon={<FaLaptopCode size={20} />} text="Projects" />
        <NavItem href="#biography" icon={<RiContactsFill size={22} />} />
      </div>
    </nav>
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
