<template>
  <div class="wrapper">
    <div class="wrapper__menue">
      <ul class="menue">
        <li class="item" v-for="(item, index) in Navs" :key="index">
          <div class="item__line"></div>
          {{ item.label }}
        </li>
      </ul>
    </div>
    <div class="wrapper__content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Navs, { Nav } from './nav'

@Component({
  name: 'System'
})
export default class System extends Vue {
  Navs: Nav[] = Navs
}
</script>


<style lang="stylus" scoped>
.menue
  width 100%
  .item
    height 40px
    line-height 40px
    text-align center
    cursor pointer
    font-size 14px
    position relative
    border-bottom 1px solid #ccc
    &__line
      height 100%
      width 2px
      position absolute
      right 0
      &--active
        background-color red
</style>
