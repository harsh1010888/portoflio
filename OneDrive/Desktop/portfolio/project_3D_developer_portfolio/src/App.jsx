import { BrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { About, Contact, Education, Experience, Hero, Navbar, Works, StarsCanvas, Footer, Skills, Resume, Social } from "./components";
import ViewCounterModule from "./components/ViewCounterModule";
import SimpleViewCounter from "./components/SimpleViewCounter";
import BuyMeCoffee from "./components/BuyMeCoffee";

const Splash = () => (
  <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-primary select-none">
    <h1 className="text-white text-3xl sm:text-5xl font-black tracking-wide mb-4 text-center">
      Welcome to Portfolio
    </h1>
    <p className="text-secondary text-sm sm:text-base tracking-widest uppercase">
      Loading experience...
    </p>
    <div className="mt-10 h-1 w-56 bg-black-200 overflow-hidden rounded">
      <div className="h-full w-full animate-[shimmer_1.4s_linear_infinite] bg-gradient-to-r from-transparent via-white/70 to-transparent" />
    </div>
  </div>
);

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Minimum splash visibility 1.2s to avoid flash; then hide on next frame.
    const timer = setTimeout(() => setShowSplash(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {showSplash && <Splash />}
      <div className={`relative z-0 bg-primary transition-opacity duration-700 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>        
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <SimpleViewCounter />
        <BuyMeCoffee />
        {/* Order: About, (Experience - temporarily disabled), Education, Projects, Resume, Social, Skills */}
        <About />
        {/* <Experience /> */}
        <Education />
        <Works />
        <Resume />
        <Social />
        <Skills />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
