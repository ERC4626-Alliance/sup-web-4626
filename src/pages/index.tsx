import About from "@/components/About";
import Adopters from "@/components/Adopters";
import Authors from "@/components/Authors";
import Alliance from "@/components/Alliance";
import Layout from "@/components/Layout";
import Tweets from "@/components/Tweets";

import config from "@/helpers/config";
import { DefaultSeo } from "next-seo";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <DefaultSeo openGraph={config.openGraph} twitter={config.twitter} />;
      <Head>
        <title>{config.openGraph?.title}</title>
      </Head>
      <Layout>
        <About />
        <Alliance />
        <Adopters />
        <Tweets/>
        <Authors />
      </Layout>
    </>
  );
}