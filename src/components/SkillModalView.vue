<template>
    <div class="skill-modal">
        <div class="skill-modal-inner">
            <h5>{{ props.skillData.title }}</h5>
            <p>{{ props.skillData.description }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  skillData: {
    type: Object,
    required: true,
  }
});
</script>