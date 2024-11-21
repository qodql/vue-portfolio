<template>
    <HeaderView />
    <main class="main">
        <section id="intro">
            <div class="particle">
                <img src='./assets/img/img-intro-particle01.svg' alt="particle01">
                <img src='./assets/img/img-intro-particle02.svg' alt="particle02"/>
                <img src='./assets/img/img-intro-particle03.svg' alt="particle03"/>
                <img src='./assets/img/img-intro-particle04.svg' alt="particle04"/>
                <img src='./assets/img/img-intro-particle05.svg' alt="particle05"/>
            </div>
            <article class="intro-title">
                <h2>프론트엔드</h2>
                <h2>포트폴리오</h2>
            </article>
            <div class="intro-container">
                <article class="intro-profile">
                    <div class="intro-profile-box">
                        <img></img>
                        <span>?</span>
                    </div>
                    <p>윤경빈</p>
                </article>
                <div class="intro-contents">
                    <div class="intro-content">
                        <span>수료</span>
                        <div>
                            <h5>프론트엔드 웹&앱 SW 개발자 양성과정</h5>
                            <p>2024.05 ~ 2024.11</p>
                        </div>
                        <ul>
                            <li>React, Next.js, Vue.js를 활용한 동적 웹 페이지 구축</li>
                            <li>Git을 활용한 버전 관리 및 협업 개발 환경 이해</li>
                            <li>Node.js와 Express.js를 활용한 간단한 서버 구축 및 클라이언트-서버 통신</li>
                            <li>Firebase와 Next.js를 활용한 서버리스 웹 애플리케이션 구축</li>
                        </ul>
                    </div>
                    <div class="intro-content">
                        <span>근무</span>
                        <div>
                            <h5>(주)필코리아테크놀로지</h5>
                            <p>2021.06 ~ 2024.02</p>
                        </div>
                        <ul>
                            <li>웹사이트 및 애플리케이션 UI 디자인</li>
                            <li>Adobe XD, Figma를 활용한 프로토타입 제작</li>
                            <li>카페24 플랫폼을 활용한 자사 웹사이트 유지보수 및 콘텐츠 관리</li>
                            <li>구글 애널리틱스를 활용한 방문자 분석 및 개선 작업</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section id="about">
            <div class="about-container">
                <div class="about-list">
                    <div class="about-item">
                        <div class="about-item-inner">
                            <span>01</span>
                            <h5>프론트엔드를 선택한 이유</h5>
                            <p>
                                “프론트엔드를 선택한 이유는 디자인을 
                                해보면서, 좋은 사용자 경험을 만들어내는 
                                데 더 깊이 기여하고 싶다는 욕심이 
                                생겼습니다. 프론트엔드 개발은 사용자가 
                                직접 경험하는 부분이기 때문에, 화면 
                                설계부터 개발까지 사용자 경험을 
                                전반적으로 책임질 수 있는 부분이 
                                매력적으로 다가왔습니다.”
                            </p>
                        </div>
                    </div>
                    <div class="about-item">
                        <div class="about-item-inner">
                            <span>02</span>
                            <h5>어떤 준비를 해왔는지</h5>
                            <p>
                                "React와 Vue 같은 프론트엔드 프레임워크를 배우며 소규모 
                                프로젝트를 진행해 왔습니다. 프로젝트에서는 영화, 뉴스, 
                                도서 API와 비동기 처리를 활용해 실시간 데이터를 
                                기반으로 한 동적인 웹페이지를 구현하는 방법을 
                                익혔습니다. 또한, 두 번의 팀 프로젝트에서 배포 팀장을 
                                맡아 Git 머지 프로세스를 이해하고 활용해 협업 경험을 
                                쌓았습니다."
                            </p>
                        </div>
                    </div>
                    <div class="about-item">
                        <div class="about-item-inner">
                            <span>03</span>
                            <h5>가장 중요한 요소</h5>
                            <p>
                                “프론트엔드에서 성능과 접근성은 중요한 요소입니다. 
                                로딩 속도가 느리거나 접근성이 떨어지는 웹사이트는 
                                사용자에게 불편함을 주고, 웹사이트에 대한 신뢰성을 
                                떨어뜨리기 쉽습니다. 이를 위해 이미지 최적화, 코드 
                                스플리팅, 웹 접근성 표준 준수 등을 염두에 두고 작업하고 
                                있습니다.”
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="skill">
            <div class="skill-container">
                <h3>보유 기술</h3>
                <div class="skill-inner">
                    <div class="skill-item">
                        <div class="skill-item-title">
                            <p>프론트엔드</p>
                        </div>
                        <div class="skill-item-contents">
                            <ul>
                                <!-- <li @click="showModal('HTML')"><p>HTML</p></li> -->
                                <li><p>HTML</p></li>
                                <li><p>SCSS</p></li>
                                <li><p>CSS</p></li>
                                <li><p>Jquery</p></li>
                                <li><p>JavaScript</p></li>
                                <li><p>React</p></li>
                                <li><p>Next.js</p></li>
                                <li><p>Vue.js</p></li>
                                <li><p>Vite</p></li>
                                <li><p>TypeScript</p></li>
                                <li><p>Ajax</p></li>
                                <li><p>Zustand</p></li>
                                <li><p>React-Redux</p></li>
                            </ul>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-item-title">
                            <p>백엔드/디자인</p>
                        </div>
                        <div class="skill-item-contents">
                            <ul>
                                <li><p>Firebase</p></li>
                                <li><p>MongoDB</p></li>
                                <li><p>express</p></li>
                                <li><p>Adobe Photoshop</p></li>
                                <li><p>Adobe Illustrator</p></li>
                                <li><p>Adobe XD</p></li>
                                <li><p>Figma</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- <SkillModalView v-if="isModalOpen" :skillData="selectedSkillData"/> -->
            </div>
        </section>
        <section id="project">
            <div class="project-container">
                <h3>프로젝트</h3>
                <swiper
                    :modules="[Scrollbar]"
                    :scrollbar="{draggable: true}"
                    :slides-per-view="2"
                    :space-between="8"
                    :breakpoints="{
                        480: { slidesPerView: 2, spaceBetween: 16 },
                        760: { slidesPerView: 2, spaceBetween: 28 },
                        1200: { slidesPerView: 2, spaceBetween: 36 },
                        1201: { slidesPerView: 3, spaceBetween: 40 },
                    }"
                    class="project-list"
                >
                    <swiper-slide v-for="(project, index) in projects" 
                    :key="index" 
                    class="project-item"
                    @click="showProjectModal(project)"
                    >
                        <figure>
                            <img :src="project.image" :alt="project.title">
                        </figure>
                        <div class="project-item-contents">
                            <p class="project-item-title">{{ project.title }}</p>
                            <p>{{ project.description }}</p>
                            <div class="kind">
                                <span v-if="project.isWeb">PC</span>
                                <span v-if="project.isResponsive" class="reaction">반응형</span>
                                <span v-if="project.isMobile" class="mobile">모바일</span>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
                <ProjectModalView v-if="isProjectModalOpen" 
                :projectData="selectedProjectData" 
                @close="isProjectModalOpen = false" 
                />
            </div>
        </section>
    </main>
    <FooterView />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Scrollbar } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/scrollbar';
