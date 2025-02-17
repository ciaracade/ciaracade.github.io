"use client";
import React from "react";
import { 
  FaReact, 
  FaNode, 
  FaPython,
  FaDatabase,
  FaDocker
} from "react-icons/fa";
import { SiTypescript, SiJavascript } from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact className="w-6 h-6" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-6 h-6" /> },
      { name: "JavaScript", icon: <SiJavascript className="w-6 h-6" /> },
      // Add more frontend skills
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNode className="w-6 h-6" /> },
      { name: "Python", icon: <FaPython className="w-6 h-6" /> },
      // Add more backend skills
    ]
  },
  {
    title: "Other",
    skills: [
      { name: "Docker", icon: <FaDocker className="w-6 h-6" /> },
      { name: "SQL", icon: <FaDatabase className="w-6 h-6" /> },
      // Add more skills
    ]
  }
];

export function SkillsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="p-6">
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center p-2 hover:transform hover:scale-110 transition-transform">
                    {skill.icon}
                    <span className="mt-2 text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 