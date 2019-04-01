<template>
  <Page :breadcrumbs="breadcrumbs">
    <div class="header">
      <h1>朝花夕拾</h1>
      <span class="tag">2019/4/1</span>
    </div>
    <div class="abstract">
      如果我们下次再碰面，分一点你的好运给我，好不好？
    </div>
    <div class="content">
      <p>继小军躺在我的右侧，将烟灰弹进肚皮上的烟灰缸。我说你能不能别老半夜给我爸打电话？我爸手机铃声贼大，他晚上一有电话我就被吵醒。继小军说你又不是不知道单位那几个逼人，扒拉扒拉，还有谁行？我说那也不能可我爸一个人造，你又不给他提个职。他说这可怪不到我头上，你爹自己运气不行。我看了他一眼，顺势将盖在身上的空调被向上拉了拉。</p>
      <p>这间房子是个一居室，继小军半年前给我租的，里面除了张床、两双拖鞋、一个烟灰缸，一条毛巾，还有卫生间里的半块香皂外什么也没有。我基本不住在这里，我妈烦我的时候才过来，有时候带本书，《学生托乐思的迷惘》，大学毕业的时候同寝送的，她觉得这书的名字跟我挺符合。</p>
    </div>
  </Page>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { IBreadcrumb } from '@/types/common'

@Component({
  name: 'JournalDetail'
})
export default class JournalDetail extends Vue {
  @Prop({
    default: ''
  })
  id!: string

  breadcrumbs: IBreadcrumb[] = [
    { name: '文章', path: '/apps/journal/list' },

  ]
}
</script>

<style lang="stylus" scoped>
.header
  width 100%
  padding 5px 10px
  border-left 3px solid #20222a
  box-sizing border-box
  line-height 1.67
  h1
    font-size 22px
    font-weight 700
    color #20222a
  .tag
    font-size 13px
.abstract
  color #999
  font-size 14px
  line-height 1.67
  box-sizing border-box
  padding 20px

p
  line-height 1.67
  color #333
</style>
