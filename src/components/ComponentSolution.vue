<template>
  <div class="solution-container">
    <div class="title-container primary-container">
      <p class="primary-title">沉淀10年，150万家真实企业</p>
      <p class="primary-title">各类场景难题和对应解决方案</p>
    </div>
    <solutionTitleBanner :titles="titles" @switch="handleSwitch"></solutionTitleBanner>
    <solutionItemBanner :items="items1" v-show="activeIndex === 0"></solutionItemBanner>
    <solutionItemBanner :items="items2" v-show="activeIndex === 1"></solutionItemBanner>
    <solutionItemBanner :items="items3" v-show="activeIndex === 2"></solutionItemBanner>
    <solutionItemBanner :items="items4" v-show="activeIndex === 3"></solutionItemBanner>
    <solutionItemBanner :items="items5" v-show="activeIndex === 4"></solutionItemBanner>
    <div class="title-container secondary-container">
      <p class="secondary-title">钉钉10年间与客户共创，沉淀优秀企业<span class="highlight">开会</span>解决方案与你分享</p>
    </div>
    <horizontalExpandCard :cards="cards11" v-show="activeIndex === 0"></horizontalExpandCard>
    <horizontalExpandCard :cards="cards12" v-show="activeIndex === 1"></horizontalExpandCard>
    <horizontalExpandCard :cards="cards13" v-show="activeIndex === 2"></horizontalExpandCard>
    <horizontalExpandCard :cards="cards14" v-show="activeIndex === 3"></horizontalExpandCard>
    <horizontalExpandCard :cards="cards15" v-show="activeIndex === 4"></horizontalExpandCard>
    <div class="title-container secondary-container">
      <p class="secondary-title">这些优秀企业都在用钉钉<span class="highlight">开好一场会</span></p>
    </div>
    <horizontalExpandCard2 :cards="cards21" v-show="activeIndex === 0"></horizontalExpandCard2>
    <horizontalExpandCard2 :cards="cards22" v-show="activeIndex === 1"></horizontalExpandCard2>
    <horizontalExpandCard2 :cards="cards23" v-show="activeIndex === 2"></horizontalExpandCard2>
    <horizontalExpandCard2 :cards="cards24" v-show="activeIndex === 3"></horizontalExpandCard2>
    <horizontalExpandCard2 :cards="cards25" v-show="activeIndex === 4"></horizontalExpandCard2>
    <div class="button-container">
      <button class="button">点击咨询，了解更多 ></button>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, shallowRef, reactive } from 'vue';
import solutionTitleBanner from './solutionTitleBanner.vue';
import solutionItemBanner from './solutionItemBanner.vue';
import horizontalExpandCard from './horizontalExpandCard.vue';
import horizontalExpandCard2 from './horizontalExpandCard2.vue';

const activeIndex = ref(0);

const titles = reactive([
  { title: '战略执行', img: '/dingTalkImgs/DM_20250429102859_215.PNG' },
  { title: '目标设定', img: '/dingTalkImgs/DM_20250429102859_216.PNG' },
  { title: '知识协作', img: '/dingTalkImgs/DM_20250429102859_217.PNG' },
  { title: '项目管理', img: '/dingTalkImgs/DM_20250429102859_218.PNG' },
  { title: '高效开会', img: '/dingTalkImgs/DM_20250429102859_219.PNG' },
]);

