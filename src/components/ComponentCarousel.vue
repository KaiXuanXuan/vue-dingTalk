<template>
  <div class="carousel-container">
    <div class="carousel">
      <div class="title">
        <div class="title-text">{{ title }}</div>
      </div>
      <slider @clickSlide="handelClickSlide" :slideList="slideList"></slider>
      <div class="img-container">
        <Transition name="fade" mode="out-in">
          <div class="img-display" :key="imgIndex">
            <div class="content">
              <div class="content-title">{{ imgList[imgIndex].title }}</div>
              <div class="content-text-container">
                <div class="content-text" v-for="(item, index) in imgList[imgIndex].text">
                  <img src="/dingTalkImgs/DM_20250429102859_183.PNG" style="width: 14px; height: 14px; margin-right: 8px; display: inline" />
                  {{ item }}
                </div>
              </div>
              <div class="content-btns">
                <button class="button btn-order">预约咨询</button>
                <button class="button btn-test">免费试用</button>
                <button class="button btn-more">了解更多 ></button>
              </div>
            </div>
            <div class="img">
              <img :src="imgList[imgIndex].img" class="img" />
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import slider from './slider.vue';

defineProps({
  title: {
    type: String,
    default: 'AI时代提供智能、普惠、开放、简单的产品能力',
  },
  // imgList: {
  //   type: Array,
  //   default: [],
  // },
});

