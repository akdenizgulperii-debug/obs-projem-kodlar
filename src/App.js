import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./home";
import OgrenciLogin from "./ogrencilogin";
import AkademisyenLogin from "./Akademisyenlogin"; // A harfi büyük olarak düzeltildi
import IdariLogin from "./idarilogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ogrenci" element={<OgrenciLogin />} />
        <Route path="/akademisyen" element={<AkademisyenLogin />} />
        <Route path="/idari" element={<IdariLogin />} />
      </Routes>
    </Router>
  );
}

export default App;