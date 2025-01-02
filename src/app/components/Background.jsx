import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { TitleButtons } from "./TitleButtons";


export function Background() {
  return (
    <BackgroundLines className="min-h-screen flex items-center justify-center w-full flex-col px-4">
      <h2
        className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-10 relative z-20 font-bold tracking-tight">
       Hi, I'm Ciara Cade.
      </h2>
      <div>
    <TitleButtons/>
      </div>
    </BackgroundLines>
  );
}

