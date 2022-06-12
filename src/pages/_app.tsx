import "/styles/globals.scss";
import { NextUIProvider } from "@nextui-org/react";
import AOS from "aos";
import { NextGtag } from "next-gtag";
import type { AppProps } from "next/app";
import { useEffect } from "react";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    AOS.init({
      disable : "mobile",
      easing: "ease-in-sine",
      once: true, offset: -200
    });
  }, []);

  return (<NextUIProvider>
    <NextGtag trackingId={process.env.NEXT_PUBLIC_GA_ID || ""} defer={true} async={true} />
    <Component {...pageProps} />
  </NextUIProvider>);
};
export default App;
