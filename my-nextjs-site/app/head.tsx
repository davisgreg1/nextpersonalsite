import Script from "next/script";

export default function Head() {
  return (
    <>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <Script src="https://cdn.jsdelivr.net/npm/container-query-polyfill@1/dist/container-query-polyfill.modern.js"></Script>
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
