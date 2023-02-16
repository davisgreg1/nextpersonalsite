import "./globals.css";
import TopNav from "@/components/TopNav";
import ChatBot from "@/components/ChatBot";

export default function RootLayout({
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
      <body>
        <TopNav />
        <ChatBot />
        <div>{children}</div>
      </body>
    </html>
  );
}
