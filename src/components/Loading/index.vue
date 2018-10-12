<template>
  <div class="xui-loading" :style="{ 'min-height': `${minHeight}px` }">
    <Spin v-if="fetching" class="spin">
      <Icon type="ios-loading" :size="size" class="demo-spin-icon-load"></Icon>
      <div>{{loadingText}}</div>
    </Spin>
    <div class="shadow" v-if="fetching"></div>
    <slot v-if="fetching ? visible : true"></slot>
  </div>
</template>

<script lang="ts">
import { Icon, Spin } from 'iview'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'xui-loading',
  components: { Spin, Icon }
})
export default class XuiLoading extends Vue {
  /**
   * @param size loading大小
   * @param loadingText loading文字
   */
  @Prop({ type: Number, default: 18 }) public size!: number
  @Prop({ type: String, default: '拼命加载中' }) public loadingText!: string
  @Prop({ type: Boolean, default: true }) private fetching!: boolean
  @Prop({ type: Boolean, default: false }) private visible!: boolean
  @Prop({ type: [Number, String], default: 30 }) private minHeight!: number
}
</script>

<style lang="scss" scoped>
.xui-loading {
  position: relative;
  .spin {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 42px;
    margin: auto;
    z-index: 12;
  }
  .shadow {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 10;
  }
  >>> .ivu-spin {
    user-select: none;
    color: #28d489;
  }
}

@keyframes ani-demo-spin {
  from { transform: rotate(0deg);}
  50%  { transform: rotate(180deg);}
  to   { transform: rotate(360deg);}
}

.demo-spin-icon-load{
  animation: ani-demo-spin 1s linear infinite;
}
</style>
