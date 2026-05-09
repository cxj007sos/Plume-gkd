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
          // 核心匹配：包含“跳过”、尺寸符合右上角按钮、可见
          matches: '[text*="跳过"][width<300 && height<150][visibleToUser=true]',
          // 上传你的百度地图截图，获取链接填在这里
          snapshotUrls: ['https://i.gkd.li/i/27548797'],
          delay: 300, // 给动态文字渲染留一点时间
        },
      ],
    },
  ],
});
