/** @format */

import React from "react";

export default function FooterBottom() {
  const pStyle = "text-xs opacity-40";
  return (
    <div className="w-660px ">
      <div className="pt-40px pb-8px whitespace-nowrap">
        <p className="font-bold text-xs ">신한은행 채무지급보증 안내</p>
        <p className={pStyle}>
          당사는 고객님의 현금 결제 금액에 대해 신한은행과 채무지급보증 계약을
          체결하여 안전거래를 보장하고 있습니다. 서비스가입 사실 확인
        </p>
      </div>
      <div className="pt-12px">
        <p className={pStyle}>
          크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본 상품은
          개별판매자가 등록한 상품으로 상품, 상품정보, 거래에 관한 의무와 책임은
          각 판매자에게 있습니다. 단, 이용약관 및 정책, 기타 거래 체결 과정에서
          고지하는 내용 등에 따라 검수하고 보증하는 내용에 대한 책임은
          크림(주)에 있습니다.
        </p>
      </div>
    </div>
  );
}
