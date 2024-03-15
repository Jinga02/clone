/** @format */

import LoginTitle from "components/molecules/common/LoginTitle";
import SignContent from "components/organisms/signUp/SignContent";
import React from "react";

export default function SignUpTemplates() {
  return (
    <div className="w-400px h-full pt-58px pb-160px mx-auto flex flex-col items-center">
      <LoginTitle name="회원가입" />
      <SignContent />
    </div>
  );
}
