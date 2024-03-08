/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/templates/Header";
import Footer from "components/templates/Footer";
import "./App.css";

function App() {
  const headerHeight = document.getElementById("header");

  return (
    <>
      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
