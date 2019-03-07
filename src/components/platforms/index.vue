<template>
  <div class="platforms">
    <header class="topbar">
      <div class="topbar__logo">
      </div>
      <div class="topbar__nav">
        <div
          v-for="(item, index) in nav"
          :key="index"
          class="topbar__nav__item">
          <router-link :to="{ name: item.pathName }">{{ item.name }}</router-link>
        </div>
      </div>
      <div class="topbar__action"></div>
    </header>

    <div class="main">
      <slot />
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Navs from '@/consts/nav'

@Component({
  name: 'Platform'
})
export default class Platform extends Vue {

  nav: any = Navs
}
</script>

<style lang="stylus" scoped>
.platforms
  height 100%
  padding-top 80px
  box-sizing border-box
  position relative
  .topbar
    position absolute
    left 0
    top 0
    width 100%
    height 80px
    background-color #ffffff
    box-shadow 0 1px 2px 0 rgba(0,0,0,0.06)
    z-index 11
    &__logo
      width 200px
      height 100%
      background-color #ffffff
      float left
      text-align center
      line-height 50px
      background-image url('~@/assets/logo.png')
    &__nav
      width 60%
      height 100%
      float left
      margin-left 5px
      display flex
      line-height 80px
      &__item
        box-sizing border-box
        cursor pointer
        font-size 14px
        padding 0 10px
        a
          text-decoration none
    &__action
      width 120px
      height 100%
      float right
  .main
    position absolute
    left 0
    top 80px
    right 0
    bottom 0
    box-sizing border-box
.router-link-active
  text-decoration none
  color #333
  &:hover
    color: #ce042c
</style>
