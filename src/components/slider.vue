<template>
  <div class="slider-container">
    <div class="slider-wrapper">
      <div class="slider-arrow">
        <div class="arrow-left arrow" @click="handleArrowClick('left')">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="arrow-right arrow" @click="handleArrowClick('right')">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
      <div class="slick-list" ref="slickList">
        <div class="slick-slide-container" v-for="(item, index) in sliderItems" :key="index" @click="handleSlideClick(index)">
          <div class="slick-slide" :class="index === currentActiveIndex ? 'active' : ''" :key="index">
            <div class="content">
              <div class="content-img" :style="{ backgroundImage: `url(${item.img})` }"></div>
              <div class="content-text">
                <p>{{ item.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const defaultSliderItems = [
  { img: 'https://picsum.photos/200/300?random=1', text: '测试标题1' },
  { img: 'https://picsum.photos/200/300?random=2', text: '测试标题2' },
  { img: 'https://picsum.photos/200/300?random=3', text: '测试标题3' },
  { img: 'https://picsum.photos/200/300?random=4', text: '测试标题4' },
  { img: 'https://picsum.photos/200/300?random=5', text: '测试标题5' },
  { img: 'https://picsum.photos/200/300?random=6', text: '测试标题6' },
  { img: 'https://picsum.photos/200/300?random=7', text: '测试标题7' },
  { img: 'https://picsum.photos/200/300?random=8', text: '测试标题8' },
  { img: 'https://picsum.photos/200/300?random=9', text: '测试标题9' },
  { img: 'https://picsum.photos/200/300?random=10', text: '测试标题10' },
  { img: 'https://picsum.photos/200/300?random=11', text: '测试标题11' },
  { img: 'https://picsum.photos/200/300?random=12', text: '测试标题12' },
  { img: 'https://picsum.photos/200/300?random=13', text: '测试标题13' },
  { img: 'https://picsum.photos/200/300?random=14', text: '测试标题14' },
  { img: 'https://picsum.photos/200/300?random=15', text: '测试标题15' },
];

const emits = defineEmits (['clickSlide'])
const props = defineProps ({
  slideList: {
    type: Array,
    default: () => [],
  },
});

onMounted(() => {
  sliderItems.value = props.slideList.length > 0 ? props.slideList : defaultSliderItems;
});

const slickList = ref(null);
const sliderItems = ref([])
const currentLastIndex = ref(8);
const currentActiveIndex = ref(0);

// 处理滑块点击事件
function handleSlideClick(index) {
  currentActiveIndex.value = index;
  emits('clickSlide', index);
}

// 处理箭头点击事件
function handleArrowClick(direction) {
  const slickBar = slickList.value;
  const slickLength = slickBar.children.length;

  let leftCount = Math.max(currentLastIndex.value - 8, 0); // 左侧剩余的滑块
  let rightCount = Math.max(slickLength - currentLastIndex.value, 0); // 右侧剩余的滑块

  if (direction === 'left' && leftCount > 0) {
    translateX(direction, leftCount);
  } else if (direction === 'right' && rightCount > 0) {
    translateX(direction, rightCount);
  }
}

// 滑块滑动
function translateX(direction, count, maxStep = 3) {
  if (direction === 'left') {
    currentLastIndex.value -= count >= maxStep ? maxStep : 1;
  } else {
    currentLastIndex.value += count >= maxStep ? maxStep : 1;
  }
  const translateX = -(currentLastIndex.value - 8) * 143;
  Array.from(slickList.value.children).forEach((item) => {
    item.style.transform = `translateX(${translateX}px)`;
  });
}
</script>

<style scoped>
.slider-container {
  margin-bottom: 20px;
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slider-wrapper {
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  padding: 0 37px;
  position: relative;
}

.arrow {
  width: 44px;
  height: 44px;
  background-color: #f0f0f0;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.arrow:hover {
  background-color: #e0e0e0;
}

.arrow-left {
  left: 0%;
}

.arrow-right {
  left: 100%;
}

.slick-list {
  width: 1126px;
  height: 100%;
  overflow: hidden;
  display: flex; /* 添加此行，让 slick-slide 横向排列 */
}

.slick-slide-container {
  flex: 0 0 143px;
  width: 143px;
  height: 100%;
  transition: transform 0.3s linear;
}

.slick-slide {
  flex: 0 0 125px; /* 禁止伸缩，固定宽度 */
  background-color: #dddddd02;
  border-radius: 20px;
  width: 125px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s, font-weight 0.3s, backdrop-filter 0.3s;
}

.slick-slide:hover {
  background-color: #dddddd25;
}

.slick-slide.active {
  background-color: #dddddd4c;
  font-weight: bold;
}

.content {
  display: flex;
  flex-direction: column; /* 设置内容为垂直排列 */
  align-items: center;
}

.content-img {
  width: 48px;
  height: 48px;
  margin-bottom: 16px;
  background-size: cover;
  background-position: center;
}

.content-text {
  text-align: center;
}
</style>
