import "../styles/globals.css";
import React, { Fragment, useEffect } from "react";
import type { AppProps } from "next/app";
import Layout from "../components/Layouts/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
};

export default MyApp;
