/** @format */

import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "components/templates/Header";
import Footer from "components/templates/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="section">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
