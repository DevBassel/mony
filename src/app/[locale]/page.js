import HomeSlide from "@/src/components/HomeSlide";
import { getLocale, getTranslations } from "next-intl/server";
import React from "react";
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
import Sale from "@/src/components/Sale";
import PopularCampaigns from "@/src/components/PopularCampaigns";
import CopunsCardsContainer from "@/src/components/CopunsCardsContainer";

async function getData() {
  const locale = await getLocale();
  const language = locale === "ar" ? "arabic" : "english";
  console.log({ language, locale });
  const res = await fetch(
    `https://moneyservices.store/back/public/api/home?locale=${language}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  const t = await getTranslations();

  return (
    <main>
      <HomeSlide data={data.banners} sl={t("slider_link")} />
      <Sale data={data?.under_slider} />
      <PopularCampaigns />
      <CopunsCardsContainer />
    </main>
  );
}
