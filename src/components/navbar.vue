<template>
  <div class="navbar-container">
    <div class="navbar">
      <div class="nav-items" ref="navItemsRef" @click="handleNavItemClick($event)">
        <div class="active-overlay" ref="activeOverlay"></div>
        <div class="nav-item active">产品功能介绍</div>
        <div class="nav-item">解决方案与案例</div>
        <div class="nav-item">升级钉钉</div>
        <div class="nav-item">钉钉服务与安全</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue';
const navItemsRef = ref(null);
const activeOverlay = ref(null);
const navItemList = ref([]);
const currentIndex = ref(0);

const props = defineProps({
  scrollIndex: {
    type: Number,
    default: 0,
  },
});
const emits = defineEmits(['changeNavIndex']);

onMounted(() => {
  navItemList.value = navItemsRef.value.querySelectorAll('.nav-item');
  init();
});

watch(
  () => props.scrollIndex,
  (newIndex) => {
    updateActiveState(newIndex);
  }
);

function init() {
  updateOverlay(navItemList.value[0]);
}

function updateOverlay(target) {
  const padding = 24; // 匹配 nav-item 的 padding-x
  const rect = target.getBoundingClientRect();
  const parentRect = target.parentElement.getBoundingClientRect();

  activeOverlay.value.style.width = `${rect.width}px`;
  activeOverlay.value.style.left = `${rect.left - parentRect.left}px`;
}

function handleNavItemClick(e) {
  const target = e.target;
  if (target.classList.contains('nav-items')) return;

  navItemList.value.forEach((nav) => nav.classList.remove('active'));
  target.classList.add('active');
  updateOverlay(target);

  const activeIndex = Array.from(navItemList.value).indexOf(target);
  currentIndex.value = activeIndex;
  emits('changeNavIndex', activeIndex);
}

const updateActiveState = (index) => {
  if (index === currentIndex.value) return;

  const navItem = navItemList.value[index];
  navItemList.value.forEach((nav) => nav.classList.remove('active'));
  const target = navItemList.value[index];
  target.classList.add('active');
  updateOverlay(target);

  currentIndex.value = index;
};
</script>
<style scoped>
.navbar-container {
  display: flex;
  justify-content: center;
  padding-top: 16px;
  margin-bottom: 120px;
  top: 60px;
}

.navbar {
  display: inline-block;
  padding: 4px;
  background: hsla(0, 0%, 100%, 0.8);
  border-radius: 50px;
  border: 1px solid hsla(210, 5%, 54%, 0.16);
  box-shadow: 1px 3px 32px 0 rgba(50, 73, 198, 0.08), 6px 16px 48px 0 rgba(50, 73, 198, 0.12);
}

.nav-items {
  display: flex;
  position: relative;
  gap: 4px;
}

.nav-item {
  padding: 9px 16px;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;
  white-space: nowrap;
  z-index: 2;
  font-size: 14px;
  color: #83898f;
}

/* Hover overlay */
.nav-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: hsla(219, 8%, 52%, 0.06);
  border-radius: 50px;
  opacity: 0;
  transition: opacity 0.2s ease;
  z-index: -1;
}

.nav-item:hover::before {
  opacity: 1;
}

/* Active overlay */
.active-overlay {
  position: absolute;
  top: 0;
  height: 100%;
  background: hsla(219, 8%, 52%, 0.1);
  border-radius: 50px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}

.nav-item.active {
  color: #181c1f;
  position: relative;
  z-index: 2;
  font-weight: 500;
}
</style>
