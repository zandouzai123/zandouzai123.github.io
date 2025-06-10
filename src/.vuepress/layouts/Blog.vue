<script setup lang="ts">
import { Blog } from "vuepress-theme-hope/blog";
import BingHeroBackground from "vuepress-theme-hope/presets/BingHeroBackground.js";
import HitokotoBlogHero from "vuepress-theme-hope/presets/HitokotoBlogHero.js";
</script>


<template>
  <Blog>
    <!-- 英雄区背景：使用必应每日壁纸 -->
    <template #heroBg>
      <BingHeroBackground />
    </template>

    <!-- 英雄区信息：显示一言随机句子 -->
    <template #heroInfo="data">
      <HitokotoBlogHero v-bind="data" />
    </template>

  </Blog>
</template>


