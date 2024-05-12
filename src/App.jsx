import { useState } from "react";
import Competitions from "./Component/Competitions";
import Home from "./Component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./Component/NotFound";
import CompetitionsDetails from "./Component/CompetitionsDetails";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/competition/:competitionId" element={<CompetitionsDetails />} />
          <Route path="/" element={<Home />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
