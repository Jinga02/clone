/** @format */

import React from "react";

export default function FooterBottom() {
  const spanStyle = "my-10";
  const pStyle = "text-xs opacity-40 my-3";
  return (
    <div className="w-70%">
      <p className={pStyle}>
        크림 주식회사 · 대표 김창욱사업자등록번호 : 570-88-01618{" "}
      </p>
      <p className={pStyle}>
        사업자정보확인통신판매업 : 제 2021-성남분당C-0093호 사업장소재지 :
        경기도 성남시 분당구 분당내곡로 131 판교테크원 타워1, 8층호스팅 서비스 :
        네이버 클라우드 ㈜
      </p>
      <p className={pStyle}>신한은행 채무지급보증 안내</p>
      <p className={pStyle}>
        당사는 고객님의 현금 결제 금액에 대해 신한은행과 채무지급보증 계약을
        체결하여 안전거래를 보장하고 있습니다.서비스가입 사실 확인
      </p>
      <p className={pStyle}>
        크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본 상품은
        개별판매자가 등록한 상품으로 상품, 상품정보, 거래에 관한 의무와 책임은
        각 판매자에게 있습니다. 단, 이용약관 및 정책, 기타 거래 체결 과정에서
        고지하는 내용 등에 따라 검수하고 보증하는 내용에 대한 책임은 크림(주)에
        있습니다.
      </p>
    </div>
  );
}
