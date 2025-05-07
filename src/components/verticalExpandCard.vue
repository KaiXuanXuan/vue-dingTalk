<template>
  <div class="card-list" @mouseleave="handleMouseLeave">
    <div v-for="(card, index) in cards" :key="index" class="card" :class="{ active: activeIndex === index }" @mouseenter="handleMouseEnter(index)">
      <div class="card-title">
        <div class="title-header">{{ card.num }}<span class="expand">+</span></div>
        <div class="title-text">{{ card.title }}</div>
        <img class="icon" :src="card.icon" />
      </div>
      <div class="card-content">
        <div class="content-text">{{ card.content }}</div>
        <img class="content-img" :src="card.img" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
  cards: {
    type: Array,
    default: () => [],
  },
  defaultActiveIndex: {
    type: Number,
    default: 0,
  },
});

const activeIndex = ref(0);

onMounted(() => {
  activeIndex.value = props.defaultActiveIndex;
});

function handleMouseLeave() {
  activeIndex.value = props.defaultActiveIndex;
}
function handleMouseEnter(index) {
  activeIndex.value = index;
}
</script>

<style scoped>
.card-list {
  display: flex;
  gap: 23px;
  width: 100%;
  /* width: 392.66px; */
  height: 614px;
  flex-direction: column;
}

.card {
  width: 100%;
  background: #fff;
  transition: all 0.3s ease-in-out;
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.card:hover {
  background: linear-gradient(122deg, rgba(181, 33, 255, 0.066) 0%, rgba(100, 76, 255, 0.066) 20%, rgba(50, 101, 255, 0.066) 69%, rgba(0, 128, 255, 0.066) 99%);
}

.card:not(.active) {
  flex: 1; /* 非激活状态宽度 */
  /* min-width: 80px; */
}

.card.active {
  flex: 5; /* 激活状态宽度 */
  /* min-width: 400px; */
}

.card-content {
  width: 100%;
  height: 100%;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: opacity 0.3s ease-in-out;
}

.active .card-content {
  opacity: 1;
}

.content-text {
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 32px;
  height: 98px;
}

.content-img {
  width: 100%;
  height: 150px;
  border-radius: 20px;
}

.card-title {
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 3;
  position: relative;
}

.title-header {
  font-size: 44px;
  font-weight: 400;
  line-height: 38px;
  margin-bottom: 4px;
  display: inline-flex;
  align-items: center;
}

.expand {
  transform: translate(-10%, -20%);
}

.title-text {
  width: 100%;
  font-size: 24px;
  font-weight: 400;
  line-height: 34px;
  margin-bottom: 24px;
}

.icon {
  position: absolute;
  right: 0;
  top: 0;
  height: 48px;
}
</style>
