import React, { useContext } from "react";
import { DetailsContect } from "./InfoContext";

export default function Footer() {
  const details = useContext(DetailsContect);

  return (
    <footer id="footer" class="footer light-background">
      <div class="container footer-top">
        <div class="row gy-3">
          <div class="col-lg-6 col-md-6 d-flex">
            <div class="address">
              <h4>Address</h4>
              <p>{details?.address}</p>
              <p></p>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 d-flex">
            <div>
              <h4>Contact</h4>
              <p>
                <strong>Phone:</strong> <span>{details?.phone}</span>
                <br />
                <strong>Email:</strong> <span>{details?.email}</span>
                <br />
              </p>
            </div>
          </div>
          {/* <div class="col-lg-4 col-md-6">
            <h4>Follow Us</h4>
            <div class="social-links d-flex">
              <a
                href="https://www.facebook.com/profile.php?id=100064000962202&amp;mibextid=ZbWKwL"
                target="_blank"
                class="facebook"
              >
                <i class="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/isquaregadgetsofficial?igsh=bGVzdnZjbHR5YTE0"
                target="_blank"
                class="instagram"
              >
                <i class="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.tiktok.com/@isquaregadgets?_t=8pY2G2rz6zE&amp;_r=1"
                target="_blank"
                class="tiktok"
              >
                <i class="bi bi-tiktok"></i>
              </a>
            </div>
          </div> */}
        </div>
      </div>
      <div class="container copyright text-center mt-4">
        <p>
          This website Developed by{" "}
          <a href="https://ftssolution.tech/" target="_blank">
            FTS Tech
          </a>{" "}
          +92 310 5860079
        </p>
      </div>
    </footer>
  );
}
