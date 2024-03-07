/** @format */

import React from "react";
import LoginForm from "components/molecules/LoginForm";
import LoginMenu from "components/molecules/LoginMenu";
import LoginSocial from "components/molecules/LoginSocial ";
import LoginTitle from "components/molecules/LoginTitle";

export default function LoginContent() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <LoginTitle />
      <LoginForm />
      <LoginMenu />
      <LoginSocial />
    </div>
  );
}
