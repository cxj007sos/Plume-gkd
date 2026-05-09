import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.BaiduMap',
  name: '百度地图',
  groups: [
    {
      key: 1,
      name: '开屏广告跳过',
      desc: '自动点击开屏广告的倒计时跳过按钮',
      activityIds: ['com.baidu.baidumaps.MapsActivity'],
      rules: [
        {
          key: 0,
          matches:
            '[text*="跳过"][width<300 && height<150][visibleToUser=true]',
            '[text*="跳过 05"][width<300 && height<150][visibleToUser=true]',
          snapshotUrls: ['https://i.gkd.li/i/27548797'],
        },
      ],
    },
  ],
});
