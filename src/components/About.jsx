import React, { useContext } from "react";
// import about from "../assets/about.jpg";
// import about2 from "../assets/about-2.jpg";
import { DetailsContect } from "./InfoContext";

export default function About() {
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
                <h3>Our vision</h3>
                <p style={{ textAlign: "justify" }}>
                  To become the leading and first company in the Kingdom and the
                  Gulf Council countries in providing all incorporation
                  materials for small, medium and large projects, whether public
                  sector or private sector.
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
                <h3>Our mission</h3>
                <p style={{ textAlign: "justify" }}>
                  Our mission is to provide companies in the construction and
                  projects sector with all the basic materials and supplies that
                  contribute to the successful implementation of their projects
                  in accordance with the highest standards of quality and
                  professionalism. We strive to provide comprehensive and
                  reliable solutions that meet the needs of small, medium and
                  large companies, whether in the public or private sector.
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
                <h3>Who we are: </h3>
                <p style={{ textAlign: "justify" }}>
                  Mira Trading Company was established in 2014 in Jeddah as a
                  starting point in the Kingdom of Saudi Arabia. Mira Trading
                  Company provides projects with all incorporation materials for
                  small, medium and large projects, whether they are public
                  sector or private sector. <br />
                  We also cooperate with trusted international and local
                  companies, which provide products in different categories such
                  as cables, wires, networks, plumbing, cameras, lighting,
                  electrical breakers, mechanics...etc., and this helps in the
                  success of projects.
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
                <h3>About Company: </h3>
                <p style={{ textAlign: "justify" }}>
                  At Mira Project Suppliers we are passionate about providing
                  top quality Electrical and plumbing products with exceptional
                  customer service to our customers. With years of experience in
                  the industry we have established ourselves as a trusted
                  supplier of Electrical and plumbing products.
                </p>
                <div class="text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="clxients" class="clients section">
        <div class="container section-title" data-aos="fade-up">
          <h2>Manufacturing Partners</h2>
          <div style={{ textAlign: "left" }}>
            <p>
              We are proud to collaborate with renowned manufacturing partners
              who share our commitment to excellence and quality. Our partners
              include:
            </p>
            <ul>
              <li>
                <strong>Alfanar:</strong> A leading manufacturer with a strong
                reputation for producing high-quality products. Their expertise
                and state-of-the-art facilities enable us to deliver exceptional
                products to our customers.
              </li>
              <li>
                <strong>Al Raed Al Arabi:</strong> A trusted partner with a long
                history of manufacturing excellence. Their dedication to quality
                and innovation aligns with our values, ensuring our products
                meet the highest standards.
              </li>
              <li>
                <strong>Hylumen:</strong> A cutting-edge manufacturer at the
                forefront of technology and innovation. Their advanced
                capabilities and commitment to quality enable us to offer our
                customers the latest and best products.
              </li>
            </ul>
            <p>
              Through these strategic partnerships, we leverage the strengths of
              each manufacturer to provide our customers with an unparalleled
              range of products and services. Our collaborations are built on
              trust, mutual respect, and a shared passion for excellence.
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
    </>
  );
}
