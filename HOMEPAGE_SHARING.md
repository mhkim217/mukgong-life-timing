# 묵공 홈페이지 공유 안내

묵공 주석: 카톡에서 일반 사진 첨부는 사진을 엽니다. 홈페이지로 연결하려면 아래 홈페이지 주소를 메시지에 넣고, 자동으로 만들어지는 링크 미리보기 카드를 사용합니다.

공유 주소: https://mhkim217.github.io/mukgong-life-timing/

공유 제목: 묵공 홈페이지

공유 설명: 앱 소개와 고전연구, 묵공의 연구 소식을 만나보세요.

대표 이미지: `assets/share/mukgong-homepage-card-20261009.png` (PNG, 1730 × 909, 불투명 배경)

작업 승인: 2026-10-09 묵공님이 최종 홍보 이미지의 클릭 연결 작업을 승인하여 공유 설정을 준비했습니다. 앞선 업로드 시도는 도구 실행 요청 거부 응답으로 중단됐고, 구체적인 이유나 GitHub 오류 코드는 제공되지 않았습니다.

대문 `index.html`에 Open Graph 제목·설명·주소·대표 이미지·규격을 등록했습니다. 이미지 주소는 같은 GitHub Pages에서 공개합니다. 실제 클릭 링크로 이미지를 감싼 `homepage-card.html` 홍보 페이지를 추가했습니다. 이미지 전체를 클릭하면 대문으로 이동하며, `카톡에 보낼 주소 복사` 버튼은 홈페이지 주소를 복사합니다. 대문의 화면 구성과 기존 메뉴는 변경하지 않습니다. 카톡의 실제 표시 형식과 캐시는 카카오의 처리에 따릅니다. 이 작업에서 카톡 앱 안의 실제 공유 화면을 검수한 것은 아닙니다.

## 보내는 방법

1. `homepage-card.html`에서 `카톡에 보낼 주소 복사` 버튼으로 주소를 복사한 뒤 카톡의 `나와의 채팅`에 붙여 넣어 먼저 확인합니다.
2. 한글 제목과 홍보 이미지가 포함된 링크 미리보기가 만들어지는지 확인합니다.
3. 미리보기 카드를 눌러 홈페이지가 열리는지 확인한 뒤 지인·단체 채팅에 같은 주소를 보냅니다.

함께 보낼 짧은 문구:

> 묵공 홈페이지에 초대합니다. 앱 소개와 고전연구, 연구소 소식을 만나보세요.

이 구성은 주소 공유용 대표 이미지 설정입니다. 카카오 JavaScript SDK로 전송하는 별도 메시지 템플릿이나 카톡 전용 버튼 API는 구현하지 않았습니다.

참고: [카카오 공식 안내 게시판의 URL 미리보기 설명](https://devtalk.kakao.com/t/url-og-description/143345)

## 이미지 제작 기록

2026-10-09 imagegen으로 홍보 이미지를 제작한 뒤, 묵공님이 제공한 공식 默 로고를 반영하고 큰 영문 제목을 `Mukgong Life Timing`으로 수정했습니다. `홈페이지 바로가기`는 약간 작게 조정했습니다. 최종 생성 결과의 픽셀을 수정하지 않고 홈페이지 자산으로 복사했습니다. 공유 카드의 메타데이터 제목은 알아보기 쉬운 `묵공 홈페이지`를 유지합니다.

최초 제작 프롬프트(공식 로고 반영 전):

```text
Use case: ads-marketing. Asset type: a polished Korean promotional icon-card for a personal research website, designed for a KakaoTalk website-link preview. Create ONE finished standalone raster graphic, wide landscape about 1200 x 630 aspect ratio, not a screenshot or a mockup of a phone or chat app. Match the established website branding: deep navy #091d3f, understated muted gold #bfab75, warm ivory and teal. Composition: a single clean, generous rounded ivory card on a deep navy backdrop, with a navy circular emblem bordered in muted gold on the left and a very large readable Korean title on the right. Inside the emblem put exactly the one white Hangul character '묵', matching a simple dignified seal badge. Main title text verbatim: '묵공 홈페이지'. Small legal business name verbatim: '묵공오행연구소'. Beneath the title put a substantial teal rounded button with text verbatim '홈페이지 바로가기' and a simple right-pointing arrow. Make the main title and button easy to recognize at chat thumbnail size, crisp bold Korean sans-serif typography, accurate spelling, balanced spacing, ample margins. Keep all meaningful text within the central 80 percent so a small preview can show it comfortably. Restrained, trustworthy, elegant design for adult Korean readers. Avoid English text, URLs, QR codes, extra slogans, Kakao trademarks, app-store badges, photos, people, astrology charts, ornamental clutter, glossy 3D effects, and watermarks. Opaque background.
```

최종 수정: 기존 카드·공식 로고·묵공님의 수정 표시 이미지를 참조하여, 왼쪽 표시를 공식 默 로고로 교체하고 영문 제목은 정확히 `Mukgong Life Timing`으로 적용했습니다. 청록색 바로가기 표시의 글자와 높이를 약 25% 줄이고 기존 남색·상아색·금색 구성을 유지했습니다.
