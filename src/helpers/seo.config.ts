export default {
  openGraph: {
    title: process.env.SEO_TITLE || "ERC-4626 — a tokenized vault standard",
    description: process.env.SEO_DESCRIPTION || "The ERC-4626 tokenized vault standard standardizes the vaulting process. It ensures that coins are protected from unauthorized" + " access and can be easily minted or wrapped. ERC-4626 could resolve the mishmash of the types of design associated with tokens that print money in DeFi.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/preview.png", width: 800, height: 600, alt: process.env.SEO_TITLE || "ERC-4626 — a tokenized vault standard", type: "image/jpeg"
      }
    ],
    site_name: "ERC-4626"
  }, twitter: {
    handle: "@superform", site: "@site", cardType: "summary_large_image"
  }
};

/**
 * openGraph={{
 *
 *
 *
 *
 *         }}
 *         twitter={{
 *           handle: "@handle",
 *           site: "@site",
 *           cardType: "summary_large_image"
 *         }}
 */
