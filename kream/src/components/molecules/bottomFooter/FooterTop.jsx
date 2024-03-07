/** @format */

import Link from "components/atom/Link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";

export default function FooterTop() {
  const linkStyle = "text-sm mx-4";
  const privacyPolicyStyle = "font-bold";
  const iconStyle = "mx-2 text-2xl cursor-pointer";
  return (
    <div className="w-full flex justify-between">
      <div>
        <Link styleName={linkStyle} name="회사소개" url="" />
        <Link styleName={linkStyle} name="인재채용" url="" />
        <Link styleName={linkStyle} name="이용약관" url="" />
        <Link
          styleName={`${linkStyle} ${privacyPolicyStyle}`}
          name="개인정보처리방침"
          url=""
        />
      </div>
      <div className="flex">
        <FaInstagram className={iconStyle} />
        <FaFacebook className={iconStyle} />
        <RiKakaoTalkFill className={iconStyle} />
      </div>
    </div>
  );
}
