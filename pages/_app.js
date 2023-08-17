import "@teparuiz69/styles/globals.css";
import { OrderProvider } from "@teparuiz69/context/orders-context";
import "material-icons/iconfont/material-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <OrderProvider>
        <Component {...pageProps} />
      </OrderProvider>
    </SessionProvider>
  );
}
