import "/styles/globals.scss";
import type { AppProps } from "next/app";
import AOS from "aos";
import { useEffect } from "react";

function Erc4626App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-sine",
      once: true,
      offset: 200
    });
  }, []);

  return (
    <Component {...pageProps} />
  );
}

export default Erc4626App;
