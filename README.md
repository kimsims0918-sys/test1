# REVINCI portfolio MVP

React + TypeScript + Vite로 만든 독립형 일러스트레이터 포트폴리오입니다. 작품 필터, 프로젝트 상세 화면, 반응형 메뉴, 문의 폼의 브라우저 유효성 검사와 완료 화면을 포함합니다.

## 프로젝트 구조

```text
public/
  images/                 # 교체 가능한 SVG 플레이스홀더와 실제 작품 이미지
  _redirects              # Netlify 새로고침 라우팅
src/
  components/             # Header, Hero, Portfolio, PortfolioCard, Services, About, Contact, Footer
  data/
    projects.ts           # 작품 목록 및 상세 내용
    site.ts               # 대표 이미지, 소개글, SNS/이메일 링크
  pages/
    Home.tsx
    ProjectDetail.tsx
  services/
    inquiry.ts            # 향후 이메일/API 전송 연결 지점
  App.tsx
  main.tsx
  styles.css
vercel.json               # Vercel 새로고침 라우팅
```

## 콘텐츠 바꾸기

- 작품 추가/삭제: `src/data/projects.ts`의 `projects` 배열을 수정합니다. `id`는 URL에 쓰이므로 작품마다 고유한 영문 소문자와 하이픈을 사용하세요. `additionalImages`에 상세 이미지 경로를 추가할 수 있습니다.
- 대표 이미지: 새 파일을 `public/images/`에 넣고 `src/data/site.ts`의 `heroImage`를 `/images/파일명`으로 바꿉니다.
- 작가 사진/작업 이미지: 같은 폴더에 넣고 `src/data/site.ts`의 `aboutImage`를 바꿉니다.
- 소개글: `src/data/site.ts`의 `about` 배열을 수정합니다.
- SNS/이메일: `src/data/site.ts`의 `socialLinks`와 `contactEmail`을 수정합니다. 현재 Instagram, Behance는 각 플랫폼의 첫 화면을 가리키는 임시 링크이며, 이메일 주소도 예시입니다. 공개 전에 실제 계정과 주소로 바꾸세요.

현재 작품 제목과 이미지도 레이아웃 검증용 예시입니다. `public/images/`의 SVG를 같은 이름의 실제 이미지로 교체하거나 `projects.ts`의 `image` 경로를 수정하면 됩니다.

## 로컬 실행

Node.js 20.19 이상과 npm이 필요합니다. 프로젝트 폴더에서:

```bash
npm install
npm run dev
```

터미널에 표시된 주소(기본 `http://localhost:5173`)를 브라우저에서 엽니다. `pnpm`을 사용한다면 `pnpm install`과 `pnpm dev`도 가능합니다.

## 빌드와 미리보기

```bash
npm run build
npm run preview
```

빌드 결과는 `dist/`에 생성됩니다. 일반 정적 웹호스팅에는 `dist/`를 올리고, `/project/...` 경로를 `index.html`로 돌리는 SPA fallback을 설정하세요.

## Vercel / Netlify 배포

Git 저장소에 이 프로젝트를 올린 뒤 Vercel 또는 Netlify에서 저장소를 연결합니다. 프레임워크는 Vite, 빌드 명령은 `npm run build`, 출력 폴더는 `dist`로 설정합니다. `vercel.json`과 `public/_redirects`가 상세 URL의 직접 접속/새로고침을 처리합니다.

## 문의 폼의 현재 동작

필수값과 이메일 형식, 상세 내용 길이를 검사한 뒤 완료 문구를 보여줍니다. **현재 문의 내용은 전송·저장되지 않습니다.** 실제 접수 기능을 붙일 때 `src/services/inquiry.ts`의 `submitInquiry`를 Formspree, EmailJS 또는 자체 API 요청으로 교체하세요. 공개 전에 이 연결과 실제 연락처를 준비해야 외주 문의를 받을 수 있습니다.
