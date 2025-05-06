<template>
  <div class="navbar-container">
    <div class="navbar">
    <div class="nav-items" ref="navItemsRef" @click="handleNavItemClick($event)">
      <div class="active-overlay" ref="activeOverlay"></div>
      <div class="nav-item" v-for="(item, index) in titles" :key="index">
        <img class="img" :src="item.img" >
        <span>{{ item.title }}</span>
      </div> 
    </div>
  </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
const props = defineProps({
  titles: {
    type: Object,
    default: () => {},
  },
});

const emits = defineEmits(['switch']);

const navItemsRef = ref(null);
const activeOverlay = ref(null);
const navItemList = ref([]);
const activeIndex = ref(0);

onMounted(() => {
  navItemList.value = navItemsRef.value.querySelectorAll('.nav-item')
  init();
});

function init() {
  updateOverlay(navItemList.value[0]);
}

function updateOverlay(navItem) {
  const padding = 24; // 匹配 nav-item 的 padding-x
  
  const rect = navItem.getBoundingClientRect();
  const parentRect = navItem.parentElement.getBoundingClientRect();

  activeOverlay.value.style.width = `${rect.width}px`;
  activeOverlay.value.style.left = `${rect.left - parentRect.left}px`;
}

function handleNavItemClick(e) {
  const target = e.target;
  if (target.classList.contains('nav-items')) return; // 防止点击容器

  const navItem = target.closest('.nav-item')
  const currentIndex = Array.from(navItemList.value).indexOf(navItem);
  if ( currentIndex === activeIndex.value ) return; // 防止重复点击
  activeIndex.value = currentIndex;
  emits('switch', currentIndex);

  navItemList.value.forEach((nav) => nav.classList.remove('active'));
  navItem.classList.add('active');
  updateOverlay(navItem);
}

</script>
<style scoped>
.navbar-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.navbar {
  display: inline-block;
  padding: 8px;
  /* background: #f8f9fa; */
  border-radius: 50px;
  /* border: 1px solid #dee2e6; */
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) */
}

.nav-items {
  display: flex;
  position: relative;
  gap:24px;
}

.nav-item {
  font-size: 14px;
  line-height: 24px;
  padding: 8px 20px;
  max-height: 44px;
  /* border-radius: 50px; */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;
  white-space: nowrap;
  z-index: 2;
}

.img {
  width: 28px;
  height: 28px;
  margin-right: 2px;
}

/* Active overlay */
.active-overlay {
  position: absolute;
  top: 0;
  height: 100%;
  background: rgba(123, 130, 143, 0.08);
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}

.nav-item.active span{
  font-weight: 600;
  z-index: 2;
}
</style>
