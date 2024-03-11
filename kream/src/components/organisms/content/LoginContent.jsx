/** @format */

import React from "react";
import LoginForm from "components/molecules/loginContent/LoginForm";
import LoginMenu from "components/molecules/loginContent/LoginMenu";
import LoginSocial from "components/molecules/loginContent/LoginSocial ";
import LoginTitle from "components/molecules/loginContent/LoginTitle";

export default function LoginContent() {
  return (
    <div className="h-full p-pc_main_content flex flex-col items-center justify-center ">
      <LoginTitle />
      <LoginForm />
      <LoginMenu />
      <LoginSocial />
    </div>
  );
}
