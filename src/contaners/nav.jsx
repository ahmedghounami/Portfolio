import { useState, useEffect } from "react";

export default function Nav({ containerRef }) {
  const [show, setShow] = useState(1); // Default to Home (or section 1)
  
  // Throttle scroll events to improve performance
  const throttle = (callback, delay) => {
    let lastCall = 0;
    return function () {
      const now = new Date().getTime();
      if (now - lastCall < delay) return;
      lastCall = now;
      callback(...arguments);
    };
  };

  const handleScroll = () => {
    const scrollPosition = containerRef.current.scrollTop;
    const sectionHeights = [
      700, // Height to trigger Home
      1200, // Height to trigger About Me
      1800, // Height to trigger My Skills
      2400, // Height to trigger My Experience
      3000, // Height to trigger Projects
      4400, // Height to trigger Contact
    ];
    let currentShow = 1;

    for (let i = 0; i < sectionHeights.length; i++) {
      if (scrollPosition >= sectionHeights[i]) {
        currentShow = i + 1; // We increment by 1 to match sections (Home, About Me, etc.)
      }
    }
    
    setShow(currentShow);
  };

  useEffect(() => {
    const throttledScroll = throttle(handleScroll, 100); // Throttle scroll events to every 100ms
    containerRef.current.addEventListener("scroll", throttledScroll);

    // Cleanup the event listener on component unmount
    return () => {
      containerRef.current.removeEventListener("scroll", throttledScroll);
    };
  }, [containerRef]);

  return (
    <div className="fixed overflow-hidden border border-[white] z-50 bg-[#000000] text-[white] top-[1rem] flex gap-10 pl-20 p-2 items-center rounded-[3rem] w-[60%]">
      <div>
        <h1 className="font-mono text-2xl -ml-[3rem] tracking-[0.3rem]">
          Ahmed
        </h1>
        <div className="border-[0.2rem] border-[#4d2491] absolute h-[80%] left-[0.7rem] top-2 w-10"></div>
      </div>
      <div className="flex flex-1 justify-between">
        <a
          href="#"
          className={`${
            show === 1 ? "underline" : ""
          }  pb-2 pt-2 text-center transition-all duration-500`}
          onClick={() => {
            containerRef.current.scrollTo({
              top: 500,
              behavior: "smooth",
            });
            setShow(1);
          }}
        >
          Home
        </a>
        <a
          href="#"
          className={`${
            show === 2 ? "underline" : ""
          }  pb-2 pt-2 text-center transition-all duration-500`}
          onClick={() => {
            containerRef.current.scrollTo({
              top: 1200,
              behavior: "smooth",
            });
            setShow(2);
          }}
        >
          About Me
        </a>
        <a
          href="#"
          className={`${
            show === 3 ? "underline" : ""
          }  pb-2 pt-2 text-center transition-all duration-500`}
          onClick={() => {
            containerRef.current.scrollTo({
              top: 1800,
              behavior: "smooth",
            });
            setShow(3);
          }}
        >
          My Skills
        </a>
        <a
          href="#"
          className={`${
            show === 4 ? "underline" : ""
          }  pb-2 pt-2 text-center transition-all duration-500`}
          onClick={() => {
            containerRef.current.scrollTo({
              top: 2500,
              behavior: "smooth",
            });
            setShow(4);
          }}
        >
          My Experience
        </a>
        <a
          href="#"
          className={`${
            show === 5 ? "underline" : ""
          }  pb-2 pt-2 text-center transition-all duration-500`}
          onClick={() => {
            containerRef.current.scrollTo({
              top: 3000,
              behavior: "smooth",
            });
            setShow(5);
          }}
        >
          Projects
        </a>
        <a
          href="#"
          className={`${
            show === 6 ? "underline" : ""
          }  pb-2 pt-2 text-center transition-all duration-500`}
          onClick={() => {
            containerRef.current.scrollTo({
              top: 4400,
              behavior: "smooth",
            });
            setShow(6);
          }}
        >
          Contact
        </a>
      </div>
    </div>
  );
}
