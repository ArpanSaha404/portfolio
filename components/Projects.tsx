import { projects } from "@/data/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex items-center justify-center flex-col pb-20"
    >
      <div className="heading text-3xl pt-8">
        A Small Collection of{" "}
        <span className="text-purple-400"> Recent Projects</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-screen lg:gap-32 pl-80">
        {projects.map((item) => (
          <div key={item.id} className="w-1/2 h-[40rem] my-4 lg:my-1">
            <PinContainer
              title={item.title}
              href={item.gitLink}
              className="h-full min-w-[40vw] p-4"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-[20rem] w-full"
              />
              <h1 className="text-xl md:text-2xl px-4 pt-4 pb-0.5">
                {item.title}
              </h1>
              <h1 className="text-md md:text-lg px-4 pt-4 pb-0.5">
                {item.desc}
              </h1>
              <div className="flex items-center justify-start px-4 py-4 w-full">
                {item.techs.map((icon, idx) => (
                  <div
                    key={idx}
                    style={{ transform: `translateX(${-3 * idx * 8}px)` }}
                    className="flex items-center justify-start"
                  >
                    <img
                      src={icon}
                      alt="icon"
                      className="rounded-full p-2 object-cover h-10 w-10 md:h-14 md:w-14"
                    />
                  </div>
                ))}
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
