export default {
  openGraph: {
    title: process.env.SEO_TITLE || "ERC-4626 — a tokenized vault standard",
    description: process.env.SEO_DESCRIPTION || "ERC-4626 is a tokenized vault standard. Vaults are smart contracts that take in token deposits and do something with those" +
      " tokens to provide token rewards to the depositor",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/preview.jpg", width: 1200, height: 628, alt: process.env.SEO_TITLE || "ERC-4626 — a tokenized vault standard", type: "image/jpeg"
      }
    ],
    site_name: "ERC-4626"
  }, twitter: {
    handle: "@superform", site: "@superform", cardType: "summary_large_image"
  }
};
