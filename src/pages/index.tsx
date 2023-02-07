import About from "@/components/About";
import Adopters from "@/components/Adopters";
import Authors from "@/components/Authors";
import Layout from "@/components/Layout";
import Tweets from "@/components/Tweets";

import config from "@/helpers/config";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import HomeResources from "../components/HomeResources";

export default function HomePage() {
  return (
    <>
      <DefaultSeo openGraph={config.openGraph} twitter={config.twitter} />;
      <Head>
        <title>{config.openGraph?.title}</title>
      </Head>
      <Layout>
        <About />
        <Adopters />
        <HomeResources />
        <Tweets />
        <Authors />
      </Layout>
    </>
  );
}