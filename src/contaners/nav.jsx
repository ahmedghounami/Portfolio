export default function Nav() {
  return (
    <div className="fixed z-30 bg-[#231e1e] text-[white] top-0 flex gap-40 pl-20  items-center w-[100%]">
      <div>
        <h1 className="font-mono text-2xl tracking-[0.3rem]">Ahmed</h1>
        <div className="border-[0.2rem] border-[#4d2491] absolute h-[80%] left-[3.7rem] top-2 w-10"></div>
      </div>
      <div className="flex flex-1 justify-between">
        <a
          href="#"
          className="hover:bg-white hover:text-black  p-4 text-center transition-all duration-500"
        >
          Home
        </a>
        <a
          href="#"
          className="hover:bg-white hover:text-black  p-4 text-center transition-all duration-500"
        >
          About Me
        </a>
        <a
          href="#"
          className="hover:bg-white hover:text-black  p-4 text-center transition-all duration-500"
        >
          Services
        </a>
        <a
          href="#"
          className="hover:bg-white hover:text-black  p-4 text-center transition-all duration-500"
        >
          Portfolio
        </a>
        <a
          href="#"
          className="hover:bg-white hover:text-black  p-4 text-center transition-all duration-500"
        >
          Blog
        </a>
        <a
          href="#"
          className="hover:bg-white hover:text-black  p-4 text-center transition-all duration-500"
        >
          Clients
        </a>
        <a
          href="#"
          className="hover:bg-white hover:text-black  p-4 text-center transition-all duration-500"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
