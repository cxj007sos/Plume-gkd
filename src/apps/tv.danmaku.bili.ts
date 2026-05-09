import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: 1,
      name: '开屏广告跳过',
      desc: '自动点击开屏广告的倒计时跳过按钮',
      activityIds: ['tv.danmaku.bili.MainActivityV2'],
      rules: [
        {
          key: 0,
          matches: '[text*="跳过"][visibleToUser=true]',
          snapshotUrls: ['https://i.gkd.li/i/你的B站快照ID'],
          //delay: 500, // 适配动态文字渲染延迟
        },
      ],
    },
  ],
});
