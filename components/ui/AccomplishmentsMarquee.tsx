"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { CardContainer, CardItem } from "./3d-card";

export const AccomplishmentsMarquee = ({
  items,
  direction = "left",
  speed = "medium",
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
  const [duplicatedItems, setDuplicatedItems] = useState([...items, ...items]); // Duplicate before rendering

  useEffect(() => {
    if (containerRef.current) {
      getDirection();
      getSpeed();
      setStart(true);
    }
  }, []);

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-duration",
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {duplicatedItems.map((item, idx) => (
          <li key={idx} className="flex-shrink-0 w-[400px] md:w-[500px]">
            <CardContainer>
              <CardItem>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <img
                    src={item.image}
                    height="500"
                    width="500"
                    className="h-[300px] md:h-[400px] w-full object-cover rounded-xl"
                    alt={`thumbnail-${item.image}`}
                  />
                </a>
              </CardItem>
            </CardContainer>
          </li>
        ))}
      </ul>
    </div>
  );
};
