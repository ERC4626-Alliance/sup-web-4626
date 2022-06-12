import About from "@/components/About";
import Adopters2 from "@/components/Adopters2";
import Authors from "@/components/Authors";
import BuiltWith from "@/components/BuiltWith";
import Layout from "@/components/Layout";
import Resources from "@/components/Resources";
import Tweets from "@/components/Tweets";
import News from "@/components/News";
import VaultExplorer from "@/components/VaultExplorer";

import SEO from "@/helpers/seo.config";
import { GetStaticProps } from "next";
import { DefaultSeo } from "next-seo";
import Head from "next/head";

// export default function Home({
//   allPostsData
// }: {
//   allPostsData: {
//     date: string
//     title: string
//     id: string
//   }[]
// }) {
export default function Home() {
  return (<>
    <DefaultSeo {...SEO} />
    <Head>
      <title>{SEO.openGraph?.title}</title>
    </Head>
    <Layout>
      <About />
      <BuiltWith />
      <Resources />
      <Adopters2 />
      <News />
      <VaultExplorer />
      <Tweets />
      <Authors />
    </Layout>
  </>);
};

export const getStaticProps: GetStaticProps = async () => {
  // const allWebsiteData = [];
  // return {
  //   props: {
  //     allPostsData
  //   }
  // };
  return {
    props: {}
  };
};
