'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import Globe from './Globe'

interface GridGlobeProps {
  className?: string
  title?: string
  description?: string
}

export default function GridGlobe({
  className,
  title = "Borderless Development",
  description = "Crafting Android experiences for a connected world."
}: GridGlobeProps) {
  return (
    <div className={cn(
      "flex flex-col row-span-1 col-span-1 rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between relative overflow-hidden",
      className
    )}
    style={{
      background: "rgb(4,7,29)",
      backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
    }}>
      {/* Text container with higher z-index */}
      <div className="flex flex-col p-5 lg:p-6 z-20 relative">
        <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold pb-2 group-hover/bento:translate-x-2 transition duration-200">
          {title}
        </div>
        <div className="font-sans font-extralight md:text-xs lg:text-base text-sm text-[#C1C2D3]">
          {description}
        </div>
      </div>
      
      {/* Globe container positioned absolutely to overlap with text */}
      <div className="absolute inset-0 top-[20px] md:top-[10px] lg:top-[0px] h-full z-10">
        <Globe />
      </div>
      
      {/* Semi-transparent gradient overlay to improve text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(4,7,29,0.8)] via-[rgba(4,7,29,0.4)] to-transparent z-[15] pointer-events-none"></div>
    </div>
  )
}