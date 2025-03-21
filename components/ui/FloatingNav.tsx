// components/ui/FloatingNav.tsx
"use client";
import React, { useState, JSX } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <nav className="w-full flex justify-center">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "inline-flex fixed mx-auto top-10 border bg-black-100 dark:border-white/[0.2] rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-10 py-5 items-center justify-center space-x-4 border-white/[0.2] will-change-transform",
          className
        )}
      >
        {navItems.map((navItem: { name: string; link: string; icon?: JSX.Element }, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            onClick={(e) => {
              e.preventDefault();
              const targetId = navItem.link.replace('#', '');
              
              // Special case for scrolling to top
              if (targetId === '') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
              }
              
              const element = document.getElementById(targetId);
              if (element) {
                // Get the nav height for proper offset
                const navHeight = document.querySelector("nav")?.clientHeight || 0;
                const offsetTop = element.offsetTop - navHeight - 10;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
              }
            }}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 cursor-pointer"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="sm:block text-sm">{navItem.name}</span>
          </a>
        ))}

      </motion.div>
    </nav>
  );
};
