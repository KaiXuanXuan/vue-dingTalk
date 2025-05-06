<template>
  <div class="home-container" @scroll="throttledHandleScroll">
    <component-header class="header" ref="headerRef"></component-header>
    <component-slick-banner></component-slick-banner>
    <navbar class="sticky" ref="navbarRef" @changeNavIndex="handleChangeNavIndex"></navbar>
    <!-- 产品与功能介绍 -->
    <component-carousel ref="carouselRef"></component-carousel>
    <component-product></component-product>
    <!-- 解决方案与案例 -->
    <component-solution ref="solutionRef"></component-solution>
    <component-usage></component-usage>
    <!-- 升级钉钉 -->
    <component-upgrade ref="upgradeRef"></component-upgrade>
    <!-- 钉钉服务与安全 -->
    <component-security ref="securityRef"></component-security>
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
const solutionRef = ref(null);
const upgradeRef = ref(null);
const securityRef = ref(null);

onMounted(()=>{
  window.addEventListener('scroll', throttledHandleScroll);
})
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
  const header = headerRef.value.$el;
  const navbar = navbarRef.value.$el;
  const navbarTop = navbar.getBoundingClientRect().top;
  console.log(navbarTop);
  if (navbarTop <= 60) {
    header.style.opacity = '0';
    navbar.style.top = '0';
  } else {
    header.style.opacity = '1';
    navbar.style.top = '60px';
  }
}

const throttledHandleScroll = throttle(handleScroll, 100);

function handleChangeNavIndex(index){
  switch (index) {
    case 0:
      carouselRef.value.$el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      break;
    case 1:
      solutionRef.value.$el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      break;
    case 2:
      upgradeRef.value.$el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      break;
    case 3:
      securityRef.value.$el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      break;
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
