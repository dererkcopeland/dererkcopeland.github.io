"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { FramerCardContainer, FramerCardItem } from "./3d-card";

export const AccomplishmentsMarquee = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: {
    id: number;
    image: string;
    url: string; // Ensure each item has a link property
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);
  const duplicatedItems = [...items, ...items]; // Duplicate before rendering

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-duration",
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
      );
    }
  }, [speed]);

  useEffect(() => {
    if (containerRef.current) {
      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        className,
        "before:absolute before:left-0 before:top-0 before:z-20 before:h-full before:w-[120px] before:bg-gradient-to-r before:from-black-100 before:to-transparent",
        "after:absolute after:right-0 after:top-0 after:z-20 after:h-full after:w-[120px] after:bg-gradient-to-l after:from-black-100 after:to-transparent"
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap relative z-5",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {duplicatedItems.map((item, idx) => (
          <li key={idx} className="flex-shrink-0 w-[350px] md:w-[450px] px-2 relative z-10">
            <FramerCardContainer className="inter-var">
              <FramerCardItem className="overflow-hidden">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <Image
                    src={item.image}
                    height={500}
                    width={500}
                    className="h-[300px] md:h-[400px] w-full object-contain rounded-xl"
                    alt={`accomplishment-${item.id}`}
                    style={{ maxWidth: '100%' }}
                  />
                </a>
              </FramerCardItem>
            </FramerCardContainer>
          </li>
        ))}
      </ul>
    </div>
  );
};
