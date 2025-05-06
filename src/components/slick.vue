<template>
  <div class="banner-container">
    <div class="scroller" id="scroller" ref="scroller">
      <div v-for="(item, index) in duplicatedItems" :key="index" class="scroll-item">
        <video v-if="!item.img" :src="item.video" style="width: 100%; height: 100%" loop autoplay muted>
          <!-- <source :src="item.video" type="video/mp4" /> -->
        </video>
        <img v-else :src="item.img" style="width: 100%; height: 100%" />
        <div class="item-content">
          <div class="content-title">{{ item.title }}</div>
          <div class="content-text">{{ item.text }}</div>
          <button class="button primary-button">{{ item.btn1 }}</button>
          <button class="button secondary-button">{{ item.btn2 }}</button>
        </div>
      </div>
    </div>
    <div class="indicators" ref="indicators">
      <div v-for="(item, index) in slickItems" :key="index" class="indicator" @click="handleClickIndicator(index)">
        <div class="indicator-progress"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue';

const scroller = ref(null); // 滚动容器
const indicators = ref(null); // 指示器容器
const currentIndex = ref(0); // 当前索引
let progressInterval = null; // 进度条动画定时器
let switchNextTimer = null; // 切换动画定时器

const progressDelay = 5000; // 进度条动画延迟
const switchDelay = 500; // 切换动画延迟
// const originalItems = [1, 2, 3, 4, 5, 6];
// const duplicatedItems = [...originalItems, ...originalItems];
let duplicatedItems = ref([]);

const props = defineProps({
  slickItems: {
    type: Array,
    default: () => [],
  },
});

onMounted(() => {
  duplicatedItems.value = [...props.slickItems, ...props.slickItems];
  nextTick(() => {
    init();
  });
});

// 初始化
function init() {
  startProgressAnimation();
}

// 进度条动画
function startProgressAnimation() {
  clearTimeout(progressInterval);
  const indicator = indicators.value.children[currentIndex.value];
  if (!indicator) return;

  const progressBar = indicator.querySelector('.indicator-progress');
  progressBar.style.transition = 'none';
  progressBar.style.width = '0%';

  void progressBar.offsetWidth; // 强制重绘
  progressBar.style.transition = `width ${progressDelay / 1000}s linear`;
  progressBar.style.width = '100%';
  progressInterval = setTimeout(switchToNext, progressDelay); // 进度条动画涨满执行切换
}

// 切换到指定索引
function switchToIndex(index) {
  if(!indicators.value) return;
  // 更新当前索引
  const prevIndex = currentIndex.value;
  const indicator = indicators.value.children[prevIndex];
  currentIndex.value = index % props.slickItems.length;

  // 重置过渡
  if (scroller.value.style.transition === 'none') {
    scroller.value.style.transition = `transform ${switchDelay / 1000}s ease`;
  }
  scroller.value.style.transform = `translateX(-${index * 100}vw)`;

  // 立即清空当前进度条
  const progressBar = indicator.querySelector('.indicator-progress');
  progressBar.style.transition = 'none';
  progressBar.style.width = '0%';
  startProgressAnimation();

  // 处理无缝切换（切换动画播放完毕时，去除动画，无感切换至第一项）
  if (index >= props.slickItems.length) {
    switchNextTimer = setTimeout(() => {
      scroller.value.style.transition = 'none';
      scroller.value.style.transform = `translateX(0)`;
    }, switchDelay);
  }
}

// 切换到下一个项目
function switchToNext() {
  const nextIndex = currentIndex.value + 1;
  switchToIndex(nextIndex);
}

// 处理指示器点击事件
function handleClickIndicator(index) {
  if (index === currentIndex.value) return;

  clearTimeout(progressInterval);
  clearTimeout(switchNextTimer);
  switchToIndex(index);
}
</script>
<style scoped>
.banner-container {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.scroller {
  display: flex;
  transition: transform 0.5s ease;
}

.scroll-item {
  /* padding-top: 74px;   */
  box-sizing: border-box;
  height: 752px;
  flex: 0 0 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  position: relative;
}

.item-content {
  z-index: 2;
  width: 1200px;
  position: absolute;
  top: 0;
}

.content-title {
  font-size: 54px;
  font-weight: 600;
  padding-top: 74px;
  margin-bottom: 12px;
}

.content-text {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 58px;
}

.button {
  box-sizing: border-box;
  margin-right: 12px;
  border-radius: 10px;
  height: 44px;
  padding: 0 22px;
  transition: all 0.3s ease;
  font-size: 18px;
  line-height: 43px;
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

.indicators {
  position: absolute;
  left: 27%;
  top: 48%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 2;
}

.indicator {
  width: 36px;
  height: 4px;
  background: rgba(38,57,135,.1);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.indicator::after {
  content: '';
  width: 100%;
  height: 100%;
  background: #0088ff80;
  position: absolute;
  left: 0;
  top: 0;
  display: none;
}

.indicator:hover::after {
  display: block;
}

.indicator-progress {
  position: absolute;
  left: 0;
  top: 0;
  width: 0%;
  height: 100%;
  background: #007fff;
  z-index: 3;
  transition: none;
}

/* .item-1 {
  background: #ff6b6b;
}
.item-2 {
  background: #4ecdc4;
}
.item-3 {
  background: #45b7d1;
}
.item-4 {
  background: #96ceb4;
}
.item-5 {
  background: #ffd166;
}
.item-6 {
  background: #edc873;
} */
</style>
