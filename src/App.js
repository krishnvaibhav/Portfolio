import About from "./components/about";
import Badges from "./components/badges";
import Certifications from "./components/certifications";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Home from "./components/header";
import Portfolio from "./components/portfolio";
import Service from "./components/services";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Service />
      {/* <Portfolio /> */}
      <Badges />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
