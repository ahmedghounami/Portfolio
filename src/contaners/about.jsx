export default function About() {
  return (
    <div className="flex gap-[6rem] text-[white] relative">
      <div className="w-[40%] h-[30rem] bg-[#3b3c43] "></div>
      <div className="flex flex-col text-[white]">
        <h1 className="font-extrabold text-[1rem] pb-[1.5rem]">About Me</h1>
        <p className="font-extrabold text-[2rem] text-[#350C7B]">
          Student at 1337 School, <br></br> I am a Full Stack Web Developer.
          <br></br>
        </p>
        <p className="pt-[1rem] font-extralight">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br></br>{" "}
          Enim consectetur, dicta dolor aliquid amet perferendis<br></br>{" "}
          laudantium saepe tempora distinctio
        </p>
      </div>
    </div>
  );
}
