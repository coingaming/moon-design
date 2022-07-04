import React from "react";

interface IconProps {
  width: number;
  height?: number;
  color?: string;
  className?: string;
}

const ChevronIcon: React.FC<IconProps> = ({
  width, 
  height,
  color,
  className = ''
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 24}
      height={height || width || 24}
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        stroke={color || "#000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 7.5l4.5 4.5-4.5 4.5"
      ></path>
    </svg>
  );
}

export default ChevronIcon;
