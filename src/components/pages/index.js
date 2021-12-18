import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "../../partials/Layout";
import LandingPage from "../pages/LandingPage";
import Nosotros from "../pages/Nosotros";
import Socios from "../pages/Socios";
import Delegados from "../pages/Delegados";
import Servicios from "../pages/Servicios";
import Contacto from "../pages/Contacto";

export default function Pages() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/"  element={<LandingPage />} />

          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/socios" element={<Socios />} />
          <Route path="/delegados" element={<Delegados />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

      </Layout>
    </Router>
  );
}
