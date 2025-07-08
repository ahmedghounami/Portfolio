"use client";
import React from "react";
import { Button } from "../../mouving/mouving-comp/mouving";

export function MovingBorderDemo({ content, flag }) {
  const sharedStyles =
    "w-[12rem] h-[3.2rem] px-6 py-2 rounded-xl text-sm font-semibold shadow-md flex items-center justify-center transition-all duration-300";

  return (
    <div className="flex justify-center items-center mt-6">
      {flag === 1 ? (
        <button
          onClick={() =>
            (window.location.href =
              "mailto:ahmedghounami0@gmail.com?subject=Contact%20Message&body=Hello%20Ahmed,%0A%0AI'm%20reaching%20out%20to%20connect.%0A%0ABest%20regards")
          }
          className={`${sharedStyles} bg-[#083260] text-white hover:bg-[#1DBAD5] hover:scale-105`}
        >
          {content}
        </button>
      ) : (
        <a
          href="/cv.pdf"
          download
          onClick={() => console.log("CV downloaded")}
          className={`${sharedStyles} bg-[#083260] text-white hover:border-2 hover:border-[#1DBAD5] hover:scale-105`}
        >
          CV Download
        </a>
      )}
    </div>
  );
}
