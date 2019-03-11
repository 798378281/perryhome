<template>
  <div class="media">
    <div class="media__left">
      <slot />
    </div>
    <div class="media__body">
      <h4 class="media__heading">
        {{ title }}
      </h4>
      {{ content }}
      <div class="tag-bar">
        <el-tag
          v-for="(tag, index) in tags"
          :key="index"
          class="tags"
          size="small">{{ tag }}</el-tag>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'Media'
})
export default class Media extends Vue {

  /**
   * 标题
   */
  @Prop()
  title!: string

  /**
   * 内容
   */
  @Prop()
  content!: string

  /**
   * 标签
   */
  @Prop({
    default () { return [] }
  })
  tags!: string[]
}
</script>

<style lang="stylus" scoped>
.media
  overflow: hidden
  zoom: 1
  margin-top: 10px
  padding: 15px 2px 20px 0
  border-bottom: 1px solid #f0f0f0
  &:first-child
    margin-top 0px
  &__body,
  &__left
    display: table-cell
    vertical-align: top
  &__left
    padding-right: 10px
  &__body
    font-size: 12px
    color: #999
    line-height: 24px
  &__heading
    margin-top: 0
    margin-bottom: 5px
    font-size: 18px
    line-height 1.5
    font-weight 700
    color #333

.tag-bar
  padding 5px 0px
  .tags
    margin-left 5px
    &:first-child
      margin-left 0px
</style>

