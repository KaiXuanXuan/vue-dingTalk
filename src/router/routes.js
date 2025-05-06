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
      title: '首页',
    },
  },
 ]

 export default routes