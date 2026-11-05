import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.duolingo',
  name: '多邻国',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: 'Flutter页面，强制根节点扫描，兼容中英文Skip',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          key: 0,
          anyMatches: [
            '[text*="跳过"][visibleToUser=true]',
            '[text~="(?is)skip"][visibleToUser=true][text.length<10]',
            '[vid~="(?is)skip"][vid!~="video"][visibleToUser=true]',
            '[desc~="(?is)skip"][desc.length<10][visibleToUser=true]',
          ],
        },
      ],
    },
  ],
});
