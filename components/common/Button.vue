<template>
  <button
    class="button"
    :class="{ yellow, block, loading, border, white }"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
    <div class="load">
      <span class="span1"></span>
      <span class="span2"></span>
    </div>
  </button>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({
  inheritAttrs: false
})
export default class btn extends Vue {
  @Prop({ type: Boolean }) yellow!: boolean
  @Prop({ type: Boolean }) block!: boolean
  @Prop({ type: Boolean }) loading!: boolean
  @Prop({ type: Boolean }) border!: boolean
  @Prop({ type: Boolean }) white!: boolean
}
</script>
<style lang="sass" scoped>
.button
  background: #000
  padding: 12px 20px
  border: 0px
  color: #fff
  border-radius: 20px
  font-size: 14px
  font-weight: 600
  display: flex
  align-items: center
  justify-content: center
  cursor: pointer
  position: relative
  border: 2px solid transparent
  transition: all .25s ease
  &:hover
    background: rgba(0,0,0,.8)
  &.yellow:hover
    transform: translate(0, -3px)
    box-shadow: 0px 10px 30px 0px -color('color', .4)
  &.border
    background: transparent
    border: 2px solid -color('black', .15)
    color: -color('black')
    &:hover
      background: rgba(0,0,0,.05)
      border: 2px solid transparent
    &.white
      border: 2px solid -color('bg', .3)
      color: -color('bg')
      &:hover
        background: -color('bg')
        color: -color('black')

  &.loading
    pointer-events: none
    .load
      position: absolute
      z-index: 10
      width: 100%
      height: 100%
      background: inherit
      top: 0px
      left: 0px
      border-radius: inherit
      display: flex
      align-items: center
      justify-content: center
      .span1
        content: ''
        width: 32px
        height: 32px
        border-radius: 50%
        position: absolute
        border: 3px dashed #fff
        border-top: 3px solid transparent
        border-left: 3px solid transparent
        animation: load1 1s linear infinite
      .span2
        content: ''
        width: 32px
        height: 32px
        border-radius: 50%
        position: absolute
        border: 3px solid #fff
        border-top: 3px solid transparent
        border-left: 3px solid transparent
        animation: load2 1s ease infinite
  &.yellow
    background: -color('color')
    color: #000
    box-shadow: 0px 7px 20px 0px -color('color', .3)
  &.block
    width: 100%
  &:disabled
    opacity: .5
// responsive

@keyframes load1
  0%
    transform: rotate(0deg)
    animation-timing-function: linear
    -webkit-animation-timing-function: linear
  100%
    transform: rotate(360deg)
    animation-timing-function: linear
    -webkit-animation-timing-function: linear
@keyframes load2
  0%
    transform: rotate(0deg)
    animation-timing-function: ease
    -webkit-animation-timing-function: ease
  100%
    transform: rotate(360deg)
    animation-timing-function: ease
    -webkit-animation-timing-function: ease
// @media (max-width: 812px), (pointer:none), (pointer:coarse)
</style>
