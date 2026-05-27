import { defineAppConfig } from '@gkd-kit/define';

export default defineAppConfig({
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
          // 网页端测试通过的选择器
          matches: 'View[width=1152][height=1728][visibleToUser=true]',
          // 网页端目前无法直观验证，依赖手机实测的坐标
          action: 'clickPosition',
          position: {
            x: 532,
            y: -969
          },
          snapshotUrls: 'https://i.gkd.li/i/28292384'
        }
      ]
    }
  ]
});
