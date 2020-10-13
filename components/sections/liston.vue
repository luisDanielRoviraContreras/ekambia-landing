<template>
  <div @mouseenter="stop" @mouseleave="initInterval" class="liston">
    <div ref="items" class="con-items">
      <div v-for="(item) in 6" :key="item" class="item">
        <div class="con-banderas">
          <img :src="`banderas/${item}.png`" alt="">
        </div>

        <div class="con-names">
          Dolar
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
      <div v-for="(item) in 6" :key="item" class="item">
        <div class="con-banderas">
          <img :src="`banderas/${item}.png`" alt="">
        </div>

        <div class="con-names">
          Dolar
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
      <div v-for="(item) in 6" :key="item" class="item">
        <div class="con-banderas">
          <img :src="`banderas/${item}.png`" alt="">
        </div>

        <div class="con-names">
          Dolar
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
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class bannerPrices extends Vue {
  interval: any = null
  stop() {
    clearInterval(this.interval)
  }
  initInterval() {
    const el: any = this.$refs.items
    this.interval = setInterval(() => {
      const item: any = el.querySelector('.item')
      item.style.marginLeft = '-240px'
      setTimeout(() => {
          item.style.marginLeft = '0px'
          el.appendChild(item)
      }, 2000);
    }, 0)
  }
  mounted() {
    this.initInterval()
  }
}
</script>
<style lang="sass" scoped>
@keyframes animate
  0%
    margin-left: 0px
  100%
    margin-left: -240px
.listons
  width: 100%
  overflow: hidden
.liston
  width: 100%
  height: 80px
  display: flex
  align-items: center
  justify-content: flex-start
  overflow: hidden
  border-bottom: 1px solid rgba(0,0,0,.05)
  position: absolute
  bottom: -2px
  z-index: 500
  -webkit-backdrop-filter: saturate(180%) blur(30px)
  backdrop-filter: saturate(180%) blur(30px)
  .con-items
    display: flex
    align-items: center
    flex: 1
    justify-content: flex-start
    overflow: hidden
    height: 80px
    scroll-behavior: smooth
    transition: all .25s linear
    .item
      background: rgba(0,0,0,.7)
      height: 80px
      display: flex
      align-items: center
      justify-content: center
      padding: 0px 15px
      position: relative
      color: #fff
      max-width: 240px
      transition: all .25s linear, margin-left 2s linear
      &:hover
        background: rgba(0,0,0,.85)
      &:after
        content: ''
        position: absolute
        right: 0px
        height: 30px
        width: 1px
        background: rgba(255,255,255,1)
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
        padding: 0px 10px
      .con-prices
        display: flex
        align-items: center
        justify-content: center
        .price
          text-align: center
          padding: 0px 10px
          span
            font-size: .7rem
          b
            font-size: .8rem

// responsive

// @media (max-width: 812px), (pointer:none), (pointer:coarse)
</style>
