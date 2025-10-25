import React from "react";
import { Router, Routes, Route,} from "react-router-dom";
import Home from "./Pages/Home";
import FindService from "./Pages/FindService";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find" element={<FindService />} />
      </Routes>
  );
}

export default App;
