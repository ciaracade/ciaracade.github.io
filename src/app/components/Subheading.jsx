"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { LinkPreview } from "@/components/ui/link-preview";

export function Subheading() {
  const words = [
    {
      text: "Student.",
    },
    {
      text: "Developer.",
    },
    {
      text: "Founder.",
    },
    {
      text: "Influencer.",
    },
    {
      text: "Problem Solver.",
      className: "text-pink-500 dark:text-pink-500",
    },
  ];
  return (
    (<div className="flex flex-col items-center justify-center h-[40rem]  ">
      <TypewriterEffectSmooth words={words} />
    </div>)
  );
}
