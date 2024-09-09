import React from "react";

export default function Choose() {
  return (
    <section id="services" class="cards section">
      <div class="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>we provide best professional services</p>
      </div>

      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div class="card-item">
              <span>01</span>
              <h4>
                <a href="" class="stretched-link">
                  Fast charging
                </a>
              </h4>
              <p>
                Express shipping for orders +10,000 Saudi riyals for all
                categories except cables and wires within Jeddah and Riyadh
              </p>
            </div>
          </div>

          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div class="card-item">
              <span>02</span>
              <h4>
                <a href="" class="stretched-link">
                  Secure payment methods
                </a>
              </h4>
              <p>
                We are committed to providing the highest level of quality and
                satisfaction to our customers.
              </p>
            </div>
          </div>

          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div class="card-item">
              <span>03</span>
              <h4>
                <a href="" class="stretched-link">
                  Technical support around the clock
                </a>
              </h4>
              <p>Enjoy an exciting and unique shopping experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
