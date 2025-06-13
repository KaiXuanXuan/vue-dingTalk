const routes = [
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/Test.vue'),
    meta: {
      title: '测试页面',
    },
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '钉钉，让进步发生！AI时代，实现团队协同方式和企业经营管理的持续进步',
    },
  },
 ]

 export default routes