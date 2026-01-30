# MOONSKY - 달하늘 밴드 공연 페이지

## 프로젝트 개요
- 직장인밴드 "달하늘(MOONSKY)" 공연 홍보 싱글페이지 웹사이트
- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- 정적 배포 (`output: "export"`)

## 디자인 방향
- **밤하늘 몽환적** 테마: 깊은 남색(#070b1a) 기반, 골드 액센트(#c9b87a), 별빛 효과
- 폰트: Cormorant Garamond (디스플레이/세리프) + Noto Sans KR (본문)
- 글래스모피즘, 노이즈 텍스처, 그라디언트 메시 배경
- 반짝이는 별 배경 (Starfield 컴포넌트)

## 레이아웃 규칙
- **모바일 전용 페이지**: max-width 430px, 데스크탑에서도 모바일 사이즈만 보이고 좌우는 여백으로 비움
- 데스크탑 반응형 불필요 (모바일 뷰만 유지)

## 네비게이션
- 탭 기반 페이지 전환 방식 (스크롤이 아닌 탭 클릭으로 섹션 전환)
- Framer Motion `AnimatePresence` + `layoutId`로 페이지 전환 애니메이션
- `PageView` 컴포넌트가 활성 탭 상태 관리, 방향에 따른 슬라이드 전환
- 좌우 스크롤 가능한 pill 형태 탭 (햄버거 메뉴 아님)
- Spring 물리 기반 네비게이션 pill 인디케이터

## 섹션 구성
1. **Profile (히어로)**: 풀스크린, 달 오브 글로우, 순차 fade-in 애니메이션, 공연 정보 카드
2. **Member**: 3x3 그리드 (8명 + 중앙 로고), 파트별 이모지 아이콘, hover 효과
3. **SetList**: 넘버링 + 디바이더 카드 리스트, hover 시 재생 아이콘
4. **Contact**: 인스타그램 카드 (@moonsky_band)
5. **Footer**: 달 로고 + 저작권

## 데이터 구조
- `src/data/band.json` - 밴드 정보, 공연 일정
- `src/data/members.json` - 멤버 8명 정보 (이름, 파트, 사진)
- `src/data/setlist.json` - 공연 곡 8곡 (제목, 아티스트)

## 작업 규칙
- **작업 후 반드시 Chrome DevTools MCP로 결과 확인**: 코드 변경 후 항상 브라우저에서 실제 렌더링 결과를 스크린샷/스냅샷으로 직접 확인할 것. 눈으로 보지 않은 작업은 완료로 간주하지 않는다.

## 개발 참고
- Chrome DevTools MCP 설정: `claude mcp add chrome-devtools --scope user npx chrome-devtools-mcp@latest`
- dev 서버: `npm run dev` (포트 3000)