const items1 = {
  list1: [
    {},
    { img: '/dingTalkImgs/DM_20250429102859_220.PNG', title: '主管李霞', content: '下属目标已完成，但公司目标没达成' },
    { img: '/dingTalkImgs/DM_20250429102859_221.JPEG', title: '高管吕文斌', content: '团队只盯自己业务，未利用好资源' },
    {},
  ],
  list2: [
    { img: '/dingTalkImgs/DM_20250429102859_222.JPEG', title: '员工孙晓', content: '公司战略与员工脱节，工作内容照旧' },
    { img: '/dingTalkImgs/DM_20250429102859_223.PNG', title: 'CEO钱鹏', content: '缺少全员目标地图，无法一杆子到底' },
    { img: '/dingTalkImgs/DM_20250429102859_224.PNG', title: '组长陆凤婷', content: '进展不清楚，工作容易和战略脱钩' },
  ],
};
const items2 = {
  list1: [
    {},
    { img: '/dingTalkImgs/21.jpg', title: '主管张强', content: '员工各干各的，互相之间没有配合' },
    { img: '/dingTalkImgs/22.jpg', title: '销售杨受林', content: '每年用 KPI 考核，改OKR后不会写' },
    {},
  ],
  list2: [
    { img: '/dingTalkImgs/23.jpg', title: '财务李强才', content: '目标形式改变，但每天工作没区别' },
    { img: '/dingTalkImgs/24.PNG', title: 'HR杨柳', content: '目标版本多，手动更新效率低' },
    { img: '/dingTalkImgs/25.PNG', title: '财务张梦', content: '目标形式改了，每天工作没区别' },
  ],
};
const items3 = {
  list1: [
    {},
    { img: '/dingTalkImgs/31.jpg', title: '行政沈可', content: '文件零散缺少统一管理，信息检索难' },
    { img: '/dingTalkImgs/32.jpg', title: '经理王鹏', content: '离线文件多，人肉查找效率低' },
    {},
  ],
  list2: [
    { img: '/dingTalkImgs/33.jpg', title: '运营李亚鹏', content: '跨部门协作不同频，项目推进难度大' },
    { img: '/dingTalkImgs/34.jpg', title: '客服徐菲', content: '知识库进展难察觉，对外信息易过时' },
    { img: '/dingTalkImgs/35.jpg', title: '销售周万宇', content: 'PPT注重排版和美化，制作费时' },
  ],
};
const items4 = {
  list1: [{}, { img: '/dingTalkImgs/41.jpg', title: '研发部', content: '需求频繁变更、开发资源浪费' }, { img: '/dingTalkImgs/42.jpg', title: '市场部', content: '市场活动多、拉通难，动态传递难' }, {}],
  list2: [
    { img: '/dingTalkImgs/43.jpg', title: '销售部', content: '铁三角协同效率低，进展不透明' },
    { img: '/dingTalkImgs/44.jpg', title: '服务部', content: '客户问题响应慢，满意度提升难' },
    { img: '/dingTalkImgs/45.jpg', title: '总经办', content: '会议难跟踪，议而不决、决而不果' },
  ],
};
const items5 = {
  list1: [
    {},
    { img: '/dingTalkImgs/51.jpg', title: '员工陆宜', content: '会议缺乏规划，低效且决策难以实施' },
    { img: '/dingTalkImgs/52.jpg', title: 'HR王欢', content: '高层会议存在安全隐患和干扰' },
    {},
  ],
  list2: [
    { img: '/dingTalkImgs/53.jpg', title: 'CEO梁民华', content: '公司战略与员工脱节，工作内容照旧' },
    { img: '/dingTalkImgs/54.PNG', title: '运营李克', content: '跨国会议语言、时区等问题难解决' },
    { img: '/dingTalkImgs/55.jpg', title: 'PMO李杰', content: '会议常有冲突，需要会议纪要回溯' },
  ],
};
// const itemsList = [items1, items2, items3, items4, items5];
// const items = shallowRef(items1);

