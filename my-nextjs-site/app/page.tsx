// import { Inter } from '@next/font/google'
// import styles from './page.module.css'
import HomeComp from "@/components/HomeComp";
import MyParticles from "@/components/MyParticles";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <MyParticles />
      <HomeComp />
    </>
  );
}
