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
                    <div class="about-item active">
                        <div class="about-item-inner">
                            <h5>프론트엔드를 선택한 이유</h5>
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
                                <li @click="showModal('HTML')"><p>HTML</p></li>
                                <li @click="showModal('CSS')"><p>CSS</p></li>
                                <li @click="showModal('SCSS')"><p>SCSS</p></li>
                                <li @click="showModal('Jquery')"><p>Jquery</p></li>
                                <li @click="showModal('JavaScript')"><p>JavaScript</p></li>
                                <li @click="showModal('React')"><p>React</p></li>
                                <li @click="showModal('Next.js')"><p>Next.js</p></li>
                                <li @click="showModal('Vue.js')"><p>Vue.js</p></li>
                                <li @click="showModal('Vite')"><p>Vite</p></li>
                                <li @click="showModal('TypeScript')"><p>TypeScript</p></li>
                                <li @click="showModal('Ajax')"><p>Ajax</p></li>
                                <li @click="showModal('Zustand')"><p>Zustand</p></li>
                                <li @click="showModal('React-Redux')"><p>React-Redux</p></li>
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
                <SkillModalView v-if="isModalOpen" :skillData="selectedSkillData"/>
            </div>
        </section>
        <section id="project">
            <div class="project-container">
                <h3>프로젝트</h3>
                <swiper 
                    :slides-per-view="1"
                    :space-between="10"
                    :breakpoints="{
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 3, spaceBetween: 40 },
                    }"
                    pagination
                    mousewheel
                    :scrollbar="{ el: '.project-scrollbar', draggable: true }"
                    class="project-list"
                >
                    <swiper-slide v-for="(project, index) in projects" :key="index" class="project-item">
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
                <div class="project-scrollbar">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </section>
    </main>
    <FooterView />
</template>


<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Mousewheel, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css/scrollbar';
import HeaderView from '@/components/HeaderView.vue';
import FooterView from '@/components/FooterView.vue';
import SkillModalView from '@/components/SkillModalView.vue';


const isModalOpen = ref(false);
const selectedSkillData = ref({ title: '', description: '' });

const skillDetails = {
    HTML: { title: 'HTML', description: 'HTML5 웹 표준 태그 숙지 및 SCSS 활용 가능, 반응형 웹 제작 가능' },
    CSS: { title: 'CSS', description: 'CSS3 속성 및 Flexbox, Grid 레이아웃 이해' },
    JavaScript: { title: 'JavaScript', description: 'Javascript로 동적인 웹 구현 가능 내장함수 이용 및 응용 이벤트 활용 가능' },
};

const projects = [
    { title: '다온', description: '웹 리뉴얼 프로젝트', image: new URL('./assets/img/img-project01.png', import.meta.url).href, isWeb: true, isResponsive: true },
    { title: '책이음', description: 'Next.js PWA 개발 프로젝트', image: new URL('./assets/img/img-project02.png', import.meta.url).href, isMobile: true },
    { title: '피커', description: 'React 기반 웹 애플리케이션', image: new URL('./assets/img/img-project03.png', import.meta.url).href, isWeb: true, isResponsive: true },
    { title: '엔뉴스', description: 'Vue.js 기반 애플리케이션', image: new URL('./assets/img/img-project04.png', import.meta.url).href, isMobile: true }
];


function showModal(skillName){
    selectedSkillData.value = skillDetails[skillName];
    isModalOpen.value = true;
}


onMounted(()=>{
    function init(){
        const elApp = document.querySelector('#app');
        const elIntro = document.querySelector('#intro');
        const elAbout = document.querySelector('#about');
        const elSkill = document.querySelector('#skill');
        const elContainer = document.querySelector('.about-container');
        const elAboutItem = document.querySelectorAll('.about-item-inner');
        const conHei = elApp.offsetHeight;
        const sc = {y:0,dy:0,state:true,move:true};
        let move;

        document.body.style.height = conHei + 'px';
        

        window.addEventListener('scroll',(e)=>{
            sc.y = window.scrollY;
            sc.state = sc.y>sc.dy ? true : false;
            sc.dy = sc.y;

            //interview
            // if(sc.move){           
            //     console.log(sc.state)  
            //     if(sc.state){                    
            //         elAbout[1].style.width = `${elAbout[1].offsetWidth - 5}px`;
            //     }else{
            //         elAbout[1].style.width = `${elAbout[1].offsetWidth + 5}px`;
            //     }
            //     sc.move = elAbout[1].offsetWidth > 100 ? true : false;                
                
            // }
            // const pos = elAbout.getBoundingClientRect()
            
            // if( pos.top <= 0){
            //     elContainer.classList.add('active');
            // }else{
            //     elContainer.classList.remove('active'); 
            // }
            elApp.style=`top:-${sc.y}px`         
            
        });

        const intersection = new IntersectionObserver((items) => {
            if (items[0].isIntersecting) {
                elContainer.classList.add('active');
            } else {
                elContainer.classList.remove('active');
            }
        }, { rootMargin: '0px 0px -100% 0px' });
        intersection.observe(elAbout);


        const intersection2 = new IntersectionObserver((items) => {
            if (items[0].isIntersecting) {
                elContainer.classList.remove('active');
            } else {
                // elContainer.classList.add('active');
            }
        }, { rootMargin: '0px 0px 0% 0px' });
        intersection2.observe(elSkill);
       
    }
    window.onload = init;
    
    
})

</script>




<style lang="scss">

</style>