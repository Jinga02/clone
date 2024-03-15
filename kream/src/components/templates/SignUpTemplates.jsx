/** @format */

import LoginTitle from "components/molecules/login/LoginTitle";
import SignForm from "components/molecules/signUp/SignForm";
import React from "react";

export default function SignUpTemplates() {
  return (
    <div className=" flex flex-col justify-center items-center">
      <LoginTitle />
      <SignForm />
    </div>
  );
}
