# MATEMATE

한국공학대학교(TIP) 기숙사 **룸메이트·메이트 매칭** 웹 서비스입니다.  
체크리스트 기반으로 생활 습관을 비교하고, 나에게 맞는 룸메이트를 추천·매칭할 수 있습니다.

**미리보기:** [https://yheun03.github.io/matemate/](https://yheun03.github.io/matemate/)

---

## 주요 기능

| 영역 | 설명 |
|------|------|
| **인증** | Google / Naver 소셜 로그인 |
| **매칭** | 내 정보·룸메이트 정보 입력, 추천, 결과 확인 |
| **메인** | 체크리스트, 매칭 결과, 알림·공지 |
| **채팅** | 메이트와 1:1 채팅 |
| **게시판** | 기숙사·매칭 관련 게시글 |
| **설정** | 회원 정보, 알림, 이용약관 |

---

## 기술 스택

- **프론트엔드:** HTML, SCSS/CSS, JavaScript, jQuery, Swiper
- **백엔드·인프라:** Firebase (Hosting, Firestore, Functions, Storage)
- **배포:** GitHub Pages (`public` 폴더)

---

## 프로젝트 구조

```
matemate/
├── public/                 # 정적 웹 리소스 (GitHub Pages 배포 대상)
│   ├── index.html          # 페이지 목록 (미리보기용)
│   ├── html/               # 화면별 HTML
│   │   ├── auth/           # 로그인
│   │   ├── main/           # 메인·알림·공지
│   │   ├── match/          # 매칭
│   │   ├── chat/           # 채팅
│   │   ├── board/          # 게시판
│   │   ├── user/           # 설정
│   │   └── ...
│   └── src/assets/         # CSS, JS, 이미지, 아이콘
├── functions/              # Firebase Cloud Functions
├── firebase.json           # Firebase Hosting 등 설정
├── firestore.rules         # Firestore 보안 규칙
└── package.json
```

---

## 시작하기

### 요구 사항

- [Node.js](https://nodejs.org/) (LTS 권장)
- (선택) [Firebase CLI](https://firebase.google.com/docs/cli) — Firebase Hosting 배포 시

### 설치

```bash
git clone https://github.com/yheun03/matemate.git
cd matemate
npm install
```

### 로컬에서 화면 보기

`public` 폴더를 정적 서버로 띄우면 됩니다.

```bash
npx serve public
```

브라우저에서 `http://localhost:3000` (또는 터미널에 표시된 주소)로 접속합니다.  
페이지 목록은 `/index.html`, 앱 메인 화면은 `/html/main/main.html` 입니다.

---

## 배포

### GitHub Pages

`public` 폴더 내용을 `gh-pages` 브랜치에 올립니다.

```bash
npm run deploy
```

배포 후 사이트: **https://yheun03.github.io/matemate/**

> 저장소 **Settings → Pages** 에서 Source가 `Deploy from a branch` · 브랜치 `gh-pages` · 폴더 `/ (root)` 인지 확인하세요.

### Firebase Hosting (운영)

```bash
firebase login
firebase deploy --only hosting
```

`firebase.json` 에서 루트(`/`)는 `html/main/main.html` 로 연결됩니다.

---

## 화면 목록 (미리보기)

GitHub Pages 루트의 [index.html](public/index.html) 에서 전체 HTML 페이지로 이동할 수 있습니다.

- 인증: `html/auth/`
- 메인: `html/main/`
- 매칭: `html/match/`
- 채팅: `html/chat/`
- 게시판: `html/board/`
- 설정: `html/user/`

---

## 라이선스

[MIT](LICENSE) · Copyright (c) 2025 team-matemate
