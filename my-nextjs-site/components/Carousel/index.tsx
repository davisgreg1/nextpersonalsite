"use client";
import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./styles.module.css";
import CustomDots from "./CustomDots";

function CarouselComp({ items }: { items: React.ReactNode[] }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1141 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1140, min: 721 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 720, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      responsive={responsive}
      customDot={
        <CustomDots
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      }
      swipeable={true}
      centerMode={false}
      draggable={false}
      showDots={true}
      focusOnSelect={true}
      ssr={false} // means to render carousel on server-side.
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={7000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass={styles.carouselContainer}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass={`custom-dot-list-style ${styles.carouselDots}`}
      itemClass={styles.carouselItem}
    >
      {items.map((item, index) => {
        return (
          <div className="h-[500px] flex" key={index}>
            {item}
          </div>
        );
      })}
    </Carousel>
  );
}

export default memo(CarouselComp);
