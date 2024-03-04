/** @format */

import { Outlet } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import YoutubeApiProvider from "./context/YoutubeContextApi";

function App() {
  return (
    <>
      <SearchBar />
      <YoutubeApiProvider>
        <Outlet />
      </YoutubeApiProvider>
    </>
  );
}

export default App;
