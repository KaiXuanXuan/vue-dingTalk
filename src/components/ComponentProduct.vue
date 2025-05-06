<template>
  <div class="product-container">
    <div class="product-title">
      <div class="title-main">钉钉v7.6.55全新上线</div>
      <div class="title-sub">钉钉新功能</div>
    </div>
    <div class="product-list">
      <product-card v-for="(card, index) in productList" :key="index" :card="card" class="product-card"></product-card>
    </div>
    <div class="product-more">
      <button class="button">一键迁移服务 ></button>
      <button class="button">了解更多AI服务 ></button>
    </div>
  </div>
</template>
<script setup>
import {ref} from 'vue'
import productCard from './productCard.vue';

const productList = ref([
  {
    title: '钉钉AI 解锁全新办公方式！',
    imgNoHover: '/dingTalkImgs/DM_20250429102859_209.JPEG',
    imgHoverOn: '/dingTalkImgs/DM_20250429102859_210.JPEG',
    textMain: ['钉钉365会员', '即使沟通', '钉钉Agoal'],
    textSub: ['支持AI生成动态头像','支持AI总结消息集合','AI写目标，支持切换深度思考大模型'],
    hoverBgColor: 'rgb(161,195,255)'
  },
  {
    title: '钉钉AI 为企业，也为个人！',
    imgNoHover: '/dingTalkImgs/DM_20250429102859_211.JPEG',
    imgHoverOn: '/dingTalkImgs/DM_20250429102859_212.JPEG',
    textMain: ['钉钉AI助理', '智能AI合同', '场景+AI'],
    textSub: ['ToB企业协同中的AI探索&实践', '3个只能合同AI秒招，告别繁琐！', '让AI为设计创新服务'],
    hoverBgColor: 'rgb(174, 158, 255)'
  },
  {
    title: '钉钉AI 开启你的超级个体！',
    imgNoHover: '/dingTalkImgs/DM_20250429102859_213.JPEG',
    imgHoverOn: '/dingTalkImgs/DM_20250429102859_214.JPEG',
    textMain: ['视频会议', 'AI助理', '钉钉文档'],
    textSub: ['AI时代的开会方式，让高效会议自然发生', '你的超级助理，办公新潮流', '全新AI加持，智能创造，如此简单'],
    hoverBgColor: 'rgb(161, 191, 255)'
  }
])

</script>
<style scoped>
.product-container{
  width: 100%;
  padding: 0 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 120px;
}

.product-title{
  width: 1200px;
  height: 76px;
  margin-bottom: 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title-main{
  font-size: 30px;
  line-height: 42px;
  margin-bottom: 8px;
}

.title-sub{
  font-size: 18px;
  color: #4c5157;
}

.product-list{
  width: 1200px;
  height: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 34px;
}

.product-card {
  flex-shrink: 1;
  margin-right: 24px;
}
  
.product-card:last-child  {
  margin-right: 0;
}

.product-more{
  width: 1200px;
  display: flex;
  justify-content: center;
  gap:4px;
}

.button {
  height: 36px;
  padding: 0 12px;
  color: #007fff;
  flex-shrink: 1;
  cursor: pointer;
  transition: all 0.3s ease; 
  font-size:14px;
  border-radius: 10px;
}

.button:hover {
  color: #fff;
  background-color: #150468dc;
}
</style> 