import "./global.css";
import React, { useEffect } from "react";
import Nav from "./contaners/nav.jsx";
import Container from "./contaners/container.jsx";
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
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { Meteors } from "./components/button/mouvebutton/mouvebutton.jsx";
export default function App() {
  return (
    <div className="relative w-screen h-[100vh] bg-gradient-to-b from-[#020616] to-[#020616] flex flex-col items-center overflow-y-scroll overflow-x-hidden">
      <Nav />
      <Meteors />
      <Container>
        <LampDemo />
        <Home />
        <About />
        <Skills />

        <Projects />
        <Biography />
        <div className="flex justify-between mt-[10rem] mb-[1rem]">
          <p className="text-[#f5f5f5] text-center text-sm ">
            &copy; 2024, developed by Ahmed Ghounami.
          </p>
          <div className="flex gap-6">
            <a href="https://www.github.com/ahmedghounami">
              <FaGithub
                className="bg-[#1DBAD5] text-[2.3rem] rounded-full hover:scale-125 transition-all duration-500"
                name="logo-github"
              />
            </a>
            <a href="https://www.linkedin.com/in/ahmed-ghounami-a675b1294/">
              <FaLinkedin
                className="bg-[#1DBAD5] text-[2.3rem] rounded-full hover:scale-125 transition-all duration-500"
                name="logo-linkedin"
              />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
