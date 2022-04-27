// https://umijs.org/config/
import { defineConfig } from 'umi';
import { join } from 'path';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
// import menuData from '@/components/MenuIcon'
// import Icon from '@ant-design/icons';

const { REACT_APP_ENV } = process.env;

console.log('@@',REACT_APP_ENV);
console.log('@@', proxy[REACT_APP_ENV || 'dev']);
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export default defineConfig({
  define: {
    REACT_APP_ENV: REACT_APP_ENV || false,
  },
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  layout: {
    // https://umijs.org/zh-CN/plugins/plugin-layout
    locale: true,
    siderWidth: 208,
    ...defaultSettings,
  },
  // https://umijs.org/zh-CN/plugins/plugin-locale
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/user',
      layout: false,
      routes: [
        {
          path: '/user/login',
          layout: false,
          name: 'login',
          component: './user/Login',
        },
        {

          path: '/user',
          redirect: '/user/login',
        },
        {
          name: 'register-result',
          icon: 'smile',
          path: '/user/register-result',
          component: './user/register-result',
        },
        {
          name: 'register',
          icon: 'smile',
          path: '/user/register',
          component: './user/register',
        },
        {
          component: '404',
        },
      ],
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      icon: 'dashboard',
      hideInMenu: true,    //siyic
      routes: [
        {
          path: '/dashboard',
          redirect: '/dashboard/analysis',
        },
        {
          name: 'analysis',
          icon: 'smile',
          path: '/dashboard/analysis',
          component: './dashboard/analysis',
        },
        {
          name: 'monitor',
          icon: 'smile',
          path: '/dashboard/monitor',
          component: './dashboard/monitor',
        },
        {
          name: 'workplace',
          icon: 'smile',
          path: '/dashboard/workplace',
          component: './dashboard/workplace',
        },
      ],
    },
    {
      path: '/form',
      icon: 'form',
      name: 'form',
      hideInMenu: true,    //siyic
      routes: [
        {
          path: '/form',
          redirect: '/form/basic-form',
        },
        {
          name: 'basic-form',
          icon: 'smile',
          path: '/form/basic-form',
          component: './form/basic-form',
        },
        {
          name: 'step-form',
          icon: 'smile',
          path: '/form/step-form',
          component: './form/step-form',
        },
        {
          name: 'advanced-form',
          icon: 'smile',
          path: '/form/advanced-form',
          component: './form/advanced-form',
        },
      ],
    },
    {
      path: '/list',
      icon: 'table',
      name: 'list',
      // hideInMenu: true,    //siyic
      routes: [
        {
          path: '/list/search',
          name: 'search-list',
          component: './list/search',
          routes: [
            {
              path: '/list/search',
              redirect: '/list/search/articles',
            },
            {
              name: 'articles',
              icon: 'smile',
              path: '/list/search/articles',
              component: './list/search/articles',
            },
            {
              name: 'projects',
              icon: 'smile',
              path: '/list/search/projects',
              component: './list/search/projects',
            },
            {
              name: 'applications',
              icon: 'smile',
              path: '/list/search/applications',
              component: './list/search/applications',
            },
          ],
        },
        {
          path: '/list',
          redirect: '/list/table-list',
        },
        {
          name: 'table-list',
          icon: 'smile',
          path: '/list/table-list',
          component: './list/table-list',
        },
        {
          name: 'basic-list',
          icon: 'smile',
          path: '/list/basic-list',
          component: './list/basic-list',
        },
        {
          name: 'card-list',
          icon: 'smile',
          path: '/list/card-list',
          component: './list/card-list',
        },
      ],
    },
    {
      path: '/profile',
      name: 'profile',
      icon: 'profile',
      hideInMenu: true,    //siyic
      routes: [
        {
          path: '/profile',
          redirect: '/profile/basic',
        },
        {
          name: 'basic',
          icon: 'smile',
          path: '/profile/basic',
          component: './profile/basic',
        },
        {
          name: 'advanced',
          icon: 'smile',
          path: '/profile/advanced',
          component: './profile/advanced',
        },
      ],
    },
    {
      name: 'result',
      icon: 'CheckCircleOutlined',
      path: '/result',
      hideInMenu: true,    //siyic
      routes: [
        {
          path: '/result',
          redirect: '/result/success',
        },
        {
          name: 'success',
          icon: 'smile',
          path: '/result/success',
          component: './result/success',
        },
        {
          name: 'fail',
          icon: 'smile',
          path: '/result/fail',
          component: './result/fail',
        },
      ],
    },
    {
      name: 'exception',
      icon: 'warning',
      path: '/exception',
      hideInMenu: true,    //siyic
      routes: [
        {
          path: '/exception',
          redirect: '/exception/403',
        },
        {
          name: '403',
          icon: 'smile',
          path: '/exception/403',
          component: './exception/403',
        },
        {
          name: '404',
          icon: 'smile',
          path: '/exception/404',
          component: './exception/404',
        },
        {
          name: '500',
          icon: 'smile',
          path: '/exception/500',
          component: './exception/500',
        },
      ],
    },
    {
      name: 'account',
      icon: 'user',
      path: '/account',
      // hideInMenu: true,    //siyic
      routes: [
        {
          path: '/account',
          redirect: '/account/center',
        },
        {
          name: 'center',
          icon: 'smile',
          path: '/account/center',
          component: './account/center',
        },
        {
          name: 'settings',
          icon: 'smile',
          path: '/account/settings',
          component: './account/settings',
        },
      ],
    },
    {
      name: 'editor',
      icon: 'highlight',
      path: '/editor',
      hideInMenu: true,    //siyic
      routes: [
        {
          path: '/editor',
          redirect: '/editor/flow',
        },
        {
          name: 'flow',
          icon: 'smile',
          path: '/editor/flow',
          component: './editor/flow',
        },
        {
          name: 'mind',
          icon: 'smile',
          path: '/editor/mind',
          component: './editor/mind',
        },
        {
          name: 'koni',
          icon: 'smile',
          path: '/editor/koni',
          component: './editor/koni',
        },
      ],
    },
    {
      name: 'device',
      icon: 'icon-device2',
      path: '/device',
      // hideInMenu: true,    //siyic
      routes: [
        {
          path: '/device',
          redirect: '/device/device-status',
        },
        {
          name: 'device-status',
          icon: 'smile',
          path: '/device/device-status',
          component: './device/device-status',
        },
        {
          name: 'device-alarm',
          icon: 'CarOutlined',
          path: '/device/device-alarm',
          component: './device/device-alarm',
        },
        {
          name: 'device-data',
          icon: 'smile',
          path: '/device/device-data',
          component: './device/device-data',
        }
      ],
    },
    {
      name: 'operation',
      icon: 'icon-operation',
      path: '/operation',
      routes: [
        {
          path: '/operation',
          redirect: '/operation/business-order',
        },
        {
          name: 'business-order',
          icon: 'smile',
          path: '/operation/business-order',
          component: './operation/business-order',
        },
        {
          name: 'realtime-vehicle',
          icon: 'CarOutlined',
          path: '/operation/realtime-vehicle',
          component: './operation/realtime-vehicle',
        },
        {
          name: 'parking-record',
          icon: 'smile',
          path: '/operation/parking-record',
          component: './operation/parking-record',
        },
        {
          name: 'evidence-record',
          icon: 'smile',
          path: '/operation/evidence-record',
          component: './operation/evidence-record',
        },
        {
          name: 'payment-record',
          icon: 'smile',
          path: '/operation/payment-record',
          component: './operation/payment-record',
        },
        {
          name: 'arrears-record',
          icon: 'smile',
          path: '/operation/arrears-record',
          component: './operation/arrears-record',
        },
      ],
    },
    {
      name: 'employee',
      icon: 'icon-employee',
      // icon: '/icons/siyic-user.svg',
      path: '/employee',
      routes: [
        {
          path: '/employee',
          redirect: '/employee/field-team',
        },
        {
          name: 'field-team',
          icon: 'smile',
          path: '/employee/field-team',
          component: './employee/field-team',
        },
        {
          name: 'field-staff',
          icon: 'CarOutlined',
          path: '/employee/field-staff',
          component: './employee/field-staff',
        },
        {
          name: 'shift',
          icon: 'smile',
          path: '/employee/shift',
          component: './employee/shift',
        },
        {
          name: 'charging-place',
          icon: 'smile',
          path: '/employee/charging-place',
          component: './employee/charging-place',
        },
        {
          name: 'toll-collector-shift',
          icon: 'smile',
          path: '/employee/toll-collector-shift',
          component: './employee/toll-collector-shift',
        },
      ],
    },
    {
      name: 'resources',
      icon: 'icon-resources',
      path: '/resources',
      routes: [
        {
          path: '/resources',
          redirect: '/resources/parking-space',
        },
        {
          name: 'parking-space',
          icon: 'smile',
          path: '/resources/parking-space',
          component: './resources/parking-space',
        },
        {
          name: 'road-section',
          icon: 'CarOutlined',
          path: '/resources/road-section',
          component: './resources/road-section',
        },
        {
          name: 'parking-sensor',
          icon: 'smile',
          path: '/resources/parking-sensor',
          component: './resources/parking-sensor',
        },
        {
          name: 'sim-card',
          icon: 'smile',
          path: '/resources/sim-card',
          component: './resources/sim-card',
        },
        {
          name: 'pos-machine',
          icon: 'smile',
          path: '/resources/pos-machine',
          component: './resources/pos-machine',
        },
      ],
    },
    {
      name: 'finance',
      icon: 'icon-finance',
      path: '/finance',
      routes: [
        {
          path: '/finance',
          redirect: '/finance/payment-order',
        },
        {
          name: 'payment-order',
          icon: 'smile',
          path: '/finance/payment-order',
          component: './finance/payment-order',
        },
        {
          name: 'mobile-payment',
          icon: 'CarOutlined',
          path: '/finance/mobile-payment',
          component: './finance/mobile-payment',
        },
        {
          name: 'cash-payment',
          icon: 'smile',
          path: '/finance/cash-payment',
          component: './finance/cash-payment',
        },
      ],
    },
    {
      name: 'performance',
      icon: 'icon-performance',
      path: '/performance',
      routes: [
        {
          path: '/performance',
          redirect: '/performance/check-in-record',
        },
        {
          name: 'check-in-record',
          icon: 'smile',
          path: '/performance/check-in-record',
          component: './performance/check-in-record',
        },
        {
          name: 'toll-collector',
          icon: 'CarOutlined',
          path: '/performance/toll-collector',
          component: './performance/toll-collector',
        },
      ],
    },
    {
      name: 'report',
      icon: 'icon-report',
      path: '/report',
      routes: [
        {
          path: '/report',
          redirect: '/report/operation',
        },
        {
          name: 'operation',
          icon: 'smile',
          path: '/report/operation',
          component: './report/operation',
        },
        {
          name: 'payment-method',
          icon: 'CarOutlined',
          path: '/report/payment-method',
          component: './report/payment-method',
        },
        {
          name: 'arrears',
          icon: 'smile',
          path: '/report/arrears',
          component: './report/arrears',
        },
        {
          name: 'parking-operation',
          icon: 'smile',
          path: '/report/parking-operation',
          component: './report/parking-operation',
        },
        {
          name: 'parking-charge',
          icon: 'smile',
          path: '/report/parking-charge',
          component: './report/parking-charge',
        },
      ],
    },
    {
      name: 'system',
      icon: 'icon-system',
      path: '/system',
      routes: [
        {
          path: '/system',
          redirect: '/system/data-dictionary',
        },
        {
          name: 'data-dictionary',
          icon: 'smile',
          path: '/report/data-dictionary',
          component: './system/data-dictionary',
        },
        {
          name: 'log-management',
          icon: 'CarOutlined',
          path: '/system/log-management',
          component: './system/log-management',
        },
        {
          name: 'authority',
          icon: 'smile',
          path: '/system/authority',
          component: './system/authority',
        },
        {
          name: 'district',
          icon: 'smile',
          path: '/system/district',
          component: './system/district',
        },
      ],
    },
    {
      path: '/',
      // redirect: '/dashboard/analysis',
      redirect: '/operation/business-order',
    },
    {
      component: '404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  // esbuild is father build tools
  // https://umijs.org/plugins/plugin-esbuild
  esbuild: {},
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  // Fast Refresh 热更新
  fastRefresh: {},
  openAPI: [
    {
      requestLibPath: "import { request } from 'umi'",
      // 或者使用在线的版本
      // schemaPath: "https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json"
      schemaPath: join(__dirname, 'oneapi.json'),
      mock: false,
    },
    {
      requestLibPath: "import { request } from 'umi'",
      schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/CA1dOm%2631B/openapi.json',
      projectName: 'swagger',
    },
  ],
  nodeModulesTransform: {
    type: 'none',
  },
  mfsu: {},
  webpack5: {},
  exportStatic: {},
});
