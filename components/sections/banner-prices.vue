<template>
  <div class="banner-prices">
    <div class="con-btns">
      <Button border>
        Asuncion
      </Button>
      <Button>
        Arbitraje
      </Button>
    </div>
    <button @click="prev" class="arrow arrow1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.939 4.939L6.879 12 13.939 19.061 16.061 16.939 11.121 12 16.061 7.061z"/></svg>
    </button>
    <div ref="items" class="con-items">
      <div v-for="(item, i) in 20" :key="i" class="item">
        <div class="con-banderas">
          <img src="banderas/1.png" alt="">
          <img src="banderas/2.png" alt="">
        </div>

        <div class="con-names">
          Dolar vs Euro
        </div>

        <div class="con-prices">
          <div class="buy price">
            <span>Compra</span>
            <b>
              124
            </b>
          </div>
          <div class="sell price">
            <span>Venta</span>
            <b>
              126
            </b>
          </div>
        </div>
      </div>
    </div>
    <button @click="next" class="arrow arrow2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.061 19.061L17.121 12 10.061 4.939 7.939 7.061 12.879 12 7.939 16.939z"/></svg>
    </button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class bannerPrices extends Vue {
  prev() {
    (this.$refs.items as any).scrollLeft -= window.innerWidth < 620 ? window.innerWidth : window.innerWidth / 2
  }
  next() {
    (this.$refs.items as any).scrollLeft += window.innerWidth < 620 ? window.innerWidth : window.innerWidth / 2
  }
}
</script>
<style lang="sass" scoped>
.banner-prices
  width: 100%
  height: 60px
  display: flex
  align-items: center
  justify-content: flex-start
  overflow: hidden
  border-bottom: 1px solid rgba(0,0,0,.05)
  background: #fff
  .arrow
    height: 60px
    padding: 15px
    cursor: pointer
    background: transparent
    border: 0px
    z-index: 10
    position: relative
    transition: all .25s ease
    &:hover svg
      transform: scale(1.2)
    &:active svg
      transform: scale(.8)
    &.arrow1
      box-shadow: 20px 0px 20px 0px rgba(0,0,0,.03)
    &.arrow2
      box-shadow: -20px 0px 20px 0px rgba(0,0,0,.03)
    svg
      width: 20px
      transition: all .2s ease
  .con-btns
    display: flex
    align-items: center
    justify-content: center
    padding: 0px 0px
    button
      margin: 0px 5px
  .con-items
    display: flex
    align-items: center
    flex: 1
    justify-content: flex-start
    overflow-x: auto
    overflow-y: hidden
    height: 80px
    padding-left: 5px
    padding-right: 5px
    scroll-behavior: smooth
    &::-webkit-scrollbar
      width: 0px
      height: 0px
    .item
      background: #fff
      height: 80px
      display: flex
      align-items: center
      justify-content: center
      padding: 0px 6px
      position: relative
      &:after
        content: ''
        position: absolute
        right: 0px
        height: 35px
        width: 1px
        background: rgba(0,0,0,.1)
      .con-banderas
        display: flex
        align-items: center
        justify-content: center
        img
          width: 35px
          border-radius: 13px
          margin: 0px 5px
      .con-names
        white-space: nowrap
        font-size: .8rem
        font-weight: bold
        padding: 0px 5px
      .con-prices
        display: flex
        align-items: center
        justify-content: center
        .price
          text-align: center
          padding: 0px 5px
          span
            font-size: .7rem
          b
            font-size: .8rem

// responsive

@media (max-width: 940px)
  .banner-prices
    .con-btns
      .button
        padding: 12px 16px
        font-size: .85rem
        margin: 0px
        &.border
          margin-right: 5px
          margin-left: 5px
@media (max-width: 620px)
  .banner-prices
    .arrow
      padding: 10px
    .con-btns
      display: none
</style>
