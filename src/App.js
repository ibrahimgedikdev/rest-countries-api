import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CountryDetail from "./pages/CountryDetail";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/country/:country_id" element={<CountryDetail />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
