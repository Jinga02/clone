/** @format */

import React from "react";

import Link from "components/atom/Link";
import Button from "components/atom/Button";

export default function TopHeader() {
  const checkLogin = localStorage.getItem("id");
  return (
    <div className="flex justify-end pr-11 text-xs">
      <Link url="/style" name="고객센터" />
      <Link url={`profile/${12}`} name="마이페이지" />
      <Link url="" name="관심" />
      <Button name="알림" />
      {checkLogin ? (
        <Button name="로그아웃" />
      ) : (
        <Link url="/login" name="로그인" />
      )}
    </div>
  );
}
