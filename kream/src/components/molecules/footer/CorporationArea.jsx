/** @format */

import Link from "components/atom/Link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";

export default function CorporationArea() {
  const linkStyle = "text-sm mx-4";
  const privacyPolicyStyle = "font-bold";
  const iconStyle = "mx-2 text-2xl cursor-pointer";
  const pStyle = "text-xs opacity-40 my-2 whitespace-nowrap";

  return (
    <div>
      <div className="w-full flex justify-between pb-2 md:flex-col ">
        <div className="md:pb-50px">
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
          <details className="hidden md:flex ">
            <summary>사업자 정보</summary>
            <p>크림 주식회사 · 대표 김창욱</p>
            <p>사업자등록번호 : 570-88-01618 사업자정보확인</p>
            <p>통신판매업 : 제 2021-성남분당C-0093호</p>
            <p>사업장소재지 : 경기도 성남시 분당구</p>
          </details>
        </div>
      </div>
      <div className="w-660px">
        <p className={pStyle}>
          크림 주식회사 · 대표 김창욱 사업자등록번호 : 570-88-01618
          사업자정보확인통신판매업 : 제 2021-성남분당C-0093호 사업장소재지 :
        </p>
        <p className={pStyle}>
          경기도 성남시 분당구 분당내곡로 131 판교테크원 타워1, 8층호스팅 서비스
          : 네이버 클라우드 ㈜
        </p>
      </div>
    </div>
  );
}
