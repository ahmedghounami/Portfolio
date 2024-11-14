"use client";
import React from "react";
import { Button } from "../../mouving/mouving-comp/mouving";

export function MovingBorderDemo({ content, flag }) {
    return (
      <div>
        <Button
          borderRadius="1rem"
          className={`${
            flag === 1 ? "bg-[#083260] border-black" : "bg-black border-[white]" 
          } dark:bg-slate-900 text-white `}
        >
          {content}
        </Button>
      </div>
    );
  }
  