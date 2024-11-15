import React from "react";

export default function Badge() {
  return (
    <div className="flex justify-center">
      <a href="https://profile.intra.42.fr/users/aghounam">
        <img 
          src="https://badge.mediaplus.ma/binary/aghounam" 
          alt="aghounam's 42 stats" 
          className="mx-auto"
        />
      </a>
    </div>
  );
}
