import Layout from "@/components/Layout";

import getConfig from "@/helpers/config";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import Resources from "../components/Resources";
import Tweets from "../components/Tweets";
import Authors from "../components/Authors";
import Standard from "../components/Block/Standard";

export default function VaultsPage() {
  const config = getConfig("ERC-4626 Resources", "Resources to help aid in the development of ERC 4626 vaults.");
  return (
    <>
      <DefaultSeo openGraph={config.openGraph} twitter={config.twitter} />
      <Head>
        <title>{config.openGraph?.title}</title>
      </Head>
      <Layout>
        <Resources />
        <Standard />
        <Tweets />
        <Authors />
      </Layout>
    </>
  );
}