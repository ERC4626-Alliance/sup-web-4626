import About from "@/components/About";
import Adopters from "@/components/Adopters";
import Authors from "@/components/Authors";
import BuiltWith from "@/components/BuiltWith";
import Layout from "@/components/Layout";
import Resources from "@/components/Resources";
import Tweets from "@/components/Tweets";
import News from "@/components/News";
import VaultExplorer from "@/components/VaultExplorer";

import config from "@/helpers/config";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { ResponseSupportedChains, SupDicChainData } from "@/types/core.d";
import axios, { AxiosResponse } from "axios";

export default function Home() {
  return (
    <>
      <DefaultSeo openGraph={config.openGraph} twitter={config.twitter} />;
      <Head>
        <title>{config.openGraph?.title}</title>
      </Head>
      <Layout>
        <About />
        <BuiltWith />
        <Resources />
        <Adopters />
        <News />
        <VaultExplorer />
        <Tweets />
        <Authors />
      </Layout>
    </>
  );
}
