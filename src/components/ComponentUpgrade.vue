<template>
  <div class="upgrade-container">
    <div class="usage-title">升级钉钉</div>
    <div class="upgrade-card-container">
      <upgrade-card v-for="(card, index) in cards1" :card="card"></upgrade-card>
    </div>
    <div class="button-container">
      <button class="button">版本对比 ></button>
    </div>

    <div class="usage-title">钉钉爆款推荐区</div>
    <div class="recommend-container">
      <solution-title-banner :titles="titles" @switch="handleSwitch"></solution-title-banner>
      <div class="recommend-card-container">
        <recommend-card v-for="(card, index) in cards21" :card="card" v-show="activeIndex === 0"></recommend-card>
        <recommend-card v-for="(card, index) in cards22" :card="card" v-show="activeIndex === 1"></recommend-card>
        <recommend-card v-for="(card, index) in cards23" :card="card" v-show="activeIndex === 2"></recommend-card>
        <recommend-card v-for="(card, index) in cards24" :card="card" v-show="activeIndex === 3"></recommend-card>
        <recommend-card v-for="(card, index) in cards25" :card="card" v-show="activeIndex === 4"></recommend-card>
        <recommend-card v-for="(card, index) in cards26" :card="card" v-show="activeIndex === 5"></recommend-card>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import upgradeCard from './upgradeCard.vue';
import solutionTitleBanner from './solutionTitleBanner.vue';
import recommendCard from './recommendCard.vue';

const activeIndex = ref(0);

const cards1 = [
  {
    img: '/dingTalkImgs/DM_20250429102859_327.PNG',
    bgColor: 'linear-gradient(233deg, rgb(99, 61, 176) 25%, rgb(74, 49, 142) 51%, rgb(38, 35, 99) 90%)',
    title: '365会员',
    content: '面向个人用户 超级个体，脱颖而出',
    price: '0.46',
    unit: '/天起',
    btn1: '立即购买',
    btn2: '注册钉钉',
  },
  {
    img: '/dingTalkImgs/DM_20250429102859_328.PNG',
    bgColor: 'linear-gradient(233deg, rgb(61, 181, 255) -4%, rgb(20, 159, 244) 51%, rgb(0, 140, 224) 100%)',
    title: '创业版',
    content: '面向微小企业 管理有序、协同高效、形象专业',
    price: '980',
    unit: '/年',
    btn1: '立即购买',
    btn2: '了解更多',
  },
  {
    img: '/dingTalkImgs/DM_20250429102859_329.PNG',
    bgColor: 'linear-gradient(233deg, rgb(82, 164, 255) 0%, rgb(0, 127, 255) 50%, rgb(0, 110, 224) 99%)',
    title: '专业版',
    content: '面向中小企业 深度协同、资产安全、灵活开放',
    price: '9800',
    unit: '/年',
    btn1: '快速体验',
    btn2: '预约咨询',
  },
  {
    img: '/dingTalkImgs/DM_20250429102859_330.PNG',
    bgColor: 'linear-gradient(233deg, rgb(60, 100, 255) 0%, rgb(6, 50, 184) 96%), rgb(200, 213, 255)',
    title: '专属版',
    content: '面向中大企业 安全合规、自主可控、专属AI',
    price: '98000',
    unit: '/年起',
    btn1: '快速体验',
    btn2: '预约咨询',
  },
];

const titles = [
  { title: 'IM&通讯录', img: '/dingTalkImgs/DM_20250429102859_331.PNG' },
  { title: '知识&文档', img: '/dingTalkImgs/DM_20250429102859_332.PNG' },
  { title: '日程&会议', img: '/dingTalkImgs/DM_20250429102859_333.PNG' },
  { title: '组织管理', img: '/dingTalkImgs/DM_20250429102859_334.PNG' },
  { title: '业务工具', img: '/dingTalkImgs/DM_20250429102859_335.PNG' },
  { title: '其他热销', img: '/dingTalkImgs/DM_20250429102859_336.PNG' },
];

