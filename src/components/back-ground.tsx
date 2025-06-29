"use client";

import React from "react";

interface BackgroundPatternProps {
  className?: string;
}

const blobs = Array.from({ length: 6 }).map((_, i) => {
  const isLeft = i % 2 === 0;
  const top = i * 100; // 100vh step — ensures 2 max on screen
  const offset = Math.floor(Math.random() * 20) + 5; // 5% to 25% from side

  return {
    id: i,
    side: isLeft ? "left" : "right",
    offset,
    top,
  };
});

const BackgroundPattern: React.FC<BackgroundPatternProps> = ({ className }) => {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <div className="relative h-[600vh] w-full">
        {blobs.map((blob) => (
          <div
            key={blob.id}
            className={`absolute rounded-full blur-3xl opacity-50
              w-[420px] h-[420px] sm:w-[480px] sm:h-[480px] 
              bg-[linear-gradient(80deg,_#1C9CEC,_#FF30D9)]
              ${blob.side}-[${blob.offset}%]
            `}
            style={{
              top: `${blob.top}vh`,
              [blob.side]: `${blob.offset}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundPattern;
