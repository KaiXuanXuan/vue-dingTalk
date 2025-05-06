<template>
  <div class="card-container" @mouseenter="handleHover('on')" @mouseleave="handleHover('off')">
    <div class="card-title">
      <img class="img" :src="card.img" />
      <div class="title">{{ card.title }}</div>
    </div>
    <Transition name="fade">
      <div class="card-content" v-if="!isHovered">{{ card.content }}</div>
    </Transition>
    <div class="card-price">
      <span class="before-price">￥</span>
      <span class="price">{{ card.price }}</span>
      <span class="after-price">{{ card.unit }} > </span>
    </div>
    <Transition name="slide">
      <div class="card-button" v-if="isHovered">
        <button class="button">立即购买</button>
      </div>
    </Transition>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  card: {
    type: Object,
  },
});

const isHovered = ref(false);

function handleHover(state) {
  isHovered.value = state === 'on' ? true : false;
}
</script>
<style scoped>
.card-container {
  /* width: 100%; */
  flex: 0 0 calc(100% / 3 - 16px);
  height: 220px;
  padding: 24px;
  position: relative;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: #f7f8fa;
  cursor: pointer;
  overflow: hidden;
}

.card-container:hover {
  background: #fff;
  box-shadow: 0 2px 10px 0 rgba(44, 50, 83, 0.01), 0 4px 48px 0 rgba(44, 50, 83, 0.16);
}

.card-title {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.img {
  width: 48px;
  height: 48px;
  margin-right: 12px;
  border-radius: 8px;
}

.title {
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
}

.card-content {
  margin-top: 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: #4c5157;
}

.card-price {
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  width: 100%;
  cursor: pointer;
  margin-top: 24px;
  height: 100%;
}

.before-price {
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
}

.price {
  font-size: 36px;
  font-weight: 600;
  line-height: 36px;
}

.after-price {
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
}

.card-button {
  width: 100%;
  margin-top: 14px;
}

.button {
  width: 100%;
  background: linear-gradient(105deg, #c676ff, #654cff 41%, #405eff 75%, #007fff 99%);
  color: #fff;
  padding: 9px 12px;
  border-radius: 8px;
  cursor: pointer;
}

.button:hover {
  background: linear-gradient(112deg, #d6a3ff, #9185ff 34%, #808eff 66%, #72a1ff 99%);
}

/* 新增过渡样式 */
.fade-enter-active {
  transition: all 0.2s ease-in-out;
}

.fade-enter-from {
  position: absolute;
  opacity: 0;
}

.slide-enter-active {
  transition: all 0.2s ease-in-out;
}

.slide-enter-from {
  position: absolute;
  transform: translateY(25%);
}
</style>
