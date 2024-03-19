/** @format */

import Footer from "components/templates/Footer";
import Header from "components/templates/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="w-full h-full ">
      <Header />
      <div className="w-full h-80%">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
