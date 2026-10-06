import React from "react";
import { Timeline } from "./ui/timeline";
import { MoveRight, Building2 } from "lucide-react";
import { workExperience } from "@/data/data";

const WorkExperience = () => {
  const data = workExperience.map((item) => ({
    title: item.title,
    icon: <Building2 className="text-purple-400 shrink-0" size={28} />,
    content: (
      <div className="pt-20">
        <div className="flex flex-wrap gap-2 pb-6">
          {item.techs.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs md:text-sm rounded-full border border-purple-400/40 bg-purple-400/10 text-purple-300"
            >
              {tech}
            </span>
          ))}
        </div>
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
