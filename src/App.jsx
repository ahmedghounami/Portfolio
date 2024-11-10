import "./global.css";
import React, { useEffect } from "react";
import Nav from "./contaners/nav.jsx";
import Conteaner from "./contaners/container.jsx";
import Home from "./contaners/home.jsx";
import About from "./contaners/about.jsx";
import Biography from "./contaners/biography.jsx";

export default function App() {
  return (
    <div className="relative w-[100%] h-[100vh] bg-[#060101] flex flex-col overflow-scroll ">
      <Nav />
      <Conteaner>
        <Home/>
        < About />
        < Biography />
      </Conteaner>
    </div>
  );
}
