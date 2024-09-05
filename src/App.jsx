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
import DisplayDisease from "./components/DisplayDisease";
import Nutrition from "./pages/Nutrition";
import AerobicExercise from "./pages/exercise/AerobicExercise";
import PilatesExcercise from "./pages/exercise/PilatesExcercise";
import ChildrenExercise from "./pages/exercise/ChildrenExercise";
import YogaAsans from "./pages/exercise/YogaAsans";
import DisplayExercise from "./components/DisplayExercise";
import DisplayNutrition from "./components/DisplayNutrition";
import CalculateBMI from "./components/CalculateBMI";
import TopHeader from "./components/TopHeader";

function App() {
  return (
    <Router>
      <TopHeader />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/disease/maleDisease" element={<MaleDisease />} />
        <Route path="/disease/femaleDisease" element={<FemaleDisease />} />
        <Route path="/disease/childrenDisease" element={<ChildrenDisease />} />
        <Route path="/exercise/aerobicExercise" element={<AerobicExercise />} />
        <Route
          path="/exercise/childrenExercise"
          element={<ChildrenExercise />}
        />
        <Route path="/exercise/pilateExercise" element={<PilatesExcercise />} />
        <Route path="/exercise/yogaAsans" element={<YogaAsans />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/displayDisease" element={<DisplayDisease />} />
        <Route path="/displayExercise" element={<DisplayExercise />} />
        <Route path="/displayBMI" element={<DisplayNutrition />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/calculateBMI" element={<CalculateBMI />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
