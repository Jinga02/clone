/** @format */

import React from "react";
import AgreeArea from "../../molecules/signUp/AgreeArea";
import Button from "components/atom/Button";
import { useNavigate } from "react-router-dom";
import SignArea from "components/molecules/signUp/SignArea";
import ShoesArea from "components/molecules/signUp/ShoesArea";

export default function SignContent() {
  const navigate = useNavigate();
  return (
    <form className="w-96">
      <SignArea />
      <ShoesArea />
      <AgreeArea />
      <Button
        styleName="w-full bg-gray my-2 p-4 text-white rounded-xl "
        name="가입하기"
        click={() => navigate("/style")}
      />
    </form>
  );
}