const cards21 = [
  {
    img: '/dingTalkImgs/DM_20250429102859_337.JPEG',
    title: '上下级',
    content: '打通集团和分子公司通讯录，实现员工跨单位找人、集团通知全员触达、子公司灵活自治',
    price: '400',
    unit: '/年起',
  },
  {
    img: '/dingTalkImgs/DM_20250429102859_338.PNG',
    title: '钉消息',
    content: '可通过短信、语音、电话等方式对重要信息进行强触达，且消息查看情况一目了然',
    price: '100',
    unit: '起',
  },
  {
    img: '/dingTalkImgs/DM_20250429102859_339.PNG',
    title: '钉钉工电话',
    content: '一站式企业电话服务解决方案，随时随地电话联络，高效触达',
    price: '250',
    unit: '起',
  },
];
const cards22 = [
  {
    img: '/dingTalkImgs/c21.jpg',
    title: '文档',
    content: '支持多人在线实时协同编辑 文档 Al 让创作更简单 「/」插入丰富元素 智能创作从文档开始',
    price: '180',
    unit: '/年起',
  },
  {
    img: '/dingTalkImgs/c22.jpg',
    title: '知识库',
    content: '高效收集、整理和分享知识 让团队经验有效传承与复用 促进企业知识创新 成为学习型组织',
    price: '180',
    unit: '/年起',
  },
  {
    img: '/dingTalkImgs/c23.jpg',
    title: '钉盘',
    content: '高效收集、整理和分享知识 让团队经验有效传承与复用 促进企业知识创新 成为学习型组织',
    price: '180',
    unit: '/年起',
  },
  {
    img: '/dingTalkImgs/c24.jpg',
    title: '协作空间',
    content: '用崭新的方式组织您的工作，告别传统低效管理，让所有人真正协同起来',
    price: '980',
    unit: '/年起',
  },
];
const cards23 = [
  {
    img: '/dingTalkImgs/c31.png',
    title: '钉钉会议',
    content: 'AI时代的开会方式，专业的软硬一体会议解决方案',
    price: '198',
    unit: '/月起',
  },
  {
    img: '/dingTalkImgs/c32.png',
    title: '钉钉会议Rooms',
    content: '涵盖预定管理、投屏会议、企业文化宣传、设备运维的一站式解决方案',
    price: '1000',
    unit: '/年/设备',
  },
  {
    img: '/dingTalkImgs/c33.png',
    title: '钉钉直播',
    content: '开启企业直播新方式，让企业培训更简单',
    price: '399',
    unit: '/月起',
  },
  {
    img: '/dingTalkImgs/c32.png',
    title: '智能会议室',
    content: '满足快速预定、多层级管理、设备运维、企业文化宣传等需求的会议室管理系统',
    price: '498',
    unit: '/年/会议室',
  },
  {
    img: '/dingTalkImgs/c35.jpg',
    title: 'SIP会议室连接器',
    content: 'SIP会议系统与钉钉会议无缝连接',
    price: '385',
    unit: '/月起',
  },
];
const cards25 = [
  {
    img: '/dingTalkImgs/c51.png',
    title: '宜搭',
    content: '业务创新，一搭就行｜开启企业AI数智化之旅',
    price: '2988',
    unit: '/年起',
  },
  {
    img: '/dingTalkImgs/c52.png',
    title: '多维表',
    content: '一张表，数字化管理全覆盖',
    price: '300',
    unit: '/人/年',
  },
  {
    img: '/dingTalkImgs/c53.jpg',
    title: '钉钉项目（Teambition）',
    content: '一站式项目管理平台，标准化流程提高项目交付效率，灵活开放满足多样化需求',
    price: '699',
    unit: '/人/年',
  },
  {
    img: '/dingTalkImgs/c54.png',
    title: '智能财务',
    content: '基于钉钉 OA 底座，连接「业、票、财、税」的一站式财税管理平台',
    price: '3500',
    unit: '/年起',
  },
  {
    img: '/dingTalkImgs/c55.png',
    title: '智能差旅',
    content: '与钉钉底座深度融合的一站式差旅管理平台，助力企业节省费用',
    price: '4800',
    unit: '/年起',
  },
  {
    img: '/dingTalkImgs/c56.png',
    title: '智能合同',
    content: '与钉钉深度融合的业财法一体化连接的全生命周期合同管理产品，助力企业业务经营效率',
    price: '3500',
    unit: '/年起',
  },
];
const cards24 = [
  {
    img: '/dingTalkImgs/c41.png',
    title: '智能人事',
    content: '花名册、员工入转调离、人事合同，为企业提供完整的组织管理系统，助力企业提升效能',
    price: '40',
    unit: '/人/年',
  },
  {
    img: '/dingTalkImgs/c42.png',
    title: '智能招聘',
    content: '钉钉官方出品一站式招聘流程管理系统，从找人才到发放offer全覆盖，让招聘更简单高效',
    price: '3999',
    unit: '/账号/年',
  },
  {
    img: '/dingTalkImgs/c43.png',
    title: '智能薪酬',
    content: '系统帮助企业实现薪酬工作的数字化、自动化和智能化',
    price: '3000',
    unit: '/年起',
  },
  {
    img: '/dingTalkImgs/c44.jpg',
    title: 'Agoal',
    content: '一款覆盖战略解码、战略推进、战略评价等核心环节的管理工具，为企业战略落地保驾护航',
    price: '299',
    unit: '/人/年起',
  },
  {
    img: '/dingTalkImgs/c45.png',
    title: '组织大脑',
    content: '一款帮助企业高效盘点人才资源，合理配置组织结构，提升组织力的智能化产品',
    price: '10000',
    unit: '/年起',
  },
  {
    img: '/dingTalkImgs/c46.jpg',
    title: 'OA审批',
    content: '智能、开放、灵活的一体化业务、管理平台',
    price: '4388',
    unit: '/年起',
  },
  {
    img: '/dingTalkImgs/c47.png',
    title: '钉钉假勤',
    content: '全行业、全场景劳动力管理解决方案',
    price: '8000',
    unit: '/年起',
  },
];
const cards26 = [
  {
    img: '/dingTalkImgs/c61.png',
    title: '钉钉企业邮箱',
    content: '深度融合钉钉应用，邮件存储不限容量，协同办公更高效，送企业自定义专属域名',
    price: '0.16',
    unit: '/天/账号起',
  },
  {
    img: '/dingTalkImgs/c62.jpg',
    title: '钉钉快办',
    content: '面向企业/团队的任务管理工具',
    price: '20',
    unit: '/月/人',
  },
  {
    img: '/dingTalkImgs/c63.png',
    title: '宜搭教育',
    content: '开放、灵活、自定义、可生长的数字校园管理数字化平台',
    price: '6980',
    unit: '/年起',
  },
  {
    img: '/dingTalkImgs/c64.png',
    title: '钉钉直播教育',
    content: '适用于学校各班级独立开播场景',
    price: '1990',
    unit: '/月起',
  },
  {
    img: '/dingTalkImgs/c65.jpg',
    title: '钉钉专业版·基础教育',
    content: '基础教育客户可专享350万分钟视频会议时长包、20万分钟直播时长包',
    price: '9800',
    unit: '/年',
  },
];

function handleSwitch (index) {
  activeIndex.value = index;
}
</script>
<style scoped>
.upgrade-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.usage-title {
  font-size: 30px;
  line-height: 42px;
  margin-bottom: 52px;
  margin-top: 120px;
}

.upgrade-card-container {
  width: 1200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
}

.recommend-container {
  width: 1200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 120px;
}

.recommend-card-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
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
  font-size: 14px;
  border-radius: 10px;
}

.button:hover {
  color: #fff;
  background-color: #150468dc;
}
</style>
