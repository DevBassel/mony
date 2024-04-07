import { Providers } from "@/src/Redux/provider";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getTranslations } from "next-intl/server";

export const metadata = async () => {
  const t = await getTranslations();
  return {
    title: t("header_link_home"),
    description: t("about_us4"),
  };
};

export default function RootLayout({ children, params: { locale } }) {
  const messages = useMessages();
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Providers>
        <html
          lang={locale === "ar" ? "ar" : "en"}
          dir={locale === "ar" ? "rtl" : "ltr"}
        >
          <head>
            <meta charset="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <link rel="icon" type="image/svg+xml" href="/src/assets/logo.png" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin
            />
          </head>
          <body>
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      </Providers>
    </NextIntlClientProvider>
  );
}
