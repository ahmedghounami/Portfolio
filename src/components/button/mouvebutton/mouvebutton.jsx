import { cn } from "../../../utils/cn";
import React from "react";

export const Meteors = () => {
  const meteors = new Array(80).fill(true);
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
    
          )}
          style={{
            top: Math.random() * 100 + "vh", // Random vertical starting position
            left: Math.random() * 100 + "vw", // Random horizontal starting position
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
            position : "fixed",
          }}
        ></span>
      ))}
    </>
  );
};
