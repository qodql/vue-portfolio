<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-inner">
                <h3>감사합니다</h3>
                <p>
                    트렌드를 반영하기 위해 항상 기술을 익히고<br>
                    성장하는 프론트엔드 개발자가 되겠습니다.
                </p>
                <div>
                    <button>
                        <a href="https://github.com/qodql" target="_blank">github</a>
                    </button>
                    <button>
                        <a href="https://qodql.github.io/daon/index.html" target="_blank">site</a>
                    </button>
                    <button @click="copyMail"><a>contact</a></button>
                </div>
            </div>
            <div class="copy">
                <p>
                    Copyright {{ currentYear }}. Yoonkyeongbin all rights reserved.<br>
                    Vue.js, TypeScript, SCSS 기반으로 제작된 사이트입니다.
                </p>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
export default {
    setup() {
        const copyMail = () => {
            const email = 'bengby@naver.com';
            navigator.clipboard.writeText(email).then(() => {
                alert('이메일 주소가 복사되었습니다!');
            });
        };

        const currentYear = new Date().getFullYear();

        return { copyMail, currentYear };
    },
};
</script>

<style lang="scss">

</style>
