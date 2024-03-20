/** @format */

import Footer from "components/templates/Footer";
import Header from "components/templates/Header";
import { AuthContextProvider } from "context/Authcontext";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="w-full h-full ">
      <AuthContextProvider>
        <Header />
        <div className="w-full h-80%">
          <Outlet />
        </div>
        <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
