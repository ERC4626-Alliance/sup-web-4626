import React from "react";

const linksResources = {
  reading: [
    {
      name: "EIP-4626: Tokenized Vault Standard",
      href: "https://eips.ethereum.org/EIPS/eip-4626",
    },
    {
      name: "EIP-4626: Discussion",
      href: "https://ethereum-magicians.org/t/eip-4626-yield-bearing-vault-standard/7900",
    },
  ],
  news: [
    {
      name: "ERC-4626: DeFi's Newest Money Lego",
      href: "https://www.coindesk.com/layer2/2022/01/13/erc-4626-defis-newest-money-lego/",
    },
    {
      name: "DeFi Giant Yearn Leads the Way on ERC-4626 Token Standard Adoption",
      href: "https://www.coindesk.com/layer2/2022/04/08/defi-giant-yearn-leads-the-way-on-erc-4626-token-standard-adoption/",
    },
    {
      name: "ERC-4626 Proposes To Make Yield-Bearing Tokens Their Own DeFi Lego",
      href: "https://thedefiant.io/erc-4626-yield-standard/",
    },
    {
      name: "DeFi Giant Yearn Leads the Way on ERC-4626 Token Standard Adoption",
      href: "https://www.yahoo.com/now/defi-giant-yearn-leads-way-144957342.html",
    },
    {
      name: "How ERC-4626 Could Fuel the Next Wave of DeFi",
      href: "https://decrypt.co/99695/how-erc-4626-could-fuel-next-wave-of-defi",
    },
    {
      name: "Trustless L2-native yield has arrived on StarkNet, happy to announce Yagi Vaults",
      href: "https://twitter.com/yagi_fi/status/1525886873733943296?s=21&t=puUU8QhnTtgFvMTPuDTirw",
    },
  ],
  tweets: [
    {
      name: "@joey__santoro",
      href: "https://twitter.com/joey__santoro/status/1481364987129917444?lang=en",
    },
    {
      name: "@iearnfinance",
      href: "https://twitter.com/iearnfinance/status/1511444220850184197?s=20&t=JNfKDhHMNYga_Uc7-yt6-A",
    },
    {
      name: "@0xSassun",
      href: "https://twitter.com/0xSassun/status/1522678605628719104?s=20&t=IOYeIGfvkymD8XAczFxoFw",
    },
  ],
  videos: [
    {
      name: "Joey Santoro ERC-4626 deep dive",
      href: "https://youtu.be/L8dijE5qhTg",
    },
    {
      name: "Yearn vault 4626 implementation",
      href: "https://youtu.be/urC35PMbpJ4",
    },
  ],
  repositories: [
    {
      name: "ERC-4626 Vyper implementation",
      href: "https://github.com/fubuloubu/ERC4626",
    },
    {
      name: "EIP",
      href: "https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4626.md",
    },
    {
      name: "Early YFI implementation",
      href: "https://github.com/shortdoom/vault-fun",
    },
    {
      name: "FEI 4626 implementation",
      href: "https://github.com/fei-protocol/ERC4626",
    },
    { name: "Rari Solmate", href: "https://github.com/Rari-Capital/solmate" },
    {
      name: "Cairo 4626 implementation",
      href: "https://github.com/auditless/cairo-erc4626",
    },
    {
      name: "Yearn starter kit",
      href: "https://github.com/storming0x/ystarter-foundry-kit",
    },
  ],
  adopters: [
    {
      name: "mStable",
      href: "https://medium.com/mstable/erc-4626-meta-vaults-are-coming-to-mstable-9e7c5e182b04",
    },
    { name: "Alchemix", href: "#" },
    { name: "Balancer", href: "#" },
    { name: "Rari", href: "#" },
    { name: "Fei", href: "#" },
    {
      name: "OpenZepplin",
      href: "https://twitter.com/maximizer_xyz/status/1524035547173433344?s=20&t=IOYeIGfvkymD8XAczFxoFw",
    },
    {
      name: "Maximizer",
      href: "https://twitter.com/lucasmanuel_eth/status/1521882443858513922?s=20&t=IOYeIGfvkymD8XAczFxoFw",
    },
  ],
};

