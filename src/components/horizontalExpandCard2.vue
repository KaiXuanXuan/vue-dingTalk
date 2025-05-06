<template>
  <div class="card-container">
    <div class="card-list">
      <div v-for="(card, index) in cards" :key="index" class="card" :class="{ active: activeIndex === index }" @mouseenter="activeIndex = index">
        <div class="card-image" :style="{ backgroundImage: `url(${card.bgImg})` }">
          <div class="card-image-mask"></div>
        </div>
        <div class="card-content">
          <div class="content-header" :style="{ backgroundImage: `url(${card.title})` }"></div>
          <div class="content-text">{{ card.content }}</div>
        </div>
        <div class="arrow arrow-right">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  cards: {
    type: Array,
    default: () => [],
  },
});

const activeIndex = ref(0);
</script>

<style scoped>
.card-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.card-list {
  display: flex;
  gap: 18px;
  /* max-width: 1200px; */
  width: 1200px;
  /* margin: 0 auto; */
}

.card {
  /* flex: 1; */
  height: 270px;
  background: #ffffff;
  transition: all 0.3s ease-in-out;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  padding: 0 1.5rem 1.5rem 1.5rem;
  display: flex;
  align-items: end;
  justify-content: space-between;
}

.card:not(.active) {
  flex: 1; /* 非激活状态宽度 */
  /* min-width: 80px; */
}

.card.active {
  flex: 2; /* 激活状态宽度 */
  /* min-width: 400px; */
}

.card-image {
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.card-image-mask {
  position: absolute;
  background: rgba(20, 16, 41, 0.55);
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.card-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 3;
}

.content-header {
  height: 28px;
  margin-bottom: 12px;
  background-size: contain;
  background-repeat: no-repeat;
}

.content-text {
  text-wrap: nowrap;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  text-overflow: ellipsis;
  transition: all 0.3s 0.1s;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
}

.arrow-right {
  width: 26px;
  height: 26px;
  opacity: 0;
  color: #fff;
  transition: all 0.3s ease-in-out;
  z-index: 3;
}

.active .arrow-right {
  opacity: 1;
}
</style>
