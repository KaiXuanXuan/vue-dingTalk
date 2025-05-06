<template>
  <div class="card-container">
    <div class="card-list">
      <div v-for="(card, index) in cards" :key="index" class="card" :class="{ active: activeIndex === index }" @mouseenter="activeIndex = index">
        <!-- <div class="card-active" :style="{ opacity: activeIndex === index ? 1 : 0 }" v-if="activeIndex === index"> -->
        <div class="card-active" v-show="activeIndex === index">
          <div class="card-image" :style="{ backgroundImage: `url(${card.bgImg} )` }">
            <div class="card-image-mask"></div>
          </div>
          <div class="card-content">
            <div class="content-header">{{ card.title }}</div>
            <div class="content-text">{{ card.content }}</div>
            <div class="buttons">
              <button class="button primary-button">{{ card.btn1 }}</button>
              <button class="button secondary-button">{{ card.btn2 }}</button>
            </div>
          </div>
          <img class="img-right" :src="card.img" />
        </div>

        <div class="card-negative">
          <img :src="card.img" class="img-negative" />
          <div class="title-negative">{{ card.title }}</div>
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
  margin-bottom: 32px;
}

.card-list {
  display: flex;
  /* gap: 18px; */
  height: 180px;
  border-radius: 20px;
  overflow: hidden;
  width: 1200px;
  /* max-width: 1200px; */
}

.card {
  /* flex: 1; */
  height: 100%;
  background: #ffffff;
  transition: all 0.3s ease-in-out;
  /* border-radius: 20px; */
  cursor: pointer;
  overflow: hidden;
  position: relative;
}

.card-active {
  height: 100%;
  overflow: hidden;
  position: relative;
  padding: 2.8rem 0 0 1.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.card:not(.active) {
  flex: 1;
  min-width: 80px;
}

.card.active {
  /* flex: 3; */
  flex: 0 0 30rem;
  min-width: 400px;
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
  background: linear-gradient(122deg, rgba(181, 33, 255, 0.121) 0%, rgba(100, 76, 255, 0.112) 20%, rgba(50, 101, 255, 0.116) 69%, rgba(0, 128, 255, 0.153) 99%);
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
  line-height: 26px;
  font-size: 18px;
  font-weight: 600;
  /* margin-bottom: 12px; */
  background-size: contain;
  background-repeat: no-repeat;
  color: rgba(0, 0, 0, 0.85);
}

.content-text {
  text-wrap: nowrap;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  text-overflow: ellipsis;
  transition: all 0.3s 0.1s;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 14px;
}

.img-right {
  position: absolute;
  width: 135px;
  height: 135px;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  z-index: 3;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
}

.active .img-right {
  opacity: 1;
}

.card-negative {
  height: 100%;
  width: 100%;
  background-color: #f7f8fa;
  border-right: 1px solid rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 1;
}

.active .card-negative {
  opacity: 0;
}

.card-list > .card:last-child .card-negative {
  border-right: none;
}

.title-negative {
  font-size: 12px;
  font-weight: 600;
  line-height: 24px;
}

.img-negative {
  width: 48px;
  height: 48px;
  margin-bottom: 4px;
}

.button {
  box-sizing: border-box;
  margin-right: 6px;
  border-radius: 10px;
  /* height: 44px; */
  padding: 0 10px;
  transition: all 0.3s ease;
  font-size: 14px;
  font-weight: 400;
  line-height: 30px;
  cursor: pointer;
}

.primary-button {
  background: linear-gradient(112deg, rgb(181, 33, 255) 0%, rgb(101, 76, 255) 20%, rgb(50, 102, 255) 69%, rgb(0, 127, 255) 99%);
  color: #fff;
}

.primary-button:hover {
  background: linear-gradient(112deg, rgba(181, 33, 255, 0.66) 0%, rgba(100, 76, 255, 0.747) 20%, rgba(50, 101, 255, 0.655) 69%, rgba(0, 128, 255, 0.696) 99%);
}

.secondary-button {
  color: #007fff;
  border: 1px solid #007fff;
  background: #fff;
}

.secondary-button:hover {
  background: #eee;
}
</style>
