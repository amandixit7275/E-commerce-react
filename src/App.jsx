import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Product from "./components/Products/Product";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProduct from "./components/TopProducts.jsx/TopProduct";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
      <TopProduct />
      <Banner />
      <Subscribe />
      <Product />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
