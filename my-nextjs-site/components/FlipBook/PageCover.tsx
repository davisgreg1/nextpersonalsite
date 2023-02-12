import React from "react";
import styles from './styles.module.css'

type PageCoverPropsType = {
  number?: number;
  backCover?: boolean;
  frontCover?: boolean;
};
const PageCover = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<PageCoverPropsType>
>(function PageCover(props, ref) {
  const { number, backCover, frontCover, children } = props;

  const myHorseImgStyle = {
    backgroundColor: 'black',
    backgroundSize: "contain",
    backgroundRepeat: "round",
    display: "flex",
  };

  return (
    <div
      className={`${backCover ? styles.backCover : ""} ${
        frontCover ? styles.frontCover : ""
      } page-cover page`}
      ref={ref}
      data-density="hard"
    >
      <div
        className={`page-content`}
      >
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

PageCover.displayName = "PageCover";

export default PageCover;
