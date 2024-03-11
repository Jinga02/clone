/** @format */

import LoginTitle from "components/molecules/loginContent/LoginTitle";
import SignForm from "components/molecules/signUpContent/SignForm";
import React from "react";

export default function SignUpContent() {
  return (
    <div className=" flex flex-col justify-center items-center">
      <LoginTitle />
      <SignForm />
    </div>
  );
}
