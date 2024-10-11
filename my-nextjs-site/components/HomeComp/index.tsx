"use client";
import React, { useEffect } from "react";
import MyIntro from "@/components/MyIntro";
import styles from "./styles.module.css";
import Link from "next/link";

export default function HomeComp() {
  useEffect(() => {
    console.log("Hi Buddah, Semira, Cam and Justice!");
  }, []);

  return (
    <main className={styles.mainContainer}>
      <MyIntro />
      <div className={styles.footer}>
        <Link className={styles.privacyLink} href="/privacy-policy">
          Privacy Policy
        </Link>
        <Link href="/toc">Terms And Conditions</Link>
      </div>
    </main>
  );
}
