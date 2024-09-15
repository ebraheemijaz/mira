import React, { useContext, useEffect, useState } from "react";
// import about from "../assets/about.jpg";
// import about2 from "../assets/about-2.jpg";
import { DetailsContect } from "./InfoContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

export default function About() {
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
      <section
        id="why-us"
        style={{ margin: "2%" }}
        class="why-us section light-background"
      >
        <div class="container">
          <div class="row gy-4">
            <div
              class="col-lg-12 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="why-box">
                <h3>{details?.lang === "EN" ? "OUR VISION" : "رؤيتنا"}</h3>
                <p style={{ textAlign: "justify" }}>
                  {details?.lang === "EN"
                    ? `To become the leading and first company in the Kingdom and the
                  Gulf Council countries in providing all incorporation
                  materials for small, medium and large projects, whether public
                  sector or private sector`
                    : `أن نصبح الشركة الرائدة والأولى في المملكة و
                  دول مجلس التعاون الخليجي في تقديم كافة خدمات التأسيس
                  مواد للمشروعات الصغيرة والمتوسطة والكبيرة سواء العامة
                  القطاع أو القطاع الخاص`}
                </p>
                <div class="text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="why-us"
        style={{ margin: "2%" }}
        class="why-us section light-background"
      >
        <div class="container">
          <div class="row gy-4">
            <div
              class="col-lg-12 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="why-box">
                <h3>{details?.lang === "EN" ? "OUR MISSION" : "مهمتنا"}</h3>
                <p style={{ textAlign: "justify" }}>
                  {details?.lang === "EN"
                    ? `Our mission is to provide companies in the construction and
                  projects sector with all the basic materials and supplies that
                  contribute to the successful implementation of their projects
                  in accordance with the highest standards of quality and
                  professionalism. We strive to provide comprehensive and
                  reliable solutions that meet the needs of small, medium and
                  large companies, whether in the public or private sector.`
                    : `مهمتنا هي تزويد الشركات في مجال البناء و
                  قطاع المشاريع بكافة المواد والمستلزمات الأساسية التي
                  المساهمة في نجاح تنفيذ مشاريعهم
                  وفقا لأعلى معايير الجودة و
                  الاحتراف. ونحن نسعى جاهدين لتوفير شاملة و
                  حلول موثوقة تلبي احتياجات الشركات الصغيرة والمتوسطة و
                  الشركات الكبيرة سواء في القطاع العام أو الخاص`}
                </p>
                <div class="text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about-us"
        style={{ margin: "2%" }}
        class="why-us section light-background"
      >
        <div class="container">
          <div class="row gy-4">
            <div
              class="col-lg-12 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="why-box">
                <h3>{details?.lang === "EN" ? "WHO WE ARE" : "من نحن"} </h3>
                <p style={{ textAlign: "justify" }}>
                  {details?.lang === "EN"
                    ? `Mira Trading Company was established in 2014 in Jeddah as a
                  starting point in the Kingdom of Saudi Arabia. Mira Trading
                  Company provides projects with all incorporation materials for
                  small, medium and large projects, whether they are public
                  sector or private sector. <br />
                  We also cooperate with trusted international and local
                  companies, which provide products in different categories such
                  as cables, wires, networks, plumbing, cameras, lighting,
                  electrical breakers, mechanics...etc., and this helps in the
                  success of projects.
                `
                    : `تأسست شركة ميرا التجارية في عام 2014 في جدة كشركة
                  نقطة البداية في المملكة العربية السعودية. ميرا للتجارة
                  تقوم الشركة بتزويد المشاريع بجميع المواد التأسيسية الخاصة بها
                  المشاريع الصغيرة والمتوسطة والكبيرة سواء كانت عامة
                  القطاع أو القطاع الخاص.كما أننا نتعاون مع جهات دولية ومحلية موثوقة
                  الشركات التي تقدم منتجات في فئات مختلفة مثل
                  مثل الكابلات والأسلاك والشبكات والسباكة والكاميرات والإضاءة،
                  قواطع كهربائية، ميكانيكا...إلخ، وهذا يساعد في
                  نجاح المشاريع`}
                </p>
                <div class="text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="why-us"
        style={{ margin: "2%" }}
        class="why-us section light-background"
      >
        <div class="container">
          <div class="row gy-4">
            <div
              class="col-lg-12 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="why-box">
                <h3>
                  {details?.lang === "EN" ? "ABOUT COMPANY:" : "عن الشركة"}{" "}
                </h3>
                <p style={{ textAlign: "justify" }}>
                  {details?.lang === "EN"
                    ? `At Mira Project Suppliers we are passionate about providing
                  top quality Electrical and plumbing products with exceptional
                  customer service to our customers. With years of experience in
                  the industry we have established ourselves as a trusted
                  supplier of Electrical and plumbing products.`
                    : `في شركة Mira Project Supply نحن متحمسون لتقديمها
                  منتجات كهربائية وسباكة عالية الجودة مع استثنائية
                  خدمة العملاء لعملائنا. مع سنوات من الخبرة في
                  الصناعة التي أنشأناها أنفسنا كشركة موثوقة
                  مورد المنتجات الكهربائية والسباكة.`}
                </p>
                <div class="text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="clxients" class="clients section">
        <div class="container section-title" data-aos="fade-up">
          <h2>
            {details?.lang === "EN"
              ? "Manufacturing Partners"
              : "شركاء التصنيع"}
          </h2>
          <div style={{ textAlign: details?.lang === "EN" ? "left" : "right" }}>
            <p>
              {details?.lang === "EN"
                ? `We are proud to collaborate with renowned manufacturing partners
              who share our commitment to excellence and quality. Our partners
              include:`
                : `نحن فخورون بالتعاون مع شركاء التصنيع المشهورين
              الذين يشاركوننا التزامنا بالتميز والجودة. شركاؤنا
              يشمل`}
            </p>
            <ul>
              <li>
                <strong>Alfanar:</strong>
                {details?.lang === "EN"
                  ? `A leading manufacturer with a strong
                reputation for producing high-quality products. Their expertise
                and state-of-the-art facilities enable us to deliver exceptional
                products to our customers.`
                  : `الشركة الرائدة مع قوية
                سمعة لإنتاج منتجات عالية الجودة. خبرتهم
                والمرافق الحديثة تمكننا من تقديم خدمات استثنائية
                المنتجات لعملائنا.`}
              </li>
              <li>
                <strong>Al Raed Al Arabi:</strong>
                {details?.lang === "EN"
                  ? `A trusted partner with a long
                history of manufacturing excellence. Their dedication to quality
                and innovation aligns with our values, ensuring our products
                meet the highest standards.`
                  : `شريك موثوق به منذ فترة طويلة
                تاريخ التميز في التصنيع. تفانيهم في الجودة
                ويتوافق الابتكار مع قيمنا، مما يضمن منتجاتنا
                تلبية أعلى المعايير`}
              </li>
              <li>
                <strong>Hylumen:</strong>
                {details?.lang === "EN"
                  ? `A cutting-edge manufacturer at the
                forefront of technology and innovation. Their advanced
                capabilities and commitment to quality enable us to offer our
                customers the latest and best products.`
                  : `الشركة المصنعة المتطورة في
                طليعة التكنولوجيا والابتكار. المتقدمة الخاصة بهم
                القدرات والالتزام بالجودة تمكننا من تقديم ما لدينا
                العملاء أحدث وأفضل المنتجات`}
              </li>
            </ul>
            <p>
              {details?.lang === "EN"
                ? `Through these strategic partnerships, we leverage the strengths of
              each manufacturer to provide our customers with an unparalleled
              range of products and services. Our collaborations are built on
              trust, mutual respect, and a shared passion for excellence.`
                : `ومن خلال هذه الشراكات الاستراتيجية، نستفيد من نقاط القوة
              كل مصنع لتزويد عملائنا بتجربة لا مثيل لها
              مجموعة من المنتجات والخدمات. إن تعاوننا مبني على
              الثقة والاحترام المتبادل والشغف المشترك للتميز.`}
            </p>
          </div>
        </div>

        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row g-0 clients-wrap">
            <div class="col-xl-4 col-md-4 client-logo">
              <img
                style={{ height: "15rem" }}
                src="https://alfanarprojects.com/media/bwmc3udf/alfanar-steel-structures.png"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="col-xl-4 col-md-4 client-logo">
              <img
                style={{ height: "15rem" }}
                src="https://media.licdn.com/dms/image/v2/C4D0BAQEqpjOYWhq4xw/company-logo_200_200/company-logo_200_200/0/1670937273814/al_raed_al_arabi_sa_logo?e=1733961600&v=beta&t=DiJGcn7ePtYw2UQHsDS7CT-lHELFbIYJthGCRaR-K9g"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="col-xl-4 col-md-4 client-logo">
              <img
                style={{ height: "15rem" }}
                src="https://hylumen.com/wp-content/uploads/2021/01/Logo1-High-Res1-1.png"
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

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
            slidesPerView={window.innerWidth < 700 ? 3 : 8}
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
