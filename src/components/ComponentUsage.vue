<template>
  <div class="usage-container">
    <div class="primary-container">
      <p class="primary-title">优秀的企业案例，助力业务提效</p>
    </div>
    <div class="expand-card">
      <vertical-expand-card :cards="cards1" :defaultActiveIndex="1"></vertical-expand-card>
      <vertical-expand-card :cards="cards2" :defaultActiveIndex="0"></vertical-expand-card>
      <vertical-expand-card :cards="cards3" :defaultActiveIndex="1"></vertical-expand-card>
    </div>
    <div class="primary-container">
      <p class="primary-title primary-title2">钉钉陪伴企业组织在AI时代持续进步领先潮头</p>
      <p class="secondary-title">102位科技创业者，用创新回答2025</p>
    </div>
    <div class="img-container">
      <img src="/dingTalkImgs/dalao.png" />
    </div>
    <div class="scrollbar-container">
      <scrollbar :items="items1" :duration="quickDuration"></scrollbar>
      <scrollbar :items="items2" :duration="slowDuration"></scrollbar>
      <scrollbar :items="items3" :duration="quickDuration"></scrollbar>
      <scrollbar :items="items4" :duration="slowDuration"></scrollbar>
    </div>
    <div class="button-container">
      <button class="button">查看全部案例 ></button>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
import verticalExpandCard from '@/components/verticalExpandCard.vue';
import scrollbar from '@/components/scrollbar.vue';

const cards1 = [
  {
    num: '200',
    title: '门店数字化转型',
    icon: 'dingTalkImgs/DM_20250429102859_255.PNG',
    content: '以专属钉钉为底座，创新性地采用“三群四色”高效管理门店运营；同时兼顾数据安全与企业文化沉淀，实现从总部到近200+家直营门店的移动办公新阵地构建。',
    img: '/dingTalkImgs/DM_20250429102859_256.JPEG',
  },
  {
    num: '60%',
    title: '业务迭代周期缩短',
    icon: 'dingTalkImgs/DM_20250429102859_257.PNG',
    content: '喜马拉雅选择钉钉作为公司的工作平台，通过为产品、研发、运营等部门带来的新协同工作方式，将开发迭代周期缩短三分之二，切实有效地提升了研发效能。',
    img: '/dingTalkImgs/DM_20250429102859_258.JPEG',
  },
];
const cards2 = [
  {
    num: '2000',
    title: '员工移动办公升级',
    icon: 'dingTalkImgs/DM_20250429102859_259.PNG',
    content: '中铁十四局大盾构工程有限公司借助专业版钉钉与宜搭平台的强大功能，成功构建了一套全新的数字化管理系统，不仅极大地提升公司跨区域协作效率，还解决了复杂考勤管理、招投标体系搭建等一系列问题。',
    img: '/dingTalkImgs/DM_20250429102859_260.JPEG',
  },
  {
    num: '2400',
    title: '流程规范落地TB',
    icon: 'dingTalkImgs/DM_20250429102859_261.PNG',
    content: '睿能科技作为国内工业自动控制领域的领头羊，借助 Teambition 实现本土化的 IPD 及 ITR 流程，有效提升了运营效率和响应速度。',
    img: '/dingTalkImgs/DM_20250429102859_262.JPEG',
  },
];
const cards3 = [
  {
    num: '400',
    title: '门店精细化管理',
    icon: 'dingTalkImgs/DM_20250429102859_263.PNG',
    content: '重庆新沁园食品有限公司拥有近400家连锁门店和两千多名员工，主营烘焙业务，用面包，蛋糕缔造甜蜜事业。如何实现门店的快速支援调动、解决内部部门的管理需求以及减少HR和财务人员的繁琐工作。',
    img: '/dingTalkImgs/DM_20250429102859_264.JPEG',
  },
  {
    num: '450',
    title: '表单和流程',
    icon: 'dingTalkImgs/DM_20250429102859_265.PNG',
    content: '柳钢集团在使用钉钉后，致力为设备赋能赋智，实现新突破，打开新局面，力争在数字化建设道路上更进一步！',
    img: '/dingTalkImgs/DM_20250429102859_266.JPEG',
  },
];

const quickDuration = 50;
const slowDuration = 80;  
const items1 = [
  { img: 'dingTalkImgs/DM_20250429102859_268.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_269.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_270.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_271.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_272.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_273.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_274.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_275.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_276.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_277.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_278.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_279.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_280.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_281.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_282.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_283.PNG' },
];
const items2 = [
  { img: 'dingTalkImgs/DM_20250429102859_284.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_285.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_286.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_287.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_288.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_289.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_290.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_291.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_292.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_293.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_294.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_295.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_296.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_297.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_298.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_299.PNG' },
];
const items3 = [
  { img: 'dingTalkImgs/DM_20250429102859_300.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_301.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_302.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_303.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_304.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_305.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_306.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_307.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_308.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_309.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_310.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_311.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_312.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_313.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_314.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_315.PNG' },
];
const items4 = [
  { img: 'dingTalkImgs/DM_20250429102859_316.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_317.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_318.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_319.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_320.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_321.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_322.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_323.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_324.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_325.PNG' },
  { img: 'dingTalkImgs/DM_20250429102859_326.PNG' },
];
</script>
<style scoped>
.usage-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #f0f2f5;
  padding: 120px 0;
  margin-top: 120px;
}

.primary-container {
  margin-bottom: 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.primary-title {
  font-size: 32px;
  line-height: 42px;
}

.primary-title2 {
  margin-bottom: 8px;
}

.secondary-title {
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  color: #4c5157;
}

.expand-card {
  width: 1200px;
  height: 100%;
  display: flex;
  gap: 22px;
  margin-bottom: 120px;
}

.img-container {
  width: 100%;
  height: 100%;
  margin-bottom: 52px;
}

.scrollbar-container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
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
  font-size:14px;
  border-radius: 10px;
}

.button:hover {
  color: #fff;
  background-color: #150468dc;
}
</style>
