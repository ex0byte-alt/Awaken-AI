// components/BackgroundPattern.tsx
import React from "react";
import Blob from "./Blob";

interface BackgroundPatternProps {
  children: React.ReactNode;
}

const BackgroundPattern: React.FC<BackgroundPatternProps> = ({ children }) => {
  const VerticalSpacing = 600;

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-white dark:bg-black" aria-hidden="true" />

      <Blob
        type="quarter"
        position="top-left"
        colors={['#1EDEF7', '#FF30D9']}
        opacity={0.5}
        VerticalSpacing={VerticalSpacing}
        index={0}
      />
      <Blob
        type="half"
        position="right-edge"
        colors={['#1EDEF7', '#FF30D9']}
        VerticalSpacing={VerticalSpacing}
        index={1}
      />
      <Blob
        type="half"
        position="left-edge"
        colors={['#1EDEF7', '#FF30D9']}
        VerticalSpacing={VerticalSpacing}
        index={2}
      />
      <Blob
        type="half"
        position="right-edge"
        colors={['#1EDEF7', '#FF30D9']}
        VerticalSpacing={VerticalSpacing}
        index={3}
      />
      <Blob
        type="half"
        position="left-edge"
        colors={['#1EDEF7', '#FF30D9']}
        VerticalSpacing={VerticalSpacing}
        index={4}
      />
      <Blob
        type="half"
        position="right-edge"
        colors={['#1EDEF7', '#FF30D9']}
        VerticalSpacing={VerticalSpacing}
        index={5}
      />
      <Blob
        type="half"
        position="left-edge"
        colors={['#1EDEF7', '#FF30D9']}
        VerticalSpacing={VerticalSpacing}
        index={6}
      />
      <Blob
        type="quarter"
        position="bottom-right"
        colors={['#1EDEF7', '#FF30D9']}
        opacity={0.5}
        VerticalSpacing={VerticalSpacing}
        index={7}
      />

      {children}
    </div>
  );
};

export default BackgroundPattern;
