<template>
  <div class="card-container" :style="{ background: `${card.bgColor}` }" @mouseover="handleHover('on')" @mouseleave="handleHover('off')">
    <img class="img" :src="card.img" />
    <div class="card-title">{{ card.title }}</div>
    <Transition name="fade" mode="out-in">
      <div class="card-hover-on" v-if="active">
        <div class="card-price card-price-1">
          <span class="before-price">￥</span>
          <span class="price"> {{ card.price }} </span>
          <span class="after-price">{{ card.unit }} ></span>
        </div>
        <div class="card-buttons">
          <button class="button button-primary">{{ card.btn1 }}</button>
          <button class="button button-secondary">{{ card.btn2 }}</button>
        </div>
      </div>
      <div class="card-no-hover" v-else>
        <div class="card-content">
          <p>{{ card.content.split(' ')[0] }}</p>
          <p>{{ card.content.split(' ')[1] }}</p>
        </div>
        <div class="card-price card-price-2">
          <span class="before-price">￥</span>
          <span class="price"> {{ card.price }} </span>
          <span class="after-price"> {{ card.unit }}</span>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const props = defineProps({
  card: {
    type: Object,
  },
});

const active = ref(false);

function handleHover(state) {
  active.value = state === 'on' ? true : false;
}
</script>
<style scoped>
.card-container {
  width: 100%;
  height: 178px;
  padding: 28px 32px 0 32px;
  position: relative;
  border-radius: 24px;
  /* overflow: hidden; */
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-container:hover {
  box-shadow: 0 6px 16px 0 rgba(50, 73, 198, 0.02), 0 8px 48px 0 rgba(50, 73, 198, 0.12);
}

.img {
  width: 80px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -40%);
}

.card-title {
  font-size: 24px;
  font-weight: 600;
  line-height: 34px;
}

.card-content {
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-no-hover,
.card-hover-on {
  height: 100%;
}

.card-price {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  margin-top: 12px;
}

.before-price {
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
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

.card-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 8px;
}

.button {
  color: #725500;
  border-radius: 8px;
  padding: 4px 12px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
}

.button-primary {
  background: linear-gradient(112deg, #fff4e4, #ffe8c6 99%);
}

.button-primary:hover {
  background: linear-gradient(112deg, #ffe8c6, #ffdba1 99%);
}

.button-secondary {
  background: #fff;
}

.button-secondary:hover {
  background: linear-gradient(0deg, hsla(219, 8%, 52%, 0.16), hsla(219, 8%, 52%, 0.16)), #fff;
}

/* 新增过渡样式 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
  width: 100%;
}
</style>
