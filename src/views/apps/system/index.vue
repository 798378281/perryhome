<template>
  <div class="wrapper">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'System'
})
export default class System extends Vue {

}
</script>


<style lang="stylus" scoped>
.el-menu {
  border-right none !important
}
</style>
