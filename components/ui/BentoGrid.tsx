'use client';
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Image from "next/image";
import * as THREE from 'three';
// Also install this npm i --save-dev @types/react-lottie
import Lottie from "lottie-react";

import { cn } from "@/lib/utils";


import { BackgroundGradientAnimation } from "./GradientBg";
import animationData from "@/Data/confetti.json";
import MagicButton from "@/components/ui/MagicButton";
import ThreeGlobe from 'three-globe';


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8 mx-auto w-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["Android SDK", "Jetpack Compose", "Objectbox"];
  const rightLists = ["Kotlin", "Java", "Firebase"];

  const [copied, setCopied] = useState(false);
  const [playAnimation, setPlayAnimation] = useState(false);

  const handleCopy = () => {
    const text = "dererk.copelandjr@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    // Reset animation state then trigger it
    setPlayAnimation(false);
    setTimeout(() => setPlayAnimation(true), 10);

    // Reset the button text after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const N = 300; // Number of data points
  const gData = [...Array(N).keys()].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    size: Math.random() / 3,
    color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
  }));

  const Globe = new ThreeGlobe()
    .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
    .pointsData(gData);

  const scene = new THREE.Scene();
  scene.add(Globe);

  // Setup camera
  const camera = new THREE.PerspectiveCamera();
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  camera.position.z = 500;

  // Setup renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

 


  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-[200px]`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={`content-${id}`}
              width={1200}
              height={800}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt={`spare-${id}`}
              width={600}
              height={400}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full flex flex-col px-5 p-5 lg:p-6 z-10"
          )}
        >
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 pb-2`}
          >
            {title}
          </div>
          <div className={`font-sans font-extralight md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10 ${id === 3 ? "w-1/2" : ""}`}>
            {description}

          </div>

      
        
          {/* Tech stack list div */}
          {id === 3 && (
            <div className="md:flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className="absolute top-0 left-0 z-0"
              >
                {playAnimation && (
                  <Lottie
                    animationData={animationData}
                    loop={false}
                    autoplay={true}
                    style={{ height: 200, width: 400 }}
                  />
                )}
              </div>

              <MagicButton
                title={copied ? "Email Copied!" : "Copy Email"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31] relative z-10"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};