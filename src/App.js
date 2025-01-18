import React from "react";
import ScrollReveal from "./scrollReveal.jsx"; // Import the ScrollReveal component
import About from "./components/about";
import Badges from "./components/badges";
import Certifications from "./components/certifications";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Home from "./components/header";
import Portfolio from "./components/portfolio";
import Service from "./components/services";
import { Element } from "react-scroll";

const App = () => {
  return (
    <div className="App" style={{ background: "white" }}>
      <ScrollReveal>
        <Home />
      </ScrollReveal>
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <Service />
      </ScrollReveal>
      <ScrollReveal>
        <Badges />
      </ScrollReveal>
      <Element>
        <ScrollReveal>
          <Certifications />
        </ScrollReveal>
      </Element>

      <ScrollReveal>
        <Contact />
      </ScrollReveal>
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </div>
  );
};

export default App;
