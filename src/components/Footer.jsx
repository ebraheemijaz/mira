import React, { useContext } from "react";
import { DetailsContect } from "./InfoContext";

export default function Footer() {
  const details = useContext(DetailsContect);

  return (
    <footer id="footer" class="footer light-background">
      <div class="container footer-top">
        <div class="row gy-3">
          <div class="col-lg-4 col-md-6 d-flex">
            <div class="address">
              <h4>Address</h4>
              <p>{details?.address}</p>
              <p></p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 d-flex">
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
          <div class="col-lg-4 col-md-6 d-flex">
            <div>
              <h4>Certificates and Approvals </h4>
              <p>
                Commercial Registration from Ministry of Commerce
                <strong> (Cr: 4030231400)</strong>
              </p>
              <p>
                VAT REGISTRATION General Authority of Zakat and tax
                <strong> (311179707200003)</strong>
              </p>
            </div>
          </div>
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
