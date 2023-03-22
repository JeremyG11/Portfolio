import React from "react";
import Home from "./Home";
import About from "./about";
import Works from "./services";
import Contact from "./contact";
import Latest from "./latest";
import Skills from "@/components/Skills";

export default function Index() {
  return (
    <div>
      <div id="home" className="pt-10">
        <Home />
        {console.log(process.env.DB_USER)}
      </div>
      <div id="about" className="py-20">
        <About />
      </div>
      <div id="services">
        <div className="py-20 relative w-full bg-[url('../public/wallpaper.jpg')] bg-fixed bg-cover bg-no-repeat bg-bottom">
          <Works />
        </div>
        <Skills/>
      </div>
      <div id="works" className="py-20">
        <Latest />
      </div>
      <div id="contact" className="py-20 ">
        <Contact />
      </div>
    </div>
  );
}
