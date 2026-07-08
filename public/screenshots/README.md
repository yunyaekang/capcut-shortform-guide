# 실제 캡컷 스크린샷 넣는 곳

이 폴더에 캡컷 화면을 캡처한 이미지 파일을 넣어주세요.

- 파일 이름: `step-01.png`, `step-02.png` ... `step-17.png` (2자리 숫자, 원하는 이름으로 바꿔도 돼요)
- 권장 비율: 세로로 긴 9:16 (예: 720x1280, 1080x1920)
- 형식: PNG 또는 JPG 모두 가능

파일을 넣은 뒤 `src/data/steps.ts`에서 해당 단계에 `screenshot: '/screenshots/step-01.png'` 한 줄만
추가하면 자동으로 placeholder 대신 실제 스크린샷이 보여요.
