import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";

interface ParallaxImageProps {
  imageUrl: string;
  priority?: boolean;
  customStyles?: string;
  alt?: string;
}

export default function ParallaxImage({
  imageUrl,
  priority,
  customStyles,
  alt,
}: ParallaxImageProps) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxStyles = {
    transform: `translateY(${scrollPosition * 0.5}px)`, // Adjust the parallax effect here
    transition: "transform ease-out 0.3s", // Add a transition effect for a smoother animation
  };

  return (
    <div className={`${customStyles}`} style={parallaxStyles}>
      <Image
        src={imageUrl}
        fill={true}
        sizes="(max-width: 640px) 100vw, 640px"
        style={{ objectFit: "cover" }}
        alt={alt ? alt : ""}
        priority={priority}
      />
    </div>
  );
}
