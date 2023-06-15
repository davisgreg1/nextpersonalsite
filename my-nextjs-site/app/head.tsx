import Script from "next/script";

export default function Head() {
  return (
    <>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <Script src="https://cdn.jsdelivr.net/npm/container-query-polyfill@1/dist/container-query-polyfill.modern.js"></Script>
      {process.env.NODE_ENV === "development" ? null : (
        <>
          <Script
            id="gtag-init"
            dangerouslySetInnerHTML={{
              __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-FTB6JXX6N4', {
          page_path: window.location.pathname,
        });
        `,
            }}
          />
          <Script
            defer
            src={`https://www.googletagmanager.com/gtag/js?id=G-FTB6JXX6N4`}
          />
        </>
      )}
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
