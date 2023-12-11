import "@teparuiz69/styles/globals.css";
import { OrderProvider } from "@teparuiz69/context/orders-context";
import "material-icons/iconfont/material-icons.css";
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "next-auth/client";
import Head from "next/head";

// Layout
import LayoutComponent from "@teparuiz69/components/Layout";
//Progress
import NextProgress from "next-progress";
// Notification

import { ToastContainer, toast } from "react-toastify";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const _getLayout = () => {
    if (session) {
      return (
        <OrderProvider>
          <LayoutComponent {...pageProps}>
            <Component {...pageProps} />
          </LayoutComponent>
        </OrderProvider>
      );
    } else
      return (
        <>
          <div className="wrapper">
            <div className="container-fluid">
              <Component {...pageProps} />
            </div>
          </div>
        </>
      );
  };

  return (
    <Provider session={session}>
      <Head>
        <title> WIP Burgers </title>
        <meta name="WIP Burgers" content="WIP Burgers" />
      </Head>
      <NextProgress delay={300} />
      {_getLayout()}
      <ToastContainer />
    </Provider>
  );
}
