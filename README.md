<div align="left">

<!-- logo -->
<h1>Kyeong Bin Portfolio</h1>
<img src="src/assets/img/icon/icon-project-html.svg"/>
<img src="src/assets/img/icon/icon-project-css.svg"/>
<img src="src/assets/img/icon/icon-project-sass.svg"/>
<img src="src/assets/img/icon/icon-project-figma.svg"/>
<img src="src/assets/img/icon/icon-project-swiper.svg"/>
<img src="src/assets/img/icon/icon-project-js.svg"/>
<img src="src/assets/img/icon/icon-project-vue.svg"/>
<img src="src/assets/img/icon/icon-project-vite.svg"/>
<img src="src/assets/img/icon/icon-project-npm.svg"/>
<img src="src/assets/img/icon/icon-project-git.svg"/>
</div>

## 📝 프로젝트 소개
경력, 인터뷰, 보유 기술, 프로젝트를 한 페이지에서 소개하는 포트폴리오 사이트입니다.
<br />
<br />
Vue 3와 TypeScript, SCSS로 직접 디자인하고 구현했으며, <br />
탭과 아코디언으로 구성한 경력 영역, 스크롤에 따라 넘어가는 인터뷰 카드, 프로젝트 슬라이드와 상세 모달을 담았습니다.<br />
키보드 이동과 포커스 표시 등 접근성을 고려하고, PC부터 모바일까지 반응형으로 제작했습니다.<br />

## 🔗 배포 URL
<!-- TODO: 배포 주소 입력 -->
<a href="https://vue-portfolio-ykb.vercel.app/" target="_blank">https://vue-portfolio-ykb.vercel.app/</a>
<br />

## ⚙ 기술 스택
이 프로젝트는 다음 기술을 활용하여 구현되었습니다.

- **Vue 3**: `<script setup>`과 Composition API로 화면과 상태 관리
- **TypeScript**: 프로젝트·경력 데이터와 이벤트 처리에 타입 적용
- **Vite**: 개발 서버와 빌드, SCSS 자동 변환
- **SCSS**: 섹션별 스타일 파일 분리, CSS 변수로 색상·폰트·컨테이너 너비 관리
- **Swiper**: 프로젝트 목록 슬라이드
- **Figma**: 화면 디자인
- **GitHub**: 버전 관리
<br />

## 🛠 주요 기능 및 특징
1. **인트로 (경력·교육)**:
   - 프로필 사진은 화면에 들어오는 순간 `IntersectionObserver`로 감지해 자연스럽게 나타나고, 스크롤 시 `position: sticky`로 따라옵니다.
   - 경력과 교육은 **탭**으로 나누고, 회사·과정별 내용은 **아코디언**으로 펼쳐 볼 수 있습니다.
   - 탭은 `role="tablist"`, `aria-selected` 등을 적용하고 방향키·Home·End로 이동할 수 있도록 구현했습니다.
   - 경력 데이터는 배열로 분리해, 항목을 추가해도 화면이 그대로 만들어지도록 구성했습니다.

2. **인터뷰**:
   - 세로 스크롤 양에 따라 현재 카드가 펼쳐지고 나머지는 접히는 가로형 인터랙션입니다.
   - 스크롤 계산은 `requestAnimationFrame`으로 한 프레임에 한 번만 처리하고, 1200px 이하에서는 세로 카드 목록으로 바뀝니다.

3. **보유 기술**:
   - 기술 이름에 마우스를 올리면 글자 바로 왼쪽에 선택 아이콘이 나타납니다.
   - `@media (hover: hover)`로 마우스 환경에서만 효과가 보이도록 했습니다.

4. **프로젝트**:
   - Swiper로 화면 크기에 따라 1~4개씩 보여 주고, 하단 스크롤바로 위치를 표시합니다.
   - 프로젝트마다 **실무, PC, 반응형, 태블릿, 모바일** 배지를 표시합니다.
   - 카드를 클릭하면 상세 모달에서 담당 업무, 사용 기술, 사이트·Git 링크를 확인할 수 있으며, 링크는 있는 프로젝트에만 표시됩니다.

5. **푸터**:
   - GitHub 이동, 이력서 PDF 다운로드, 이메일 주소 복사 기능을 제공합니다.
   - 이력서 경로는 `import.meta.env.BASE_URL`을 사용해 배포 경로가 달라져도 올바르게 연결되도록 했습니다.
<br />

## 🤔 기술적 이슈와 해결 과정

### 1. **코드 수정 후 인터뷰 섹션이 사라지는 문제**

 - 문제: 인터뷰 인터랙션의 초기화가 `window.onload`에만 연결되어 있어, 개발 중 코드를 수정하면 다시 실행되지 않고 섹션이 사라졌습니다.

 - 해결: `document.readyState`를 확인해 페이지가 이미 로드된 경우 바로 초기화하도록 수정했습니다. 또한 컴포넌트가 사라질 때 스크롤·리사이즈 이벤트를 제거해 이벤트가 중복으로 등록되지 않도록 했습니다.

### 2. **창 크기를 줄일 때 오른쪽에 흰 여백이 생기는 문제**

 - 문제: 화면 밖으로 넘친 요소 때문에 가로 스크롤과 흰 여백이 생겼습니다. `overflow-x: hidden`으로 막으면 스크롤 컨테이너가 생겨 프로필 사진의 `position: sticky`가 동작하지 않았습니다.

 - 해결: 넘친 부분만 잘라 주는 `overflow-x: clip`을 적용해, 흰 여백을 없애면서 sticky도 그대로 유지했습니다.

### 3. **인터뷰 카드가 접힐 때 글자가 깨지거나 잘리는 문제**

 - 문제: 카드 너비가 줄어드는 동안 글자가 계속 줄바꿈되며 흔들렸고, 반응형에서는 고정 높이 때문에 긴 답변이 잘렸습니다.

 - 해결: 접히는 동안에는 글자 너비를 고정하고 넘치는 부분만 숨겨 줄바꿈이 일어나지 않게 했습니다. 1200px 이하에서는 카드 높이를 `auto`로 바꿔 내용 길이에 맞게 늘어나도록 수정했습니다.

<br />

##  :file_folder: 폴더 구조
<pre class="notranslate">
<code>
📦vue-portfolio
 ┣ 📂public
 ┃ ┗ 📜resume.pdf              # 푸터 이력서 다운로드 파일
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📂fonts                 # DungGeunMo, PyeongChangPeace, SpoqaHanSansNeo
 ┃ ┃ ┣ 📂img                   # 이미지, 로고, 아이콘
 ┃ ┃ ┗ 📂styles
 ┃ ┃   ┣ 📜variables.scss      # 색상·폰트·컨테이너 너비 CSS 변수
 ┃ ┃   ┣ 📜Header.scss
 ┃ ┃   ┣ 📜Main.scss           # 인트로·인터뷰·기술·프로젝트
 ┃ ┃   ┣ 📜Footer.scss
 ┃ ┃   ┣ 📜Modal.scss
 ┃ ┃   ┗ 📜Responsive.scss     # 반응형 스타일
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜HeaderView.vue        # 헤더: 내비게이션, 모바일 메뉴
 ┃ ┃ ┣ 📜FooterView.vue        # 푸터: GitHub·이력서·이메일 복사
 ┃ ┃ ┗ 📜ProjectModalView.vue  # 프로젝트 상세 모달
 ┃ ┣ 📜App.vue                 # 섹션 구성, 경력·프로젝트 데이터, 인터랙션
 ┃ ┗ 📜main.ts
 ┣ 📜index.html
 ┣ 📜vite.config.ts           
 ┗ 📜README.md
</code>
</pre>