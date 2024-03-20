/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFoundPage from "pages/NotFoundPage";
import HomePage from "pages/HomePage";
import AllProductsPage from "pages/AllProductsPage";
import NewProductPage from "pages/NewProductPage";
import ProductDetailPage from "pages/ProductDetailPage";
import MyCartPage from "pages/MyCartPage";
import LoginPage from "pages/LoginPage";
import ProtectedRoute from "pages/ProtectedRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/product",
        element: <AllProductsPage />,
      },
      {
        path: "/product/new",
        element: (
          <ProtectedRoute requireAdmin>
            <NewProductPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/product/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "/carts",
        element: (
          <ProtectedRoute>
            <MyCartPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
