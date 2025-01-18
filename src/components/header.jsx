import React, { useEffect, useState } from "react";
import "../assets/favicon.ico";
import "../assets/css/themify-icons.css";
import "../assets/css/bootstrap.css";
import "../assets/css/virtual.css";
import "../assets/css/topbar.virtual.css";
import "../assets/vendor/animate/animate.css";
import "../assets/vendor/owl-carousel/owl.carousel.css";
import "../assets/vendor/nice-select/css/nice-select.css";
import "../assets/vendor/fancybox/css/jquery.fancybox.min.css";
import "../assets/css/mobile.css";
import imagePath from "../assets/img/bg_main_2.jpg";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import CodeIcon from "@mui/icons-material/Code";
const Home = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 150, background: "#171925", height: "100%" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <div className="Drawer">
        <li>
          <a href="#home" className="nav-link" data-animate="scrolling">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link" data-animate="scrolling">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#portfolio" className="nav-link" data-animate="scrolling">
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a href="#services" className="nav-link" data-animate="scrolling">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#certifications"
            className="nav-link"
            data-animate="scrolling"
          >
            Certifications
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link" data-animate="scrolling">
            Contact
          </a>
        </li>
      </div>
    </Box>
  );

  return (
    <div
      className="vg-page page-home"
      id="home"
      style={{
        backgroundImage: `url('${imagePath}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Navbar */}
      <div
        className={`navbar navbar-expand-lg navbar-dark ${
          isSticky ? "sticky" : ""
        }`}
      >
        <div className="container">
          <a href="/" className="navbar-brand">
            PORTFOLIO
          </a>
          <div>
            <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#main-navbar"
            aria-expanded="true"
            onClick={toggleDrawer(true)}
          >
            <span className="ti-menu"></span>
          </button>
          <div className="collapse navbar-collapse" id="main-navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a href="#home" className="nav-link" data-animate="scrolling">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link" data-animate="scrolling">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#portfolio"
                  className="nav-link"
                  data-animate="scrolling"
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#services"
                  className="nav-link"
                  data-animate="scrolling"
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#certifications"
                  className="nav-link"
                  data-animate="scrolling"
                >
                  Certifications
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  className="nav-link"
                  data-animate="scrolling"
                >
                  Contact
                </a>
              </li>
            </ul>
            <ul className="nav ml-auto">
              <li className="nav-item">
                <IconButton aria-label="Dark Mode">
                  <CodeIcon />
                </IconButton>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End Navbar */}

      {/* Caption header */}
      <div className="caption-header text-center wow zoomInDown">
        <h5 className="fw-normal">Welcome</h5>
        <h1 className="fw-light mb-4">
          I'm <b>R Krishn Vaibhav</b>
        </h1>
        <div className="badge">Developer / Pentester</div>
      </div>
      {/* End Caption header */}

      <div className="floating-button">
        <span className="ti-mouse"></span>
      </div>
    </div>
  );
};

export default Home;
