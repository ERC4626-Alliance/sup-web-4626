import Layout from "@/components/Layout";

import getConfig from "@/helpers/config";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import BlockDevResources from "@/components/Block/DevResources";
import BlockTweets from "@/components/Block/Tweets";
import BlockAuthors from "@/components/Block/Authors";
import BlockVideos from "@/components/Block/Videos";
import BlockStandard from "@/components/Block/Standard";

export default function ResourcesPage() {
  const config = getConfig("ERC-4626 Resources", "Resources to help aid in the development of ERC 4626 vaults.");
  return (
    <>
      <DefaultSeo openGraph={config.openGraph} twitter={config.twitter} />
      <Head>
        <title>{config.openGraph?.title}</title>
      </Head>
      <Layout>
        <BlockDevResources />
        <BlockVideos />
        <BlockStandard />
        <BlockTweets />
        <BlockAuthors />
      </Layout>
    </>
  );
}