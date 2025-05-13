"use client";

import React from "react";
import { motion } from "framer-motion";

interface DividerProps {
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center my-8 ${className}`}>
      <motion.div
        className="w-16 h-px bg-[#D8C5C9]/30"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 64, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        className="w-2 h-2 rounded-full mx-3 bg-[#D8C5C9]/50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      />
      <motion.div
        className="w-16 h-px bg-[#D8C5C9]/30"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 64, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
    </div>
  );
};
