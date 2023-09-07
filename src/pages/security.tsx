import Layout from "@/components/Layout";

import getConfig from "@/helpers/config";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import BlockSecurityPartners from "@/components/Block/Security/Partners";
import BlockSecurityArticles from "@/components/Block/Security/Articles";
import AtomTitle from "@/components/Atom/Title";
import React from "react";
import Container from "@/components/Container";

export default function SecurityPage() {
  const config = getConfig("ERC-4626 Security", "Security partners of the ERC-4626 Alliance and audits of the ERC-4626 standard");
  return (
    <>
      <DefaultSeo openGraph={config.openGraph} twitter={config.twitter} />
      <Head>
        <title>{config.openGraph?.title}</title>
      </Head>
      <Layout>
        <div className="uiBlock mediumBackground" id="security-partners">
          <Container>
            <AtomTitle alignText="center" subtitle="Security Partners of the ERC-4626 Alliance">
              ERC-4626 Security
            </AtomTitle>
            <BlockSecurityPartners />
          </Container>
        </div>
        <div className="uiBlock lightBackground" id="security-content">
          <BlockSecurityArticles />
        </div>
      </Layout>
    </>
  );
}