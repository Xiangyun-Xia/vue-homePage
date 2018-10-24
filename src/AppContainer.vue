<template>
  <div class="app-container">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import debounce from 'lodash/debounce'
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component({ name: 'app-container', components: {} })
export default class AppContainer extends Vue {

  protected created (): void {
    window.onresize = debounce(this.fixHeight, 10)
  }

  protected mounted () {
    this.fixHeight()
  }

  protected beforeDestroy () {
    window.onresize = null
  }

  private fixHeight () {
    const header: Vue = this.$refs.header as Vue
    const body: HTMLElement = this.$refs.body as HTMLElement
    const footer: Vue = this.$refs.footer as Vue
    const minHeight = document.body.offsetHeight - header.$el.offsetHeight - footer.$el.offsetHeight - 60
    body.style.minHeight = `${minHeight}px`
  }
}
</script>

<style lang="scss" scoped>
  .app-container {
    position: relative;
    background: red;
  }
</style>