const cards11 = [
  {
    title: 'Agoal',
    content: 'AI时代的一体化目标管理',
    img: '/dingTalkImgs/DM_20250429102859_225.PNG',
    btn1: '免费试用',
    btn2: '查看详情',
  },
  {
    title: '钉钉项目',
    content: '项目关联目标 保障落地',
    img: '/dingTalkImgs/DM_20250429102859_226.PNG',
    btn1: '免费试用',
    btn2: '查看详情',
  },
  {
    title: '钉闪会',
    content: '围绕目标 会议同步进展',
    img: '/dingTalkImgs/DM_20250429102859_227.PNG',
    btn1: '免费试用',
    btn2: '查看详情',
  },
];
const cards12 = [
  {
    title: 'Agoal',
    content: '对齐不同目标管理方式',
    img: '/dingTalkImgs/DM_20250429102859_225.PNG',
    btn1: '免费试用',
    btn2: '查看详情',
  },
  {
    title: '钉钉文档',
    content: '周月报围绕目标沉淀总结',
    img: '/dingTalkImgs/DM_20250429102859_231.PNG',
    btn1: '免费试用',
    btn2: '查看详情',
  },
  {
    title: 'AI助理',
    content: '辅助目标制定和进展总结',
    img: '/dingTalkImgs/DM_20250429102859_232.PNG',
    btn1: '免费试用',
    btn2: '查看详情',
  },
];
const cards13 = [
  {
    title: '钉钉文档',
    content: '云端协作 高效办公',
    img: '/dingTalkImgs/DM_20250429102859_231.PNG',
    btn1: '免费试用',
    btn2: '查看详情',
  },
  {
    title: '知识库',
    content: '一站式知识管理与沉淀',
    img: '/dingTalkImgs/DM_20250429102859_236.PNG',
    btn1: '免费试用',
    btn2: '查看详情',
  },
  {
    title: '企业百科',
    content: '百科词条 知识就在手边',
    img: '/dingTalkImgs/DM_20250429102859_237.PNG',
    btn1: '免费试用',
    btn2: '查看详情',
  },
];
const cards14 = [
  {
    title: 'IPD场景',
    content: '优化开发流程 提升成功率',
    img: '/dingTalkImgs/DM_20250429102859_241.PNG',
    btn1: '免费试用',
    btn2: '查看详情',
  },
  {
    title: 'LTC场景',
    content: '端到端销售管理 提高效率',
    img: '/dingTalkImgs/DM_20250429102859_242.PNG',
    btn1: '免费试用',
    btn2: '查看详情',
  },
  {
    title: 'APQP场景',
    content: '早期质量规划 确保高标准',
    img: '/dingTalkImgs/DM_20250429102859_243.PNG',
    btn1: '免费试用',
    btn2: '查看详情',
  },
  {
    title: '敏捷研发场景',
    content: '快速迭代 持续交付',
    img: '/dingTalkImgs/DM_20250429102859_244.PNG',
    btn1: '免费试用',
    btn2: '查看详情',
  },
];
const cards15 = [
  {
    title: '钉钉会议',
    content: 'AI时代的开会方式',
    img: '/dingTalkImgs/DM_20250429102859_248.PNG',
    btn1: '免费试用',
    btn2: '查看详情',
  },
  {
    title: '钉钉直播',
    content: '大型活动支持转直播观看',
    img: '/dingTalkImgs/DM_20250429102859_249.PNG',
    btn1: '免费试用',
    btn2: '查看详情',
  },
  {
    title: '钉钉智能会议室',
    content: '满足多层级会议管理需求',
    img: '/dingTalkImgs/DM_20250429102859_250.PNG',
    btn1: '免费试用',
    btn2: '查看详情',
  },
  {
    title: '钉钉日历',
    content: '日程预定人员和会议室',
    img: '/dingTalkImgs/DM_20250429102859_251.PNG',
    btn1: '免费试用',
    btn2: '查看详情',
  },
  {
    title: '钉钉文档',
    content: '自由浏览 共同创作',
    img: '/dingTalkImgs/DM_20250429102859_231.PNG',
    btn1: '免费试用',
    btn2: '查看详情',
  },
];
// const cards1List = [cards11, cards12, cards13, cards14, cards15];
// const cards1 = shallowRef(cards11);

