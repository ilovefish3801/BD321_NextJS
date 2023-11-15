import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
// layout
import Layout from "@/layouts";
// redux
import { Provider } from "react-redux";
import { store } from "../store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
