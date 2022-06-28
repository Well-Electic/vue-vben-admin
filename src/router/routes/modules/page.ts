import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const page: AppRouteModule = {
  path: '/page-demo',
  name: 'PageDemo',
  component: LAYOUT,
  redirect: '/page-demo/form/basic',
  meta: {
    orderNo: 20,
    icon: 'ion:aperture-outline',
    title: t('routes.demo.page.page'),
  },
  children: [
    {
      path: 'basic',
      name: 'ListBasicPage',
      component: () => import('/@/views/demo/page/list/basic/index.vue'),
      meta: {
        title: t('routes.demo.page.listBasic'),
      },
    },
    {
      path: 'search',
      name: 'ListSearchPage',
      component: () => import('/@/views/demo/page/list/search/index.vue'),
      meta: {
        title: t('routes.demo.page.listSearch'),
      },
    },
    {
      path: 'success',
      name: 'ResultSuccessPage',
      component: () => import('/@/views/demo/page/result/success/index.vue'),
      meta: {
        title: t('routes.demo.page.resultSuccess'),
      },
    },
    {
      path: 'fail',
      name: 'ResultFailPage',
      component: () => import('/@/views/demo/page/result/fail/index.vue'),
      meta: {
        title: t('routes.demo.page.resultFail'),
      },
    },
  ],
};

export default page;
