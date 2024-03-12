/** @format */

import Button from "components/atom/Button";
import Link from "components/atom/Link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";

export default function FooterTop() {
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
        </div>
      </div>
      <div className="w-660px">
        <div class="relative inline-block text-left">
          <div>
            <button
              type="button"
              class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              사업자
              <svg
                class="-mr-1 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div
            class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div class="py-1" role="none">
              <a
                href="#"
                class="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                Account settings
              </a>
              <a
                href="#"
                class="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                Support
              </a>
              <a
                href="#"
                class="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-2"
              >
                License
              </a>
              <form method="POST" action="#" role="none">
                <button
                  type="submit"
                  class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-3"
                >
                  Sign out
                </button>
              </form>
            </div>
          </div>
        </div>
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
