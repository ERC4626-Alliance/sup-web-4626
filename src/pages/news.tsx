import Layout from "@/components/Layout";

import getConfig from "@/helpers/config";
import {DefaultSeo} from "next-seo";
import Head from "next/head";
import News from "@/components/News";

export default function NewsPage() {
  const config = getConfig("ERC-4626 News", "News and blogs covering recent developments in the DeFi ecosystem around ERC 4626.")
  return <>
    <DefaultSeo openGraph={config.openGraph} twitter={config.twitter}/>
    <Head>
      <title>{config.openGraph?.title}</title>
    </Head>
    <Layout>
      <News/>
    </Layout>
  </>;
}