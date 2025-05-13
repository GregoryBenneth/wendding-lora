"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlowingCard: React.FC<GlowingCardProps> = ({
  children,
  className = "",
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden border border-[#D8C5C9]/20 rounded-2xl ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {isHovered && (
        <motion.div
          className="absolute inset-0 opacity-0 mix-blend-soft-light"
          animate={{
            opacity: 0.8,
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.4), transparent 40%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
