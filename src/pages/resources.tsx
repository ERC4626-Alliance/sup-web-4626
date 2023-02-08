import Layout from "@/components/Layout";

import config from "@/helpers/config";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import News from "../components/News";
import Resources from "../components/Resources";
import Tweets from "../components/Tweets";
import Authors from "../components/Authors";

export default function VaultsPage() {
  return (
    <>
      <DefaultSeo openGraph={config.openGraph} twitter={config.twitter} />;
      <Head>
        <title>{config.openGraph?.title}</title>
      </Head>
      <Layout>
        <Resources />
        <News />
        <Tweets />
        <Authors />
      </Layout>
    </>
  );
}