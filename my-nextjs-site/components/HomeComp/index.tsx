"use client";
import React, { useEffect } from "react";
import MyIntro from "@/components/MyIntro";

export default function HomeComp() {
  useEffect(() => {
    console.log("Hi Carmelo, Semira, Cam and Justice!");
  }, []);

  return (
    <main className="snap-mandatory snap-y">
      <MyIntro />
    </main>
  );
}
