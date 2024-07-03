import React from "react";
import "../assets/css/portfolio.css";
import work1 from "../assets/img/work/work-1.jpg";
import work2 from "../assets/img/work/work-2.jpg";
import work3 from "../assets/img/work/work-3.jpg";
import work4 from "../assets/img/work/work-4.jpg";
import work5 from "../assets/img/work/work-5.jpg";
import work6 from "../assets/img/work/work-6.jpg";

const Portfolio = () => {
  const [filter, setFilter] = React.useState("*");

  const handleFilter = (filter) => {
    setFilter(filter);
  };

  const filterClasses = (itemClass) => {
    return filter === "*" || itemClass.includes(filter)
      ? "grid-item " + itemClass + " show"
      : "grid-item " + itemClass + " hide";
  };

  return (
    <div className="vg-page page-portfolio" id="portfolio">
      <div className="container">
        <div className="text-center wow fadeInUp">
          <div className="badge badge-subhead">Portfolio</div>
        </div>
        <h1 className="text-center fw-normal wow fadeInUp">See my work</h1>
        <div
          className="filterable-button py-3 wow fadeInUp"
          data-toggle="selected"
        >
          <button
            className="btn btn-theme-outline selected"
            onClick={() => handleFilter("*")}
          >
            All
          </button>
          <button
            className="btn btn-theme-outline"
            onClick={() => handleFilter("apps")}
          >
            Apps
          </button>
          <button
            className="btn btn-theme-outline"
            onClick={() => handleFilter("template")}
          >
            Template
          </button>
          <button
            className="btn btn-theme-outline"
            onClick={() => handleFilter("ios")}
          >
            IOS
          </button>
          <button
            className="btn btn-theme-outline"
            onClick={() => handleFilter("ui-ux")}
          >
            UI/UX
          </button>
          <button
            className="btn btn-theme-outline"
            onClick={() => handleFilter("graphic")}
          >
            Graphic
          </button>
          <button
            className="btn btn-theme-outline"
            onClick={() => handleFilter("wireframes")}
          >
            Wireframes
          </button>
        </div>
        <div className="gridder my-3">
          <div className={filterClasses("apps wow zoomIn")}>
            <div
              className="img-place"
              data-src={work1}
              data-fancybox
              data-caption="<h5 class='fg-theme'>Mobile Travel App</h5> <p>Travel, Discovery</p>"
            >
              <img src={work1} alt="" />
              <div className="img-caption">
                <h5 className="fg-theme">Mobile Travel App</h5>
                <p>Travel, Discovery</p>
              </div>
            </div>
          </div>
          <div className={filterClasses("template wireframes wow zoomIn")}>
            <div
              className="img-place"
              data-src={work2}
              data-fancybox
              data-caption="<h5 class='fg-theme'>Music App</h5> <p>Musics</p>"
            >
              <img src={work2} alt="" />
              <div className="img-caption">
                <h5 className="fg-theme">Music App</h5>
                <p>Musics</p>
              </div>
            </div>
          </div>
          <div className={filterClasses("apps ios wow zoomIn")}>
            <div
              className="img-place"
              data-src={work3}
              data-fancybox
              data-caption="<h5 class='fg-theme'>Gaming Dashboard</h5> <p>Games, Streaming</p>"
            >
              <img src={work3} alt="" />
              <div className="img-caption">
                <h5 className="fg-theme">Gaming Dashboard</h5>
                <p>Games, Streaming</p>
              </div>
            </div>
          </div>
          <div className={filterClasses("graphic ui-ux wow zoomIn")}>
            <div
              className="img-place"
              data-src={work4}
              data-fancybox
              data-caption="<h5 class='fg-theme'>Drugs Delivery App</h5> <p>Health, Drugs</p>"
            >
              <img src={work4} alt="" />
              <div className="img-caption">
                <h5 className="fg-theme">Drugs Delivery App</h5>
                <p>Health, Drugs</p>
              </div>
            </div>
          </div>
          <div className={filterClasses("apps ios wow zoomIn")}>
            <div
              className="img-place"
              data-src={work5}
              data-fancybox
              data-caption="<h5 class='fg-theme'>Musics Discover</h5> <p>Musics, Dashboard</p>"
            >
              <img src={work5} alt="" />
              <div className="img-caption">
                <h5 className="fg-theme">Musics Discover</h5>
                <p>Musics, Dashboard</p>
              </div>
            </div>
          </div>
          <div className={filterClasses("graphic ui-ux wireframes wow zoomIn")}>
            <div
              className="img-place"
              data-src={work6}
              data-fancybox
              data-caption="<h5 class='fg-theme'>Game Streaming</h5> <p>Games, Streaming</p>"
            >
              <img src={work6} alt="" />
              <div className="img-caption">
                <h5 className="fg-theme">Game Streaming</h5>
                <p>Games, Streaming</p>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Portfolio;
