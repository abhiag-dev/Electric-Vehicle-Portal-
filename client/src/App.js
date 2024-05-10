import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home"; // Import your Home component
import Products from "./product";
import Navbar from "./Navbar";
import Demo from "./demo";
import Faq from "./faq";
// Import other components as needed

function App() {
  return (
    <Router>
      <div>
        {/* Navigation bar or menu can be added here */}

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="/Home"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="/product"
            element={
              <>
                <Navbar />
                <Products />
              </>
            }
          />
          <Route
            path="/demo"
            element={
              <>
                <Navbar />
                <Demo />
              </>
            }
          />
          <Route
            path="/faq"
            element={
              <>
                <Navbar />
                <Faq />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
