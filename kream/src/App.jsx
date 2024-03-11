/** @format */

import React, { useState } from "react";
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
        className={`w-full h-pc_content_height p-pc_header_hiehgt `}
        // style={{
        //   paddingTop: headerHeight === 0 ? "60px" : headerHeight + 60,
        //   paddingBottom: footerheight === 0 ? "60px" : footerheight,
        //   // paddingRight: "5%",
        //   // paddingLeft: "5%",
        // }}
      >
        <Outlet />
      </div>
      <Footer setFooterHeight={setFooterHeight} />
    </>
  );
}

export default App;
