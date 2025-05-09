<template>
  <div class="home-container" ref="homeRef" @scroll="throttledHandleScroll" @scrollend="handleScrollEnd">
    <component-header class="header" ref="headerRef"></component-header>
    <component-slick-banner></component-slick-banner>
    <navbar class="sticky" ref="navbarRef" @changeNavIndex="handleChangeNavIndex" :scrollIndex="scrollIndex"></navbar>
    <!-- 产品与功能介绍 -->
    <component-carousel ref="carouselRef" class="section-item"></component-carousel>
    <component-product ref="productRef"></component-product>
    <!-- 解决方案与案例 -->
    <component-solution ref="solutionRef" class="section-item"></component-solution>
    <component-usage ref="usageRef"></component-usage>
    <!-- 升级钉钉 -->
    <component-upgrade ref="upgradeRef" class="section-item"></component-upgrade>
    <!-- 钉钉服务与安全 -->
    <component-security ref="securityRef" class="section-item"></component-security>
    <component-footer></component-footer>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import navbar from '@/components/navbar.vue';
import ComponentHeader from '@/components/ComponentHeader.vue';
import ComponentSlickBanner from '@/components/ComponentSlickBanner.vue';
import ComponentProduct from '@/components/ComponentProduct.vue';
import ComponentCarousel from '@/components/ComponentCarousel.vue';
import ComponentSolution from '@/components/ComponentSolution.vue';
import ComponentUsage from '@/components/ComponentUsage.vue';
import ComponentUpgrade from '@/components/ComponentUpgrade.vue';
import ComponentSecurity from '@/components/ComponentSecurity.vue';
import ComponentFooter from '@/components/ComponentFooter.vue';

const homeRef = ref(null);
const headerRef = ref(null);
const navbarRef = ref(null);
const carouselRef = ref(null);
const productRef = ref(null);
const solutionRef = ref(null);
const usageRef = ref(null);
const upgradeRef = ref(null);
const securityRef = ref(null);
const scrollIndex = ref(0);
const banInput =ref(false);

// 节流
function throttle(func, delay) {
  let timer = null;
  return function () {
    const context = this;
    const args = arguments;
    if (!timer) {
      timer = setTimeout(function () {
        func.apply(context, args);
        timer = null;
      }, delay);
    }
  };
}

function handleScroll() {
  if (!headerRef.value || !navbarRef.value) return;

  // 滚动到一定位置隐藏header的逻辑
  const header = headerRef.value.$el;
  const navbar = navbarRef.value.$el;
  const navbarTop = navbar.getBoundingClientRect().top;
  if (navbarTop <= 60) {
    header.style.opacity = '0';
    navbar.style.top = '0';
  } else {
    header.style.opacity = '1';
    navbar.style.top = '60px';
  }

  const index = getScrollIndex();
  if (index === scrollIndex.value || banInput.value) return; // 防止重复传入
  scrollIndex.value = index;
}

function handleScrollEnd() {
  banInput.value = false;
}

function getScrollIndex() {
  if (isOverlapping(navbarRef.value.$el, securityRef.value.$el)) {
    return 3;
  }
  if (isOverlapping(navbarRef.value.$el, upgradeRef.value.$el)) {
    return 2;
  }
  if (isOverlapping(navbarRef.value.$el, solutionRef.value.$el)) {
    return 1;
  }
  return 0;
}

function isOverlapping(element1, element2) {
  return element1.getBoundingClientRect().top + 65 >= element2.getBoundingClientRect().top; // + 65 来实现覆盖检测
  //  return element1.getBoundingClientRect().top >= element2.getBoundingClientRect().top
}

const throttledHandleScroll = throttle(handleScroll, 100);

function handleChangeNavIndex(index) {
  const container = homeRef.value; // 获取容器元素引用
  let targetElement = null;

  switch (index) {
    case 0:
      targetElement = carouselRef.value.$el;
      break;
    case 1:
      targetElement = solutionRef.value.$el;
      break;
    case 2:
      targetElement = upgradeRef.value.$el;
      break;
    case 3:
      targetElement = securityRef.value.$el;
      break;
  }

  if (targetElement && container) {
    // 计算元素相对于容器的位置
    const elementRect = targetElement.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // 计算元素在容器坐标系中的位置（需考虑容器当前滚动位置）
    const relativeTop = elementRect.top - containerRect.top + container.scrollTop;

    // 计算最终滚动位置并应用偏移
    const targetScrollTop = relativeTop - 60;

    // 使用容器的滚动方法
    banInput.value = true;
    container.scrollTo({
      top: targetScrollTop,
      behavior: 'smooth',
    });
  }
}
</script>
<style scoped>
.home-container {
  height: 100vh;
  overflow: auto;
}

.header {
  transition: opacity 0.3s ease-in-out;
}

.sticky {
  position: sticky;
  top: 0;
  z-index: 100;
  transition: top 0.3s ease-in-out;
  margin-top: -140px;
}
</style>
