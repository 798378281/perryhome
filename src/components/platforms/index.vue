<template>
  <div class="platform">
    <div class="manue">
      <div class="logo">
        CCAV
      </div>
      <div class="manue-bar">
        <el-menu
          background-color="#20222A"
          text-color="rgba(255,255,255,.7)"
          active-text-color="#fff">
          <template v-for="item in nav">
            <el-submenu
              :index="item.index"
              :key="item.index"
              v-if="item.childrens && item.childrens.length > 0">
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{ item.name }}</span>
              </template>
              <el-menu-item
                v-for="sub in item.childrens"
                :index="sub.index"
                :key="sub.index"
                @click="openLink(sub.path)">
                {{ sub.name }}
              </el-menu-item>
            </el-submenu>
            <el-menu-item
              v-else
              :index="item.index"
              :key="item.index"
              @click="openLink(item.path)">
              <i :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </div>
    </div>
    <div class="content">
      <div class="top-bar"></div>
      <div class="content-wrapper">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as routeName from '@/routes/route-name.ts'
import Manue from '@/config/nav.ts'

@Component({
  name: 'Platform'
})
export default class Platform extends Vue {
  nav = Manue

  openLink (pathName: string) {
    this.$router.push({ name: pathName })
  }
}
</script>

<style lang="stylus" scoped>
.platform
  width 100%
  height 100%
  position relative
  .manue
    width 220px
    height 100%
    position absolute
    left 0
    top 0
    background-color #20222A
    box-sizing border-box
    z-index 30
    .logo
      width 100%
      height 50px
      box-shadow 0 1px 2px 0 rgba(0,0,0,.15)
      text-align center
      line-height 50px
      color #fff
      font-weight 700
      font-size 18px
  .content
    width 100%
    height 100%
    box-sizing border-box
    padding-left 220px
    position relative
    .top-bar
      width 100%
      height 50px
      background-color #fff
      box-shadow 0 1px 2px 0 rgba(0,0,0,.15)
      
    .content-wrapper
      width 100%
      height 100%
      box-sizing border-box
</style>

