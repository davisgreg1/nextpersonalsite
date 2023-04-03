// "use client";
// import React, { useEffect, useState } from "react";
// import TopNav from "@/components/TopNav";
// import Footer from "@/components/Footer";

// export default function App({ children }: { children: React.ReactNode }) {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return mounted ? (
//     <>
//       <TopNav />
//       {children}
//       {/* <Footer /> */}
//     </>
//   ) : null;
// }
