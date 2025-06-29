import React from "react";

interface BackgroundPatternProps {
  className?: string;
}

const BackgroundPattern: React.FC<BackgroundPatternProps> = ({ className }) => {
  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      <div className="w-full h-full absolute">
        {[...Array(8)].map((_, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={i}
              className={`
                absolute w-100 h-100 rounded-full blur-3xl opacity-60 
                ${isEven ? "right-240" : "left-226"}
                bg-[linear-gradient(80deg,_#1C9CEC,_#FF30D9)]
              `}
              style={{
                top: `${i * 60}vh`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BackgroundPattern;
