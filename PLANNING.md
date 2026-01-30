# 달하늘 공연 페이지 기획서

## 1. 프로젝트 개요

| 항목 | 내용 |
|------|------|
| 프로젝트명 | 달하늘 (moonsky) |
| 목적 | 직장인밴드 "달하늘" 공연 홍보용 임시 원페이지 |
| 호스팅 | Vercel |
| 저장소 | GitHub (moonsky) |

## 2. 기술 스택

| 구분 | 선택 | 사유 |
|------|------|------|
| 프레임워크 | Next.js (App Router) | Vercel 최적 호환, 정적 배포 용이 |
| 언어 | TypeScript | 타입 안정성 |
| 스타일링 | Tailwind CSS | 빠른 UI 구성, 반응형 처리 용이 |
| 배포 | Vercel | GitHub 연동 자동 배포 |

## 3. 페이지 구조

싱글 페이지(SPA) 방식으로, 상단 내비게이션 클릭 시 해당 섹션으로 스크롤 이동합니다.

```
┌─────────────────────────────────────────┐
│              Navigation                 │
│  PROFILE │ MEMBER │ SET LIST │ CONTACT  │
├─────────────────────────────────────────┤
│                                         │
│            #1 PROFILE                   │
│         밴드 단체사진 영역               │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│            #2 MEMBER                    │
│     8명 멤버 프로필 카드 그리드           │
│     (사진 + 이름 + 파트)                 │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│           #3 SET LIST                   │
│        공연곡 리스트 (번호순)             │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│          #4 CONTACT US                  │
│       연락처 / SNS / 문의 폼             │
│                                         │
├─────────────────────────────────────────┤
│              Footer                     │
│         © 달하늘 2025                    │
└─────────────────────────────────────────┘
```

## 4. 섹션별 상세

### 4.1 Navigation

- 페이지 상단 고정 (sticky)
- 밴드명 "달하늘" 로고/텍스트 (좌측)
- 섹션 링크 4개 (우측): PROFILE / MEMBER / SET LIST / CONTACT US
- 클릭 시 smooth scroll 이동
- 모바일: 햄버거 메뉴로 전환

### 4.2 PROFILE 섹션

- 밴드 단체사진 1장 (히어로 이미지)
- 사진 위 또는 아래에 밴드명, 공연 정보(날짜/장소) 텍스트 오버레이 가능
- 이미지: `/public/images/profile/` 경로에 저장

### 4.3 MEMBER 섹션

- 8명 멤버 프로필 카드
- 카드 구성: 프로필 사진 + 이름 + 담당 파트(악기/보컬)
- 레이아웃: 그리드 배치
  - 데스크톱: 4열 × 2행
  - 태블릿: 3열 또는 2열
  - 모바일: 2열 또는 1열
- 이미지: `/public/images/members/` 경로에 저장

### 4.4 SET LIST 섹션

- 공연곡 리스트를 번호순으로 표시
- 각 곡 정보: 순번 / 곡명 / 아티스트(원곡자)
- 심플한 리스트 또는 카드 형태

### 4.5 CONTACT US 섹션

- 방향 후보 (추후 확정):
  - (A) SNS 링크 모음 (Instagram, YouTube 등)
  - (B) 이메일 연락처 표시
  - (C) 간단한 문의 폼 (이름 + 이메일 + 메시지)
  - (D) 위 조합
- 현재 미정이므로 최소한으로 구성하고 추후 업데이트

### 4.6 Footer

- 저작권 표시: © 2025 달하늘
- 간단한 부가 정보 (선택)

## 5. 데이터 구조

콘텐츠는 별도 JSON/TS 파일로 관리하여, 코드 수정 없이 데이터만 교체 가능하게 합니다.

```typescript
// src/data/members.ts
interface Member {
  id: number;
  name: string;        // 이름
  part: string;        // 담당 파트 (예: "기타", "보컬")
  image: string;       // 프로필 이미지 경로
}

// src/data/setlist.ts
interface Song {
  order: number;       // 순번
  title: string;       // 곡명
  artist: string;      // 원곡 아티스트
}

// src/data/band.ts
interface BandInfo {
  name: string;        // "달하늘"
  profileImage: string;
  performance: {
    date: string;      // 공연 날짜
    venue: string;     // 공연 장소
    description?: string;
  };
}
```

## 6. 프로젝트 디렉토리 구조

```
moonsky/
├── public/
│   └── images/
│       ├── profile/        # 단체사진
│       └── members/        # 멤버 프로필 사진 (8장)
├── src/
│   ├── app/
│   │   ├── layout.tsx      # 루트 레이아웃
│   │   ├── page.tsx        # 메인 페이지
│   │   └── globals.css     # 글로벌 스타일
│   ├── components/
│   │   ├── Navigation.tsx   # 상단 내비게이션
│   │   ├── Profile.tsx      # PROFILE 섹션
│   │   ├── Member.tsx       # MEMBER 섹션
│   │   ├── SetList.tsx      # SET LIST 섹션
│   │   ├── Contact.tsx      # CONTACT US 섹션
│   │   └── Footer.tsx       # 푸터
│   └── data/
│       ├── band.ts          # 밴드 기본 정보
│       ├── members.ts       # 멤버 데이터
│       └── setlist.ts       # 셋리스트 데이터
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── PLANNING.md
```

## 7. 디자인 방향

- 톤: 공연 홍보에 맞는 감각적이고 깔끔한 느낌
- 배경: 다크 계열 (밴드/공연 분위기)
- 폰트: 한글 지원 웹폰트 (Pretendard 또는 Noto Sans KR)
- 반응형: 모바일 우선(mobile-first) 설계

## 8. 배포 흐름

```
코드 작성 → GitHub push → Vercel 자동 빌드/배포
```

- Vercel 프로젝트와 GitHub 저장소 연결
- `main` 브랜치 push 시 자동 배포
- 커스텀 도메인은 필요 시 추후 연결

## 9. 남은 결정 사항

| 항목 | 상태 | 비고 |
|------|------|------|
| 단체사진 이미지 | 미확보 | 이미지 파일 필요 |
| 멤버 프로필 사진 8장 | 미확보 | 이미지 파일 필요 |
| 멤버 이름/파트 정보 | 미입력 | 데이터 필요 |
| 셋리스트 곡 목록 | 미입력 | 데이터 필요 |
| CONTACT US 방향 | 미정 | A~D 중 선택 필요 |
| 공연 날짜/장소 | 미입력 | 데이터 필요 |
| 디자인 컬러/톤 상세 | 미정 | 레퍼런스 있으면 공유 |
