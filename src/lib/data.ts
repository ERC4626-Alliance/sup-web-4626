export const linksResources = {
  reading: [
    {
      name: "How ERC-4626 Could Fuel the Next Wave of DeFi", href: "https://decrypt.co/99695/how-erc-4626-could-fuel-next-wave-of-defi"
    }, {
      name: "EIP-4626: Discussion", href: "https://ethereum-magicians.org/t/eip-4626-yield-bearing-vault-standard/7900"
    }
  ],
  news: [
    {
      name: "ERC-4626: DeFi's Newest Money Lego", href: "https://www.coindesk.com/layer2/2022/01/13/erc-4626-defis-newest-money-lego/"
    }, {
      name: "DeFi Giant Yearn Leads the Way on ERC-4626 Token Standard Adoption",
      href: "https://www.coindesk.com/layer2/2022/04/08/defi-giant-yearn-leads-the-way-on-erc-4626-token-standard-adoption/"
    }, {
      name: "ERC-4626 Proposes To Make Yield-Bearing Tokens Their Own DeFi Lego", href: "https://thedefiant.io/erc-4626-yield-standard/"
    }, {
      name: "DeFi Giant Yearn Leads the Way on ERC-4626 Token Standard Adoption 2", href: "https://www.yahoo.com/now/defi-giant-yearn-leads-way-144957342.html"
    }, {
      name: "Trustless L2-native yield has arrived on StarkNet, happy to announce Yagi Vaults",
      href: "https://twitter.com/yagi_fi/status/1525886873733943296?s=21&t=puUU8QhnTtgFvMTPuDTirw"
    }
  ],
  tweets: [
    {
      name: "@joey__santoro", href: "https://twitter.com/joey__santoro/status/1481364987129917444?lang=en"
    }, {
      name: "@iearnfinance", href: "https://twitter.com/iearnfinance/status/1511444220850184197?s=20&t=JNfKDhHMNYga_Uc7-yt6-A"
    }, {
      name: "@0xSassun", href: "https://twitter.com/0xSassun/status/1522678605628719104?s=20&t=IOYeIGfvkymD8XAczFxoFw"
    }
  ],
  videos: [
    {
      name: "Joey Santoro ERC-4626 deep dive", href: "https://youtu.be/L8dijE5qhTg"
    }, {
      name: "Yearn vault 4626 implementation", href: "https://youtu.be/urC35PMbpJ4"
    }
  ],
  repositories: [
    {
      name: "ERC-4626 Vyper implementation", href: "https://github.com/fubuloubu/ERC4626"
    }, {
      name: "EIP", href: "https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4626.md"
    }, {
      name: "Early YFI implementation", href: "https://github.com/shortdoom/vault-fun"
    }, {
      name: "FEI 4626 implementation", href: "https://github.com/fei-protocol/ERC4626"
    }, { name: "Rari Solmate", href: "https://github.com/Rari-Capital/solmate" }, {
      name: "Cairo 4626 implementation", href: "https://github.com/auditless/cairo-erc4626"
    }, {
      name: "Yearn starter kit", href: "https://github.com/storming0x/ystarter-foundry-kit"
    }
  ],
  adopters: [
    {
      name: "mStable", href: "https://medium.com/mstable/erc-4626-meta-vaults-are-coming-to-mstable-9e7c5e182b04"
    }, { name: "Alchemix", href: "#" }, { name: "Balancer", href: "#" }, { name: "Rari", href: "#" }, { name: "Fei", href: "#" }, {
      name: "OpenZepplin", href: "https://twitter.com/maximizer_xyz/status/1524035547173433344?s=20&t=IOYeIGfvkymD8XAczFxoFw"
    }, {
      name: "Maximizer", href: "https://twitter.com/lucasmanuel_eth/status/1521882443858513922?s=20&t=IOYeIGfvkymD8XAczFxoFw"
    }
  ]
};

export const vaults = [
  {
    vault: "STG+USDC", protocol: "Curve", chain: "Ethereum", apy: "13.7%", tvl: "$54M", sharpe: "3.1"
  }, {
    vault: "DAI+USDC+USDT", protocol: "Curve", chain: "Binance Smart Chain", apy: "12.5%", tvl: "$541M", sharpe: "2.1"
  }, {
    vault: "DAI+USDC+USDT+sUSD", protocol: "Curve", chain: "Binance Smart Chain", apy: "41.4%", tvl: "$435M", sharpe: "2.4"
  }, {
    vault: "USDC+USDT+UST+FRAX", protocol: "Curve", chain: "Avalanche", apy: "63.2%", tvl: "$432M", sharpe: "3.1"
  }, {
    vault: "ADAI+AUSDC+AUSDT", protocol: "Curve", chain: "Geist", apy: "12.1%", tvl: "$62M", sharpe: "1.4"
  }, {
    vault: "USDC+EURS", protocol: "Curve", chain: "Cosmos", apy: "32.2%", tvl: "$678M", sharpe: "3.1"
  }, {
    vault: "CADC+USDC", protocol: "Curve", chain: "Fantom", apy: "32.2%", tvl: "$543M", sharpe: "1.6"
  }, {
    vault: "CDAI+CUSDC+USDT", protocol: "Curve", chain: "Ethereum", apy: "54.1%", tvl: "$324M", sharpe: "1.7"
  }, {
    vault: "PAR+USDC", protocol: "Curve", chain: "Binance Smart Chain", apy: "31.2%", tvl: "$23M", sharpe: "1.7"
  }, {
    vault: "USDC+CXD", protocol: "Curve", chain: "Ethereum", apy: "45.7%", tvl: "$783M", sharpe: "2.7"
  }, {
    vault: "USDC+CXD", protocol: "Curve", chain: "Ethereum", apy: "45.7%", tvl: "$782M", sharpe: "2.7"
  }
  // More vaults...
];
