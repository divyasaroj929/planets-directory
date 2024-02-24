import React from "react";
import { Routes, Router, Route } from "react-router-dom";
import "./App.css";
import PlanetList from "./components/PlanetList";
import PlanetCard from "./components/ResidentDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="planetsdirectory/" element={<PlanetList />} />
        <Route path="/residents/:residentId" element={<PlanetCard />} />
      </Routes>
    </div>
  );
}

export default App;
