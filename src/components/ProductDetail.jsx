import React, { useState, useEffect, useContext } from "react";
// import img1 from "../assets/img1.jpg";
// import img2 from "../assets/img2.jpg";
// import img3 from "../assets/img3.jpg";
// import img4 from "../assets/img4.jpg";
import Loader from "./Loader";
import img from "../assets/img/hero.jpg";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { useParams } from "react-router-dom";
import { DetailsContect } from "./InfoContext";

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
                <a href="/">Home</a>
              </li>
              <li class="current">{product?.name}</li>
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
                <h3>Images</h3>
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
              <h4 style={{ color: "black" }}>Description</h4>
              <div
                dangerouslySetInnerHTML={{
                  __html: product?.description,
                }}
              ></div>
              {/* <div>
                <p>
                  Plastic Conduit Fittings - Flexible and Corrosion-Resistant
                  Solutions Reliable and Durable Electrical Raceway Systems Our
                  plastic conduit fittings provide a flexible and
                  corrosion-resistant solution for your electrical wiring needs.
                </p>
                <h4 style={{ color: "black" }}>Key Features:</h4>
                <ul>
                  <li>
                    <strong>High-Quality Materials:</strong> Durable plastics
                    for long-lasting use
                  </li>
                  <li>
                    <strong>Corrosion Resistance:</strong> Withstand harsh
                    environments and chemicals
                  </li>
                  <li>
                    <strong>Easy Installation:</strong> Simple and quick
                    connection process
                  </li>
                  <li>
                    <strong>Flexibility:</strong> Range of fittings for various
                    conduit types and sizes
                  </li>
                </ul>

                <h4 style={{ color: "black" }}>Explore Our Collection</h4>
                <ul>
                  <li>
                    <strong>Conduit Bodies:</strong> Connect and branch conduit
                    lines
                  </li>
                  <li>
                    <strong>Couplings:</strong> Join conduit sections with ease
                  </li>
                  <li>
                    <strong>Elbows:</strong> Change direction with 90-degree
                    bends
                  </li>
                  <li>
                    <strong>Adapters:</strong> Transition between different
                    conduit types and sizes
                  </li>
                  <li>
                    <strong>Accessories:</strong> Complete your conduit system
                    with our range of accessories
                  </li>
                </ul>

                <h4 style={{ color: "black" }}>Benefits</h4>
                <ul>
                  <li>
                    <strong>Chemical Resistance:</strong> Withstand exposure to
                    harsh chemicals
                  </li>
                  <li>
                    <strong>UV Resistance:</strong> Withstand outdoor exposure
                  </li>
                  <li>
                    <strong>Low Maintenance:</strong> Resistant to scaling and
                    abrasion
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
