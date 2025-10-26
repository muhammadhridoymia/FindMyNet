import React from "react";
import {  Routes, Route,} from "react-router-dom";
import Home from "./Pages/Home";
import FindService from "./Pages/FindService";
import ApplyForm from "./Pages/ApplyForm";
import About from "./Pages/About";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find" element={<FindService />} />
        <Route path="/apply" element={<ApplyForm />} />
        <Route path="/about" element={<About />} />
      </Routes>
  );
}

export default App;
