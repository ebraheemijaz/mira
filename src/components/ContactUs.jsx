import React, { useContext } from "react";
import { DetailsContect } from "./InfoContext";

import { useForm } from "react-hook-form";

let url = "https://hooks.slack.com/services/";
url = url + "T07M2SXL8UF/";
url = url + "B07MEJCCQLD/";
url = url + "JOajLUE59JQLfcBeXW32TTCo";
export default function ContactUs() {
  const details = useContext(DetailsContect);
  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append(
      "payload",
      `{"text": "Name:${data.name}\nEmail:${data.email}\nSubject:${data.subject}\nMessage:${data.message}"}`
    );
    //

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.text(), reset())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <section id="contact" class="contact section">
        <div class="container section-title" data-aos="fade-up">
          <h2>{details?.lang === "EN" ? "Contact" : "اتصال"}</h2>
          <p>
            {details?.lang === "EN"
              ? `For any query contact us`
              : `لأي استفسار اتصل بنا`}
          </p>
        </div>

        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-4">
            <div class="col-lg-4">
              <div
                class="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <i class="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>{details?.lang === "EN" ? "Location" : "موقع"}</h3>
                  <p>{details?.address}</p>
                </div>
              </div>

              <div
                class="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i class="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>{details?.lang === "EN" ? "Call Us" : "اتصل بنا"}</h3>
                  <p>{details?.phone}</p>
                </div>
              </div>

              <div
                class="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <i class="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>
                    {details?.lang === "EN"
                      ? "Email Us"
                      : "راسلنا عبر البريد الإلكتروني"}
                  </h3>
                  <p>{details?.email}</p>
                </div>
              </div>
            </div>

            <div class="col-lg-8">
              <form
                onSubmit={handleSubmit(onSubmit)}
                // action="forms/contact.php"
                // onSubmit={handleSubmit}
                method="post"
                class="php-email-form"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="row gy-4">
                  <div class="col-md-6">
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      class="form-control"
                      placeholder="Your Name"
                    />
                  </div>

                  <div class="col-md-6 ">
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      class="form-control"
                      placeholder="Your Email"
                    />
                  </div>

                  <div class="col-md-12">
                    <input
                      {...register("subject", { required: true })}
                      type="text"
                      class="form-control"
                      placeholder="Subject"
                    />
                  </div>

                  <div class="col-md-12">
                    <textarea
                      {...register("message", { required: true })}
                      class="form-control"
                      rows="6"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <div class="col-md-12 text-center">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">
                      Your message has been sent. Thank you!
                    </div>

                    <button type="submit">
                      {details?.lang === "EN" ? "Send Message" : "أرسل رسالة"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <section id="contact" class="contact section">
        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="mb-5">
            <iframe
              style={{ width: "100%", height: "400px" }}
              // style="width: 100%; height: 400px;"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
              frameborder="0"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
      </section> */}
    </>
  );
}
