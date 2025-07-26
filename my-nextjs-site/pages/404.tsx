import React from "react";
import Link from "next/link";
import ErrorPage from "@/app/error";

const Custom404 = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: "100px auto auto auto",
        height: "100svh",
        flexDirection: "column",
      }}
    >
      <ErrorPage />
      <div style={{padding: '16px'}}>
        <Link style={{ textDecoration: "none" }} href="/">
          Go home 🏠
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