const cards21 = [
  {
    title: '/dingTalkImgs/DM_20250429102859_228.PNG',
    content: '顾家家居：打破部门墙，调动生产链',
    bgImg: '/dingTalkImgs/DM_20250429102859_414.JPEG',
  },
  {
    title: '/dingTalkImgs/DM_20250429102859_229.PNG',
    content: '长城汽车：规划到执行，确保集团方针落地',
    bgImg: '/dingTalkImgs/DM_20250429102859_415.JPEG',
  },
  {
    title: '/dingTalkImgs/DM_20250429102859_230.PNG',
    content: '东呈集团：战略闭环，有力支撑组织管理数智化',
    bgImg: '/dingTalkImgs/DM_20250429102859_416.JPEG',
  },
];
const cards22 = [
  {
    title: '/dingTalkImgs/DM_20250429102859_233.PNG',
    content: '利尔达：在 Agoal高效实现战略拆解到绩效考核全闭环',
    bgImg: '/dingTalkImgs/DM_20250429102859_417.JPEG',
  },
  {
    title: '/dingTalkImgs/DM_20250429102859_234.PNG',
    content: '小铁科技：目标公开透明，协作更顺畅',
    bgImg: '/dingTalkImgs/DM_20250429102859_418.JPEG',
  },
  {
    title: '/dingTalkImgs/DM_20250429102859_235.PNG',
    content: '青岛迈金：互相拉通目标，让创新落地',
    bgImg: '/dingTalkImgs/DM_20250429102859_419.JPEG',
  },
];
const cards23 = [
  {
    title: '/dingTalkImgs/DM_20250429102859_238.PNG',
    content: '喜马拉雅：用钉钉文档实现高效协同',
    bgImg: '/dingTalkImgs/DM_20250429102859_420.JPEG',
  },
  {
    title: '/dingTalkImgs/DM_20250429102859_239.PNG',
    content: '佳沃集团：知识库驱动组织创新加速',
    bgImg: '/dingTalkImgs/DM_20250429102859_421.JPEG',
  },
  {
    title: '/dingTalkImgs/DM_20250429102859_240.PNG',
    content: '云南白药：构建知识库AI助理提升咨询服务',
    bgImg: '/dingTalkImgs/DM_20250429102859_422.JPEG',
  },
];
const cards24 = [
  {
    title: '/dingTalkImgs/DM_20250429102859_245.PNG',
    content: '每刻科技：独角兽搭建高效能研发体系',
    bgImg: '/dingTalkImgs/DM_20250429102859_423.JPEG',
  },
  {
    title: '/dingTalkImgs/DM_20250429102859_246.PNG',
    content: '武汉精测电子：检测龙头企业的协同提效变革',
    bgImg: '/dingTalkImgs/DM_20250429102859_424.PNG',
  },
  {
    title: '/dingTalkImgs/DM_20250429102859_247.PNG',
    content: '柒牌：品牌零售的项目数字化转型',
    bgImg: '/dingTalkImgs/DM_20250429102859_425.JPEG',
  },
];
const cards25 = [
  {
    title: '/dingTalkImgs/DM_20250429102859_252.PNG',
    content: '新浪微博：会议AI让项目协同更高效',
    bgImg: '/dingTalkImgs/DM_20250429102859_426.JPEG',
  },
  {
    title: '/dingTalkImgs/DM_20250429102859_253.PNG',
    content: '哈啰出行：钉钉会议助力企业文化沉淀',
    bgImg: '/dingTalkImgs/DM_20250429102859_427.JPEG',
  },
  {
    title: '/dingTalkImgs/DM_20250429102859_254.PNG',
    content: '浙江大学：10万师生在线的网上大学',
    bgImg: '/dingTalkImgs/DM_20250429102859_428.JPEG',
  },
];
// const cards2List = [cards21, cards22, cards23, cards24, cards25];
// const cards2 = shallowRef(cards21);

function handleSwitch(index) {
  // items.value = itemsList[index];
  // cards1.value = cards1List[index];
  // cards2.value = cards2List[index];
  activeIndex.value = index;
}
</script>
<style scoped>
.solution-container{
  margin-bottom: 120px;
}

.title-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.primary-container {
  margin-bottom: 3.25rem;
}

.primary-title {
  font-size: 30px;
  line-height: 42px;
  color: rgba(0,0,0,.85);
}

.secondary-container {
  margin-bottom: 1rem;
}

.secondary-title {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5715;
  color: #4c5157;
}

.highlight {
  color: #654cff;
}

.button-container { 
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
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
