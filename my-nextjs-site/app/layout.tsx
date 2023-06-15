import "./globals.css";
import type { Metadata } from "next/types";
import Provider from "./Provider";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Greg",
    template: "%s | Greg",
  },
  icons: {
    icon: "/favicon.ico",
  },
  description: "Welcome to my site!",
  generator: "Next.js",
  applicationName: "Next.js",
  keywords: ["Next.js", "React", "JavaScript", "Gregory Davis", "blog"],
  authors: [{ name: "Gregory Davis", url: "https://www.gregdavistech.com" }],
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#a7aec7" },
    { media: "(prefers-color-scheme: dark)", color: "#0d47a1" },
  ],
  colorScheme: "dark",
  creator: "Gregory Davis",
  publisher: "Gregory Davis",
  alternates: {
    canonical: "https://gregdavistech.com",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  category: "technology",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://cdn.jsdelivr.net/npm/container-query-polyfill@1/dist/container-query-polyfill.modern.js"
        ></script>
        {process.env.NODE_ENV === "development" ? null : (
          <>
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GTM-KC2Z5C7', {
          page_path: window.location.pathname,
        });
        `,
              }}
            />
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=GTM-KC2Z5C7`}
            />
          </>
        )}
      </head>
      <body className="bg-[#0d47a1] dark:bg-black">
        <Provider>
          <>
            <TopNav />
            {children}
            <Footer />
          </>
        </Provider>
      </body>
    </html>
  );
}
