/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "@/src/Style/HomeSlide.css";
import "@/src/Style/SlideInfo.scss";
import "@/src/Style/products.css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "../../../utils/navigation";
import Box from "@mui/material/Box";
import { useTranslations } from "next-intl";

function HomeSlide({ data, sl }) {
  const media = window.matchMedia("(max-width: 991px)");
  const t = useTranslations();
  return (
    <div className="home-slide">
      <div className="container">
        <div className="slider">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={40}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
          >
            {data?.map((el) => {
              return (
                <SwiperSlide key={el.id} className="slide-info">
                  <div
                    className="row slide-x01"
                    style={{ justifyContent: "center" }}
                  >
                    <Box
                      className="col-lg-6 col-md-12 slide-x02"
                      sx={{
                        //  backgroundColor: { lg: "yellow" },
                        maxWidth: { lg: "40%" },
                        display: "flex",
                        justifyContent: { lg: "flex-start !important" },
                      }}
                    >
                      <Box
                        className="text mx-5"
                        sx={{
                          margin: {
                            lg: "0rem !important",
                          },
                        }}
                      >
                        <h2 className="slider_head text-white">{el?.title}</h2>
                        <div className="mobile_img">
                          <img src={el?.photo} alt="" />
                        </div>
                        <p
                          className="slider_info"
                          dangerouslySetInnerHTML={{
                            __html:
                              media.matches === true
                                ? el?.description?.slice(0, 30)
                                : el?.description,
                          }}
                        ></p>
                        <Link
                          href={`${el?.link}`}
                          className="more-info text-white "
                        >
                          {t("slider_link")}
                        </Link>
                      </Box>
                    </Box>
                    <Box
                      className="col-lg-6 col-md-12 slide-x03"
                      sx={{
                        //  backgroundColor: { lg: "black" },
                        maxWidth: { lg: "40%" },
                        display: "flex",
                        justifyContent: { lg: "flex-end !important" },
                      }}
                    >
                      <div className="image">
                        <img src={el?.photo} alt="" />
                      </div>
                    </Box>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default HomeSlide;
