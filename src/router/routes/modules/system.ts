import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const system: AppRouteModule = {
  path: '/sys-role',
  name: 'RoleListSpa',
  component: LAYOUT,
  redirect: '/sys-role/spa',
  meta: {
    orderNo: 20,
    icon: 'ic:baseline-manage-accounts',
    title: '系统管理',
  },
  children: [
    {
      path: 'spa',
      name: 'RoleList',
      component: () => import('/@/views/sys/manage/role.vue'),
      meta: {
        title: '角色列表',
      },
    },
  ],
};

export default system;
