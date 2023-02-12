"use client";
import React, { useEffect } from "react";
import MyIntro from "@/components/MyIntro";

function HomeComp() {
  useEffect(() => {
    let domReady = (cb: { (): void; (this: Document, ev: Event): any }) => {
      document.readyState === "interactive" ||
      document.readyState === "complete"
        ? cb()
        : document.addEventListener("DOMContentLoaded", cb);
    };

    domReady(() => {
      const noFouc = document.getElementById("noFouc");

      if (noFouc) {
        noFouc.classList.add("noFoucVisible");
      }
    });
  });

  return (
    <main>
      <MyIntro />
    </main>
  );
}

export default HomeComp;
