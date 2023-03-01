import Layout from "@/components/Layout";
import Alliance from "@/components/Block/Alliance";

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
      <Alliance fullScreen={true}/>
    </Layout>
  </>;
}