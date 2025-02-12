import "../global.css";
import { HiHome } from "react-icons/hi2";
import { SiAboutdotme } from "react-icons/si";
import { RiContactsFill } from "react-icons/ri";

export default function Nav() {
  return (
    <div className="fixed bottom-[5%] left-[50%] translate-x-[-50%] w-[100%] rounded-full text-white bg-black bg-opacity-50 z-50 p-2 shadow-lg transition-all duration-300  sm:w-[100%] md:w-[100%] lg:w-[40rem]">
      <div className="flex justify-between items-center px-2">
        <a
          href="#home"
          className="px-4 py-2 text-center bg-gray-700 hover:bg-gray-600 transition-all duration-300 rounded-3xl hover:scale-110"
        >
          <HiHome size={28} />
        </a>
        <a
          href="#about"
          className="px-4 py-2 text-center bg-gray-700 hover:bg-gray-600 transition-all duration-300 rounded-3xl hover:scale-110"
        >
          About Me
        </a>
        <a
          href="#skills"
          className="px-4 py-2 text-center bg-gray-700 hover:bg-gray-600 transition-all duration-300 rounded-3xl hover:scale-110"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="px-4 py-2 text-center bg-gray-700 hover:bg-gray-600 transition-all duration-300 rounded-3xl hover:scale-110"
        >
          Projects
        </a>
        <a
          href="#biography"
          className="px-4 py-2 text-center bg-gray-700 hover:bg-gray-600 transition-all duration-300 rounded-3xl hover:scale-110"
        >
          <RiContactsFill size={28} />
        </a>
      </div>
    </div>
  );
}
