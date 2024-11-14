import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Profile from "../assets/person.jpg";

import { MeteorsDemo } from "../components/button/mouvebutton/mouveComponent";

// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1300,
      once: true,
    });
  }, []);

  return (
    <div className="flex gap-4 justify-between" >
      <MeteorsDemo />
      <div>
        <img src={Profile} alt="picture" width={400} />
      </div>
    </div>
  );
}