const imgIndex = ref(0);
const slideList = ref([
  { img: '/dingTalkImgs/DM_20250429102859_158.PNG', text: '钉钉365会员' },
  { img: '/dingTalkImgs/DM_20250429102859_159.PNG', text: '钉钉文档' },
  { img: '/dingTalkImgs/DM_20250429102859_160.PNG', text: '企业百科' },
  { img: '/dingTalkImgs/DM_20250429102859_161.PNG', text: '钉钉会议' },
  { img: '/dingTalkImgs/DM_20250429102859_162.PNG', text: '钉钉直播' },
  { img: '/dingTalkImgs/DM_20250429102859_163.PNG', text: '钉钉闪记' },
  { img: '/dingTalkImgs/DM_20250429102859_164.PNG', text: '钉钉项目' },
  { img: '/dingTalkImgs/DM_20250429102859_165.PNG', text: '宜搭' },
  { img: '/dingTalkImgs/DM_20250429102859_166.PNG', text: '钉钉企业邮箱' },
  { img: '/dingTalkImgs/DM_20250429102859_167.PNG', text: '钉钉应用中心' },
  { img: '/dingTalkImgs/DM_20250429102859_168.PNG', text: '钉钉Office套件' },
  { img: '/dingTalkImgs/DM_20250429102859_169.PNG', text: '人事套件' },
  { img: '/dingTalkImgs/DM_20250429102859_170.PNG', text: '营销套件' },
  // { img: '/dingTalkImgs/DM_20250429102859_171.PNG', text: '合同套件'},
  // { img: '/dingTalkImgs/DM_20250429102859_172.PNG', text: '财务套件'},
  // { img: '/dingTalkImgs/DM_20250429102859_173.PNG', text: '差旅套件'},
  // { img: '/dingTalkImgs/DM_20250429102859_174.PNG', text: 'Agoal'},
  // { img: '/dingTalkImgs/DM_20250429102859_175.PNG', text: '组织大脑'},
  // { img: '/dingTalkImgs/DM_20250429102859_176.PNG', text: '钉钉协作空间'},
  // { img: '/dingTalkImgs/DM_20250429102859_177.PNG', text: '钉钉硬件'},
  // { img: '/dingTalkImgs/DM_20250429102859_178.PNG', text: '钉钉电话'},
  // { img: '/dingTalkImgs/DM_20250429102859_179.PNG', text: '钉盘'},
  // { img: '/dingTalkImgs/DM_20250429102859_180.PNG', text: 'DING消息'},
  // { img: '/dingTalkImgs/DM_20250429102859_181.PNG', text: '钉钉文档CAD'},
  // { img: '/dingTalkImgs/DM_20250429102859_182.PNG', text: '钉钉年检认证'}
]);
const imgList = ref([
  {
    img: '/dingTalkImgs/DM_20250429102859_184.PNG',
    title: '有创造力的人用钉钉365超级个体，脱颖而出',
    text: ['AI提效：AI搜索、AI自动回复、自动速读、个人AI助', '个人影响力特权：会员标志、个人认证、会员表情', '家长权益：自动整理孩子的每日成长记录'],
  },
  {
    img: '/dingTalkImgs/DM_20250429102859_185.PNG',
    title: '多人协作，智能化知识创作与管理平台',
    text: ['丰富的创作套件和完整的知识管理应用', '全系AI加持，智能创作，如此简单', '提供全方位场景解决方案'],
  },
  { img: '/dingTalkImgs/DM_20250429102859_186.PNG', title: '让知识找到人', text: ['随时随地可查', '知识可追溯', '系统管理企业知识'] },
  {
    img: '/dingTalkImgs/DM_20250429102859_187.PNG',
    title: 'AI时代的开会方式 专业的软硬一体会议解决',
    text: ['简单组织会议：使用日程高效预约、呼叫通讯录与微', 'AI助力高效开会：支持字幕翻译、智能摘要与智能', '专业级企业会议：覆盖大中小会议室，提供高级会'],
  },
  {
    img: '/dingTalkImgs/DM_20250429102859_188.PNG',
    title: '开启企业直播新方式 让企业培训更简单',
    text: ['数字化培训：可推送200个培训群，支持答题互动', '私域营销：商品卡片推送、一键下单，助力直播带货', '大型活动：暖场预热、抽奖、多画面切换，大型活动：暖场预热、抽奖、多画面切换，打造线上年会'],
  },
  { img: '/dingTalkImgs/DM_20250429102859_189.PNG', title: 'AI时代的记录方式', text: ['音视频秒转文字，专业术语精准识别', '19+语言实时翻译，跨国协作新体验', '智能提炼核心干货，3分钟掌握1小时会议'] },
  {
    img: '/dingTalkImgs/DM_20250429102859_190.PNG',
    title: '全新的项目协同工具',
    text: ['70+项目最佳实践模版，一键复用', '跨部门高效协同，项目进展实时跟踪', '已服务1万+付费企业，助力企业项目高效管理'],
  },
  { img: '/dingTalkImgs/DM_20250429102859_191.PNG', title: '宜搭开启业务数字化AI时代', text: ['精品模版，让人人都是创造者', 'AI驱动的企业办公数字化空间', 'AI驱动利旧，企业既有系统焕发新生产力'] },
  {
    img: '/dingTalkImgs/DM_20250429102859_192.PNG',
    title: '用邮箱·来钉钉·免费送域名',
    text: ['与钉融合协同办公，组织架构一站式管理', '邮件一键转发同步聊天，邮件处理更便捷', 'AI加持智能生成邮件，提高企业办公效能'],
  },
  {
    img: '/dingTalkImgs/DM_20250429102859_193.PNG',
    title: 'AI时代企业找应用，上钉钉应用中心',
    text: ['1000+企业应用和服务，满足各业务场景数字化需求', '海量企业用户的选择，用数字化应用为企业提效', '钉钉安全评级认证，全方位保障企业数据安全'],
  },
  { img: '/dingTalkImgs/DM_20250429102859_194.PNG', title: '助力企业协同与管理提效', text: ['打造原生文档编辑体验', '全方位覆盖日常协同与管理诉求', '整合钉钉协同办公产品能力'] },
  {
    img: '/dingTalkImgs/DM_20250429102859_195.PNG',
    title: '覆盖各类人事场景 一站式人事管理平台',
    text: ['核心人事：提用工安全、看人员投入、理组织生产', '人效管理：支持计时计件，打通绩效、销售、薪酬等', '组织发展：支持多维评估人才能力、激发员工创新'],
  },
  {
    img: '/dingTalkImgs/DM_20250429102859_196.PNG',
    title: '覆盖「营-销-服」场景 一站式客户管理平台',
    text: ['销售协同：客户管理更智能，销售管理更轻松', '场域连接：营销服业务一体化，连接钉钉多个场域', '业务数字化：全域线索汇聚，客户数字化档案'],
  },
  // { img: '/dingTalkImgs/DM_20250429102859_197.PNG' },
  // { img: '/dingTalkImgs/DM_20250429102859_198.PNG' },
  // { img: '/dingTalkImgs/DM_20250429102859_199.PNG' },
  // { img: '/dingTalkImgs/DM_20250429102859_200.PNG' },
  // { img: '/dingTalkImgs/DM_20250429102859_201.PNG' },
  // { img: '/dingTalkImgs/DM_20250429102859_202.PNG' },
  // { img: '/dingTalkImgs/DM_20250429102859_203.PNG' },
  // { img: '/dingTalkImgs/DM_20250429102859_204.PNG' },
  // { img: '/dingTalkImgs/DM_20250429102859_205.PNG' },
  // { img: '/dingTalkImgs/DM_20250429102859_206.PNG' },
  // { img: '/dingTalkImgs/DM_20250429102859_207.PNG' },
  // { img: '/dingTalkImgs/DM_20250429102859_208.PNG' },
]);

