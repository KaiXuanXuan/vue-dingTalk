<template>
  <div class="navigation-bar-container">
    <nav class="navigation-bar" ref="navbarRef">
      <!-- 左侧Logo -->
      <div class="logo-area">
        <img class="img" src="/dingTalkImgs/DM_20250429102859_001.PNG" />
      </div>

      <!-- 主导航菜单 -->
      <ul class="nav-menu">
        <li v-for="item in navItems" :key="item.key" @mouseleave="scheduleCloseNav">
          <div class="nav-item-wrapper">
            <div class="nav-trigger" @mouseenter="handleNavHover(item)">
              <button class="nav-button">
                <span class="button-content">
                  {{ item.label }}
                  <span v-if="item.dropdown" class="arrow">
                    <svg v-if="activeNav === item.key" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </span>
              </button>
            </div>

            <!-- 全屏下拉菜单 -->
            <!-- <transition name="dropdown"> -->
            <div v-show="activeNav === item.key" class="dropdown-panel" @mouseenter="cancelCloseNav" @mouseleave="scheduleCloseNav">
              <div class="dropdown-content">
                <component :is="item.component" v-show="item.dropdown && activeNav === item.key" />
              </div>
              <div class="dropdown-backdrop"></div>
            </div>
            <!-- </transition> -->
          </div>
        </li>
      </ul>

      <!-- 右侧功能区 -->
      <div class="action-area">
        <button class="action-btn">
          <span class="button-content secondary-button">注册钉钉</span>
        </button>
        <button class="action-btn">
          <span class="button-content primary-button">下载钉钉</span>
        </button>

        <button class="action-btn">
          <span class="button-content last-content" style="font-size: 14px">登录</span>
        </button>

        <!-- 字体切换 -->
        <div class="font-switcher">
          <div class="font-wrapper" @mouseenter="cancelCloseFont" @mouseleave="scheduleCloseFont">
            <button class="font-btn" @click="toggleFontMenu">
              <span class="button-content last-content">
                {{ currentFont }}
                <span class="arrow">
                  <svg v-if="showFontMenu === true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </span>
            </button>

            <!-- <transition name="dropdown"> -->
            <ul v-show="showFontMenu" class="font-menu">
              <li class="button-content font-item" v-for="font in fonts" :key="font" @click="changeFont(font)">
                {{ font }}
              </li>
            </ul>
            <!-- </transition> -->
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue';

// 导航配置
const navItems = [
  {
    key: 'product',
    label: '产品功能',
    dropdown: true,
    component: defineAsyncComponent(() => import('./dropdowns/ProductDropdown.vue')),
  },
  { key: 'case', label: '客户案例' },
  {
    key: 'solution',
    label: '解决方案',
    dropdown: true,
    component: defineAsyncComponent(() => import('./dropdowns/SolutionDropdown.vue')),
  },
  {
    key: 'service',
    label: '超级服务',
    dropdown: true,
    component: defineAsyncComponent(() => import('./dropdowns/ServiceDropdown.vue')),
  },
  {
    key: 'platform',
    label: '开放平台',
    dropdown: true,
    component: defineAsyncComponent(() => import('./dropdowns/PlatformDropdown.vue')),
  },
  { key: 'mall', label: '官方商城' },
];

// 响应式状态
const activeNav = ref(null);
const showFontMenu = ref(false);
const navbarRef = ref(null);
const currentFont = ref('简体中文');
const fonts = ['简体中文', '繁體中文', 'English', '日本語'];
const actions = ['注册钉钉', '下载钉钉', '登录'];

// 定时器引用
let navTimer = null;
let fontTimer = null;

// 导航菜单逻辑
const handleNavHover = (item) => {
  if (!item.dropdown) return;

  clearTimeout(navTimer);
  activeNav.value = item.key;
};

const scheduleCloseNav = () => {
  if (!activeNav.value) return;

  clearTimeout(navTimer);
  navTimer = setTimeout(() => {
    activeNav.value = null;
  }, 300);
};

const cancelCloseNav = () => {
  clearTimeout(navTimer);
};

// 字体切换逻辑
const toggleFontMenu = () => {
  showFontMenu.value = !showFontMenu.value;
};

const scheduleCloseFont = () => {
  fontTimer = setTimeout(() => {
    showFontMenu.value = false;
  }, 300);
};

const cancelCloseFont = () => {
  clearTimeout(fontTimer);
};

const changeFont = (font) => {
  currentFont.value = font;
  showFontMenu.value = false;
};
</script>

<style scoped>
.navigation-bar-container {
  --nav-height: 60px;
  --primary-color: #0089ff;
  /* --hover-bg: rgba(0, 0, 0, 0.05); */
  --hover-bg: rgba(209, 230, 250, 0.4);
  --transition-speed: 0.3s;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-height);
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
  display: flex;
  justify-content: center;
}

.navigation-bar {
  width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
}

.logo-area {
  width: 187px;
  height: 100%;
  display: flex;
  align-items: center;
}

.img {
  width: 100%;
  height: 31px;
}

.nav-menu {
  flex: 1;
  display: flex;
  height: 100%;
  margin: 0 24px;
  padding: 0;
  list-style: none;
  align-items: center;
  justify-content: center;
}

.nav-item-wrapper {
  position: static;
  height: 100%;
  width: 94px;
}

.nav-trigger {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1001;
}

.nav-button {
  height: 100%;
  padding: 0;
  border: none;
  font-size: 1rem;
  cursor: pointer;
}

.button-content {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #171a1d;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  transition: background-color var(--transition-speed), color var(--transition-speed);
}

.nav-button .button-content {
  padding: 0 10px;
  height: 36px;
}

.nav-trigger:hover .button-content {
  background-color: var(--hover-bg);
  color: var(--primary-color);
}

.font-switcher .button-content {
  height: 28px;
  cursor: pointer;
}

.arrow {
  margin-left: 6px;
  font-size: 0.8em;
  opacity: 0.8;
  transform: translateY(-1px);
}

.dropdown-panel {
  position: fixed;
  left: 0;
  right: 0;
  top: var(--nav-height);
  width: 100vw;
  min-height: 400px;
  max-height: calc(100vh - var(--nav-height));
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  transform-origin: top center;

  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.dropdown-content {
  max-width: 1440px;
  margin: 0 auto;
  padding: 30px 40px;
}

.dropdown-backdrop {
  position: fixed;
  top: var(--nav-height);
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.action-area {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.action-btn {
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 8px;
}

.action-btn .button-content {
  font-size: 12px;
  height: 29px;
  padding: 1px;
  transition: border-color var(--transition-speed), background-color var(--transition-speed);
}

.font-switcher {
  position: relative;
}

.font-menu {
  position: absolute;
  top: 100%;
  right: -20%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 8px 0;
  min-width: 100px;
  margin-top: 8px;
  list-style: none;
}

.font-menu li {
  padding: 8px 16px;
  transition: background-color var(--transition-speed);
  cursor: pointer;
}

.font-menu li:hover {
  background-color: #f8fafc;
}

.primary-button,
.secondary-button { 
  width: 70px;
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

.last-content:hover {
  color: #654cff;
  font-weight: 600;
}

.font-item:hover {
  color: #007fff;
}
</style>
