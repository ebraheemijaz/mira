import React, { useContext } from "react";
import img from "../assets/img/hero.jpg";
import { DetailsContect } from "./InfoContext";

export default function Hero() {
  const details = useContext(DetailsContect);
  return (
    <section id="hero" class="hero section light-background">
      <div
        id="hero-carousel"
        class="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div class="carousel-item active">
          <img src={img} alt="" />
          <div class="carousel-container">
            <div>
              <h2>
                We are <span>professional</span>
              </h2>
              <p style={{ color: "white" }}>
                Mira Project Suppliers is a leading Electrical and Plumbing
                project supplier dedicated to provide top quality products and
                exceptional customer service to private and public sector
                companies. With years of experience in the industry we have
                established ourselves as a trusted supplier of Electrical and
                plumbing projects.
              </p>
              <a href="#contact" class="btn-get-started">
                Contact US
              </a>
            </div>
          </div>
        </div>

        {/* <div class="carousel-item">
          <img src="assets/img/hero-carousel/hero-carousel-2.jpg" alt="">
          <div class="carousel-container">
            <div>
              <h2>At vero eos et accusamus</h2>
              <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut.</p>
              <a href="#featured-services" class="btn-get-started">Get Started</a>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <img src="assets/img/hero-carousel/hero-carousel-3.jpg" alt="">
          <div class="carousel-container">
            <div>
              <h2>Temporibus autem quibusdam</h2>
              <p>Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.</p>
              <a href="#featured-services" class="btn-get-started">Get Started</a>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <img src="assets/img/hero-carousel/hero-carousel-4.jpg" alt="">
          <div class="carousel-container">
            <div>
              <h2>Nam libero tempore</h2>
              <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum.</p>
              <a href="#featured-services" class="btn-get-started">Get Started</a>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <img src="assets/img/hero-carousel/hero-carousel-5.jpg" alt="">
          <div class="carousel-container">
            <div>
              <h2>Magnam aliquam quaerat</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <a href="#featured-services" class="btn-get-started">Get Started</a>
            </div>
          </div>
        </div> */}

        <a
          class="carousel-control-prev"
          href="#hero-carousel"
          role="button"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon bi bi-chevron-left"
            aria-hidden="true"
          ></span>
        </a>

        <a
          class="carousel-control-next"
          href="#hero-carousel"
          role="button"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon bi bi-chevron-right"
            aria-hidden="true"
          ></span>
        </a>

        <ol class="carousel-indicators"></ol>
      </div>
    </section>
    // <section id="hero" class="hero section light-background">
    //   <div class="container">
    //     <div class="row gy-4 justify-content-center justify-content-lg-between">
    //       <div class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
    //         <h1 data-aos="fade-up">{details.banner.text}</h1>
    //         <p data-aos="fade-up" data-aos-delay="100">
    //           We are a team of experts, buying and selling top-quality phones
    //           just for you."
    //         </p>
    //         <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
    //           <a href="#contact" class="btn-get-started">
    //             Contact Us
    //           </a>
    //         </div>
    //       </div>
    //       <div class="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
    //         <img src={img} class="img-fluid animated" alt="" />
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
