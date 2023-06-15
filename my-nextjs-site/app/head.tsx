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
        gtag('config', 'GTM-KC2Z5C7', {
          page_path: window.location.pathname,
        });
        `,
            }}
          />
          <Script
            defer
            src={`https://www.googletagmanager.com/gtag/js?id=GTM-KC2Z5C7`}
          />
        </>
      )}
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
