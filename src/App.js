import superCharged from "./assets/superCharged.png";
import stars4626 from "./assets/stars4626.png";

import logo__Alchemix from "./assets/logo__Alchemix.png";
import logo__Balancer from "./assets/logo__Balancer.png";
import logo__Fei from "./assets/logo__Fei.png";
import logo__Maple from "./assets/logo__Maple.png";
import logo__mStable from "./assets/logo__mStable.png";
import logo__OpenZeppelin from "./assets/logo__OpenZeppelin.png";
import logo__Rari from "./assets/logo__Rari.png";

const build = [
  {
    buildTitle: "Deploy an ERC-4626 vault",
    href: "https://eips.ethereum.org/EIPS/eip-4626",
  },
  {
    buildTitle: "View examples",
    href: "https://eips.ethereum.org/EIPS/eip-4626",
  },
  {
    buildTitle: "Extensions to ERC-4626",
    href: "https://eips.ethereum.org/EIPS/eip-4626",
  },
  {
    buildTitle: "How to wrap a non-standard vault with ERC-4626",
    href: "https://eips.ethereum.org/EIPS/eip-4626",
  },
];

const vaults = [
  {
    vault: "STG+USDC",
    protocol: "Curve",
    chain: "Ethereum",
    apy: "13.7%",
    tvl: "$54M",
    sharpe: "3.1",
  },
  {
    vault: "DAI+USDC+USDT",
    protocol: "Curve",
    chain: "Binance Smart Chain",
    apy: "12.5%",
    tvl: "$541M",
    sharpe: "2.1",
  },
  {
    vault: "DAI+USDC+USDT+sUSD",
    protocol: "Curve",
    chain: "Binance Smart Chain",
    apy: "41.4%",
    tvl: "$435M",
    sharpe: "2.4",
  },
  {
    vault: "USDC+USDT+UST+FRAX",
    protocol: "Curve",
    chain: "Avalanche",
    apy: "63.2%",
    tvl: "$432M",
    sharpe: "3.1",
  },
  {
    vault: "ADAI+AUSDC+AUSDT",
    protocol: "Curve",
    chain: "Geist",
    apy: "12.1%",
    tvl: "$62M",
    sharpe: "1.4",
  },
  {
    vault: "USDC+EURS",
    protocol: "Curve",
    chain: "Cosmos",
    apy: "32.2%",
    tvl: "$678M",
    sharpe: "3.1",
  },
  {
    vault: "CADC+USDC",
    protocol: "Curve",
    chain: "Fantom",
    apy: "32.2%",
    tvl: "$543M",
    sharpe: "1.6",
  },
  {
    vault: "CDAI+CUSDC+USDT",
    protocol: "Curve",
    chain: "Ethereum",
    apy: "54.1%",
    tvl: "$324M",
    sharpe: "1.7",
  },
  {
    vault: "PAR+USDC",
    protocol: "Curve",
    chain: "Binance Smart Chain",
    apy: "31.2%",
    tvl: "$23M",
    sharpe: "1.7",
  },
  {
    vault: "USDC+CXD",
    protocol: "Curve",
    chain: "Ethereum",
    apy: "45.7%",
    tvl: "$783M",
    sharpe: "2.7",
  },
  {
    vault: "USDC+CXD",
    protocol: "Curve",
    chain: "Ethereum",
    apy: "45.7%",
    tvl: "$782M",
    sharpe: "2.7",
  },
  // More vaults...
];

