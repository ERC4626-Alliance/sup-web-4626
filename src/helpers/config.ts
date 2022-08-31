import { AxiosRequestConfig } from "axios";
import { SWRConfiguration } from "swr";

export const apiUrl = "https://api.superform.xyz/";

export default {
  dapp: {
    apiUrl,
    axiosConfig: {
      baseURL: apiUrl,
      headers: {
        "content-type": "application/json",
        "cache-control": "public, s-maxage=1200, stale-while-revalidate=600",
        "response-content-type": "application/json",
      },
      redirect: "manual",
    } as AxiosRequestConfig,
    swrConfig: {
      dedupingInterval: 60 * 1000,
      refreshWhenHidden: true,
      refreshWhenOffline: true,
      revalidateIfStale: true,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
    } as SWRConfiguration,

    swrConfigCached: {
      dedupingInterval: 60 * 60 * 1000,
      refreshInterval: 60 * 60 * 1000,
      refreshWhenHidden: false,
      refreshWhenOffline: false,
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    } as SWRConfiguration,
  },
  openGraph: {
    title:
      process.env.NEXT_SEO_TITLE || "ERC-4626 - A Tokenized Vault Standard",
    description:
      process.env.NEXT_SEO_ABOUT ||
      "What is ERC-4626? ERC-4626 is a tokenized vault standard. Vaults are smart contracts that take in token deposits and do something with those" +
        " tokens to provide token rewards to the depositor. Browse through a list of ERC4626 vaults. Learn how to make an ERC4626.",
    type: "website",
    locale: "en_US",
    name: "ERC-4626 Resources",
    images: [
      {
        url: process.env.NEXT_SEO_PREVIEW || "https://erc4626.info/preview.jpg",
        width: 1200,
        height: 628,
        alt:
          process.env.NEXT_SEO_TITLE || "ERC-4626 — A Tokenized Vault Standard",
        type: "image/jpeg",
      },
    ],
    site_name: "ERC-4626",
  },
  twitter: {
    handle: process.env.NEXT_SEO_TWITTER || "@superformxyz",
    site: "@superformxyz",
    cardType: "summary_large_image",
  },
};
