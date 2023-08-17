import "@teparuiz69/styles/globals.css";
import { OrderProvider } from "@teparuiz69/context/orders-context";
import "material-icons/iconfont/material-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  return (
    <OrderProvider>
      <Component {...pageProps} />
    </OrderProvider>
  );
}
