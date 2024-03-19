<!-- @format -->

# 쇼핑몰 shoppy

# Atomic Desgin 적용

#### Atoms

Atoms는 UI의 기본 구성 요소로서 가장 작은 단위를 나타냅니다. 이러한 구성 요소들은 일반적으로 단순하고 재사용 가능합니다. 각 Atom은 독립적으로 존재할 수 있습니다.

- Button: 클릭 가능한 단추를 나타냅니다.
- ImageButton: 이미지와 함께 표시되는 클릭 가능한 단추를 나타냅니다.
- Input: 텍스트나 데이터를 입력하는 데 사용되는 입력 필드를 나타냅니다.
- ImageInput: 이미지와 함께 표시되는 입력 필드를 나타냅니다.
- CheckBox: 선택 상자를 나타냅니다.
- Title: 제목을 나타냅니다.
- ImageLink: 이미지와 링크가 결합된 요소를 나타냅니다.
- Link: 텍스트 링크를 나타냅니다.

#### Molecules

Molecules는 Atoms의 조합으로 더 복잡한 UI 구성 요소를 나타냅니다. 이러한 구성 요소들은 여러 개의 Atom을 포함하고 있으며, 일반적으로 단일한 기능을 수행합니다.

예를 들어,

LoginForm: Input과 Button Atom을 포함하여 로그인 기능을 수행하는 단일한 구성 요소입니다.
SearchBar: Input과 Button Atom을 포함하여 검색 기능을 수행하는 구성 요소입니다.
ImageGallery: 여러 개의 ImageLink Atom으로 이루어진 이미지 갤러리를 나타냅니다.

#### Organisms

Organisms는 Molecules와 다른 Organisms의 조합으로 더 큰 단위의 UI 구성 요소를 나타냅니다. 이러한 구성 요소들은 실제로 사용자 인터페이스의 일부를 형성합니다.

예를 들어,

Header: 로고, 메뉴, 검색 바 등으로 이루어진 페이지 상단의 헤더입니다.
Sidebar: 네비게이션 메뉴, 로그인 폼 등으로 이루어진 페이지의 사이드바입니다.
UserProfile: 프로필 이미지, 사용자 정보, 로그아웃 버튼 등으로 이루어진 사용자 프로필 영역입니다.

#### Templates

Templates는 실제 페이지의 레이아웃을 나타냅니다. 여러 Organisms의 조합으로 이루어지며, 페이지의 구조와 레이아웃을 결정합니다.

예를 들어,

LoginPageTemplate: 로그인 폼이 들어있는 페이지의 레이아웃을 정의합니다.
DashboardTemplate: 대시보드 페이지의 레이아웃으로, 헤더, 사이드바, 콘텐츠 영역 등을 포함합니다.
이러한 구성을 통해 UI를 재사용 가능한 구성 요소들로 세분화하여 개발하고, 복잡한 UI를 간단한 구성 요소들로 조합하여 구축할 수 있습니다. 이는 유지 보수 및 확장에 용이하며, 일관된 디자인과 사용자 경험을 제공하는 데 도움이 됩니다.

# 구현 순서

## 1 단계 router header 만들기

- Shoppy 로고 클릭 시 root로 이동 <Home>
- Products 클릭 시 /product로 이동 <AllProducts>
  - /products/new <NewProduct>
  - /products/:id <ProductDetail>
- Carts 클릭 시 /carts로 이동 <MyCart>
- Login 클릭 시 /login로 이동 <Login>
