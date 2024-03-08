/** @format */

import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/templates/Header";
import Footer from "components/templates/Footer";
import "./App.css";
function App() {
  return (
    <>
      <Header />
      <div className="h-full pt-11% ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
