import React, { useContext } from "react";
import { DetailsContect } from "./InfoContext";

export default function Choose() {
  const details = useContext(DetailsContect);

  return (
    <section id="services" class="cards section">
      <div class="container section-title" data-aos="fade-up">
        <h2>{details?.lang === "EN" ? "Services" : "خدمات"}</h2>
        <p>
          {details?.lang === "EN"
            ? `we provide best professional services`
            : `نحن نقدم أفضل الخدمات المهنية`}
        </p>
      </div>

      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div class="card-item">
              <span>{details?.lang === "EN" ? "01" : "واحد"}</span>
              <h4>
                <a href="" class="stretched-link">
                  {details?.lang === "EN" ? "Fast charging" : "شحن سريع"}
                </a>
              </h4>
              <p>
                {details?.lang === "EN"
                  ? `Express shipping for orders +10,000 Saudi riyals for all
                categories except cables and wires within Jeddah and Riyadh`
                  : `شحن سريع للطلبات +10,000 ريال سعودي للجميع
                الفئات باستثناء الكابلات والأسلاك داخل جدة والرياض`}
              </p>
            </div>
          </div>

          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div class="card-item">
              <span>{details?.lang === "EN" ? "02" : "إثنان"}</span>
              <h4>
                <a href="" class="stretched-link">
                  {details?.lang === "EN"
                    ? "Secure payment methods"
                    : "طرق الدفع الآمنة"}
                </a>
              </h4>
              <p>
                {details?.lang === "EN"
                  ? `We are committed to providing the highest level of quality and
                satisfaction to our customers.`
                  : `نحن ملتزمون بتقديم أعلى مستوى من الجودة و
                رضا عملائنا.`}
              </p>
            </div>
          </div>

          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div class="card-item">
              <span>{details?.lang === "EN" ? "03" : "ثلاثة"}</span>
              <h4>
                <a href="" class="stretched-link">
                  {details?.lang === "EN"
                    ? `Technical support around the clock`
                    : ` الدعم الفني على مدار الساعة`}
                </a>
              </h4>
              <p>
                {details?.lang === "EN"
                  ? `Enjoy an exciting and unique shopping experience`
                  : `استمتع بتجربة تسوق مثيرة وفريدة من نوعها`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
