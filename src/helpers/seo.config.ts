export default {
  openGraph: {
    title: process.env.SEO_TITLE || "ERC-4626 - A Tokenized Vault Standard",
    description: process.env.SEO_DESCRIPTION || "What is ERC-4626? ERC-4626 is a tokenized vault standard. Vaults are smart contracts that take in token deposits and do something with those" +
      " tokens to provide token rewards to the depositor. Browse through a list of ERC4626 vaults. Learn how to make an ERC4626.",
    type: "website",
    locale: "en_US",
    name: "ERC-4626 Resources"
    images: [
      {
        url: "/preview.jpg", width: 1200, height: 628, alt: process.env.SEO_TITLE || "ERC-4626 — A Tokenized Vault Standard", type: "image/jpeg"
      }
    ],
    site_name: "ERC-4626"
  }, twitter: {
    handle: "@superformxyz", site: "@superformxyz", cardType: "summary_large_image"
  }
};
