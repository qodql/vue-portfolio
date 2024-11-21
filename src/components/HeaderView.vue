<template>
    <header :class="['header', { active: isScrolled }]">
      <div class="header-inner">
        <div class="logo-container">
          <a href="/">
            <h1></h1>
          </a>
        </div>
        <button
          class="hamburger"
          :style="{
            backgroundImage: isMenuOpen ? `url(${closeIcon})` : `url(${burgerIcon})`
          }"
          @click="toggleMenu"
        ></button>
        <nav class="nav" :class="{ open: isMenuOpen }">
          <a href="#intro" data-target="intro">인터뷰</a>
          <a href="#skill" data-target="skill">기술</a>
          <a href="#project" data-target="project">프로젝트</a>
        </nav>
      </div>
    </header>
  </template>
  
<script lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

import closeIcon from "../assets/img/icon/icon-header-close.svg";
import burgerIcon from "../assets/img/icon/icon-header-burger.svg";


export default {
  setup() {
    const isScrolled = ref(false);
    const isMenuOpen = ref(false);

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 0;
    };

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return { isScrolled, isMenuOpen, toggleMenu, closeIcon, burgerIcon};
  },
};





</script>

<style lang="scss">

</style>