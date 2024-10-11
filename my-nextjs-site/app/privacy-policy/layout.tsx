import "../globals.css";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy!",
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