export default class Resources extends React.Component {
  render() {
    return (
      <div className="bg-gradient-to-r from-pink-700 to-pink-900">
        <div className="mx-auto pt-16 pb-2 px-4 sm:px-6 lg:pt-24 lg:px-8">
          <h2 className="text-center text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="-mb-1 pb-4 block bg-gradient-to-r from-pink-50 to-pink-100 bg-clip-text text-transparent">
              ERC4626 RESOURCES{" "}
            </span>{" "}
          </h2>{" "}
          <p className="text-center mt-4 text-lg text-pink-100">
            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.Et
            magna sit morbi lobortis.Blandit aliquam sit nisl euismod mattis in
            .{" "}
          </p>{" "}
          <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:pt-24 lg:px-8">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="grid grid-cols-2 gap-8 xl:col-span-4">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-bold text-pink-500 tracking-wider uppercase">
                      reading{" "}
                    </h3>{" "}
                    <ul className="mt-4 space-y-4">
                      {" "}
                      {linksResources.reading.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-base text-pink-50 hover:text-pink-300"
                            TARGET="_BLANK"
                          >
                            {item.name}{" "}
                          </a>{" "}
                        </li>
                      ))}{" "}
                    </ul>{" "}
                  </div>{" "}
                  <div className="mt-12 md:mt-0">
                    <h3 className="text-sm font-bold text-pink-500 tracking-wider uppercase">
                      news{" "}
                    </h3>{" "}
                    <ul className="mt-4 space-y-4">
                      {" "}
                      {linksResources.news.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-base text-pink-50 hover:text-pink-300"
                            TARGET="_BLANK"
                          >
                            {item.name}{" "}
                          </a>{" "}
                        </li>
                      ))}{" "}
                    </ul>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-bold text-pink-500 tracking-wider uppercase">
                      tweets{" "}
                    </h3>{" "}
                    <ul className="mt-4 space-y-4">
                      {" "}
                      {linksResources.tweets.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-base text-pink-50 hover:text-pink-300"
                            TARGET="_BLANK"
                          >
                            {item.name}{" "}
                          </a>{" "}
                        </li>
                      ))}{" "}
                    </ul>{" "}
                  </div>{" "}
                  <div className="mt-12 md:mt-0">
                    <h3 className="text-sm font-bold text-pink-500 tracking-wider uppercase">
                      videos{" "}
                    </h3>{" "}
                    <ul className="mt-4 space-y-4">
                      {" "}
                      {linksResources.videos.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-base text-pink-50 hover:text-pink-300"
                            TARGET="_BLANK"
                          >
                            {item.name}{" "}
                          </a>{" "}
                        </li>
                      ))}{" "}
                    </ul>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-bold text-pink-500 tracking-wider uppercase">
                      repositories{" "}
                    </h3>{" "}
                    <ul className="mt-4 space-y-4">
                      {" "}
                      {linksResources.repositories.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-base text-pink-50 hover:text-pink-300"
                            TARGET="_BLANK"
                          >
                            {item.name}{" "}
                          </a>{" "}
                        </li>
                      ))}{" "}
                    </ul>{" "}
                  </div>{" "}
                  <div className="mt-12 md:mt-0">
                    <h3 className="text-sm font-bold text-pink-500 tracking-wider uppercase">
                      adopters{" "}
                    </h3>{" "}
                    <ul className="mt-4 space-y-4">
                      {" "}
                      {linksResources.adopters.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-base text-pink-50 hover:text-pink-300"
                            TARGET="_BLANK"
                          >
                            {item.name}{" "}
                          </a>{" "}
                        </li>
                      ))}{" "}
                    </ul>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}
