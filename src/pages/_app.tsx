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

  useEffect(() => {
    document.addEventListener("click", (mouseEvent: MouseEvent) => {
      const targetElement = mouseEvent.target as HTMLElement | null;
      if (targetElement!.tagName!.toLowerCase() === "a" && targetElement!.getAttribute('href')!.startsWith("/#")){
        mouseEvent.preventDefault();
        const find = targetElement!.getAttribute('href')!.replace("/#", "");
        console.log(document.getElementById(find))
        document.getElementById(find)!.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
        return false;
      }
      return true;
    });
  }, []);

  return (<Component {...pageProps} />);
}

export default Erc4626App;
