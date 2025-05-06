<template>
  <div class="card-container">
  <div class="card-wrapper">
    <div class="card">
      <div class="card-image" @mouseover="handleHover('On')" @mouseout="handleHover('Off')">
        <img :src="card.imgNoHover" class="card-img img-noHover"  ref="imgNoHoverRef"/>
        <img :src="card.imgHoverOn" class="card-img img-hoverOn"  ref="imgHoverOnRef"/>
        <div class="card-title" ref="cardTitleRef">{{ card.title.split(' ')[0] }}<br>{{ card.title.split(' ')[1]  }}</div>
        <div class="arrow-right arrow" @click="handleArrowClick('right')" ref="arrowRightRef">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
      <div class="card-content">
        <div v-for="(item, index) in card.textMain" :key="index" class="card-text">
          <div class="text-main">{{ item }}</div>
          <div class="text-sub">{{ card.textSub[index] }}</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script setup>
import { computed, ref, onMounted } from 'vue';

const props = defineProps({
  card: {
    type: Object,
    default: () => {},
  },
});

onMounted(()=>{
  handleHover('Off');
})


const isHoverImg = ref(false);
const arrowRightRef = ref(null);
const imgNoHoverRef = ref(null);
const imgHoverOnRef = ref(null);
const cardTitleRef = ref(null);

function handleHover(status) {
  const arrowRight = arrowRightRef.value;
  const imgNoHover = imgNoHoverRef.value;
  const imgHoverOn = imgHoverOnRef.value;
  const cardTitle = cardTitleRef.value;
  if (status === 'On') {
    isHoverImg.value = true;
    arrowRight.style.backgroundColor = props.card.hoverBgColor;
    arrowRight.style.color = '#fff';
    imgNoHover.style.opacity = 0;
    imgHoverOn.style.opacity = 1;
    cardTitle.style.opacity = 1;
  } else {
    isHoverImg.value = false;
    arrowRight.style.backgroundColor = 'rgba(83, 88, 97, .1)';
    arrowRight.style.color = '#000';
    imgNoHover.style.opacity = 1;
    imgHoverOn.style.opacity = 0;
    cardTitle.style.opacity = 0;
  }
}
</script>
<style scoped>
.card-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-wrapper {
  width: 384px;
  height: 500px;
  background-color: #fff;
  flex-shrink: 1;
}

.card {
  width: 100%;
  height: 100%;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  overflow: hidden;
}

.card-image {
  box-sizing: border-box;
  height: 239px;
  width: 100%;
  padding: 0 20px 40px 24px;
  position: relative;
}

.card-img {
  transition: opacity 0.2s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
}

.card-title {
  transition: opacity 0.2s ease-in-out;
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  position:absolute;
  bottom: 15%;
  line-height: 34px;
}

.arrow {
  width: 36px;
  height: 36px;
  background-color: rgba(83, 88, 97, .1);
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.arrow-right {
  right: 0;
  bottom: 10%;
  transform: translate(-50%, -50%);
}

.card-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 26px 24px 12px 24px;
  background: #f5f9ff;
}

.card-text {
  padding-bottom: 14px;
  margin-bottom: 14px;
  border-bottom: 1px solid hsla(210, 5%, 54%, 0.16);
}

.card-text:last-child {
  margin-bottom: 0;
}

.card-text:last-child {
  border-bottom: none;
}

.text-main {
  font-size: 18px;
  font-weight: 400;
  color: #171a1d;
  margin-bottom: 2px;
}

.text-main:hover {
  color: #007fff;
  font-weight: 600;
}

.text-sub {
  font-size: 14px;
  font-weight: 400;
  color: rgba(24, 28, 31, 0.6);
}
</style>
