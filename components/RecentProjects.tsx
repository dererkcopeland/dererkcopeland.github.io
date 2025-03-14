

import { projects } from "@/Data";
import React, { useEffect, useState } from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevent mismatches by rendering only on the client

  return (
    <div className="py-20 relative" id="projects">
      <h1 className="heading mt-16 md:mt-24 mb-10 text-center">
        A <span className="text-purple">Recent Project</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-20">
        {projects.map((item, index) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={`${item.id}-${index}`}
          >
            {/* Option 1: Keep PinContainer link but remove inner link */}
            <PinContainer title={item.title} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] h-80 lg:h-96">
                <div
                  className="relative w-full h-full lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" className="w-full h-full object-cover" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 object-cover w-full h-full"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 py-3">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  {/* Removed <a> tag and replaced with styled <div> since PinContainer already links to item.link */}
                  <div className="flex items-center cursor-pointer">
                    <p className="lg:text-xl md:text-xs text-sm text-purple">Check Live Site</p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </div>
            </PinContainer>

            {/* Option 2 (alternative approach): Remove PinContainer link and keep inner link 
            <PinContainer title={item.title} href={undefined}>
              ... same content as above ...
              <div className="flex justify-center items-center">
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <p className="lg:text-xl md:text-xs text-sm text-purple">Check Live Site</p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </a>
              </div>
            </PinContainer>
            */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;