import Layout from "@/components/Layout";
import VaultExplorer from "@/components/VaultExplorer";

import getConfig from "@/helpers/config";
import { DefaultSeo } from "next-seo";
import Head from "next/head";

export default function VaultsPage() {
  const config = getConfig("ERC-4626 Vaults", "A repository of live ERC 4626 vaults across chains.");
  return (
    <>
      <DefaultSeo openGraph={config.openGraph} twitter={config.twitter} />
      <Head>
        <title>{config.openGraph?.title}</title>
      </Head>
      <Layout>
        <VaultExplorer />
      </Layout>
    </>
  );
}