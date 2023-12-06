import "@teparuiz69/styles/globals.css";
import { OrderProvider } from "@teparuiz69/context/orders-context";
import "material-icons/iconfont/material-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SessionProvider } from "next-auth/react";

// Layout
import LayoutComponent from "@teparuiz69/components/Layout";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const _getLayout = () => {};

  return (
    <SessionProvider session={session}>
      <OrderProvider>
        <LayoutComponent>
          <Component {...pageProps} />
        </LayoutComponent>
      </OrderProvider>
    </SessionProvider>
  );
}
