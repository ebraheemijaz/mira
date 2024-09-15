import React, { useContext, useState } from "react";
// import logo from "../assets/logo.png";
import InfoContext, { DetailsContect } from "./InfoContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function Header() {
  const details = useContext(DetailsContect);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [nestedOpen, setNestedOpen] = useState("");
  const [nested1Open, setNested1Open] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header
      id="header"
      class={`header sticky-top ${openMobileMenu ? "mobile-nav-active" : ""}`}
    >
      <div class="topbar d-flex align-items-center">
        <div class="container d-flex justify-content-center justify-content-md-between">
          <div class="contact-info d-flex align-items-center">
            <i class="bi bi-envelope d-flex align-items-center">
              <a href={`mailto:${details?.email}`}>{details?.email}</a>
            </i>
            <i class="bi bi-phone d-flex align-items-center ms-4">
              <span>{details?.phone}</span>
            </i>
          </div>
          <div class="social-links d-none d-md-flex align-items-center">
            <span
              onClick={() => {
                details.setLang(details.lang === "EN" ? "AR" : "EN");
              }}
            >
              {details.lang === "EN" ? "AR" : "EN"}
            </span>
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
          <a href="/" class="logo d-flex align-items-center">
            {/*<h1 class="sitename">{details?.website_name}</h1> */}
            <img
              href
              src={` ${window.location.protocol}//${window.location.host}/file.png`}
            ></img>
          </a>

          <nav id="navmenu" class="navmenu">
            <ul>
              {details.navbar.map((each) => (
                <li class="dropdown">
                  <a
                    href={"#"}
                    onClick={() => {
                      setNestedOpen(each);
                    }}
                  >
                    <span>
                      {details?.lang === "EN" ? each.name : each.nameAR}
                    </span>
                    {each?.child && each?.child?.length !== 0 && (
                      <i class="bi bi-chevron-down toggle-dropdown"></i>
                    )}
                  </a>
                  <ul className={nestedOpen === each ? "dropdown-active" : ""}>
                    {each?.child &&
                      each?.child?.map((eachSubCat) => (
                        <li class="dropdown">
                          <a
                            href={
                              eachSubCat?.child?.length === 0
                                ? `/product/${eachSubCat.id}`
                                : "#"
                            }
                            onClick={() => {
                              setNested1Open(eachSubCat);
                            }}
                          >
                            <span
                              dangerouslySetInnerHTML={{
                                __html:
                                  details?.lang === "EN"
                                    ? eachSubCat.name
                                    : eachSubCat.nameAR,
                              }}
                            ></span>
                            {eachSubCat?.child &&
                              eachSubCat?.child?.length !== 0 && (
                                <i class="bi bi-chevron-down toggle-dropdown"></i>
                              )}
                          </a>
                          <ul
                            className={
                              nested1Open === eachSubCat
                                ? "dropdown-active"
                                : ""
                            }
                          >
                            {eachSubCat?.child &&
                              eachSubCat.child.map((eachproduct) => (
                                <li
                                  onClick={() => {
                                    setOpenMobileMenu(false);
                                  }}
                                >
                                  <Link
                                    to={`/product/${eachproduct.id}`}
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        details?.lang === "EN"
                                          ? eachproduct.name
                                          : eachproduct.nameAR,
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
                <a
                  href="#about-us"
                  onClick={(sectionID = "about-us") => {
                    const isHomePage = location.pathname === "/";
                    if (!isHomePage) {
                      navigate("/");
                      setTimeout(() => {
                        navigate(`/#${sectionID}`);
                        const section = document.getElementById(sectionID);
                        if (section) {
                          section.scrollIntoView({ behavior: "smooth" });
                        }
                      }, 200);
                    } else {
                      navigate(`/#${sectionID}`);
                      const section = document.getElementById(sectionID);
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }
                  }}
                >
                  {details?.lang === "EN" ? "About Us" : "معلومات عنا"}
                </a>
              </li>
              <li>
                <a href="#contact">
                  {details?.lang === "EN" ? " Contact Us" : "اتصل بنا"}
                </a>
              </li>
              <li className="languagebutton d-none">
                <a href="#">
                  <span
                    onClick={() => {
                      details.setLang(details.lang === "EN" ? "AR" : "EN");
                    }}
                  >
                    {details.lang === "EN" ? "AR" : "EN"}
                  </span>
                </a>
              </li>
            </ul>
            <i
              class={`mobile-nav-toggle d-xl-none bi bi-${
                openMobileMenu ? "x" : "list"
              }`}
              onClick={() => {
                setOpenMobileMenu((prev) => !prev);
              }}
            ></i>
          </nav>
        </div>
      </div>
    </header>
  );
}
