<template>
  <div class="view-home">
    homepage
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({ name: 'home', components: {} })
export default class Home extends Vue {
}
</script>

<style lang="scss" scoped>
  .view-home {
    height: 100px;
    width: 100px;
    background: green;
  }
</style>
