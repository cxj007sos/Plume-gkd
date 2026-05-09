import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.srcb.pmbank',
  name: '上海农商银行',
  groups: [
    {
      // 解决延迟的 5 个参数
      fastQuery: true, // 开启快速查找
      matchTime: 10000, // 10秒内持续找
      actionMaximum: 1, // 只点1次
      resetMatch: 'app', // 打开APP重新计时
      priorityTime: 10000, // 优先执行

      key: 1,
      name: '开屏广告跳过',
      desc: '自动点击开屏广告的倒计时跳过按钮',
      activityIds: ['com.yitong.mobile.biz.launcher.app.SplashActivity'],

      rules: [
        // 规则1：文字匹配
        {
          key: 0,
          matches: '[text*="跳过"][visibleToUser=true]',
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
