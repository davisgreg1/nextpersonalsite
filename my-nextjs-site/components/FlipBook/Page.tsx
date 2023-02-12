import React, { forwardRef, PropsWithChildren } from "react";
import styles from "./styles.module.css";

type PagePropsType = {
  number: number;
  pageHeader?: string;
  isSlides?: boolean;
};

const Page = forwardRef<HTMLDivElement, PropsWithChildren<PagePropsType>>(
  function Page(props, ref) {
    const { number, pageHeader, isSlides, children } = props;
    const isOddPage = number % 2 !== 0;
    return (
      <div
        className={`${
          isSlides ? `bookPage-slides ${styles.bookPage}` : `${styles.bookPage}`
        } ${isOddPage ? "leftPage" : "rightPage"}`}
        ref={ref}
      >
        <div className="p-4">
          <h1>{pageHeader}</h1>
          <>{children}</>
          <div
            className={`page-content-page-number ${
              isOddPage ? "page-number-flexStart" : "page-number-flexEnd"
            }`}
          >
            {number - 1 === 0 || number === 6 ? "" : `${number - 1}.`}
          </div>
        </div>
      </div>
    );
  }
);

Page.displayName = "Page";

export default Page;