const linksResources = {
  reading: [
    {
      name: "How ERC-4626 Could Fuel the Next Wave of DeFi",
      href: "https://decrypt.co/99695/how-erc-4626-could-fuel-next-wave-of-defi",
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

const footerNavigation = {
  social: [
    {
      name: "Twitter",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

const faqs = [
  {
    id: 1,
    question: "What's the best thing about ERC4626?",
    answer: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 2,
    question: "What's the best thing about ERC4626?",
    answer: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 3,
    question: "What's the best thing about ERC4626?",
    answer: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 4,
    question: "What's the best thing about ERC4626?",
    answer: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 5,
    question: "What's the best thing about ERC4626?",
    answer: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 6,
    question: "What's the best thing about ERC4626?",
    answer: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 7,
    question: "What's the best thing about ERC4626?",
    answer: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 8,
    question: "What's the best thing about ERC4626?",
    answer: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 9,
    question: "What's the best thing about ERC4626?",
    answer: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 10,
    question: "What's the best thing about ERC4626?",
    answer: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 11,
    question: "What's the best thing about ERC4626?",
    answer: "Lorem ipsum dolor sit amet consectetur.",
  },
  // More questions...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="bg-white">
      <header>
        <div className="relative bg-white">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <h2 className="text-4xl font-black tracking-tight text-gray-900 sm:text-4xl">
                <span className="-mb-1 pb-1 block bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-transparent">
                  ERC-4626
                </span>
              </h2>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Alternating Feature Sections */}
        <div className="relative pt-16 pb-32 overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-pink-50"
          />
          <div className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div className="mt-6">
                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                      <span className="-mb-1 pb-1 block bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-transparent">
                        WHAT IS ERC-4626?
                      </span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-700">
                      ERC-4626 is a tokenized vault standard. Vaults are smart
                      contracts that take in token deposits and do something
                      with those tokens to provide token rewards to the
                      depositor. Standardizing vault implementations makes it
                      easier for applications, plugins, and tools to integrate
                      with vaults. Rather than building many custom adapters for
                      each vault implementation, applications can easily build
                      on top of any vault following the ERC-4626 standard.
                      ERC-4626 is to vaults what ERC-721 is to NFTs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-pink-500 ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={superCharged}
                    alt="superCharged"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                <div>
                  <div className="mt-6">
                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                      <span className="-mb-1 pb-1 block bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-transparent">
                        WHY ERC-4626?
                      </span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      Tokenized Vaults have a lack of standardization leading to
                      diverse implementation details. Some various examples
                      include lending markets, aggregators, and intrinsically
                      interest bearing tokens. This makes integration difficult
                      at the aggregator or plugin layer for protocols which need
                      to conform to many standards, and forces each protocol to
                      implement their own adapters which are error prone and
                      waste development resources. A standard for tokenized
                      Vaults will lower the integration effort for yield-bearing
                      vaults, while creating more consistent and robust
                      implementation patterns.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-pink-500 ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={stars4626}
                    alt="stars4626"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-to-t from-pink-50">
          <div className="mx-auto pt-2 pb-24 px-4 sm:px-6 lg:pt-2 lg:px-8">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-2 lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div>
                  <h2 className="text-center text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="-mb-1 pb-8 block bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-transparent">
                      BUILD WITH ERC-4626
                    </span>
                  </h2>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {build.map((build) => (
                      <div
                        key={build.email}
                        className="relative rounded-lg border border-pink-100 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-pink-500 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-900"
                      >
                        <div className="flex-1 min-w-0">
                          <a
                            href={build.href}
                            TARGET="_BLANK"
                            className="focus:outline-none"
                          >
                            <span
                              className="absolute inset-0"
                              aria-hidden="true"
                            />
                            <p className="text-sm font-medium text-slate-700">
                              {build.buildTitle}
                            </p>
                          </a>
                        </div>
                      </div>
                    ))}
                    <h2 className="text-center text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                      <span className="-mb-1 pb-8 block bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-transparent">
                        
                      </span>
                    </h2>
                  </div>
                  <p className="text-center mt-4 text-lg text-slate-700"><a
                          href="https://eips.ethereum.org/EIPS/eip-4626"
                          className="text-base text-center text-slate-700 hover:text-pink-700"
                          TARGET="_BLANK"
                        >
                          Read the proposal
                        </a> </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RESOURCES 1 Section */}
        <div className="bg-gradient-to-r from-pink-700 to-pink-900">
            <div className="max-w-7xl mx-auto pt-16 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="justify-items-center grid grid-cols-2 gap-8 xl:col-span-4">

                  <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div className="mt-12 md:mt-0">
                      <h3 className="text-sm font-bold text-pink-500 tracking-wider uppercase">
                        WATCH
                      </h3>
                      <ul className="mt-4 space-y-4">
                        {linksResources.videos.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className="text-base text-pink-50 hover:text-pink-300"
                              TARGET="_BLANK"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div>
                      <h3 className="text-sm font-bold text-pink-500 tracking-wider uppercase">
                        READ
                      </h3>
                      <ul className="mt-4 space-y-4">
                        {linksResources.reading.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className="text-base text-pink-50 hover:text-pink-300"
                              TARGET="_BLANK"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                </div>
            </div>
        </div>

{/* Adopter logos Section  */}
        <div className="bg-gradient-to-b from-pink-50">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:px-8 ">
            <h2 className="text-center  text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="-mb-1 pb-1 block bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-transparent">
                ERC-4626 EARLY ADOPTERS
              </span>
            </h2>
          </div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-4">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-12" src={logo__Alchemix} alt="Tuple" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-12" src={logo__Balancer} alt="Mirage" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-12" src={logo__Fei} alt="Mirage" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-12" src={logo__Maple} alt="StaticKit" />
          </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-8" src={logo__mStable} alt="StaticKit" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-8" src={logo__OpenZeppelin} alt="StaticKit" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-12" src={logo__Rari} alt="StaticKit" />
          </div>
        </div>
      </div>
    </div>

        {/* Table Section */}
        <div className="bg-white">
          <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:px-8 ">
            <h2 className="text-center  text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="-mb-1 pb-1 block bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-transparent">
                ERC-4626 VAULTS
              </span>
            </h2>
            <p className="text-center mt-4 text-lg text-slate-700">
            Aggregated and constantly updated list of ERC-4626 vaults deployed on EVM chains <div className="text-sm text-slate-400">(more data about each vault coming soon).</div>
            </p>
          </div>
        </div>
      </main>

      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle">
              <div className="shadow-sm ring-1 ring-black ring-opacity-5">
                <table
                  className="min-w-full border-separate"
                  style={{ borderSpacing: 0 }}
                >
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                      >
                        Vault
                      </th>
                      <th
                        scope="col"
                        className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                      >
                        Protocol
                      </th>
                      <th
                        scope="col"
                        className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                      >
                        Chain
                      </th>
                      <th
                        scope="col"
                        className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                      >
                        APY
                      </th>
                      <th
                        scope="col"
                        className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                      >
                        TVL
                      </th>
                      <th
                        scope="col"
                        className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                      >
                        Sharpe
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {vaults.map((vault, vaultIdx) => (
                      <tr key={vault.email}>
                        <td
                          className={classNames(
                            vaultIdx !== vaults.length - 1
                              ? "border-b border-gray-200"
                              : "",
                            "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                          )}
                        >
                          {vault.vault}
                        </td>
                        <td
                          className={classNames(
                            vaultIdx !== vaults.length - 1
                              ? "border-b border-gray-200"
                              : "",
                            "whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell"
                          )}
                        >
                          {vault.protocol}
                        </td>
                        <td
                          className={classNames(
                            vaultIdx !== vaults.length - 1
                              ? "border-b border-gray-200"
                              : "",
                            "whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell"
                          )}
                        >
                          {vault.chain}
                        </td>
                        <td
                          className={classNames(
                            vaultIdx !== vaults.length - 1
                              ? "border-b border-gray-200"
                              : "",
                            "whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                          )}
                        >
                          {vault.apy}
                        </td>
                        <td
                          className={classNames(
                            vaultIdx !== vaults.length - 1
                              ? "border-b border-gray-200"
                              : "",
                            "whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                          )}
                        >
                          {vault.tvl}
                        </td>
                        <td
                          className={classNames(
                            vaultIdx !== vaults.length - 1
                              ? "border-b border-gray-200"
                              : "",
                            "whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                          )}
                        >
                          {vault.sharpe}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* RESOURCES 2 Section */}
        <div className="bg-gradient-to-r from-pink-700 to-pink-900">
            <div className="max-w-7xl mx-auto pt-16 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="justify-items-center grid grid-cols-2 gap-8 xl:col-span-4">

                  <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div className="mt-12 md:mt-0">
                      <h3 className="text-sm font-bold text-pink-500 tracking-wider uppercase">
                        NEWS
                      </h3>
                      <ul className="mt-4 space-y-4">
                        {linksResources.news.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className="text-base text-pink-50 hover:text-pink-300"
                              TARGET="_BLANK"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div>
                      <h3 className="text-sm font-bold text-pink-500 tracking-wider uppercase">
                        TWEETS
                      </h3>
                      <ul className="mt-4 space-y-4">
                        {linksResources.tweets.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className="text-base text-pink-50 hover:text-pink-300"
                              TARGET="_BLANK"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                </div>
            </div>
        </div>

      {/* FAQ */}

      <section aria-labelledby="faq-heading" className="bg-gradient-to-t from-pink-50">
        <div className="max-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div>
            <h2 className="text-center text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="-mb-1 pb-1 block bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-transparent">
                ERC-4626 FAQs
              </span>
            </h2>
          </div>

          <dl className="mt-12 grid grid-cols-1 gap-y-10 sm:mt-16 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base font-medium text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-3 text-sm text-gray-500">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>


{/* Authors section */}

<section aria-labelledby="faq-heading" className="bg-gradient-to-b from-pink-50">
        <div className="max-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div>
            <h2 className="text-center text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="-mb-1 pb-1 block bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-transparent">
                ERC-4626 AUTHORS
              </span>
            </h2>
            <p className="text-center mt-12 text-lg text-slate-700">
            ERC-4626 was authored by Joey Santoro, t11s, Jet Jadeja, Alberto Cuesta Cañada, and Señor Doggo.
            </p>
            
          </div>

        </div>
      </section>


      {/* FOOTER */}
      <footer className="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-pink-500">
          <div className="mt-12 border-t border-pink-200 pt-8 pb-8 md:flex md:items-center md:justify-between lg:mt-16">
            <div className="flex space-x-6 md:order-2">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-pink-500 hover:text-pink-600"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-base text-pink-500 md:mt-0 md:order-1">
            Site built and maintained by Superform 💙. Feel free to reach out to us on Telegram.  
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
