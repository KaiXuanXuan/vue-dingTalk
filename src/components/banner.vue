<template>
  <div class="banner-container">
    <div ref="bannersWrapper" class="banners-wrapper" @mousemove="throttledHandleMouseMove" @mouseleave="throttledHandleMouseLeave">
      <div v-for="(item, index) in bannerItems" :key="index" class="card" @mouseover="handleHoverOn(index)">
        <div class="background-color" :style="{ background: `${item.bgColor}`, opacity: `${currentIndex === index ? 0 : 1}` }"></div>
        <div class="img img-noHover" :style="{ backgroundImage: `url(${item.imgNoHover})`, opacity: `${currentIndex === index ? 0 : 1}` }"></div>
        <div class="img img-hoverOn" :style="{ backgroundImage: `url(${item.imgHoverOn})`, opacity: `${currentIndex === index ? 1 : 0}` }"></div>
        <div class="card-content">
          <div class="content" :style="{ transform: `translateX(${currentIndex === index ? '-20px' : '0'})` }">
            <div class="card-title" :style="{ color: `${currentIndex === index ? '#fff' : '#181c1f'}` }">{{ item.title }}</div>
            <div class="card-text" :style="{ color: `${currentIndex === index ? '#eee' : 'rgba(23,26,29,.6)'}` }">{{ item.text.split(' ')[0] }}</div>
            <div class="card-text" :style="{ color: `${currentIndex === index ? '#eee' : 'rgba(23,26,29,.6)'}` }">{{ item.text.split(' ')[1] }}</div>
          </div>
          <div class="arrow arrow-right" :style="{ opacity: `${currentIndex === index ? 1 : 0}`, transform: `translateX(${currentIndex === index ? '20px' : '0'})` }">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
const props = defineProps({
  bannerItems: {
    type: Array,
    default: () => [],
  },
});

const bannersWrapper = ref(null); // 横幅容器元素
const bannersList = ref(); // 横幅元素列表
const scaleList = ref([]); // 存储每个卡片的缩放比例
const currentIndex = ref(-1);

// 静态变量
const MAX_SCALE = 1.2;
const throttleDelay = 50;
let BANNER_WIDTH = 0;
let BANNER_HEIGHT = 0;
let BANNER_CENTER_LIST = [];

onMounted(() => {
  // 确保DOM已挂载后获取元素
  bannersList.value = [...bannersWrapper.value.children];

  // 初始化卡片尺寸信息
  const firstBanner = bannersList.value[0];
  const rect = firstBanner.getBoundingClientRect();
  BANNER_WIDTH = rect.width;
  BANNER_HEIGHT = rect.height;

  // 初始化卡片中心坐标
  initBannerPositions();
});

// 初始化卡片中心坐标
function initBannerPositions() {
  BANNER_CENTER_LIST = bannersList.value.map((banner) => {
    const rect = banner.getBoundingClientRect();
    return rect.left + rect.width / 2;
  });
}

// 获取受影响的卡片索引
function getAffectedIndexes(index) {
  const affectedIndexes = [];
  if (index === 0) {
    affectedIndexes.push(0, 1);
  } else if (index === bannersList.value.length - 1) {
    affectedIndexes.push(index - 1, index);
  } else {
    affectedIndexes.push(index - 1, index, index + 1);
  }
  return affectedIndexes;
}

// 动态计算缩放比例
function calculateScale(distance) {
  const INFLUENCE_RADIUS = BANNER_WIDTH * 1.8; // 扩大影响范围
  const normalized = Math.min(distance / INFLUENCE_RADIUS, 1);

  // 使用缓动函数控制曲线
  const easeOutQuad = (t) => t * (2 - t); // 先快后慢
  const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1);

  // 混合曲线计算（70%三次+30%二次）
  const factor = 0.7 * easeInOutCubic(normalized) + 0.3 * easeOutQuad(normalized);
  return MAX_SCALE - factor * (MAX_SCALE - 1);
}

// 节流
function throttle(func, delay) {
  let timer = null;
  return function () {
    const context = this;
    const args = arguments;
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(context, args);
        timer = null;
      }, delay);
    }
  };
}

function handleMouseMove(e) {
  const mouseX = e.clientX;
  const banners = bannersList.value;

  // 遍历所有可能受影响的卡片
  for (let i = 0; i < banners.length; i++) {
    // 获取当前卡片中心坐标
    const currentCenter = BANNER_CENTER_LIST[i];
    // 计算相对距离（-1到1之间的值）
    const distance = (mouseX - currentCenter) / (BANNER_WIDTH / 2);
    // 计算当前卡片的影响范围
    const affectedIndexes = getAffectedIndexes(i);

    // 遍历所有可能受影响的卡片
    for (let j = 0; j < affectedIndexes.length; j++) {
      const index = affectedIndexes[j];
      const targetCenter = BANNER_CENTER_LIST[index];
      const targetDistance = Math.abs(mouseX - targetCenter);

      // 动态计算缩放比例（二次函数）
      const scale = calculateScale(targetDistance);
      scaleList.value[index] = scale;

      // 应用变化效果
      banners[index].style.width = scale * BANNER_WIDTH + 'px';
      banners[index].style.height = scale * BANNER_HEIGHT + 'px';
    }
  }
}

function handleMouseLeave() {
  for (let i = 0; i < bannersList.value.length; i++) {
    bannersList.value[i].style.width = BANNER_WIDTH + 'px';
    bannersList.value[i].style.height = BANNER_HEIGHT + 'px';
  }
  handleHoverOn(-1);
}

function handleHoverOn(index) {
  if (currentIndex.value === index) return;
  currentIndex.value = index;
}

// 节流鼠标移动触发的回调函数
const throttledHandleMouseMove = throttle(handleMouseMove, throttleDelay);
const throttledHandleMouseLeave = throttle(handleMouseLeave, throttleDelay);
</script>

<style scoped>
.banner-container {
  display: flex;
  justify-content: center;
  align-items: end;
  height: 132px;
  margin-bottom: 20px;
  /* padding: 0 64px; */
  width: 100%;
}

.banners-wrapper {
  display: flex;
  /* background: #f0f0f0; */
  justify-content: center;
  align-items: end;
  position: relative;
  overflow-x: hidden;
  min-width: 900px;
}

.card {
  width: 282px;
  height: 132px;
  margin-right: 24px;
  padding: 0 24px;
  /* border: 2px solid #ddd; */
  transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.card:hover {
  /* background: #666; */
  color: #fff;
}

.card:last-child {
  margin-right: 0;
}

.background-color {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
}

.img-noHover {
  z-index: 2;
}

.img-hoverOn {
  transition: opacity 0.2s ease-in-out;
}

.card-content {
  width: 234px;
  z-index: 3;
  display: flex;
  align-items: end;
  justify-content: space-between;
}

.card-title {
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  color: #181c1f;
  margin-bottom: 6px;
}

.card-text {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(23, 26, 29, 0.6);
}

.arrow-right {
  transition: transform 0.3s ease-in-out;
}
</style>
