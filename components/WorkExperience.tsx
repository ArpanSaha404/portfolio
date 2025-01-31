import React from "react";
import { Timeline } from "./ui/timeline";
import { MoveRight } from "lucide-react";

const WorkExperience = () => {
  const data = [
    {
      title: "Infosys (2022 - Present) Senior System Engineer",
      content: (
        <div className="pt-20">
          <ol className="space-y-2 text-md">
            <li className="flex justify-center items-center">
              <MoveRight className="pr-4" size={50} />
              Developed a robust application for loading Excel data, generating
              calculated and organized reports, and enabling users to download
              consolidated data in Excel Sheets.
            </li>
            <li className="flex justify-center items-center">
              <MoveRight className="pr-4" size={50} />
              Automated a time-intensive manual process by consolidating
              multiple systematic queries into a single-click interface,
              facilitating real-time progress monitoring.
            </li>
            <li className="flex justify-center items-center">
              <MoveRight className="pr-4" size={50} />
              Built an application to compare data and formulas in Excel files,
              allowing automatic comparison and eliminating manual review
              requirements.
            </li>
            <li className="flex justify-center items-center">
              <MoveRight className="pr-4" size={70} />
              Designed and developed a versatile application that enables users
              to specify multiple filter conditions and select data fields
              ensuring accurate and tailored data retrieval and Delivered
              dynamic consolidated Excel reports for efficient data analysis and
              reporting.
            </li>
          </ol>
        </div>
      ),
    },
  ];
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
