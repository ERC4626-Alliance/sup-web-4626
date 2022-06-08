import "/styles/globals.scss";
import { NextUIProvider } from "@nextui-org/react";
import AOS from "aos";
import { NextGtag } from "next-gtag";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      easing: "ease-in-sine", once: true, offset: 200
    });
  }, []);

  return <NextUIProvider>
    <NextGtag trackingId={process.env.NEXT_PUBLIC_GA_ID || ""} />
    <Component {...pageProps} />
  </NextUIProvider>;
};
export default App;
