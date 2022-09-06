const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

/** @type {import("next").NextConfig} */
module.exports = (phase) => {
  // when `next build` or `npm run build` is used
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";
  // when `next build` or `npm run build` is used
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === "1";

  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  // or if flags `isProd / isStaging` turned false
  const isDev = phase === PHASE_DEVELOPMENT_SERVER || (!isProd && !isStaging);

  if (isDev) {
    console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`);
  }

  const env = {
    storePicturesInWEBP: true,
    generateAndUseBlurImages: true,
    IS_PROD: () => !isDev,
    NEXT_SEO_JLD_ANSWER: process.env.NEXT_SEO_JLD_ANSWER,
    NEXT_SEO_JLD_QUESTION: process.env.NEXT_SEO_JLD_QUESTION,
    NEXT_SEO_PREVIEW: process.env.NEXT_SEO_PREVIEW,
    NEXT_SEO_TWITTER: process.env.NEXT_SEO_TWITTER,
    NEXT_SEO_ABOUT: process.env.NEXT_SEO_ABOUT,
    NEXT_SEO_TITLE: process.env.NEXT_SEO_TITLE,
    NEXT_SEO_CANONICAL: process.env.NEXT_SEO_CANONICAL,
    NEXT_IMG_PATH: process.env.NEXT_IMG_PATH,
    NEXT_TELEMETRY_DISABLED: 1,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  };

  // next.config.js object
  return {
    compiler: {
      reactRemoveProperties: !isDev,
      removeConsole: !isDev
    },
    trailingSlash: true,
    productionBrowserSourceMaps: isDev,
    swcMinify: isProd,
    env: {
      ...env
    },
    ssr: false,
    reactStrictMode: true,
    poweredByHeader: false,
    experimental: {
      images: {
        layoutRaw: true,
        unoptimized: true,
      }
    },
    images: {
      storePicturesInWEBP: true,
      generateAndUseBlurImages: true,
      minimumCacheTTL: 60,
      formats: ["image/webp"],
      loader: "custom",
      layoutRaw: true,
      deviceSizes: [320, 828, 1200, 1920],
      nextImageExportOptimizer: {
        imageFolderPath: "public/images",
        exportFolderPath: "out",
        quality: 80
      }
    }
  };
};
