import React, { useContext } from "react";
import { DetailsContect } from "./InfoContext";

export default function Footer() {
  const details = useContext(DetailsContect);

  return (
    <footer id="contact" class="footer light-background">
      <div class="container footer-top">
        <div class="row gy-3">
          <div class="col-lg-3 col-md-6 d-flex">
            <div class="address">
              <h4>
                {details?.lang === "EN" ? "Address" : "عنوان"}{" "}
                <a
                  href="https://maps.app.goo.gl/57nQcReYUCyWTY1ZA"
                  target="_blank"
                >
                  Google maps
                </a>
              </h4>
              <p>
                <a
                  href="https://maps.app.goo.gl/57nQcReYUCyWTY1ZA"
                  target="_blank"
                >
                  {details?.address}
                </a>
              </p>
              <p></p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 d-flex">
            <div>
              <h4>{details?.lang === "EN" ? "Contact" : "تواصل"}</h4>
              <p>
                <strong>{details?.lang === "EN" ? "Phone:" : "هاتف"}</strong>{" "}
                <span>{details?.phone}</span>
                <br />
                <strong>
                  {details?.lang === "EN" ? "Email:" : "بريد إلكتروني"}
                </strong>{" "}
                <span>{details?.email}</span>
                <br />
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 d-flex">
            <div>
              <h4>
                {details?.lang === "EN"
                  ? "Certificates and Approvals"
                  : "الشهادات والموافقات"}{" "}
              </h4>
              <p>
                {details?.lang === "EN"
                  ? "Commercial Registration from Ministry of Commerce"
                  : "السجل التجاري من وزارة التجارة"}
                <strong> (Cr: 4030231400)</strong>
              </p>
              <p>
                VAT REGISTRATION General Authority of Zakat and tax
                <strong> (311179707200003)</strong>
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <h4>{details?.lang === "EN" ? "Follow Us" : "تابعنا"} </h4>
            <div class="social-links d-flex">
              <a
                href="https://www.facebook.com/profile.php?id=61566214222608"
                target="_blank"
                class="facebook"
              >
                <i class="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/105097113/admin/page-posts/published/"
                target="_blank"
                class="linkedin"
              >
                <i class="bi bi-linkedin"></i>
              </a>
              <a
                href="https://wa.me/966532942055"
                target="_blank"
                class="whatsapp"
              >
                <i class="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="container copyright text-center mt-4">
        <p>
          {details?.lang === "EN"
            ? "This website Developed by"
            : "هذا الموقع تم تطويره بواسطة"}{" "}
          <a href="https://ftssolution.tech/" target="_blank">
            FTS Tech
          </a>{" "}
          +92 310 5860079
        </p>
      </div>
    </footer>
  );
}
