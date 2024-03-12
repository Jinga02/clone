/** @format */

import React from "react";

import Link from "components/atom/Link";
import Button from "components/atom/Button";

export default function TopHeader() {
  const checkLogin = localStorage.getItem("id");
  return (
    <div className="p-pc_top_header h-pc_top_header_height flex justify-end pr-11 text-xs opacity-40">
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
