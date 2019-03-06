<template>
  <!-- <router-view /> -->
  <Platform>
    <transition name="el-fade-in-linear">
      <router-view />
    </transition>
  </Platform>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
    name: 'Auth'
})
export default class Auth extends Vue {

}
</script>

<style lang="stylus" scoped>

</style>
