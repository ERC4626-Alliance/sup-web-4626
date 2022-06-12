const {
        PHASE_DEVELOPMENT_SERVER,
        PHASE_PRODUCTION_BUILD
      } = require("next/constants");

/** @type {import("next").NextConfig} */
module.exports = (phase) => {

  // when `next build` or `npm run build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";
  // when `next build` or `npm run build` is used
  const isStaging = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === "1";

  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  // or if flags `isProd / isStaging` turned false
  const isDev = phase === PHASE_DEVELOPMENT_SERVER || (!isProd && !isStaging);

  if (isDev) {
    console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`);
  }

  const env = {

    storePicturesInWEBP: true,
    generateAndUseBlurImages: true,
    IS_PROD: () => !isDev
  };

  const compiler = {
    reactRemoveProperties: isProd,
    removeConsole: isProd
  };

  // next.config.js object
  return {
    compiler: {
      ...compiler
    },
    trailingSlash: true,
    productionBrowserSourceMaps: true,
    swcMinify: isProd,
    env: {
      ...env
    },
    reactStrictMode: true,
    poweredByHeader: false,
    experimental: {
      images: {
        layoutRaw: true
      }
    },
    images: {
      formats: ['image/webp'],
      loader: "custom",
      layoutRaw: true,
      nextImageExportOptimizer: {
        imageFolderPath: "public/images",
        exportFolderPath: "out",
        quality: 75
      }
    }
  };
};
