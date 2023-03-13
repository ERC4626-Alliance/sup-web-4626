import Container from "../Container";
import { IoLogoGithub } from "react-icons/io";
import React from "react";

const resources = [
  {
    creator: "Superform",
    title: "SuperVaults: ERC4626 Adapters of different kinds",
    description:
      "Repository contains different types of ERC4626 adapters/wrappers for non-standardized DeFi Vaults. We follow yield-daddy implementation for some AAVE & Compound" +
      " forked protocols, adding reward harvesting, but we also provide a set of original adapters over protocols like Arrakis, Lido, Uniswap or Compound-V3. A goal of this repository is to build a useful reference codebase to follow when implementing ERC4626 compatible adapters and vaults.",
    href: "https://github.com/superform-xyz/super-vaults",
  },
  {
    title: "ERC4626 OpenZeppelin Contracts",
    creator: "OpenZeppelin",
    href: "https://deploy-preview-3979--openzeppelin-contracts-docs.netlify.app/contracts/4.x/erc4626",
    description: "The documentation for base implementation of ERC4626 that includes a simple vault. This contract is designed in a way that allows developers to easily" +
      " re-configure the" +
      " vault’s" +
      " behavior, with minimal overrides, while staying compliant. In this guide, we will discuss some security considerations that affect ERC4626. We will also discuss common customizations of the vault."
  },
  {
    title: "Modern and Gas-Efficient ERC-4626 Tokenized Vault Vyper Implementation",
    creator: "Pascal Marco Caversaccio",
    description: "Example implements the ERC-4626 standard interface plus extra functions added for convenience (permit, nonces, DOMAIN_SEPARATOR). The `permit` function implements approvals via EIP-712 secp256k1 signatures",
    href: "https://github.com/pcaversaccio/snekmate/blob/main/src/extensions/ERC4626.vy"
  },{
    title: "Yearn Starter Kit for V2 Vaults",
    creator: "Storming0x (Yearn Finance)",
    description: "Starter Kit for integrating V2 yearn vaults and ERC4626 vaults. Includes: basic example Solidity Smart Contracts for integrating with Yearn Vaults (Both V2 and ERC4626 interfaces); ERC4626 adapter to wrap yearn vaults; example contracts & sample test suite (tests)",
    href: "https://github.com/storming0x/ystarter-foundry-kit"
  },{
    title: "Rolling Liquidity Vault (RLV)",
    creator: "Sense Finance",
    description: "Rolling Liquidity Vault: an ERC4626 compliant vault, passive liquidity vault built atop Sense Space Pools. Repo includes ERC4626 compliant vault that" +
      " automatically migrates Sense Space pool liquidity from a matured series to a new series, thereby creating a passive LP experience. Instead of needing to actively manage liquidity, LPs can opt into an \"rolling\" position by depositing their assets into an RLV, recieving LP shares in return",
    href: "https://github.com/sense-finance/auto-roller"
  },
  {
    title: "ERC4626 Property Tests",
    creator: "a16z",
    description: "Vault developers can run the tests to detect potential standard violations in their implementations before deployment. And vault integrators can check if the given vaults follow the standard before integrating them into their system. The properties can also be tested against the live vaults already deployed on the mainnet, via mainnet fork testing.",
    href: "https://deploy-preview-3979--openzeppelin-contracts-docs.netlify.app/contracts/4.x/erc4626"
  }
];

export default function PinnedResources() {
  return (
    <Container>
      <ul
        role="list"
        className="mx-auto mb-8 grid max-w-2xl cursor-default select-none grid-cols-1 gap-6 text-left text-sm text-pink-700 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
      >
        {resources.map((resource, index) => (
          <a
            key={`pinned-resource-${index}`}
            href={resource.href}
            target="_blank"
            rel="nofollow noreferrer"
            className="rounded-lg bg-white p-8 shadow-xl shadow-slate-900/10 dark:bg-pink-700 dark:text-white lg:hover:bg-white/70 dark:lg:hover:bg-pink-700/70"
          >
            <div className="flex flex-nowrap justify-between">
              <IoLogoGithub className="h-8 w-8" />
              <small>Created by {resource.creator}</small>
            </div>
            <h3 className="mt-3 whitespace-nowrap bg-gradient-to-r from-pink-400 to-pink-900 bg-clip-text text-lg font-extrabold capitalize tracking-tight text-transparent dark:from-pink-100">
              {resource.title}
            </h3>
            <p className="mt-2 leading-relaxed dark:text-white">{resource.description}</p>
          </a>
        ))}
      </ul>
    </Container>
  );
}