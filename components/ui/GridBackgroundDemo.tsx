import React from "react";
import { TextGenerateEffect } from "./text-generate-effect";

export function GridBackgroundDemo() {
  return (
    <div className="h-full w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.08] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex justify-center items-center flex-col">
        <TextGenerateEffect
          className="text-center text-2xl md:text-5xl"
          duration={2}
          filter={false}
          words={"Transforming ideas into Seamless Digital Experiences"}
        />
        <p className="md:text-3xl text-xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 py-4">
          Hi, I&apos;m Arpan, a Full Stack Developer
        </p>
      </div>
    </div>
  );
}
