/** @format */

import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/templates/Header";
import Footer from "components/templates/Footer";
import "./App.css";
function App() {
  // const [headerHeight, setHeaderHeight] = useState(0);

  // useEffect(() => {
  //   const header = document.querySelector("header");
  //   if (header) {
  //     setHeaderHeight(header.offsetHeight);
  //   }
  // }, []);

  return (
    <>
      <Header />
      {/* <div className="section" style={{ marginTop: `${headerHeight}px` }}> */}
      <div className="section">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
