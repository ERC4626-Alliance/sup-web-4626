import type { NextPage } from "next";
import Head from "next/head";
import Layout from "components/layout";
import About from "components/about";
import BuiltWith from "components/builtWith";
import Resources from "components/resources";
import Adopters from "components/adopters";
import Resources2 from "components/resources2";
import TableSection from "../components/tableSection";
import VaultExplorer from "../components/vaultExplorer";
import Faq from "../components/faq";
import Authors from "../components/authors";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>ERC4626</title>
        </Head>
        <About/>
        <BuiltWith/>
        <Resources/>
        <Adopters/>
        <TableSection/>
        <VaultExplorer/>
        <Resources2/>
        <Faq/>
        <Authors/>
      </Layout>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  // const allPosts = getAllPosts([
  //   "title",
  //   "date",
  //   "slug",
  //   "author",
  //   "coverImage",
  //   "excerpt"
  // ]);

  return {
    props: {}
    // props: { allPosts }
  };
};