import HeaderView from '@/components/HeaderView.vue';
import FooterView from '@/components/FooterView.vue';
import ProjectModalView from '@/components/ProjectModalView.vue';


// const isModalOpen = ref(false);
// const selectedSkillData = ref({ title: '', description: '' });

// const skillDetails:any = {
//   HTML: { title: 'HTML', description: 'HTML5 웹 표준 태그 숙지 및 SCSS 활용 가능, 반응형 웹 제작 가능' },
//   CSS: { title: 'CSS', description: 'CSS3 속성 및 Flexbox, Grid 레이아웃 이해' },
//   JavaScript: { title: 'JavaScript', description: 'Javascript로 동적인 웹 구현 가능 내장함수 이용 및 응용 이벤트 활용 가능' },
// };

// function showModal(skillName: string){
//     selectedSkillData.value = skillDetails[skillName];
//     isModalOpen.value = true;
// }



const isProjectModalOpen = ref(false);
const selectedProjectData = ref({ title: '', description: '', image: '' });

const projects = [
    { 
        title: '다온', 
        description: '웹 리뉴얼 프로젝트', 
        image: new URL('./assets/img/img-project01.jpg', import.meta.url).href, 
        isWeb: true, 
        isResponsive: true,
        logo: new URL('./assets/img/logo/daon.svg', import.meta.url).href, 
        person: '5명',
        site:'https://qodql.github.io/daon/index.html',
        git:'https://github.com/qodql/daon',
        contribute:[
            '<p>공지사항에 게시판 기능을 추가하여 방문자가 공지사항을 편리하게 확인할 수 있도록 사용자 경험을 향상했습니다.</p>',
            '<p>오시는길에는 숙소의 위치 안내 및 경로와 퀵메뉴에는 숙소 주변 날씨 정보를 실시간으로 확인할 수 있도록 api들을 연동하여 사용자에게 유용한 정보를 제공하였습니다.</p>',
            '<p>사용자 정보와 예약 데이터를 불러와 한 페이지에서 통합 관리할 수 있도록 하였으며, 사용자 맞춤형 정보를 제공해 편리성을 높였습니다.</p>',
            '<p>다양한 화면 크기에 최적화된 화면으로 일관된 사용자 경험을 제공하였습니다.</p>'
        ],
        skills:[
            new URL('./assets/img/icon/icon-project-html.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-css.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-sass.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-figma.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-swiper.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-jquery.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-js.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-json.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-git.svg', import.meta.url).href,
        ]            
    },
    { 
        title: '책이음', 
        description: 'Next.js PWA 개발 프로젝트', 
        image: new URL('./assets/img/img-project02.jpg', import.meta.url).href, 
        isMobile: true,
        logo: new URL('./assets/img/logo/ieum.svg', import.meta.url).href, 
        person: '3명',
        site:'https://ieum-ykb.vercel.app',
        git:'https://github.com/qodql/ieum-ykb',
        contribute:[
            '<p>Zustand를 이용하여 도서 API를 각 기능에 맞게 불러올 수 있도록 상태 관리 로직을 설계하여, 효율적인 데이터 로딩과 상황에 맞는 상태 처리가 가능하게 했습니다.</p>',
            '<p>사용자가 원하는 책을 편리하게 찾을 수 있도록 도서 리스트 제공과 검색 기능 및 상세 정보 페이지를 구현했습니다.</p>',
            '<p>사용자가 각 도서에 대한 평점을 남길 수 있도록 평점 기능을 추가하여, 도서에 대한 피드백을 기반으로 사용자 경험을 강화했습니다.</p>',
            '<p>전반적인 디자인과 UI/UX를 담당하여 일관된 색상과 스타일을 제공하였습니다.</p>'
        ],
        skills:[
            new URL('./assets/img/icon/icon-project-html.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-css.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-sass.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-figma.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-swiper.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-npm.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-js.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-next.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-react.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-firebase.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-firestore.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-zustand.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-vercel.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-git.svg', import.meta.url).href,
        ]  
    },
    {  
        title: '피커', 
        description: 'React 기반 웹 애플리케이션', 
        image: new URL('./assets/img/img-project03.jpg', import.meta.url).href, 
        isWeb: true, 
        isResponsive: true,
        logo: new URL('./assets/img/logo/picker.svg', import.meta.url).href, 
        person: '1명',
        site:'https://picker-ykb.vercel.app',
        git:'https://github.com/qodql/picker',
        contribute:[
            '<p>영화 API 데이터의 상태 관리 시스템을 Redux를 사용하여 구현하였습니다. 이를 통해 상태를 효율적으로 관리하고, 컴포넌트 간 데이터 흐름을 일관되게 유지할 수 있도록 했습니다.</p>',
            '<p>상세페이지에는 라우팅 처리를 통해 각 영화에 고유 URL을 부여하여 사용자가 특정 영화 정보를 쉽게 확인할 수 있도록 했습니다.</p>',
            '<p>영화 이름으로 검색할 수 있는 기능을 구현하여 사용자가 원하는 영화를 빠르게 찾을 수 있도록 했습니다.</p>',
            '<p>다양한 디바이스에 최적화된 반응형 디자인을 적용하였습니다.</p>'
        ],
        skills:[
            new URL('./assets/img/icon/icon-project-html.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-css.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-sass.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-figma.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-swiper.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-npm.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-js.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-react.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-redux.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-vercel.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-git.svg', import.meta.url).href,
        ]  
    },
    { 
        title: '엔뉴스', 
        description: 'Vue.js 기반 애플리케이션', 
        image: new URL('./assets/img/img-project04.jpg', import.meta.url).href, 
        isMobile: true,
        logo: new URL('./assets/img/logo/nnews.svg', import.meta.url).href, 
        person: '1명',
        site:'https://nnews-ykb.vercel.app',
        git:'https://github.com/qodql/news',
        contribute:[
            '<p>검색어 입력 시 API 요청을 보내고, 결과를 렌더링하는 기능을 Vue.js와 Vuex를 활용하여 구현했습니다.</p>',
            '<p>Vue 컴포넌트로 모달을 구현하고, 기사의 상세 정보를 API 호출로 가져와 표시하도록 했습니다.</p>',
            '<p>Express를 사용해 백엔드 서버를 구축하고, 해당 서버를 Vercel에 배포하여 클라이언트와 서버 간 원활한 데이터 통신을 구현했습니다. 이를 통해 뉴스 API 호출을 처리할 수 있는 안정적인 환경을 제공했습니다.</p>',
        ],
        skills:[
            new URL('./assets/img/icon/icon-project-html.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-css.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-sass.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-figma.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-swiper.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-npm.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-js.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-vue.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-vuex.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-express.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-node.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-vercel.svg', import.meta.url).href,
            new URL('./assets/img/icon/icon-project-git.svg', import.meta.url).href
        ]  
    }
];

