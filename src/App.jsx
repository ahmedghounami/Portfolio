import "./global.css";
import React, { useEffect } from "react";
import Nav from "./contaners/nav.jsx";
import Conteaner from "./contaners/container.jsx";
import Home from "./contaners/home.jsx";
import About from "./contaners/about.jsx";
import Biography from "./contaners/biography.jsx";
import Skills from "./contaners/skills.jsx";
import Projects from "./contaners/projects.jsx";
import Progress from "./contaners/progress.jsx";
import { useRef } from "react";
import { LampDemo } from "./components/header/header-Comp/header-Comp.jsx";
import { GridBackgroundDemo } from "./components/background/background-Comp/background-Comp.jsx";
import Github from "./components/skills/skillsComponent/skillsComponent.jsx";

export default function App() {
  const containerRef = useRef(null);
  return (
    <div
      ref={containerRef}
      className="relative w-screen h-[100vh] bg-gradient-to-b from-[#020616] to-[#020616] flex flex-col items-center overflow-y-scroll overflow-x-hidden"
    >
      <Nav containerRef={containerRef} />
      {/* <GridBackgroundDemo /> */}
      <Conteaner>
        <LampDemo />
        <Home />
        <About />
        <Skills />
        {/* <Progress /> */}
        <Projects />
        <Biography />
        <div className="flex justify-between mt-[10rem] mb-[1rem]">
          <p className="text-[#f5f5f5] text-center text-sm ">
            &copy; 2024, developed by Ahmed Ghounami.
          </p>
          <div className="flex gap-2">
            <a href="https://www.github.com/aghounami">
              <ion-icon
                className=" border pt-2 pb-2 rounded-[0.6rem] text-white w-[2rem]"
                name="logo-github"
              ></ion-icon>
            </a>
            <a href="https://www.linkedin.com/in/ahmed-ghounami-a675b1294/">
              <ion-icon
                className=" border pt-2 pb-2 rounded-[0.6rem] text-white w-[2rem]"
                name="logo-linkedin"
              ></ion-icon>
            </a>
          </div>
        </div>
      </Conteaner>
    </div>
  );
}
