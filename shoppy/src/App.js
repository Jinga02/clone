/** @format */

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "components/templates/Header";
import { AuthContextProvider } from "context/Authcontext";
import { Outlet } from "react-router-dom";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Header />
        <div className="w-full h-80% px-50px">
          <Outlet />
        </div>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
