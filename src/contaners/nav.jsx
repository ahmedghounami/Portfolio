import { useState, useEffect } from "react";

export default function Nav({ containerRef }) {
  // const [show, setShow] = useState(1); // Default to Home (or section 1)

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
      700, 
      1200,
      1800,
      3000,
      4400,
    ];
    let currentShow = 1;

    for (let i = 0; i < sectionHeights.length; i++) {
      if (scrollPosition >= sectionHeights[i]) {
        currentShow = i + 1; 
      }
    }

    // setShow(currentShow);
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
    <div className="fixed top-0 left-0 w-screen border-b text-white bg-black shadow-md z-50 p-2">
      <div className="flex justify-between items-center px-5">
        <a
          href="#"
          className={` pb-2 pt-2 text-center transition-all duration-500`}
          onClick={() => {
            containerRef.current.scrollTo({
              top: 600,
              behavior: "smooth",
            });
            // setShow(1);
          }}
        >
          Home
        </a>
        <a
          href="#"
          className={`pb-2 pt-2 text-center transition-all duration-500`}
          onClick={() => {
            containerRef.current.scrollTo({
              top: 1300,
              behavior: "smooth",
            });
            // setShow(2);
          }}
        >
          About Me
        </a>
        <a
          href="#"
          className={`pb-2 pt-2 text-center transition-all duration-500`}
          onClick={() => {
            containerRef.current.scrollTo({
              top: 2000,
              behavior: "smooth",
            });
            // setShow(3);
          }}
        >
          My Skills
        </a>
        <a
          href="#"
          className={` ? "underline text-yellow-500" : ""
          } pb-2 pt-2 text-center transition-all duration-500`}
          onClick={() => {
            containerRef.current.scrollTo({
              top: 2600,
              behavior: "smooth",
            });
            // setShow(5);
          }}
        >
          Projects
        </a>
        <a
          href="#"
          className={` ? "underline text-yellow-500" : ""
          } pb-2 pt-2 text-center transition-all duration-500`}
          onClick={() => {
            containerRef.current.scrollTo({
              top: 4400,
              behavior: "smooth",
            });
            // setShow(6);
          }}
        >
          Contact
        </a>
      </div>
    </div>
  );
}
