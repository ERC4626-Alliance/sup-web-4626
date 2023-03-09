import About from "@/components/Block/About";
import Ecosystem from "@/components/Block/Ecosystem";
import Alliance from "@/components/Block/Alliance";
import Layout from "@/components/Layout";
import BlockResources from "@/components/Block/Resources";
import BlockBounties from "@/components/Block/Bounties";

import config from "@/helpers/config";
import { DefaultSeo } from "next-seo";
import Head from "next/head";

export default function HomePage() {
  return <>
    <DefaultSeo openGraph={config.openGraph} twitter={config.twitter} />
    <Head>
      <title>{config.openGraph?.title}</title>
    </Head>
    <Layout>
      <Alliance />
      <About />
      <Ecosystem />
      <BlockResources />
      <BlockBounties />
    </Layout>
  </>;
}