import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 11,
      name: '订单完成-网页弹窗广告',
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
      rules: [
        {
          key: 0,
          matches: 'View[width=1152][height=1728][visibleToUser=true]',
          action: 'click',
          // 关键修正：在新版中，相对位置必须放在 actionPosition 里包裹
          actionPosition: {
            position: {
              left: 532,
              top: -969
            }
          },
          // 修正：快照链接在新版类型中通常定义为字符串数组 string[]
          snapshotUrls: ['https://i.gkd.li/i/28292384']
        }
      ]
    }
  ]
});
