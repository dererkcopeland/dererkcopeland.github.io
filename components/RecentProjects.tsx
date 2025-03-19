

import { projects } from "@/Data";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevent mismatches by rendering only on the client

  return (
    <div className="py-24 md:py-28 lg:py-32 relative" id="projects">
      <h1 className="heading mb-16 text-center">
        <span className="text-purple">A Recent Project</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16">
        {projects.map((item, index) => (
          <div
            className="lg:min-h-[35rem] h-[28rem] flex items-center justify-center sm:w-[420px] w-[90vw]"
            key={`${item.id}-${index}`}
          >
            {/* Option 1: Keep PinContainer link but remove inner link */}
            <PinContainer title={item.title} href={item.link}>
              {/* Full-width image section that takes up top half */}
              <div className="relative w-full h-[240px] overflow-hidden rounded-t-xl">
                <div className="absolute inset-0 bg-[#13162D]">
                  <Image 
                    src="/bg.png" 
                    alt="background" 
                    width={800} 
                    height={600} 
                    className="w-full h-full object-cover opacity-50" 
                  />
                </div>
                <Image
                  src={item.img}
                  alt={`project-${item.title}`}
                  width={800}
                  height={600}
                  className="z-10 absolute inset-0 object-cover w-full h-full"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              <div className="p-4">
                <h1 className="font-bold lg:text-2xl md:text-xl text-base py-2 text-white">
                  {item.title}
                </h1>

                <p
                  className="lg:text-lg font-light text-sm"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                  <span 
                    className="ml-2 text-purple cursor-pointer hover:underline"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(item.link, '_blank');
                    }}
                  >
                    Read more
                  </span>
                </p>

                <div className="flex items-center justify-between mt-6 mb-2">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image src={icon} alt={`tech-icon-${index}`} width={50} height={50} className="p-2" />
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