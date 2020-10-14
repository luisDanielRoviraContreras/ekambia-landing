<template>
  <div id="inicio" class="banner-prices">
    <div class="con-btns">
      <button border>
        Asunción
      </button>
      <button class="active">
        Arbitraje
      </button>
    </div>
    <button :disabled="scrollLeft == 0" @click="prev" class="arrow arrow1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.939 4.939L6.879 12 13.939 19.061 16.061 16.939 11.121 12 16.061 7.061z"/></svg>
    </button>
    <div ref="items" class="con-items">
      <div v-for="(item, i) in prices" :key="i" class="item">
        <div class="con-banderas">
          <img :src="`banderas/${item.img1}.png`" alt="">
          <img :src="`banderas/${item.img2}.png`" alt="">
        </div>

        <div class="con-names">
          {{ item.name }}
        </div>

        <div class="con-prices">
          <div class="buy price">
            <span>Compra</span>
            <b>
              {{ item.buy }}
            </b>
          </div>
          <div class="sell price">
            <span>Venta</span>
            <b>
              {{ item.sell }}
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
  scrollLeft: any = 0
  prices: any = [
    {
      name: 'Euro vs Dólar',
      img1: 1,
      img2: 2,
      buy: '224',
      sell: '228'
    },
    {
      name: 'Pesos vs Real',
      img1: 3,
      img2: 4,
      buy: '44',
      sell: '46'
    },
    {
      name: 'Sol vs Peso',
      img1: 5,
      img2: 6,
      buy: '120',
      sell: '126'
    },
    {
      name: 'Dólar vs Peso',
      img1: 7,
      img2: 8,
      buy: '400',
      sell: '480'
    },
    {
      name: 'Euro vs Dólar',
      img1: 1,
      img2: 2,
      buy: '224',
      sell: '228'
    },
    {
      name: 'Pesos vs Real',
      img1: 3,
      img2: 4,
      buy: '44',
      sell: '46'
    },
    {
      name: 'Sol vs Peso',
      img1: 5,
      img2: 6,
      buy: '120',
      sell: '126'
    },
    {
      name: 'Dólar vs Peso',
      img1: 7,
      img2: 8,
      buy: '400',
      sell: '480'
    },
    {
      name: 'Euro vs Dólar',
      img1: 1,
      img2: 2,
      buy: '224',
      sell: '228'
    },
    {
      name: 'Pesos vs Real',
      img1: 3,
      img2: 4,
      buy: '44',
      sell: '46'
    },
    {
      name: 'Sol vs Peso',
      img1: 5,
      img2: 6,
      buy: '120',
      sell: '126'
    },
    {
      name: 'Dólar vs Peso',
      img1: 7,
      img2: 8,
      buy: '400',
      sell: '480'
    }
  ]
  prev() {
    (this.$refs.items as any).scrollLeft -= window.innerWidth < 620 ? window.innerWidth : window.innerWidth / 2
  }
  next() {
    (this.$refs.items as any).scrollLeft += window.innerWidth < 620 ? window.innerWidth : window.innerWidth / 2
  }

  mounted() {
    const items: any = this.$refs.items
    items.addEventListener('scroll',() => {
      this.scrollLeft = items.scrollLeft
    })
  }
}
</script>
<style lang="sass" scoped>
.banner-prices
  width: 100%
  // height: 60px
  display: flex
  align-items: center
  justify-content: flex-start
  overflow: hidden
  border-bottom: 1px solid rgba(0,0,0,.05)
  background: #fff
  padding-top: 66px
  .arrow
    height: 60px
    padding: 8px
    cursor: pointer
    background: transparent
    border: 0px
    z-index: 10
    position: relative
    transition: all .25s ease
    &:disabled
     opacity: .4
     pointer-events: none
    &:hover svg
      transform: scale(1.2)
    &:active svg
      transform: scale(.8)
    &.arrow1
      box-shadow: 20px 0px 20px 0px rgba(0,0,0,.03)
    &.arrow2
      box-shadow: -20px 0px 20px 0px rgba(0,0,0,.03)
    svg
      width: 22px
      transition: all .2s ease
  .con-btns
    display: flex
    align-items: center
    justify-content: center
    padding: 0px 0px
    padding-left: 10px
    button
      margin: 0px 4px
      padding: 10px 12px
      border-radius: 16px
      font-size: .85rem
      border: 0px
      background: transparent
      border: 2px solid rgba(0,0,0,.08)
      cursor: pointer
      transition: all .25s ease
      &:hover
        background: rgba(0,0,0,.08)
        border: 2px solid transparent
      &.active
        background: #000
        color: #fff
  .con-items
    display: flex
    align-items: center
    flex: 1
    justify-content: flex-start
    overflow-x: auto
    overflow-y: hidden
    height: 60px
    padding-left: 5px
    padding-right: 5px
    scroll-behavior: smooth
    &::-webkit-scrollbar
      width: 0px
      height: 0px
    .item
      background: #fff
      height: 60px
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
    .con-items
      padding-left: 0px
      .item
        .con-banderas
          img
            width: 30px
            border-radius: 10px
            margin: 0px 3px
    .arrow
      padding: 5px
    .con-btns
      flex-direction: column
      padding-left: 0px
      button
        padding: 9px 4px
        font-size: .7rem
        margin: 0px !important
        min-width: 72px
        border-radius: 0px
        border: 0px !important
    //   display: none
</style>
