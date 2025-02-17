"use client";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}>
      {children}
    </div>)
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon
}) => {
  return (
    (<div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-navy-900/50 backdrop-blur-sm border border-white/[0.2] justify-between flex flex-col space-y-4",
        className
      )}>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {header}
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-white mb-2 mt-2 flex items-center gap-2">
          {icon}
          {title}
        </div>
        <div className="font-sans font-normal text-white/80 text-sm">
          {description}
        </div>
      </div>
    </div>)
  );
};
