import React from "react";
import "./App.css";
import {
  Header,
  HeroSection,
  WhyWeStandOut,
  MOAIPlatformSection,
  OptimizationSolutions,
  PlansAndPricing,
  OurTeam,
  NewsSection,
  Footer,
  ContactModal
} from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="pt-16"> {/* Add padding-top to account for fixed header */}
        <HeroSection />
        <WhyWeStandOut />
        <MOAIPlatformSection />
        <OptimizationSolutions />
        <PlansAndPricing />
        <OurTeam />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;