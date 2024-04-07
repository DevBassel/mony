import "@/src/Style/Winners.css";
import "@/src/Style/contestDetails.css";
import SwiperWinners from "@/src/components/home/SwiperWinners/SwiperWinners";
import WinnerSlider from "@/src/components/winner/winnerSlider";
import LiveDrawsCard from "@/src/components/winner/LiveDrawsCard";
import { useTranslations } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";

export const metadata = async () => {
  const t = await getTranslations();
  return {
    title: t("header_link_winners"),
    description: t("about_us4"),
  };
};
async function getLiveDraws() {
  const locale = getLocale();
  const language = locale === "ar" ? "arabic" : "english";
  console.log({ language, locale });
  const res = await fetch(
    `https://moneyservices.store/back/public/api/live?locale=${language}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Winners() {
  const t = await getTranslations();

  const liveDraws = await getLiveDraws();
  console.log(liveDraws.Direct_lives);

  return (
    <div className="Winners-Container">
      <div className="container winners-container">
        <h4 className="winners_title">{t("winners_title")}</h4>
        <div className="py-4">
          <div className="container">
            <div className="row mt-6">
              {liveDraws?.Direct_lives.map((item) => (
                <div
                  key={item.id}
                  className="d-flex justify-content-center align-items-center col-12 col-md-6 col-lg-4 col-xl-4 mb-4"
                >
                  <LiveDrawsCard cardData={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container swiper-prevDraws-container">
        <h4 className="swiper_prev_title"> {t("swiper_prevDraws_title")}</h4>
        <div className="py-4">
          <WinnerSlider prevDraws={liveDraws.Previous_lives} />
        </div>
      </div>

      <div
        style={{
          margin: "60px 0",
        }}
      >
        <SwiperWinners />
      </div>
    </div>
  );
}

/* const [winners, setWinners] = useState([])
const {t} = useTranslation()
useLayoutEffect(() => {
    fetch(`https://moneyservices.store/back/public/api/winrer-user?locale=${localStorage.getItem("lng")}`).then((res) => {
        return res.json()
    }).then((data) => {
        setWinners(data?.Winrers)
    })
}, [])
return (
    <div className='winners'>
        <div className='container'>
            <h4 className="winers_title">{t("winner_title")}</h4>
            <div className="winners_list">
                {winners.length !== 0 ? winners?.map((el) => {
                    return (
                        <div className="winner" key={el?.id}>
                            <div className="winner_info">
                                <h4 className="winner_title">{el?.user_name} <FaGift /></h4>
                                <p className="winner_description">{el?.description}</p>
                            </div>
                            <div className="winner_img">
                                <img src={el?.user_photo} alt="" />
                            </div>
                            HELLO I'm EMAD
                        </div>
                    )
                }) : <h4>{t("winner_not_Found")} </h4>}
                
            </div>
        </div>
    </div>
)
*/
