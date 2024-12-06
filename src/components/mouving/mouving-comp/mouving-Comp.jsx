"use client";
import React from "react";
import { Button } from "../../mouving/mouving-comp/mouving";

export function MovingBorderDemo({ content, flag }) {
  return (
    <div>
      <Button
        onClick={() =>
          flag === 1 &&
          (window.location.href =
            "mailto:ahmedghounami0@gmail.com?subject=Contact%20Message&body=Hello%20Ahmed,%0A%0AI'm%20reaching%20out%20to%20connect.%0A%0ABest%20regards")
        }
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
