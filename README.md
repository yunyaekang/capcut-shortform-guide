# 캡컷으로 숏폼 만들기 - 왕초보 따라하기

스마트폰 앱 조작이 서툰 소상공인/상인분들을 위한 캡컷(CapCut) 숏폼 영상 만들기
왕초보 따라하기 모바일 웹앱이에요. 한 손에는 캡컷 앱, 한 손에는 이 웹앱을 켜고
번갈아 보면서 그대로 따라 누르시면 돼요.

> STEP 1~17까지 전체 단계와 완료 화면, 홍보 문구 예시 모음까지 모두 완성되어 있어요.

## 로컬에서 실행해보기

```bash
npm install
npm run dev
```

브라우저에서 나온 주소로 들어간 뒤, 개발자 도구를 열어 모바일 화면 크기로 보면
실제 사용 화면과 똑같이 보여요.

## 프로덕션 빌드

```bash
npm run build
```

`dist` 폴더에 배포용 파일이 만들어져요.

## 실제 캡컷 스크린샷으로 교체하기

지금은 각 단계 화면에 회색 placeholder 박스가 보여요. 실제 캡컷 화면 사진으로
바꾸고 싶으시면 아래 순서대로 해주세요.

1. 캡컷 앱에서 각 단계에 해당하는 화면을 스마트폰으로 캡처해주세요. (세로로
   긴 화면 그대로, 9:16 비율을 추천드려요)
2. 캡처한 이미지 파일을 `public/screenshots/` 폴더 안에 넣어주세요.
   예: `public/screenshots/step-01.png`
3. `src/data/steps.ts` 파일을 열어서, 사진을 넣은 단계에 `screenshot` 한 줄만
   추가해주세요.

```ts
{
  id: 1,
  title: '캡컷 앱 열기',
  // ...
  screenshot: '/screenshots/step-01.png', // 이 줄을 추가해주세요
  highlight: { top: 50, left: 50, size: 26, label: '여기를 톡!' },
},
```

4. 이제 그 단계에는 placeholder 대신 실제 캡컷 사진이 보여요. 사진이 없는
   단계는 지금처럼 계속 placeholder로 보여요.
5. 노란색 원(하이라이트)이 실제 버튼 위치랑 안 맞으면, 같은 단계의
   `highlight`에 있는 `top`(위에서부터 %)과 `left`(왼쪽에서부터 %) 숫자를
   조금씩 바꿔가면서 버튼 위로 맞춰주세요. 0에 가까울수록 위/왼쪽,
   100에 가까울수록 아래/오른쪽이에요.

## GitHub 연동 후 Netlify로 배포하는 방법 (왕초보용)

`vibe-coding-master-2gi` 사이트를 배포했던 방법과 똑같아요. 아래 순서 그대로
따라 하시면 돼요.

### 1단계. GitHub에 코드 올리기

터미널(명령어 입력 창)을 열고, 이 프로젝트 폴더 안에서 아래 명령어를 하나씩
순서대로 입력해주세요.

```bash
git init
git add .
git commit -m "feat: 캡컷 숏폼 만들기 왕초보 가이드 앱"
git branch -M main
git remote add origin https://github.com/내깃허브아이디/capcut-shortform-guide.git
git push -u origin main
```

> `내깃허브아이디` 부분은 본인의 GitHub 아이디로 바꿔주세요. GitHub에서
> 미리 `capcut-shortform-guide`라는 이름의 새 저장소(Repository)를 하나
> 만들어 두셔야 해요.

### 2단계. Netlify와 GitHub 연결하기

1. https://app.netlify.com 에 접속해서 로그인해주세요.
2. "Add new site" 버튼을 톡 눌러주세요.
3. "Import from Git"를 선택해주세요.
4. GitHub 계정을 연결하고, 방금 올린 `capcut-shortform-guide` 저장소를
   찾아서 선택해주세요.

### 3단계. 빌드 설정 확인하기

아래 내용이 자동으로 채워져 있을 거예요. 그대로 두고 확인만 해주세요.

- Build command: `npm run build`
- Publish directory: `dist`

(이 설정은 프로젝트 안에 있는 `netlify.toml` 파일에 이미 적혀 있어서
자동으로 채워져요.)

### 4단계. 배포하기

"Deploy site" 버튼을 톡 눌러주세요. 1~2분 기다리면 배포가 끝나고,
`https://무작위이름.netlify.app` 같은 주소가 만들어져요. 이 주소로 들어가면
누구나 스마트폰에서 바로 이 앱을 사용할 수 있어요.

### 5단계 (선택). 홈 화면에 앱처럼 추가하기

배포된 주소를 스마트폰 브라우저로 열고, 공유 버튼 → "홈 화면에 추가"를
누르면 진짜 앱처럼 아이콘이 생겨요.

## 폴더 구조

```
public/
  screenshots/            실제 캡컷 스크린샷을 넣는 폴더
src/
  components/
    IntroScreen.tsx       시작 화면
    StepScreen.tsx         단계별 학습 화면 (STEP 1~17)
    ProgressBar.tsx         상단 진행률 바
    CompletionScreen.tsx  완료 화면 (체크리스트 다운로드)
    PhraseLibrary.tsx       홍보 문구 예시 모음
    HelpAccordion.tsx      하단 고정 도움말 버튼 + 자주 묻는 질문
  data/
    steps.ts               단계별 안내 내용 (STEP 1~17)
    faqs.ts                 자주 묻는 질문 내용
    phrases.ts              업종별 홍보 문구 예시
  lib/
    checklistImage.ts       완성 체크리스트 이미지 생성
  App.tsx
  main.tsx
```
