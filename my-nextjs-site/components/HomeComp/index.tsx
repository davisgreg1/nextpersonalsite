"use client";
import React, { useEffect } from "react";
import MyIntro from "@/components/MyIntro";
import WorkSection from "@/components/WorkSection";
import SkillsSection from "@/components/SkillsSection";
import BlogSection from "@/components/BlogSection";


function HomeComp() {

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
          })
          // Perform actions for the current section
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
      <WorkSection />
      <SkillsSection />
      <BlogSection />
    </main>
  );
}

export default HomeComp;
