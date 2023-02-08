import "/styles/globals.scss";
import { Analytics } from "@vercel/analytics/react";
import AOS from "aos";
import { NextGtag } from "next-gtag";
import type { AppProps } from "next/app";
import { useEffect } from "react";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    AOS.init({
      throttleDelay: 200,
      easing: "ease-in-out",
      delay: 50, // values from 0 to 3000, with step 50ms
      duration: 400,
    });
  }, []);
  useEffect(() => {
    const s = document.createElement("script");
    s.setAttribute("src", "//platform.twitter.com/widgets.js");
    s.setAttribute("async", "true");
    s.setAttribute("defer", "true");
    s.setAttribute("charset", "utf-8");
    document.head.appendChild(s);
  });

  return (
    <>
      <NextGtag trackingId={process.env.NEXT_PUBLIC_GA_ID || ""} />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};
export default App;