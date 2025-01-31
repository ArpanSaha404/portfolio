"use client";
import React from "react";
import { Navigation } from "lucide-react";
import { socials } from "@/data/data";

const Footer = () => {
  const handleCopy = (link: string) => {
    window.location.href = link;
  };

  return (
    <div
      id="contact"
      className="flex items-center justify-center flex-col py-8 my-8 space-y-4"
    >
      <div className="heading text-3xl pt-8">
        Looking to <span className="text-purple-400"> Connect</span>
      </div>
      <div className="">
        <a href="mailto:arpan50saha@gmail.com">
          <button className="relative inline-flex mt-4 h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-6 text-lg font-medium text-white backdrop-blur-3xl">
              <Navigation className="mr-3" /> Let&apos;s Get in Touch
            </span>
          </button>
        </a>
      </div>
      <div className="flex justify-between items-center w-full pt-10">
        <div>Copyright &#169; Arpan Saha</div>
        <div className="text-left w-auto flex items-center justify-center">
          {socials.map((data) => (
            <div key={data.id} className="">
              <div
                className="flex items-center justify-center p-3 mx-4 cursor-pointer border border-black-300 rounded-xl bg-black-100 saturate-150 backdrop-blur-lg backdrop-filter active:scale-75 transition-scale duration-200"
                onClick={() => handleCopy(data.link)}
              >
                <img
                  src={data.img}
                  alt={data.name}
                  height={25}
                  width={25}
                  className=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
