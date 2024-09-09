import React, { useContext } from "react";
// import logo from "../assets/logo.png";
import InfoContext, { DetailsContect } from "./InfoContext";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function Header() {
  const details = useContext(DetailsContect);

  return (
    <header id="header" class="header sticky-top">
      <div class="topbar d-flex align-items-center">
        <div class="container d-flex justify-content-center justify-content-md-between">
          <div class="contact-info d-flex align-items-center">
            <i class="bi bi-envelope d-flex align-items-center">
              <a href="mailto:contact@example.com">{details?.email}</a>
            </i>
            <i class="bi bi-phone d-flex align-items-center ms-4">
              <span>{details?.phone}</span>
            </i>
          </div>
          <div class="social-links d-none d-md-flex align-items-center">
            {/* <a href="#" class="twitter">
              <i class="bi bi-twitter-x"></i>
            </a>
            <a href="#" class="facebook">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#" class="instagram">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#" class="linkedin">
              <i class="bi bi-linkedin"></i>
            </a> */}
          </div>
        </div>
      </div>

      <div class="branding d-flex align-items-center">
        <div class="container position-relative d-flex align-items-center justify-content-between">
          <a href="/" class="logo d-flex align-items-center me-auto">
            <h1 class="sitename">{details?.website_name}</h1>
          </a>

          <nav id="navmenu" class="navmenu">
            <ul>
              {details.navbar.map((each) => (
                <li class="dropdown">
                  <a href={"#"}>
                    <span>{each.name}</span>
                    {each?.child && each?.child?.length !== 0 && (
                      <i class="bi bi-chevron-down toggle-dropdown"></i>
                    )}
                  </a>
                  <ul>
                    {each?.child &&
                      each?.child?.map((eachSubCat) => (
                        <li class="dropdown">
                          <a
                            href={
                              eachSubCat?.child?.length === 0
                                ? `/product/${eachSubCat.id}`
                                : "#"
                            }
                          >
                            <span
                              dangerouslySetInnerHTML={{
                                __html: eachSubCat.name,
                              }}
                            ></span>
                            {eachSubCat?.child &&
                              eachSubCat?.child?.length !== 0 && (
                                <i class="bi bi-chevron-down toggle-dropdown"></i>
                              )}
                          </a>
                          <ul>
                            {eachSubCat?.child &&
                              eachSubCat.child.map((eachproduct) => (
                                <li>
                                  <Link
                                    to={`/product/${eachproduct.id}`}
                                    dangerouslySetInnerHTML={{
                                      __html: eachproduct.name,
                                    }}
                                  ></Link>
                                </li>
                              ))}
                          </ul>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
              <li>
                <a href="#services">About Us</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
            <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </div>
    </header>
  );
}
