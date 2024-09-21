import React, { useState, useEffect, useContext } from "react";
// import img1 from "../assets/img1.jpg";
// import img2 from "../assets/img2.jpg";
// import img3 from "../assets/img3.jpg";
// import img4 from "../assets/img4.jpg";
import Loader from "./Loader";
// import img from "../assets/img/hero.jpg";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { useParams } from "react-router-dom";
import { DetailsContect } from "./InfoContext";

// {details?.lang === 'EN' ? "" :""}

export default function ProductDetail() {
  const { id } = useParams();
  const details = useContext(DetailsContect);
  const product = details?.product[id];
  return (
    <>
      <div class="page-title" data-aos="fade">
        <div class="container">
          <nav class="breadcrumbs">
            <ol>
              <li>
                <a href="/">{details?.lang === "EN" ? "Home" : "المنزل"}</a>
              </li>
              <li class="current">
                {details?.lang === "EN" ? product?.name : product?.nameAR}
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <section id="portfolio-details" class="portfolio-details section">
        <div class="container">
          <div
            class="isotope-layout"
            data-default-filter="*"
            data-layout="masonry"
            data-sort="original-order"
          >
            <div class="row align-items-center">
              <div class="col-lg-7 portfolio-info">
                <h3>{details?.lang === "EN" ? "Images" : "صور"}</h3>
              </div>
            </div>

            <div
              class="row gy-4 isotope-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {product?.images?.map((eachImg) => (
                <div class="col-lg-2 col-md-2 portfolio-item isotope-item filter-app">
                  <div class="portfolio-content h-100">
                    <img
                      style={{ height: "200px" }}
                      src={`${window.location.protocol}//${window.location.host}/${eachImg}`}
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              ))}
              {/* <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <div class="portfolio-content h-100">
                  <img src={img} class="img-fluid" alt="" />
                </div>
              </div>
              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <div class="portfolio-content h-100">
                  <img src={img} class="img-fluid" alt="" />
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: "5%" }}>
          <div class="col-lg-12 col-md-12">
            <div class="service-item position-relative">
              <div class="icon">
                <i class="fas fa-dna"></i>
              </div>
              <h4 style={{ color: "black" }}>
                {details?.lang === "EN" ? "Description" : "وصف"}
              </h4>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    details?.lang === "EN"
                      ? product?.description
                      : product?.descriptionAR,
                }}
              ></div>
              {/* <div>
                <p>
                  Heavy-Duty Power Cord Extensions Manufactured by Alfanar,
                  Alraed, and Hylumen - Supplied by Mira Project Suppliers
                  Reliable and durable power cord extensions for industrial,
                  commercial, and residential applications.
                </p>

                <h4 style={{ color: "black" }}>Key Features:</h4>
                <ul>
                  <li>
                    High-quality copper conductors for efficient power
                    transmission
                  </li>
                  <li>
                    Durable PVC insulation for enhanced safety and protection
                  </li>
                  <li>Heavy-duty construction for prolonged lifespan</li>
                  <li>Available in various lengths and ampere ratings</li>
                  <li>Compliance with international safety standards</li>
                </ul>

                <h4 style={{ color: "black" }}>Benefits:</h4>
                <ul>
                  <li>Extend power reach without compromising safety</li>
                  <li>Suitable for indoor and outdoor use</li>
                  <li>Easy installation and maintenance</li>
                  <li>Cost-effective solution for power distribution</li>
                </ul>

                <h4 style={{ color: "black" }}>Specifications:</h4>
                <ul>
                  <li>Manufacturer: Alfanar, Alraed, and Hylumen</li>
                  <li>Material: Copper conductor, PVC insulation</li>
                  <li>Length: 3 Meter, 5 Meter, 10 Meter lengths available</li>
                </ul>

                <h4 style={{ color: "black" }}>
                  Why Choose Mira Project Suppliers?
                </h4>
                <ul>
                  <li>Authentic products from renowned manufacturers</li>
                  <li>Competitive pricing</li>
                  <li>Timely delivery</li>
                  <li>Excellent customer support</li>
                </ul>

                <h4 style={{ color: "black" }}>Order Now</h4>
                <ul>
                  <li>
                    and ensure reliable power distribution for your projects!
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
