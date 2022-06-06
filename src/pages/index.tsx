import type { NextPage } from "next";
import Head from "next/head";
import Layout from "components/Layout";
import About from "components/About";
import BuiltWith from "components/BuiltWith";
import Resources from "components/Resources";
import Adopters2 from "components/Adopters2";
import Resources2 from "components/Resources2";
import TableSection from "components/TableSection";
import VaultExplorer from "components/VaultExplorer";
import Authors from "components/Authors";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>ERC-4626 — a tokenized vault standard</title>
        </Head>
        <About/>
        <BuiltWith/>
        <Resources/>
        <Adopters2/>
        <TableSection/>
        <VaultExplorer/>
        <Resources2/>
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
