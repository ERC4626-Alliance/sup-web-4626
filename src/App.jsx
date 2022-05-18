/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";

import HeroSection from "./components/HeroSection";
import Resources from "./components/Resources";
import Table from "./components/Table";

export default class App extends React.Component {
  render() {
    return (
      <div className="bg-white">
        <Header />
        <main>
          <HeroSection />
          <Resources />
          <Table />
          <FAQ />
        </main>
        <Footer />
      </div>
    );
  }
}
