import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sina.weibo',
  name: '微博',
  groups: [
    {
      key: 1,
      name: '开屏广告 - 自动跳过',
      desc: '自动点击开屏广告的跳过按钮',
      // 同时匹配两个广告页面
      activityIds: [
        'com.sina.weibo.MainTabActivity',
        'com.sina.weibo.SplashActivity',
      ],
      rules: [
        {
          key: 0,
          matches: '[text*="跳过"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/27545269',
            'https://i.gkd.li/i/27547054',
          ],
        },
      ],
    },
  ],
});
