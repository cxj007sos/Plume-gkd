import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.srcb.pmbank',
  name: '上海农商银行',
  groups: [
    {
      key: 1,
      name: '开屏广告跳过',
      desc: '自动点击开屏广告的倒计时跳过按钮',
      activityIds: ['com.yitong.mobile.biz.launcher.app.SplashActivity'],

      rules: [
        // 规则1：文字匹配
        {
          key: 0,
          matches:
            '[text*="跳过"][width<300 && height<150][visibleToUser=true]',
          snapshotUrls: ['https://i.gkd.li/i/27556001'],
        },
        // 规则2：新增 VID 匹配（更快更稳）
        {
          key: 1,
          matches: '[vid="chronometer"][visibleToUser=true]',
          snapshotUrls: ['https://i.gkd.li/i/27556001'],
        },
      ],
    },
  ],
});
