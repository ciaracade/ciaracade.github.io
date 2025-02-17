"use client";
import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

export function ProjectCard({ title, description, techStack, githubLink, liveLink, image }) {
  return (
    <div className="w-full max-w-md">
      <HoverBorderGradient
        containerClassName="rounded-xl"
        className="p-6 dark:bg-black bg-white text-black dark:text-white h-full">
        {image && (
          <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
            <img src={image} alt={title} className="object-cover w-full h-full" />
          </div>
        )}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-blue-500">
              <FaGithub className="w-4 h-4" />
              Code
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-blue-500">
              <BiLinkExternal className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </HoverBorderGradient>
    </div>
  );
} 