const {
  PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD
} = require("next/constants")

/** @type {import("next").NextConfig} */
module.exports = (phase) => {

  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  // when `next build` or `npm run build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1"
  // when `next build` or `npm run build` is used
  const isStaging = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === "1"

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)

  const env = {
    RESTURL_SPEAKERS: (() => {
      if (isDev) return "http://localhost:4000/speakers"
      if (isProd) {
        return "https://www.siliconvalley-codecamp.com/rest/speakers/ps"
      }
      if (isStaging) return "http://localhost:11639"
      return "RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)"
    })(), RESTURL_SESSIONS: (() => {
      if (isDev) return "http://localhost:4000/sessions"
      if (isProd) return "https://www.siliconvalley-codecamp.com/rest/sessions"
      if (isStaging) return "http://localhost:11639"
      return "RESTURL_SESSIONS:not (isDev,isProd && !isStaging,isProd && isStaging)"
    })()
  }

  // next.config.js object
  return {
    env: {
      ...env,
      storePicturesInWEBP: true,
      generateAndUseBlurImages: true
    },
    reactStrictMode: true,
    poweredByHeader: false,
    experimental: {
      images: {
        layoutRaw: true
      }
    },
    images: {
      loader: "custom",
      layoutRaw: true,
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      nextImageExportOptimizer: {
        imageFolderPath: "public/images",
        exportFolderPath: "out",
        quality: 75
      }
    }
  }
}
