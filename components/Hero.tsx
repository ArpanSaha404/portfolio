"use client";
import { GridBackgroundDemo } from "./ui/GridBackgroundDemo";
import { Spotlight } from "./ui/spotlight";
import { Navigation } from "lucide-react";

const Hero = () => {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="about" className="pt-20 pb-4 h-full w-full">
      <Spotlight className="-top-40 -left-10 h-screen" fill="white" />
      <Spotlight className="top-10 left-40 h-screen" fill="blue" />
      <Spotlight className="top-0 left-full h-screen" fill="white" />
      <GridBackgroundDemo />
      <div className="flex justify-center items-center">
        <button className="relative inline-flex mt-4 h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-fulls">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-6 text-lg font-medium text-white backdrop-blur-3xl">
            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, "projects")}
              className="flex justify-center items-center"
            >
              <Navigation className="mr-3" /> See My Work
            </a>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
