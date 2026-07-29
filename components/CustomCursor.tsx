"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ring, setRing] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      // Ring follows with slight lag via CSS transition
      requestAnimationFrame(() => setRing({ x: e.clientX, y: e.clientY }));
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-hover]")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <motion.div
        className="cursor-dot"
        animate={{
          left: pos.x,
          top: pos.y,
          scale: isClicking ? 0.5 : isHovering ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.3 }}
      />
      {/* Ring */}
      <motion.div
        className="cursor-ring"
        animate={{
          left: ring.x,
          top: ring.y,
          scale: isHovering ? 1.8 : isClicking ? 0.8 : 1,
          borderColor: isHovering
            ? "rgba(168, 85, 247, 0.8)"
            : "rgba(0, 217, 255, 0.5)",
          backgroundColor: isHovering
            ? "rgba(168, 85, 247, 0.1)"
            : "transparent",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.5 }}
      />
    </>
  );
}