function showProjectModal(project: any) {
    selectedProjectData.value = project;
    isProjectModalOpen.value = true;
}

onMounted(() => {
    // refresh
    window.addEventListener('beforeunload', () => {
        window.scrollTo(0, 0);
    });

    // nav
    const navLinks = document.querySelectorAll('nav a') as NodeListOf<HTMLAnchorElement>;

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetSection = document.getElementById(link.dataset.target as string);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth',
                });
            } else {
                console.error('타겟 확인 불가');
            }
        });
    });

    // scroll
    function init() {
        const section2 = document.querySelector('#about') as HTMLElement;
        const horizontalScroll = document.querySelector('.about-container') as HTMLElement;
        const elAboutItem = document.querySelectorAll('.about-item') as NodeListOf<HTMLElement>;
        const elAboutItemInner = document.querySelectorAll('.about-item-inner') as NodeListOf<HTMLElement>;
        const section2Top = section2.offsetTop; // 2번째 섹션의 시작 위치
        const windowWidth = window.innerWidth;
        const horizontalScrollWidth = windowWidth * 2;
        const scrollDistance = elAboutItem[0].offsetWidth * 3; // 가로 스크롤 진행 거리

        let itemWid = [
            elAboutItemInner[0].offsetWidth,
            elAboutItemInner[1].offsetWidth
        ];
        let itemCount: number = 0;
        let itemNum: number = 0;

        section2.style.height = scrollDistance * 1.45 + 'px';

        // scroll controll
        const onScroll = () => {
            const scrollY = window.scrollY;

            if (scrollY >= section2Top && scrollY <= section2Top + scrollDistance) {
                horizontalScroll.style.position = 'fixed';
                horizontalScroll.style.top = '25vh';

                const progress = (scrollY - section2Top) / scrollDistance;
                const translateX = -progress * (horizontalScrollWidth - windowWidth);

                if (translateX > 0) {
                    horizontalScroll.style.transform = `translateX(${translateX}px)`;
                } else {
                    itemNum = (itemWid[itemCount] * (itemCount + 1)) - (scrollY - section2Top);
                    if (itemNum > 100) {
                        elAboutItemInner[itemCount].style.width = itemNum + 'px';
                        elAboutItem[itemCount].classList.remove('active');
                    } else {
                        elAboutItemInner[itemCount].style.width = '120px';
                        elAboutItem[itemCount].classList.add('active');
                    }
                    if (elAboutItem[itemCount].classList.contains('active')) {
                        itemCount = 1;
                    } else {
                        itemCount = 0;
                    }
                }
            } else if (scrollY > section2Top + scrollDistance) {
                horizontalScroll.style.position = 'absolute';
                horizontalScroll.style.top = `calc(25vh + ${scrollDistance}px)`;
            } else {
                horizontalScroll.style.position = 'absolute';
                horizontalScroll.style.top = '25vh';

                const progress = (scrollY - section2Top) / scrollDistance;
                const translateX = -progress * (horizontalScrollWidth - windowWidth);
                horizontalScroll.style.transform = `translateX(${translateX}px)`;
            }
        };

        // scroll event
        const manageScrollEvent = () => {
            const currentWidth = window.innerWidth;

            if (currentWidth > 1200) {
                window.addEventListener('scroll', onScroll);
            } else {
                window.removeEventListener('scroll', onScroll);
            }
        };

        manageScrollEvent();

        window.addEventListener('resize', manageScrollEvent);
    }

    let previousWidth = window.innerWidth;

    // refresh top
    window.addEventListener('resize', () => {
        const currentWidth = window.innerWidth;

        if ((previousWidth <= 1200 && currentWidth > 1200) || (previousWidth > 1200 && currentWidth <= 1200)) {
            window.scrollTo(0, 0);
            window.location.reload();
        }

        previousWidth = currentWidth;
    });

    window.onload = init;
});




</script>




<style lang="scss">

</style>