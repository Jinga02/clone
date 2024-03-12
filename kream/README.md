<!-- @format -->

### 반응형 웹 디자인 미디어 쿼리 분기점

- **PC:** `min-width: 960px`
- **태블릿:** `min-width: 770px`
- **모바일:** `max-width: 769px`

### 페이지별 UI 요구사항

#### 1. 로그인 / 회원가입 페이지 / 이메일 찾기 / 비밀번호 찾기 페이지

- #### 공통 요소

  - **PC:**

    - Header: 있음
    - Footer: 있음

  - **태블릿:**

    - Header: 없음
    - Footer: 페이지에 따라 다름

  - **모바일:**

    - 각 요소의 너비가 화면 너비에 꽉 차게 설정

- #### 페이지별 차이

  - **로그인 / 회원가입:**

    - Footer: 없음

  - **태블릿 / 모바일:**

    - Footer: 있음

#### 2. 스타일 페이지

- **PC:**

  - Header: 있음
  - Footer: 있음

- **태블릿:**

  - StyleNav, StyleTitle : 없음
  - StyleShortCut : flex-start
  - MenuBar : 생김

- **모바일:**

  - StyleSearchBar : 생김
  - StyleNav : 있음
  - StyleNav, StyleShorCut : 가운데 정렬
  - StyleCards : grid-col-2
