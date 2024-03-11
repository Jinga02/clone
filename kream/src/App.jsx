/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/templates/Header";
import Footer from "components/templates/Footer";
import "./App.css";

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerheight, setFooterHeight] = useState(0);

  return (
    <>
      <Header setHeaderHeight={setHeaderHeight} />
      <div
        style={{
          paddingTop: headerHeight,
          paddingBottom: footerheight,
          paddingRight: "5%",
          paddingLeft: "5%",
        }}
      >
        <Outlet />
      </div>
      <Footer setFooterHeight={setFooterHeight} />
    </>
  );
}

export default App;
