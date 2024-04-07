/* eslint-disable @next/next/no-img-element */
import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/src/Style/Normalize.css";
import "@/src/Style/Main.scss";
import "@/src/Style/Global.scss";
import "@/src/Style/Home.css";
import "@/src/Style/products.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export const metadata = {
  title: "page not found",
};
export function NotFound() {
  const locale = useLocale();
  const messages = useMessages();
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <html>
        <body className="text-center">
          <Header />
          <div className="text-center mt-5 mb-5">
            <img src={"/assets/images/404.svg"} alt="" className="w-50" />
          </div>

          <Footer />
        </body>
      </html>
    </NextIntlClientProvider>
  );
}

export default NotFound;
