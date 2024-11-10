import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Profile from "../assets/person.jpg";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1300,
      once: true,
    });
  }, []);

  return (
    <div className="flex gap-4" data-aos="zoom-in">
      <div className="flex flex-col text-[white]">
        <p className="text-[#3b0e87] text-[3rem] font-bold"> Hello, I am</p>
        <p className="text-outline text-white text-[3rem] font-bold">
          {" "}
          Ahmed Goounami an
        </p>
        <p className="text-white text-[2rem] font-bold">
          {" "}
          Aspiring Web Developer.
        </p>
        <p className="text-[white] pt-10 font-extralight">
          Experienced in web development with a strong command of both <br></br>
          front-end and back-end technologies. Skilled in modern frameworks
          <br></br>
          like React and Node.js, creating responsive, high-performance
          <br></br>
          applications. Dedicated to writing clean, scalable code and <br></br>F
          continuously enhancing user experience through effective, innovative
          solutions.
        </p>
        <div className="flex gap-4 mt-6">
          <button
            className=" text-sm bg-[#174882] p-2 pl-4 pr-4 rounded-[0.3rem] text-white"
            onClick={() =>
              (window.location.href =
                "mailto:ahmedghounami0@gmail.com?subject=Contact Request")
            }
          >
            Contact Me
          </button>
          <button className="text-sm border border-[white] p-2 pl-4 pr-4 rounded-[0.3rem] text-white">
            Know More
          </button>
        </div>
      </div>
      <div>
        <img src={Profile} alt="picture" width={400}/>
      </div>
    </div>
  );
}
