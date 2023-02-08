import Layout from "@/components/Layout";
import VaultExplorer from "@/components/VaultExplorer";

import config from "@/helpers/config";
import {DefaultSeo} from "next-seo";
import Head from "next/head";

export default function VaultsPage() {
  return <>
    <DefaultSeo openGraph={config.openGraph} twitter={config.twitter}/>;
    <Head>
      <title>{config.openGraph?.title}</title>
    </Head>
    <Layout>
      <VaultExplorer/>
    </Layout>
  </>;
}