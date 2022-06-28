import type { AppRouteModule } from '/@/router/types';
import { LAYOUT } from '/@/router/constant';

const icon: AppRouteModule = {
  path: '/icon',
  name: 'iconspa',
  component: LAYOUT,
  redirect: '/icon/a',
  meta: {
    orderNo: 29,
    hideChildrenInMenu: true,
    icon: 'ion:git-compare-outline',
    title: '图标测试',
  },

  children: [
    {
      path: 'a',
      name: 'iconspa',
      component: () => import('/@/views/demo/spaTest/icon.vue'),
      meta: {
        title: '图标测试',
      },
    },
  ],
};

export default icon;
