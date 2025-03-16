'use client';

import { useState, useEffect } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import animationData from "@/Data/confetti.json";
import MagicButton from "@/components/ui/MagicButton";
import GridGlobe from "./GridGlobe";
import Lottie from "lottie-react";

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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleCopy = async () => {
      const text = "dererk.copelandjr@gmail.com";
      await navigator.clipboard.writeText(text);
      setCopied(true);

      // Reset copied state after animation
      setTimeout(() => {
        setCopied(false);
      }, 2000);
  };

  if (!isClient) {
    return null; // Return null on server-side
  }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={cn("h-full", id === 6 && "flex justify-center")}>
        {img && (
          <div className="w-full h-full absolute">
            <img
              src={img}
              alt="content"
              className={cn("object-cover object-center", imgClassName)}
            />
          </div>
        )}
        
        {spareImg && (
          <div className={cn("absolute right-0 -bottom-5", id === 5 && "w-full opacity-80")}>
            <img
              src={spareImg}
              alt="spare"
              className="object-cover object-center w-full h-full"
            />
          </div>
        )}

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl" />
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
            titleClassName
          )}
        >
          {title && (
            <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 pb-2">
              {title}
            </div>
          )}
          
          {description && (
            <div className={cn("font-sans font-extralight md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10", 
              id === 3 && "w-1/2"
            )}>
              {description}
            </div>
          )}

          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="md:flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0 ${copied ? "block" : "hidden"}`}>
                <Lottie
                  animationData={animationData}
                  loop={copied}
                  autoplay={copied}
                  style={{ height: 200, width: 400 }}
                />
              </div>
              <MagicButton
                title={copied ? "Email Copied!" : "Copy Email"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};