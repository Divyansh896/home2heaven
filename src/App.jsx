import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";
import ScrollToTop from "./components/ScrollToTop"; // import the new component
import OurWorkPage from "./components/OurWorkPage";
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <Testimonials />
            </>
          }
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/our-work" element={<OurWorkPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
