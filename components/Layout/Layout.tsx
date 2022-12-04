import Head from "next/head";

import styles from "./Layout.module.css";

const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="description" content="pottmayer.dev random stuff" />
        <meta
          name="keywords"
          content="Leonardo, Pottmayer, Leonardo Pottmayer, pottmayer.dev"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Leonardo Pottmayer" />

        <title>pottmayer.dev</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
