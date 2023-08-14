import "@teparuiz69/styles/globals.css";
import { PrismaneProvider } from "@prismane/core";
import { extendTheme } from "@prismane/core/themes";
import { OrderProvider } from "@teparuiz69/context/orders-context";
import 'material-icons/iconfont/material-icons.css';
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  const theme = extendTheme({
    mode: "dark",
    colors: {
      primary: {
        100: "#ffffff",
      },
    },
  });

  return (
    <PrismaneProvider theme={theme}>
      <OrderProvider>
        <Component {...pageProps} />
      </OrderProvider>
    </PrismaneProvider>
  );
}
