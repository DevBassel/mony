"use client";
import { Provider } from "react-redux";
import { store } from "./index";
import TokenContextProvider from "../app/Context/tokenContext";
import { CartProvider } from "react-use-cart";
import { QueryClient, QueryClientProvider } from "react-query";

export function Providers({ children }) {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <TokenContextProvider>{children}</TokenContextProvider>
        </CartProvider>
      </QueryClientProvider>
    </Provider>
  );
}
