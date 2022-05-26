import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="theme-color" content="#000000"/>
      <meta
        name="description"
        content="Web site created using create-react-app"
      />
      {/**
       * manifest.json provides metadata used when your web app is installed on a
       * user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
       **/}
      {/*<link rel="manifest" href="%PUBLIC_URL%/manifest.json"/>*/}
      {/**
       * Notice the use of %PUBLIC_URL% in the tags above.
       * It will be replaced with the URL of the `public` folder during the build.
       * Only files inside the `public` folder can be referenced from the HTML.
       *
       * Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
       * work correctly both with client-side routing and a non-root public URL.
       * Learn how to configure a non-root public URL by running `npm run build`.
       **/}
      <link rel="shortcut icon" href="/favicon.ico"/>
      <meta name="msapplication-TileColor" content="#000000"/>
      <meta
        name="description"
        content={`A statically generated blog example using Next.js and 4626.com website.`}
      />
      <title>4626.com</title>
      {/*<meta property="og:image" lib={HOME_OG_IMAGE_URL}/>*/}
    </Head>
  );
};

export default Meta;
