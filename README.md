# REVINCI portfolio MVP

React + TypeScript + Vite로 만든 독립형 일러스트레이터 포트폴리오입니다. 작품 필터, 프로젝트 상세 화면, 반응형 메뉴, 문의 폼의 브라우저 유효성 검사와 완료 화면을 포함합니다.

## 프로젝트 구조

```text
public/
  images/                 # 실제 작품·브랜드 이미지
  _redirects              # Netlify 새로고침 라우팅
src/
  components/             # Header, Hero, Portfolio, PortfolioCard, Services, About, Contact, Footer
  content/
    site.json             # 대표 이미지, 소개글, SNS/이메일
    projects/             # 작품별 JSON 파일
  data/
    projects.ts           # 작품 JSON을 읽고 정렬
    site.ts               # 사이트 JSON을 읽고 이메일 링크 생성
  pages/
    Home.tsx
    WorkCategory.tsx      # WORK의 세 분류별 독립 페이지
    ProjectDetail.tsx
  services/
    inquiry.ts            # 향후 이메일/API 전송 연결 지점
  App.tsx
  main.tsx
  styles.css
  hero.css                 # 검은 첫 화면과 헤더/작품 분류 화면 스타일
vercel.json               # Vercel 새로고침 라우팅
.pages.yml                # Pages CMS 편집 화면 설정
```

## 콘텐츠 바꾸기

- 작품 추가/삭제: `src/content/projects/`에서 작품별 JSON 파일을 수정합니다. `id`는 URL에 쓰이므로 작품마다 고유한 영문 소문자와 하이픈을 사용하세요. `order`의 작은 숫자가 먼저 표시됩니다. `cardImage`는 목록용 작은 이미지, `image`는 상세용 큰 이미지입니다.
- WORK 메뉴의 Illustration, Vector & Assets, Brand Projects는 각각 `/work/illustration`, `/work/vector-assets`, `/work/brand-projects`에 열립니다. 작품의 기본 분류는 JSON의 `category`로, 두 분류에 모두 노출할 때는 선택 항목 `alsoIn`으로 지정합니다. 로고·패키지 디자인은 Brand Projects를 기본 분류로 사용합니다.
- 대표 이미지, 작가 소개 이미지, 소개글, SNS/이메일: `src/content/site.json`에서 수정합니다. 이메일 주소는 한 곳만 바꾸면 Footer의 Email 링크에도 반영됩니다. Behance는 프로필 주소가 확인되지 않아 작품 페이지로 연결했습니다.
- 새 이미지는 `public/images/`에 넣고 `/images/파일명`으로 경로를 지정합니다.

현재 작품 이미지와 제목은 제공된 기존 REVINCI Studio 사이트 압축파일을 바탕으로 넣었습니다. 해당 사이트에 연도가 없는 작업은 `—`로 표시했습니다. 추가 이미지는 자료에 별도 이미지가 확인되지 않아 비워 두었고, 나중에 쉽게 추가할 수 있습니다. `public/images/`에 새 파일을 넣고 데이터의 경로를 수정하면 교체됩니다.

## 브라우저에서 콘텐츠 수정하기

이 저장소는 [Pages CMS](https://pagescms.org/docs/quick-start/) 설정 파일 `.pages.yml`을 포함합니다. GitHub 저장소 소유자가 Pages CMS에 로그인하고 GitHub App을 **이 저장소에 한정해** 설치하면 작품 추가/삭제, 이미지 업로드, 소개글과 링크 수정을 입력 화면에서 할 수 있습니다. 저장하면 GitHub 파일이 변경되며, Vercel에 Git 연결이 되어 있다면 자동 배포됩니다. 외부 앱 연결은 아직 수행되지 않았습니다.

Pages CMS는 콘텐츠 편집용입니다. 레이아웃과 스타일을 바꾸려면 React 컴포넌트와 `src/styles.css`, `src/hero.css`를 수정해야 합니다.

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
