import "./globals.css";
import type { Metadata } from "next/types";
import TopNav from "@/components/TopNav";
import Provider from "./Provider";

export const metadata: Metadata = {
  title: {
    default: "Greg",
    template: "%s | Greg",
  },
  description: "Welcome to my site!",
  generator: "Next.js",
  applicationName: "Next.js",
  keywords: ["Next.js", "React", "JavaScript", "Gregory Davis", "blog"],
  authors: [{ name: "Gregory Davis", url: "https://www.gregdavistech.com" }],
  themeColor: "#0d47a1",
  colorScheme: "dark",
  creator: "Gregory Davis",
  publisher: "Gregory Davis",
  alternates: {},
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-[#0d47a1] dark:bg-black">
        <Provider>
          <TopNav />
          {children}
        </Provider>
      </body>
    </html>
  );
}
