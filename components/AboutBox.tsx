"use client";
import { ComputerIcon } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

const AboutBox = ({ title, description }: { title: string; description: string }) => {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(200px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;

  const borderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!borderRef.current) return;
      const borderRect = borderRef.current.getBoundingClientRect();
      offsetX.set(e.clientX - borderRect.x);
      offsetY.set(e.clientY - borderRect.y);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [offsetX, offsetY]);

  return (
    <div key={title} className="border flex-1 border-white/30 px-5 py-10 text-center rounded-xl relative">
      <motion.div
        className="absolute inset-0 border-2 border-whiete  rounded-xl"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
        ref={borderRef}
      ></motion.div>
      <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
        <ComputerIcon />
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>
    </div>
  );
};

export default AboutBox;
