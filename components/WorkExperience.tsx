import React from "react";
import { Timeline } from "./ui/timeline";
import { MoveRight } from "lucide-react";
import { workExperience } from "@/data/data";

const WorkExperience = () => {
  const data = workExperience.map((item) => ({
    title: item.title,
    content: (
      <div className="pt-20">
        <ol className="space-y-2 text-md">
          {item.points.map((point, index) => (
            <li key={index} className="flex justify-center items-start">
              <MoveRight className="pr-4 shrink-0" size={30} />
              {point}
            </li>
          ))}
        </ol>
      </div>
    ),
  }));
  return (
    <div id="work" className="flex items-center justify-center flex-col pb-20">
      <div className="heading text-3xl pt-8">
        My <span className="text-purple-400"> Work Experience</span>
      </div>
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default WorkExperience;
