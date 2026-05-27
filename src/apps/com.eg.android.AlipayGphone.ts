import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 11,
      name: '订单完成-网页弹窗广告',
      activityIds:
        'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
      rules: [
        {
          key: 0,
          matches: 'View[width=1152][height=1728][visibleToUser=true]',
          // 动作依然是 click
          action: 'click',
          // 直接作为规则根属性传入，新版规范使用 left 和 top
          position: {
            left: 532,
            top: -969,
          },
          snapshotUrls: ['https://i.gkd.li/i/28292384'],
        },
      ],
    },
  ],
});
