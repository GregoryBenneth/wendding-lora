"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface AnimatedButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  href,
  icon,
  label,
  className = "",
}) => {
  return (
    <Link
      href={href}
      className={`flex flex-col items-center gap-2 ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.div
        className="w-16 h-16 bg-[#6D3841] rounded-full flex items-center justify-center"
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 15px 2px rgba(216, 197, 201, 0.3)",
          backgroundColor: "#7d424c",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {icon}
      </motion.div>
      <motion.span
        className="text-sm text-center font-medium tracking-wide"
        whileHover={{ color: "#ffffff" }}
      >
        {label}
      </motion.span>
    </Link>
  );
};
