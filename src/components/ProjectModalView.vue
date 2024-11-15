<template>
    <div class="project-modal" @click="closeProjectModal">
        <div class="project-modal-inner" @click.stop>
            <figure>
                <img v-if="projectData.logo" :src="projectData.logo" :alt="projectData.title">
            </figure>
            <div class="project-modal-top">
                <div class="project-modal-type project-modal-title">
                    <p>타입</p>
                    <span>{{ projectData.description }}</span>
                </div>
                <div class="project-modal-person project-modal-title">
                    <p>참여 인원</p>
                    <span>{{ projectData.person }}</span>
                </div>
                <div class="project-modal-button">
                    <button><a :href="projectData.site" target="_blank">site</a></button>
                    <button><a :href="projectData.git" target="_blank">github</a></button>
                </div>
            </div>
            <div class="project-modal-contribute project-modal-title">
                <p>작업 기여도</p>
                <div class="project-modal-contribute-cont" v-html="projectData.contribute.join('')"></div>
            </div>
            <div class="project-modal-skill project-modal-title">
                <p>사용 기술</p>
                <div class="project-modal-skill-img">
                    <img v-for="(skill, index) in projectData.skills" :key="index" :src="skill" alt="skill-icon" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits  } from 'vue';

const props = defineProps({
    projectData: {
        type: Object,
        required: true,
    }
});


const emits = defineEmits(['close']);

function closeProjectModal() {
    emits('close');
}

</script>