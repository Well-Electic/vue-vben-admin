import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const feat: AppRouteModule = {
  path: '/feat',
  name: 'FeatDemo',
  component: LAYOUT,
  redirect: '/feat/icon',
  meta: {
    orderNo: 19,
    hideChildrenInMenu: true,
    icon: 'ion:git-compare-outline',
    title: t('routes.demo.feat.feat'),
  },

  children: [
    {
      path: 'icon',
      name: 'IconDemo',
      component: () => import('/@/views/demo/feat/icon/index.vue'),
      meta: {
        title: t('routes.demo.feat.icon'),
      },
    },
  ],
};

export default feat;
