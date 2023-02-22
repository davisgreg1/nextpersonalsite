"use client";
import React, { useEffect } from "react";
import MyIntro from "@/components/MyIntro";
import ChatBot from "@/components/ChatBot";


export default function HomeComp() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const options = {
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          scrollTo({
            top: target.offsetTop,
            behavior: "smooth",
          });
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });
  });

  return (
    <main className="snap-mandatory snap-y">
      <MyIntro />
      <ChatBot />
    </main>
  );
}
