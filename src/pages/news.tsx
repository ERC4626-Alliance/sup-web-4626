import React from "react";
import Layout from "@/components/Layout";
import getConfig from "@/helpers/config";
import Container from "@/components/Container";
import AtomTitle from "@/components/Atom/Title";

import { DefaultSeo } from "next-seo";
import Head from "next/head";
import news from "@/content/news.json";
import { classNames } from "@/helpers/formatters";
import { BsCalendar2DateFill } from "react-icons/bs";

export default function NewsPage() {
  const config = getConfig("ERC-4626 News", "News and blogs covering recent developments in the DeFi ecosystem around ERC 4626.");
  return (
    <>
      <DefaultSeo openGraph={config.openGraph} twitter={config.twitter} />
      <Head>
        <title>{config.openGraph?.title}</title>
      </Head>
      <Layout>
        <div className="uiBlock lightBackground" id="news">
          <Container>
            <AtomTitle alignText="center" subtitle="News and blogs covering recent developments in the DeFi ecosystem around ERC 4626">
              ERC-4626 News
            </AtomTitle>
            <div className="mx-auto mt-8 grid grid-cols-1 gap-8 sm:text-left md:grid-cols-2 lg:grid-cols-3">
              {news.sort((a,b) => a.date > b.date ? -1 : 1).map((item: any, index: number) => (
                <a
                  key={`news-${index}`}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classNames(
                    "group relative block overflow-hidden rounded-xl bg-white p-5 shadow-md transition-opacity delay-75 ease-linear dark:bg-pink-900/80" + " md:hover:opacity-80",
                    item.wide && "col-span-full mx-auto lg:max-w-[700px]"
                  )}
                >
                  <img className="min-w-full rounded-lg object-contain shadow-md" src={item.thumbnail} alt={item.title} />
                  <div className="my-3 inline-flex items-center whitespace-nowrap rounded-full py-0.5 text-sm font-medium text-pink-800 dark:text-pink-200 md:bg-pink-100 md:px-3 dark:md:bg-transparent">
                    <BsCalendar2DateFill className="mr-1 h-4 w-4" />
                    {item.date}
                  </div>
                  <h4 className="bg-gradient-to-r from-pink-500 to-pink-800 bg-clip-text text-xl font-extrabold capitalize tracking-tight text-transparent dark:from-pink-200 dark:to-pink-400 md:my-4">
                    {item.name}
                  </h4>
                  <p className="font-pj text-base">{item.teaser}</p>
                </a>
              ))}
            </div>
          </Container>
        </div>
      </Layout>
    </>
  );
}