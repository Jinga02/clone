/** @format */

import { Outlet } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import YoutubeApiProvider from "./context/YoutubeContextApi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <YoutubeApiProvider>
        <SearchBar />
        <QueryClientProvider client={queryClient}>
          <Outlet />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}

export default App;