function handelClickSlide(index) {
  imgIndex.value = index;
}
</script>
<style scoped>
.carousel-container {
  padding: 0 64px;
  height: 738px;
  margin-bottom: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel {
  width: 1200px;
  height: 738px;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 52px;
}

.title-text {
  font-size: 30px;
  line-height: 42px;
}

.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 480px;
  padding: 20px 20px 20px 60px;
  /* background: url(/dingTalkImgs/DM_20250429102859_413.JPEG); */
  background: linear-gradient(122deg, rgba(181, 33, 255, 0.121) 0%, rgba(100, 76, 255, 0.112) 20%, rgba(50, 101, 255, 0.116) 69%, rgba(0, 128, 255, 0.153) 99%);
  /* background: url(/dingTalkImgs/background1.mp4); */
  background-size: cover;
  border-radius: 25px;
  overflow: hidden;
}

.img-display {
  width: 1120px;
  height: 440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.content {
  /* background-color: #ddd; */
  height: 259px;
  width: 438px;
  display: flex;
  flex-direction: column;
}

.content-title {
  font-size: 24px;
  font-weight: 600;
  line-height: 34px;
  margin-bottom: 16px;
}

.content-text-container {
  margin-bottom: 44px;
}

.content-text {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.85);
  line-height: 24px;
  margin-bottom: 12px;
}

.img {
  width: 665px;
  height: 440px;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
}

.button {
  box-sizing: border-box;
  margin-right: 12px;
  border-radius: 10px;
  height: 32px;
  padding: 0 12px;
  transition: all 0.3s ease;
  font-size: 14px;
  cursor: pointer;
}

.button:last-child {
  padding: 0;
}

.btn-order {
  background: linear-gradient(112deg, rgb(181, 33, 255) 0%, rgb(101, 76, 255) 20%, rgb(50, 102, 255) 69%, rgb(0, 127, 255) 99%);
  color: #fff;
}

.btn-order:hover {
  background: linear-gradient(112deg, rgba(181, 33, 255, 0.66) 0%, rgba(100, 76, 255, 0.747) 20%, rgba(50, 101, 255, 0.655) 69%, rgba(0, 128, 255, 0.696) 99%);
}

.btn-test {
  color: #007fff;
  border: 1px solid #007fff;
  background: #fff;
}

.btn-test:hover {
  background: #eee;
}

.btn-more {
  color: #007fff;
}

.btn-more:hover {
  color: #0080ffa7;
}

/* 定义进入动画 */
.fade-enter-active {
  animation: fadeIn 0.2s ease-in-out;
}
.fade-leave-active {
  animation: fadeOut 0.2s ease-in-out;
}

/* 定义离开动画 */
@keyframes fadeIn {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.2;
  }
}
</style>
