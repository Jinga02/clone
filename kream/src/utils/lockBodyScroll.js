/** @format */

// scrollControl.js

const lockBodyScroll = (isOpen) => {
  document.body.style.overflow = isOpen ? "hidden" : ""; // 모달이 열릴 때는 overflow를 hidden으로, 닫힐 때는 초기 상태로 설정
};

export default lockBodyScroll;
