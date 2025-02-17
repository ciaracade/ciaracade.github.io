"use client";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function TitleButtons() {
  return (
    <div className="flex justify-center text-center space-x-6">
      <button className="group relative px-4 py-2 flex items-center space-x-2 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full border border-white/10 hover:border-white/25 transition-all duration-300">
        <FaLinkedin className="w-5 h-5 text-white/90" />
        <span className="text-white/90 text-sm">LinkedIn</span>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>

      <button className="group relative px-4 py-2 flex items-center space-x-2 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full border border-white/10 hover:border-white/25 transition-all duration-300">
        <FaGithub className="w-5 h-5 text-white/90" />
        <span className="text-white/90 text-sm">Github</span>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>

      <button className="group relative px-4 py-2 flex items-center space-x-2 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full border border-white/10 hover:border-white/25 transition-all duration-300">
        <MdEmail className="w-5 h-5 text-white/90" />
        <span className="text-white/90 text-sm">Email</span>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
    </div>
  );
}

