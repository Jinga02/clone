<!-- @format -->

# KREAM 클론코딩

## 개요

## 필수 기능

1. 회원가입

- 이메일 가입만 지원
- 간편로그인 미지원
- 이메일 주소(메일 도메인 adcapsule.co.kr로 제한), 비밀번호 및 필수동의, 휴대폰 번호(추가), 선택동의 항목만 받음

2. 로그인/로그아웃

- 아이디/비밀번호 로그인
- 로그인 후 요청 화면으로 이동
- 로그아웃 시 홈(메인이 없으므로 style이 홈 대체)으로 이동
- 이메일 찾기
- 비밀번호 찾기

3. 마이페이지

- 로그인 정보
- 프로필 관리

4. Style게시판

- 이미지 업로드 포함하는 CRUD(동영상 제외)
  - 해당 기능은 웹에서는 불가, 앱에서만 가능하므로 파일 선택 UI를 웹용으로 별도 디자인 제공 예정
- 태그
- 카테고리(제안 태그, 유형, 스타일)
- 좋아요 기능
- 댓글 기능 CRUD / 대댓글 / 좋아요
- 제외 기능
  - 관심 저장
  - kicks
  - 게시물 공유
  - 프로필 차단
  - 프로필 신고

## 폴더/컴포넌트 구조

- api

- components

  - atom

    - Button
    - Input
    - Link
    - Image
    - Title

  - molecules

    - FormItem
    - TopInner
    - MainInner
    - PageTitle
    - Category
    - Tag

  - organisms
    - Header
    - Main
    - Footer
  - templates

- context

- pages

  - SignUpPage
    - 회원가입 페이지
  - LoginPage(start Page)
    - 로그인 페이지
  - StylePage(Main Page)
    - 스타일 페이지
    - 메인 페이지로 홈 페이지 역할
  - MyPage
    - 내 프로필 페이지

- store(Redux-toolkit 저장소)
- util

## 기술스택

- react
- nextjs
- typescript
- redux toolkit
- react-query
- tailwindcss
- next-auth
- axios
- jest
- pnpm
- prettier
- eslint
