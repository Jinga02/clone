/** @format */

import Footer from "components/templates/Footer";
import Header from "components/templates/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
