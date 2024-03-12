/** @format */

import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/templates/Header";
import Footer from "components/templates/Footer";
import "./App.css";

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  // const [footerheight, setFooterHeight] = useState(0);
  // useEffect(() => {
  //   console.log(headerHeight);
  // }, [headerHeight]);
  return (
    <>
      <Header setHeaderHeight={setHeaderHeight} />
      <div
        className="1w-full"
        style={{
          paddingTop: headerHeight === 0 ? "0px" : headerHeight,
          // paddingBottom: footerheight === 0 ? "0px" : footerheight,
        }}
      >
        <Outlet />
      </div>
      <Footer />
      {/* <Footer setFooterHeight={setFooterHeight} /> */}
    </>
  );
}

export default App;
