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

export default function LocaleLayout({ children, params: { locale } }) {
  const messages = useMessages();
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Providers>
        <html
          lang={locale === "ar" ? "ar" : "en"}
          dir={locale === "ar" ? "rtl" : "ltr"}
        >
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
