import { ThreeDCardDemo } from "../components/AceternityUI/3D-cardEffect/3d-cardComponent";

import Cub from "../assets/cub.png";
import Mini from "../assets/mini.png";

export default function Projects() {
  return (
    <div className="flex flex-col gap-[2rem] text-[white] justify-center relative">
      <h1 className="font-extrabold text-[3rem] text-center text-[#7e4aff]">
       My Projects</h1>
       <div className="flex gap-6 justify-between">
        <ThreeDCardDemo pic={Cub} />
        <ThreeDCardDemo pic={Mini} />
       </div>
    </div>
  );
}
