/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/prop-types */
import "@/src/Style/LiveDrawsCard.scss";
import { useTranslations } from "next-intl";
import { getLocale } from "next-intl/server";

async function LiveDrawsCard({ cardData }) {
  const t = useTranslations();
  const locale = await getLocale();
  return (
    <a
      href={cardData?.link}
      target="_blank"
      className="liveCard"
      rel="noreferrer"
    >
      <img src={cardData?.photo} alt="" />
      <div
        className="bottom-container"
        style={{
          right: locale === "ar" ? "15px" : "",
          left: locale === "en" ? "15px" : "",
        }}
      >
        <h5>{cardData?.title}</h5>
        <p>{t("live-draw")}</p>
      </div>
    </a>
  );
}

export default LiveDrawsCard;
