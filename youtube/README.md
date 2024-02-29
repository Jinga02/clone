```markdown
# Youtube 클론코딩 프로젝트 개요

## API

- `YoutubeClass`: Youtube API와 상호 작용을 담당하는 클래스

## 컴포넌트

### SearchBar

- Youtube 메인 페이지로 이동하는 로고를 포함한 검색 창

### Videos

- 인기 있는 동영상을 보여주는 컴포넌트

### VideoCard

- 받아온 동영상 데이터를 표시하는 카드 형태의 컴포넌트

### RelatedVideos

- 상세 페이지에서 우측에 표시할 관련 동영상을 보여주는 컴포넌트

### ChannelInfo

- 동영상을 게시한 채널의 정보를 표시하는 컴포넌트

## 컨텍스트

- `YoutubeApiContext`: 받아온 Youtube 데이터를 전역적으로 관리하기 위한 컨텍스트

## 페이지

### RootPage

- 검색 바와 Outlet을 포함하는 루트 페이지

### MainPage

- 첫 화면을 보여주는 페이지로, 인기 있는 동영상을 표시함

### DetailPage

- 동영상을 클릭했을 때 이동하는 상세 페이지

### ErrorPage

- 잘못된 URL로 이동했을 때 보여주는 에러 페이지

## 유틸리티
```
