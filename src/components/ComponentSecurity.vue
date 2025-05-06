<template>
  <div class="security-container">
    <div class="secure-title">提供全方位服务，7*24随时响应你的需求</div>
    <div class="service-container">
      <div class="service" v-for="(card, index) in cards1" :key="index" :style="{ background: `${index % 2 === 0 ? 'rgb(244, 243, 255)' : 'rgb(242, 245, 255)'}` }">
        <div class="service-title">{{ card.title }}</div>
        <img class="service-img" :src="card.img" />
      </div>
    </div>
    <div class="secure-title">安全是企业的生命线，钉钉提供全面安全保障</div>
    <div class="secure-container">
      <div class="secure-1">
        <div class="secure-card" v-for="(card, index) in cards2" :key="index">
          <div class="card-content-1">
            <div class="title1">{{ card.title1 }}</div>
            <div class="title2">{{ card.title2 }}</div>
            <div class="content">{{ card.content }}</div>
          </div>
          <img class="img1" :src="card.img" />
        </div>
      </div>
      <div class="secure-2">
        <div class="card-content-2">
          <div class="title2">{{ card3.title }}</div>
          <div class="content">{{ card3.content }}</div>
        </div>
        <div class="card-img">
          <img class="img2" v-for="(img, index) in card3.imgList" :key="index" :src="img" />
        </div>
      </div>
      <div class="button-container">
        <button class="button">安全合规中心 ></button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const cards1 = [
  { title: 'AI客服', img: '/dingTalkImgs/DM_20250429102859_350.PNG' },
  { title: '帮助中心', img: '/dingTalkImgs/DM_20250429102859_351.PNG' },
  { title: '技术支持', img: '/dingTalkImgs/DM_20250429102859_352.PNG' },
  { title: '原厂驻场服务', img: '/dingTalkImgs/DM_20250429102859_353.PNG' },
  { title: '新手指南', img: '/dingTalkImgs/DM_20250429102859_354.PNG' },
  { title: '迁移服务', img: '/dingTalkImgs/DM_20250429102859_355.PNG' },
];

const cards2 = [
  {
    title1: '多链路保障',
    title2: '组织数字化安全',
    content: '钉钉采用国际安全标准和要求，主动保障组织通讯录及架构信息，多种链路加密保障沟通内容安全、协作知识库文档权限精细化管理',
    img: '/dingTalkImgs/DM_20250429102859_356.PNG',
  },
  {
    title1: '八重防护',
    title2: '业务数字化安全',
    content: '钉钉采用业内解决方案，对钉钉各类应用配置八重防护手段，开放平台各类组件接口原生安全，混合云本地个性化业务专属保障',
    img: '/dingTalkImgs/DM_20250429102859_357.PNG',
  },
];

const card3 = {
  title: '安全专业认证',
  content: 'ISO 27001:2013信息安全管理体系标准认证公安部信息系统三级等级保护认证',
  imgList: [
    '/dingTalkImgs/DM_20250429102859_358.PNG',
    '/dingTalkImgs/DM_20250429102859_359.PNG',
    '/dingTalkImgs/DM_20250429102859_360.PNG',
    '/dingTalkImgs/DM_20250429102859_361.PNG',
    '/dingTalkImgs/DM_20250429102859_362.PNG',
    '/dingTalkImgs/DM_20250429102859_363.PNG',
  ],
};
</script>
<style scoped>
.security-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.service-container {
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 120px;
}

.service {
  flex: 0 0 calc(33.33% - 16px);
  cursor: pointer;
  height: 280px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 0.5px solid rgba(0, 0, 0, 0.08);
  border-radius: 24px;
}

.service:hover {
  box-shadow: 0 6px 16px 0 rgba(50, 73, 198, 0.02), 0 8px 48px 0 rgba(50, 73, 198, 0.12);
}

.service-title {
  font-size: 24px;
  font-weight: 600;
  line-height: 34px;
  color: '#181c1f';
  display: flex;
  align-items: center;
}

.service-img {
  width: 100%;
}

.secure-container {
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 120px;
}

.secure-title {
  font-size: 30px;
  line-height: 42px;
  margin-bottom: 52px;
}

.secure-1 {
  width: 100%;
  height: 268px;
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
}

.secure-card {
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  background: #f7f8fa;
  border: 0.5px solid rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  padding: 60px;
  padding-right: 0;
}

.title1,
.title2 {
  font-size: 24px;
  font-weight: 600;
  line-height: 34px;
}

.title1 {
  color: rgb(78, 60, 198);
}

.title2 {
  color: #181c1f;
  margin-bottom: 8px;
}

.content {
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: #4c5157;
}

.img1 {
  width: 239px;
  height: 239px;
}

.secure-2 {
  width: 1200px;
  height: 360px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background: #f7f8fa;
  border: 0.5px solid rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  padding: 60px;
}

.card-content-2 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 300px;
  height: 100%;
  box-sizing: content-box;
}

.card-img {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: flex-end;
  justify-content: flex-end;
  width: calc(100% - 300px);
}

.img2 {
  height: 95px;
  width: 199px;
}

.button-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 34px;
}

.button {
  height: 36px;
  padding: 0 12px;
  color: #007fff;
  flex-shrink: 1;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
  border-radius: 10px;
}

.button:hover {
  color: #fff;
  background-color: #150468dc;
}
</style>
