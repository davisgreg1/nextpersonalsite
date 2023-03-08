import React from "react";

type CustomDotType = {
  onClick: () => void;
  active?: boolean;
  index?: number;
  carouselState?: {
    currentSlide: number;
  };
};

const CustomDots = ({ onClick, active }: CustomDotType) => {
  const handleClick = () => onClick();

  const color = active ? "#0d47a1" : "#fff";

  return (
    <div
      onClick={handleClick}
      style={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: color,
        padding: "4px",
        margin: "0 5px",
      }}
    />
  );
};

export default CustomDots;
