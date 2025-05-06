<template>
  <div class="item-container" :style="{ background: `${!item.title && !item.content ? 'linear-gradient(270deg,#f7f8fa 60%,rgba(255,0,0,0))' : '#f7f8fa'}` }">
    <div class="img-container">
      <div class="item-img no-img" v-if="!item.img"></div>
      <img class="item-img has-img" :src="item.img" v-else />
    </div>
    <div class="info-container">
      <div class="item-info" v-if="!item.title && !item.content">
        <div class="no-info no-title"></div>
        <div class="no-info no-content"></div>
      </div>
      <div class="item-info" v-else>
        <div class="info-title">{{ item.title }}</div>
        <div class="info-content">{{ item.content }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
});
</script>
<style scoped>
.item-container {
  display: flex;
  padding: 0 12px;
  /* justify-content: center; */
  justify-content: flex-start;
  align-items: center;
  /* background: linear-gradient(270deg,#f7f8fa 60%,rgba(255,0,0,0)); */
  border-radius: 16px;
  overflow: hidden;
  width: 308px;
  height: 72px;
}

.img-container {
  width: 48px;
  height: 48px;
  margin-right: 8px;
  border-radius: 8px;
  overflow: hidden;
}

.no-img {
  width: 100%;
  height: 100%;
  background: #fff;
}

.has-img {
  width: 100%;
  height: 100%;
}

.info-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.no-info {
  height: 19px;
  background: #fff;
  border-radius: 6px;
}

.no-title {
  width: 87px;
  margin-bottom: 10px;
}

.no-content {
  width: 168px;
}

.info-title {
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  color: #181c1f;
}

.info-content {
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: #4c5157;
}
</style>
