import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";

interface ParallaxBackgroundProps {
  imageUrl: string;
  offset: number;
  children?: React.ReactNode;
  priority?: boolean;
  roundedBorder?: boolean;
  id?: string;
}

export default function ParallaxBackground({
  imageUrl,
  offset,
  children,
  priority,
  id,
  roundedBorder,
}: ParallaxBackgroundProps) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const offsetValue = useMotionValue(offset);

  useEffect(() => {
    const currentVal = imgRef?.current;
    if (imgRef.current?.complete) {
      setImgLoaded(true);
    } else {
      const handleLoad = () => setImgLoaded(true);
      imgRef.current?.addEventListener("load", handleLoad);
      return () => {
        if (currentVal) {
          currentVal.removeEventListener("load", handleLoad);
        }
      };
    }
  }, []);

  const y = useTransform(offsetValue, [0, 1], [0, -100], {
    clamp: false,
  });

  return (
    <>
      <motion.div
        className={`overflow-hidden relative w-full h-64 ${
          roundedBorder ? "rounded-3xl" : ""
        }`}
        style={{ y }}
        id={id}
      >
        <Image
          ref={imgRef}
          src={imageUrl}
          fill={true}
          sizes="(max-width: 640px) 100vw, 640px"
          style={{ objectFit: "cover" }}
          alt=""
          onLoad={() => setImgLoaded(true)}
          priority={priority}
        />
      </motion.div>
      {children ? (imgLoaded ? children : "") : ""}
    </>
  );
}
