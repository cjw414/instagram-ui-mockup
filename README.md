# instagram-ui-mockup
HTML, CSS, JavaScript를 활용해 인스타그램 웹 서비스 UI를 목업으로 구현한 미니 프로젝트

## 헤더
- 아이콘과 로고 위치 및 스타일 적용
- flex를 활용한 가로 정렬 및 간격 조절
- CSS 변수 활용으로 색상 및 크기 통일

## 스토리
- 여러 동그란 프로필과 닉네임 표시
- 좌우 드래그 가능
- 스크롤바 숨김 처리 (overflow: hidden + custom scroll)
- flex 또는 grid로 배치

## 게시물
- JavaScript 컴포넌트로 동적 생성
- 각 게시물 구조 동일 (헤더, 이미지, 좋아요/댓글 버튼, 설명)
- CSS 변수 적용 (간격, 색상, 폰트 등)

## 무한 스크롤
- IntersectionObserver 활용
- feed 영역 끝에 도달 시 새 포스트 자동 생성
- 성능 최적화를 위해 throttle/debounce 적용 가능

## 좋아요 기능
- 클릭 시 빨간 하트로 변경
- 상태 유지 (JS로 toggle)
- 애니메이션 적용 가능 (scale, transition)

## 풋터
- 아이콘 배치 완료
- 클릭 가능 느낌 부여 (cursor: pointer)
- 호버 효과 적용 (color/scale 변환)

## 반응형
- 최대 너비 430px
- 중앙 정렬
- flex를 활용한 레이아웃
- 미디어쿼리 적용 가능

## CSS 변수화
- 색상, 크기, 트랜지션 등 변수화

