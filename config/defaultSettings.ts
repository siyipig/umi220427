import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '智慧停车平台',    //'Ant Design Pro',
  pwa: false,
  // logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  logo: '/logo.svg',
  iconfontUrl: '//at.alicdn.com/t/font_3335581_6cj0n9ac67f.js',  //'//at.alicdn.com/t/font_2597075_5iwxbrdy61h.js',           // siyic ''
};

export default Settings;
