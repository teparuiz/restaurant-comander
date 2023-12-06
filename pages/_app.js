import "@teparuiz69/styles/globals.css";
import { OrderProvider } from "@teparuiz69/context/orders-context";
import "material-icons/iconfont/material-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

// Layout
import LayoutComponent from "@teparuiz69/components/Layout";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const _getLayout = () => {
    if (session) {
      return (
        <OrderProvider>
          <LayoutComponent>
            <Component {...pageProps} />
          </LayoutComponent>
        </OrderProvider>
      );
    } else return <Component {...pageProps} />;
  };

  return (
    <SessionProvider session={session}>
      <Head>
        <title> WIP Burgers </title>
        <meta name="WIP Burgers" content="WIP Burgers" />
      </Head>

      {_getLayout()}
    </SessionProvider>
  );
}
