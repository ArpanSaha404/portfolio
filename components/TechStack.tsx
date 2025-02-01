"use client";
import React from "react";
import { Button } from "./ui/moving-border";
import { techStack } from "@/data/data";

const TechStack = () => {
  return (
    <div className="flex items-center justify-center flex-col pb-10">
      <div className="heading text-3xl py-8">
        My Current <span className="text-purple-400"> Tech Stack</span>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 md:gap-12">
        {techStack.map((item, idx) => (
          <Button
            key={item.name + idx}
            borderRadius="1.75rem"
            className="py-2 cursor-default flex justify-center items-center gap-2 md:gap-3 md:py-4 px-3 text-md md:text:lg bg-white dark:bg-black-100 dark:text-white border-neutral-200 dark:border-black-300 saturate-150 backdrop-blur-lg backdrop-filter"
            duration={Math.ceil(Math.random() * 10000) + 10000}
          >
            <div className="pl-2">{item.name}</div>
            <div className="flex flex-col items-start justify-center px-4 h-full">
              {item.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="w-full py-1 px-2 text-left border-l-2 border-black-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
