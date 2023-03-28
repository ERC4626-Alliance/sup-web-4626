import About from "@/components/Block/About";
import Ecosystem from "@/components/Block/Ecosystem";
import Alliance from "@/components/Block/Alliance";
import Layout from "@/components/Layout";
import BlockResourcesTeaser from "@/components/Block/ResourcesTeaser";
import BlockBounties from "@/components/Block/Bounties";

import getConfig from "@/helpers/config";
import { DefaultSeo } from "next-seo";
import Head from "next/head";

export default function HomePage() {
  const config = getConfig();
  return (
    <>
      <DefaultSeo openGraph={config.openGraph} twitter={config.twitter} />
      <Head>
        <title>{config.openGraph?.title}</title>
      </Head>
      <Layout>
        <Alliance />
        <About />
        <Ecosystem />
        <BlockResourcesTeaser />
        <BlockBounties />
      </Layout>
    </>
  );
}