/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "pages/ErrorPage";
import LoginPage from "pages/LoginPage";
import SignUpPage from "pages/SignUpPage";
import StylePage from "pages/StylePage";
import MyProfilePage from "pages/MyProfilePage";
import DetailStylePage from "pages/DetailStylePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LoginPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signUp", element: <SignUpPage /> },
      { path: "style", element: <StylePage /> },
      { path: "style/:userId", element: <DetailStylePage /> },
      { path: "profile/:useId", element: <MyProfilePage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
