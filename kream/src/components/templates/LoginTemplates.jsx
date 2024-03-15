/** @format */

import React from "react";
import LoginForm from "components/molecules/login/LoginForm";
import LoginMenu from "components/molecules/login/LoginMenu";
import LoginSocial from "components/molecules/login/LoginSocial ";
import LoginTitle from "components/molecules/common/LoginTitle";

export default function LoginTemplates() {
  return (
    <div className="w-pc_login_width h-full p-pc_main_content flex flex-col items-center justify-center ">
      <LoginTitle name="kream" subName="kicks rule everything around me" />
      <LoginForm />
      <LoginMenu />
      <LoginSocial />
    </div>
  );
}
