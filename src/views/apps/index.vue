<template>
  <Platform>
    <transition name="el-fade-in-linear">
      <router-view />
    </transition>
  </Platform>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Apps'
})
export default class Apps extends Vue {}
</script>

