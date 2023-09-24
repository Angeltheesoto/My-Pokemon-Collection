// import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useMyContext } from "./context/MyContext";

// Pages
import Home from "./pages/home/Home";
import Test from "./pages/test/Test";
import Test2 from "./pages/test2/Test2";

function App() {
  const { data } = useMyContext();
  // console.log(data);

  return (
    <div className="App">
      {
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/test2" element={<Test2 />} />
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
