import React from "react";
import Header from "./parts/Header";
import Header2 from "./parts/Header2";
import Cards2 from "./parts/Cards2";
import AboutUs from "./parts/AboutUs";
import Categories from "./parts/Categories";
import CategoriesCard from "./parts/CategoriesCard";
import Newsletter from "./parts/NewsLetter";
import Footer from "./parts/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Header2 />
      <Cards2 />
      <AboutUs />
      <Categories />
      <CategoriesCard />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
