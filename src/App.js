import React from "react";
import "./App.css";
import "./styles/vooinfinito.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";

// Import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Applications from "./components/Applications";
import Portfolio from "./components/Portfolio";
import Differentials from "./components/Differentials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Applications />
        <Portfolio />
        <Differentials />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
