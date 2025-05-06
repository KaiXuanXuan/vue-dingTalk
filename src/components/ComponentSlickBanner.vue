<template>
  <div class="slick-banner-container">
    <div class="slick-banner">
      <slick :slickItems="slickItems" class="slick"></slick>
      <banner :bannerItems="bannerItems" class="banner"></banner>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import slick from './slick.vue';
import banner from './banner.vue';

const slickItems = ref([
  { video: 'https://cloud.video.taobao.com/vod/r1mSXrmLLGkpHrVB_2K2fqKTLXve0BudRq28ywCo9mw.mp4', title: '钉钉AI，办公新潮流', text: '用钉钉AI，开启你的超级个体时代', btn1: 'AI助理', btn2: 'AI客服' },
  { img: '/dingTalkImgs/DM_20250429102859_406.JPEG', title: '钉钉AI会议新体验', text: '安全稳定，AI时代的开会方式', btn1: '免费试用', btn2: '加入会议' },
  {
    img: '/dingTalkImgs/DM_20250429102859_407.PNG',
    title: '7.6.60版本|全新钉钉，畅通无阻',
    text: '企业通讯录、考勤、审批、多维表、闪记、文档等功能，畅通无阻免费用！',
    btn1: '立即查看',
    btn2: '下载钉钉',
  },
  { img: '/dingTalkImgs/DM_20250429102859_408.JPEG', title: '钉钉AI客服真能干活！', text: '让每家企业轻松拥有懂业务与产品的客服 AI智能体', btn1: '立即查看', btn2: '观看视频' },
  { img: '/dingTalkImgs/DM_20250429102859_409.PNG', title: '钉钉项目AI上新，开启协作新体验', text: '开启智能协作新体验，让企业效率倍增，创新加速', btn1: '立即咨询', btn2: '注册钉钉' },
  { img: '/dingTalkImgs/DM_20250429102859_410.JPEG', title: '一站式企业迁移解决方案', text: '企业数字资产迁移到钉钉，专业服务团队全程保障', btn1: '预约咨询', btn2: '注册钉钉' },
  { img: '/dingTalkImgs/DM_20250429102859_411.JPEG', title: '钉钉超级服务', text: '钉钉提供多种类型的本地化和深度服务，助力团队更高效协同，建设企业数智化新高度', btn1: '立即查看', btn2: '注册钉钉' },
  { img: '/dingTalkImgs/DM_20250429102859_412.JPEG', title: '钉钉专业版', text: '满足中小企业数字化升级需求', btn1: '立即查看', btn2: '免费试用' },
  { img: '/dingTalkImgs/DM_20250429102859_405.JPEG', title: '钉钉专属版', text: '安全合规、自主可控和专属AI', btn1: '快速体验', btn2: '免费试用' },
]);

const bannerItems = ref([
  { imgNoHover: '/dingTalkImgs/DM_20250429102859_151.PNG', imgHoverOn: '/dingTalkImgs/DM_20250429102859_150.JPEG', bgColor:'linear-gradient(133deg, rgb(191, 207, 255) 35%, rgb(204, 217, 255) 100%)', title: '钉钉会议', text: '线上线下便捷入会 AI帮你做会议纪要' },
  { imgNoHover: '/dingTalkImgs/DM_20250429102859_153.PNG', imgHoverOn: '/dingTalkImgs/DM_20250429102859_152.JPEG', bgColor:'linear-gradient(134deg, rgb(191, 202, 255) 34%, rgb(202, 210, 252) 98%)',title: '钉钉AI助理', text: 'AI帮你来工作 你的钉钉超级助理' },
  { imgNoHover: '/dingTalkImgs/DM_20250429102859_155.PNG', imgHoverOn: '/dingTalkImgs/DM_20250429102859_154.JPEG', bgColor:'linear-gradient(133deg, rgb(193, 198, 254) 35%, rgb(203, 207, 254) 99%)',title: '钉钉多维表', text: '一表在手，业务无忧 数字化管理全覆盖' },
  { imgNoHover: '/dingTalkImgs/DM_20250429102859_157.PNG', imgHoverOn: '/dingTalkImgs/DM_20250429102859_156.JPEG', bgColor:'linear-gradient(134deg, rgb(199, 194, 255) 34%, rgb(208, 204, 255) 101%)',title: '下载钉钉', text: '免费使用 开启AI时代办公方式' },
]);
</script>
<style scoped>
.slick-banner-container {
  margin-bottom: 20px;
  padding-top: 60px;
}

.slick-banner {
  position: relative;
}

.banner {
position: absolute;
top: 58%;
left: 0;
}
</style>
