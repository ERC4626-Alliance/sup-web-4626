import Head from "next/head";
import Layout from "@/components/Layout";
import About from "@/components/About";
import BuiltWith from "@/components/BuiltWith";
import Resources from "@/components/Resources";
import Adopters2 from "@/components/Adopters2";
import Resources2 from "@/components/Resources2";
import TableSection from "@/components/TableSection";
import VaultExplorer from "@/components/VaultExplorer";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import Authors from "@/components/Authors";
import Container from "@/components/Container";
import { DefaultSeo } from "next-seo";

import SEO from "@/helpers/seo.config";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";

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
  const { locale, locales, defaultLocale } = useRouter();
  return (
    <>
      <DefaultSeo {...SEO} />
      <Layout>
        <Head>
          <title>{SEO.openGraph?.title}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <LocaleSwitcher/>
        <About/>
        <BuiltWith/>
        <Resources/>
        <Adopters2/>
        <Container className="bg-white py-16 mt-16">
          <TableSection/>
          <VaultExplorer/>
        </Container>
        <Resources2/>
        <Authors/>
      </Layout>
    </>
  );
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
