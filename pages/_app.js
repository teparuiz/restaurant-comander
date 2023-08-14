import "@teparuiz69/styles/globals.css";
import { PrismaneProvider } from "@prismane/core";
import { extendTheme } from "@prismane/core/themes";
import { OrderProvider } from "@teparuiz69/context/orders-context";
export default function App({ Component, pageProps }) {
  const theme = extendTheme({
    mode: "light",
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
