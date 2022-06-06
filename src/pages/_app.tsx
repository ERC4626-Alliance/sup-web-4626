import "/styles/globals.scss";
import type { AppProps } from "next/app";
import { useRouter } from 'next/router'
import AOS from "aos";
import { useEffect } from "react";
import * as gtag from '@/lib/gtag'
import Script from "next/script";

function Erc4626App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    AOS.init({
      easing: "ease-in-sine",
      once: true,
      offset: 200
    });
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Script
        strategy="afterInteractive"
        key="gta"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        key="gta-2"
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default Erc4626App;
