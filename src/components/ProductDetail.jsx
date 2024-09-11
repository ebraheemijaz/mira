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
                <a href="/">{details?.lang === 'EN' ? "Home" :"المنزل"}
                </a>
              </li>
              <li class="current">
              {details?.lang === 'EN' ? product?.name : product?.nameAR}
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
                <h3>{details?.lang === 'EN' ? "Images" :"صور"}</h3>
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
              <h4 style={{ color: "black" }}>{details?.lang === 'EN' ? "Description" :"وصف"}</h4>
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
                  Plumbing Fixtures - Complete Your Plumbing System Essential
                  Products for a Functional and Comfortable Space
                </p>

                <h4 style={{ color: "black" }}>Electric Water Heaters</h4>
                <ul>
                  <li>
                    <strong>Reliable Hot Water Solutions:</strong> Efficient and
                    long-lasting electric water heaters
                  </li>
                </ul>

                <h4 style={{ color: "black" }}>Faucets and Sinks</h4>
                <ul>
                  <li>
                    <strong>Stylish and Functional Fixtures:</strong> For
                    kitchens and bathrooms
                  </li>
                </ul>

                <h4 style={{ color: "black" }}>Toilets and Bidets</h4>
                <ul>
                  <li>
                    <strong>Hygienic and Water-Efficient Options:</strong> For a
                    comfortable and eco-friendly experience
                  </li>
                </ul>

                <h4 style={{ color: "black" }}>Showers and Bathtubs</h4>
                <ul>
                  <li>
                    <strong>Relaxing and Rejuvenating Fixtures:</strong> For the
                    ultimate bathing experience
                  </li>
                </ul>

                <h4 style={{ color: "black" }}>Drainage Solutions</h4>
                <ul>
                  <li>
                    <strong>
                      Effective and Easy-to-Install Drainage Products:
                    </strong>{" "}
                    For a hassle-free plumbing system
                  </li>
                </ul>

                <h4 style={{ color: "black" }}>Benefits</h4>
                <ul>
                  <li>
                    <strong>Convenience:</strong> Complete your plumbing system
                    with essential fixtures
                  </li>
                  <li>
                    <strong>Comfort:</strong> Enjoy a functional and comfortable
                    living space
                  </li>
                  <li>
                    <strong>Style:</strong> Enhance your space with stylish and
                    modern fixtures
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
