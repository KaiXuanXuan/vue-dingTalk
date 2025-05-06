<template>
  <div class="infinite-scroller" @mouseenter="pauseScroll" @mouseleave="resumeScroll">
    <div class="scroller-content" :style="contentStyles">
      <div v-for="(item, index) in duplicatedItems" :key="index" class="scroll-item">
        <slot :item="item">
          <img :src="item.img" class="img" alt="scroll img" />
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  duration: {
    type: Number,
    default: 20,
  },
  direction: {
    type: String,
    default: 'left', // 'left' 或 'right'
    validator: (value) => ['left', 'right'].includes(value),
  },
  pauseOnHover: {
    type: Boolean,
    default: true,
  },
});

const animationState = ref('running');
const containerWidth = ref(0);
const contentWidth = ref(0);

// 复制元素用于无缝衔接
const duplicatedItems = computed(() => [...props.items, ...props.items]);

// 计算动画方向
const contentStyles = computed(() => ({
  animation: `${props.direction}-scroll ${props.duration}s linear infinite`,
  animationPlayState: animationState.value,
  // 当内容宽度小于容器宽度时保持居中
  justifyContent: contentWidth.value > containerWidth.value ? 'flex-start' : 'center', 
}));

// 测量容器尺寸
const measureSizes = () => {
  const container = document.querySelector('.infinite-scroller');
  const content = document.querySelector('.scroller-content');

  if (container && content) {
    containerWidth.value = container.offsetWidth;
    contentWidth.value = content.scrollWidth / 2; // 由于元素被复制了两次
  }
};

// 暂停动画
const pauseScroll = () => {
  if (props.pauseOnHover) {
    animationState.value = 'paused';
  }
};

// 恢复动画
const resumeScroll = () => {
  animationState.value = 'running';
};

onMounted(() => {
  measureSizes();
  // window.addEventListener('resize', measureSizes);
});
</script>

<style scoped>
.infinite-scroller {
  /* width: 100vw; */
  width: 99vw;
  height: 100px;  
  overflow: hidden;
  position: relative;
}

.scroller-content {
  display: inline-flex;
  white-space: nowrap;
  will-change: transform; /* 优化动画性能 */
  height: 100%;
}

.scroll-item {
  flex-shrink: 0;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 100%;
  background:linear-gradient(270deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,.9));
  border-radius: 12px;
  cursor: pointer;
  margin-right: 24px;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

@media (prefers-reduced-motion: reduce) {
  .scroller-content {
    animation: none !important;
  }
}
</style>

<style>
@keyframes left-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes right-scroll {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
