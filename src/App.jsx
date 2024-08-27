import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import ChildrenDisease from "./pages/disease/ChildrenDisease";
import FemaleDisease from "./pages/disease/FemaleDisease";
import MaleDisease from "./pages/disease/MaleDisease";
import HomeRemediesForAcne from "./components/HomeRemediesForAcne";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/disease/maleDisease" element={<MaleDisease />} />
        <Route path="/disease/femaleDisease" element={<FemaleDisease />} />
        <Route path="/disease/childrenDisease" element={<ChildrenDisease />} />
        <Route path="/homeRemedies" element={<HomeRemediesForAcne />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
