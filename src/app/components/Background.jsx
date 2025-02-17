"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TitleButtons } from "./TitleButtons";
import { motion } from "framer-motion";
import { CarouselSection } from "./CarouselSection";
import { ProjectsSection } from "./ProjectsSection";

export function Background() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background container */}
      <div className="fixed inset-0 z-0">
        <BackgroundBeams />
      </div>
      
      {/* Content container */}
      <div className="relative z-20">
        {/* Hero Section */}
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-8 relative group"
          >
            <span className="bg-gradient-to-r from-white via-pink-200 to-white text-transparent bg-clip-text bg-300% animate-gradient">
              Hi, I'm Ciara Cade.
            </span>
            <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <TitleButtons />
          </motion.div>
        </div>

        {/* Get to know section */}
        <CarouselSection />

        {/* Projects Section */}
        <ProjectsSection />
      </div>
    </div>
  );
}

