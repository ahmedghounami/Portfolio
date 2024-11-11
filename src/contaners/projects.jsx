import Cub from "../assets/cub.png";

export default function Projects() {
  return (
    <div className="flex flex-col gap-[2rem] text-[white] items-center justify-center relative">
      <h1 className="font-extrabold text-[3rem] text-center text-[#7e4aff]">
       My Projects</h1>
       <div className="flex gap-6 justify-between">
        <img src={Cub} alt="cub" className="w-[23%] h-[20%]"/>
        <img src={Cub} alt="cub" className="w-[23%] h-[20%]"/>
       </div>
    </div>
  );
}
