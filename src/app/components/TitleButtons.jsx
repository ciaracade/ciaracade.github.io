"use client";
import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export function TitleButtons() {
  return (
    (<div className=" flex justify-center text-center space-x-4">
      
           <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2">
        <span>LinkedIn</span>
      </HoverBorderGradient>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2">
        <span>Github</span>
      </HoverBorderGradient>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2">
        <span>Mail</span>
      </HoverBorderGradient>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2">
        <span>Aceternity UI</span>
      </HoverBorderGradient>
    </div>)
  );
}

