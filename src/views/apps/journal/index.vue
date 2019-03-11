<template>
  <div class="wrapper">
    <div class="wrapper__menue"></div>
    <div class="wrapper__content">
      <router-view />
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.wrapper
  height 100%
  box-sizing border-box
  position relative
  &__menue
    width 200px
    height 100%
    float left
    position relative
    z-index 10
    background-color #fff
    box-shadow 0 1px 2px 0 rgba(0,0,0,0.06)
  &__content
    position absolute
    width 100%
    height 100%
    z-index 9
    box-sizing border-box
    padding 0 0 0 200px
</style>
