/** @format */

import React from "react";
import LoginForm from "components/molecules/LoginContent/LoginForm";
import LoginMenu from "components/molecules/LoginContent/LoginMenu";
import LoginSocial from "components/molecules/LoginContent/LoginSocial ";
import LoginTitle from "components/molecules/LoginContent/LoginTitle";

export default function LoginContent() {
  return (
    <div className="w-full h-lvh flex flex-col items-center justify-center">
      <LoginTitle />
      <LoginForm />
      <LoginMenu />
      <LoginSocial />
    </div>
  );
}
