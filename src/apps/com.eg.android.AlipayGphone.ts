import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 11,
      name: '支付宝-全屏广告-小程序及网页弹窗',
      desc: '合并了订单完成弹窗与小程序开屏广告，使用坐标自适应点击',
      rules: [
        {
          key: 0, //000 - 099	开屏类 (Splash)	启动软件时第一时间加载的广告
          name: '开屏广告-小程序开屏-坐标自适应偏移点击左上角[关闭]',
          fastQuery: true,
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$',
          position: {
            left: 'width * 0.2490',
            top: 'width * 0.0435',
          },
          matches:
            'View[width=getPrev(5).width] - @ViewGroup[childCount=1][height<150][getChild(0).name$=".View"][visibleToUser=true] < [childCount>3] < ViewGroup < * < * <2 [id="android:id/content"][childCount=2]',
          snapshotUrls: 'https://i.gkd.li/i/28337298',
        },
        {
          key: 100, //100 - 199	弹窗类 (Popup)	使用过程中弹出的各类广告或引导
          name: '订单完成-网页弹窗广告-坐标自适应偏移点击右上角[X]',
          fastQuery: true, //开启快速查询,匹配规则（matches）里面必须包含一些“能被系统直接索引的强特征”，否则成和普通的全量遍历别无二致。例如：[id="com.byted.pangle:id/tt_item_tv"]ot[text="不感兴趣"]）
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App',
          position: {
            // 在 GKD 中，position 的原点(0,0)是所匹配元素的左上角。
            // left 和 top 决定方向，width/height 仅作为“尺度基准”。基于UI坐标系：x轴(右+) y轴(下+)；负数即代表向左或向上（超出元素范围）。
            // 使用 width * 比例，是为了利用等比例缩放机制，确保在不同分辨率/比例的手机上点击点永远贴合按钮。
            left: 'width * 0.9592',
            top: 'width * -0.0903',
          },
          matches:
            '@ViewGroup[childCount=2] - View[top=getPrev(0).bottom] -2 View[right=width] < [childCount=4] < * < * < * < * <2 [id="android:id/content"][childCount=2]',
          snapshotUrls: 'https://i.gkd.li/i/28292384',
        },
      ],
    },
  ],
});
