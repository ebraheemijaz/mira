import React, { useContext, useEffect, useState } from "react";
// import img from "../assets/img/hero.jpg";
import { DetailsContect } from "./InfoContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

export default function Hero() {
  const details = useContext(DetailsContect);
  const [show, setShow] = useState(true);
  useEffect(() => {
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 200);
  }, [details?.lang]);
  return (
    <>
      <section id="hero" class="hero section light-background">
        {show && (
          <Swiper
            loop
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            className="mySwiper"
            style={{ height: "500px" }}
          >
            <SwiperSlide>
              <img
                src={`${window.location.protocol}//${window.location.host}/banner (1).jpg`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`${window.location.protocol}//${window.location.host}/banner (2).jpg`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`${window.location.protocol}//${window.location.host}/banner (3).jpg`}
              />
            </SwiperSlide>
          </Swiper>
        )}
      </section>
      <div style={{ margin: "2%" }}></div>
      <section
        id="hero"
        class="hero section light-background"
        style={{ marginLeft: "2rem", marginRight: "2rem" }}
      >
        {show && (
          <Swiper
            loop
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Navigation, Autoplay]}
            slidesPerView={8}
            spaceBetween={20}
            className="mySwiper"
            style={{ height: "100px" }}
          >
            {[
              "AirConditioningAccessories1.webp",
              "AmericanAWGSpecification3.webp",
              "BritishNYASpecification2.webp",
              "Bulbs3.webp",
              "CircuitBreaker2.webp",
              "Electricalenclosures2.webp",
              "Electricalpanels1.webp",
              "ExteriorSpotlights1.webp",
              "Fans2.webp",
              "fibercables1.webp",
              "flexiblerubbercables2.webp",
              "InteriorSpotlights4.webp",
              "SwitchesandSockets2.jpg",
              "TrackLight1.webp",
              "SWAcables2.webp",
              "Recessedlighting2.jpg",
            ].map((each) => (
              <SwiperSlide>
                <img
                  src={`${window.location.protocol}//${window.location.host}/${each}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </section>
    </>
  );
}
