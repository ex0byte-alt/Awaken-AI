// components/Blob.tsx
import React from "react";

export interface BlobProps {
  size?: number;
  type?: 'quarter' | 'half';
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'left-edge' | 'right-edge';
  colors: [string, string];
  blur?: number;
  opacity?: number;
  zIndex?: number;
  VerticalSpacing?: number; 
  index?: number;           
}

const Blob: React.FC<BlobProps> = ({
  size = 600,
  type = 'half',
  position,
  colors,
  blur = 120,
  opacity = 0.4,
  zIndex = -10,
  VerticalSpacing = 300, 
  index = 0,
}) => {
  const offset = size / 2;

  const style: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    position: 'absolute',
    background: `linear-gradient( ${colors[0]}, ${colors[1]})`,
    filter: `blur(${blur}px)`,
    opacity,
    zIndex,
    borderRadius: '9999px',
  };

  const topOffset = index * VerticalSpacing;

  if (type === 'quarter') {
    if (position === 'top-left') {
      style.top = `-${offset}px`;
      style.left = `-${offset}px`;
    } else if (position === 'bottom-right') {
      style.bottom = `-${offset}px`;
      style.right = `-${offset}px`;
    }
  } else {
    if (position === 'top-right' || position === 'right-edge') {
      style.top = `${topOffset}px`;
      style.right = `-${offset}px`;
    } else if (position === 'bottom-left' || position === 'left-edge') {
      style.top = `${topOffset}px`;
      style.left = `-${offset}px`;
    }
  }

  return <div style={style} aria-hidden="true" />;
};

export default Blob;
