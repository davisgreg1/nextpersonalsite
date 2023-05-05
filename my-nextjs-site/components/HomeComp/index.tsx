"use client";
import React, { useEffect } from "react";
import MyIntro from "@/components/MyIntro";

export default function HomeComp() {
  useEffect(() => {
    console.log("Hi Buddah, Semira, Cam and Justice!");
  }, []);

  return (
    <main>
      <MyIntro />
    </main>
  );
}
