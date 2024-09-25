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
import YogaExercise from "./pages/exercise/YogaExercise";
import DisplayNutrition from "./components/DisplayNutrition";
import DisplayChildren from "./components/DisplayChildren";
import DisplayAerobic from "./components/DisplayAerobic";
import DisplayPilate from "./components/DisplayPilate";
import CalculateBMI from "./components/CalculateBMI";
import TopHeader from "./components/TopHeader";
import YogaDisplay from "./components/YogaDisplay";
import AcneDisease from "./components/padietric/AcneDisease";

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
        <Route path="/exercise/yogaExercise" element={<YogaExercise />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/displayDisease" element={<DisplayDisease />} />
        <Route path="/acneDisease" element={<AcneDisease />} />
        <Route path="/displayPilate" element={<DisplayPilate />} />
        <Route path="/displayAerobic" element={<DisplayAerobic />} />
        <Route path="/yogaDisplay" element={<YogaDisplay />} />
        <Route path="/displayChildren" element={<DisplayChildren />} />
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
