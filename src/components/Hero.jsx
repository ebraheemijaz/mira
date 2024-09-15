import React, { useContext, useEffect, useState } from "react";
// import img from "../assets/img/hero.jpg";
import { DetailsContect } from "./InfoContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

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
              { productId: "35", image: "AirConditioningAccessories1.webp" },
              { productId: "12", image: "AmericanAWGSpecification3.webp" },
              { productId: "10", image: "BritishNYASpecification2.webp" },
              { productId: "15", image: "Bulbs3.webp" },
              { productId: "22", image: "CircuitBreaker2.webp" },
              { productId: "27", image: "Electricalenclosures2.webp" },
              { productId: "24", image: "Electricalpanels1.webp" },
              { productId: "21", image: "ExteriorSpotlights1.webp" },
              { productId: "26", image: "Fans2.webp" },
              { productId: "1", image: "fibercables1.webp" },
              { productId: "2", image: "flexiblerubbercables2.webp" },
              { productId: "17", image: "InteriorSpotlights4.webp" },
              { productId: "25", image: "SwitchesandSockets2.jpg" },
              { productId: "18", image: "TrackLight1.webp" },
              { productId: "9", image: "SWAcables2.webp" },
              { productId: "14", image: "Recessedlighting2.jpg" },
            ].map((each) => (
              <SwiperSlide>
                <Link to={`/product/${each.productId}`}>
                  <img
                    src={`${window.location.protocol}//${window.location.host}/${each.image}`}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </section>
    </>
  );
}
