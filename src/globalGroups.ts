import { defineGkdGlobalGroups } from '@gkd-kit/define';

export default defineGkdGlobalGroups([
  {
    key: 1, // 全局规则的key，全局唯一，从1开始就行
    name: '全局自动跳过广告',
    desc: '自动点击所有APP中可见的「跳过」按钮，无需逐个配置',
    rules: [
      {
        key: 0,
        matches: [
          '[text*="跳过"][visibleToUser=true]',
          '[text*="跳过广告"][visibleToUser=true]',
          '[text*="Skip"][visibleToUser=true]',
          '[text*="SKIP"][visibleToUser=true]',
        ],
        // 可以用你之前上传的微博快照作为示例
        snapshotUrls: ['https://i.gkd.li/i/27545269',
                       'https://i.gkd.li/i/27548441'
        ],
      },
    ],
  },
]);
