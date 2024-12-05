export default {
  data() {
    return {
      active: 0
    }
  },
  template: `
  <div>
  <var-app-bar
    round
    image="https://assets.soujpg.com/souJpg/images/hbVVSECEtvwFmGLgXP6cQf.webp"
    image-linear-gradient="to right top, rgba(29, 68, 147, 0.3) 0%, rgba(74, 198, 170, 0.8) 100%"
  >
    标题
    <template #left>
      <var-button round text color="transparent" text-color="#fff">
        <var-icon name="menu" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-button round text color="transparent" text-color="#fff">
        <var-icon name="map-marker-radius" :size="24" />
      </var-button>
      <var-button round text color="transparent" text-color="#fff">
        <var-icon name="star" :size="24" />
      </var-button>
      <var-button round text color="transparent" text-color="#fff">
        <var-icon name="heart" :size="24" />
      </var-button>
    </template>

    <template #content>
      <var-tabs
        style="margin-top: 100px"
        color="transparent"
        active-color="#fff"
        inactive-color="#ddd"
        v-model:active="active"
      >
        <var-tab>选项卡</var-tab>
        <var-tab>选项卡</var-tab>
        <var-tab>选项卡</var-tab>
      </var-tabs>
    </template>
  </var-app-bar>
  <br/>
  <var-paper elevation="2" >
  <var-tabs-items v-model:active="active">
    <var-tab-item>
      <var-cell>
      呜啦啦啦火车笛，随着奔腾的马蹄。 小妹妹吹着口琴，夕阳下美了剪影。 我用子弹写日记，介绍完了风景。
      接下来换介绍我自己。 我虽然是个牛仔，在酒吧只点牛奶。 为什么不喝啤酒，因为啤酒伤身体。
      </var-cell>
    </var-tab-item>
    <var-tab-item>
      <var-cell>
      很多人不长眼睛，嚣张都靠武器。 赤手空拳就缩成蚂蚁。 不用麻烦了，不用麻烦了。 不用麻烦，不用麻烦了，不用麻烦了。
      </var-cell>
    </var-tab-item>
    <var-tab-item>
      <var-cell>
      你们一起上，我在赶时间。 每天决斗观众都累了，英雄也累了。 不用麻烦了，不用麻烦了。
      副歌不长你们有几个，一起上好了。 正义呼唤我，美女需要我。 牛仔很忙的。
      </var-cell>
    </var-tab-item>
  </var-tabs-items>
  </var-paper>
  </div>
  `
}
