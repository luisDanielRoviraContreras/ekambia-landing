<template>
  <div class="arbitraje">
    <header>
      <div class="con-btns">
        <Button border>
          Asunción
        </Button>
        <Button>
          Arbitraje
        </Button>
      </div>
    </header>

    <div class="con-items">
      <header>
        <h6>Asunción</h6>
        <h6>CDE</h6>
      </header>

      <div class="items">
        <div class="con-item" v-for="(item, i) in prices" :key="i">
          <div class="item">
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
          <div class="item">
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

      </div>
    </div>

    <footer>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.939 4.939L6.879 12 13.939 19.061 16.061 16.939 11.121 12 16.061 7.061z"></path></svg>
      </button>
      <ul>
        <li class="active"></li>
        <li></li>
        <li></li>
      </ul>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.061 19.061L17.121 12 10.061 4.939 7.939 7.061 12.879 12 7.939 16.939z"></path></svg>
      </button>
    </footer>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class arbitraje extends Vue {
  prices: any = [
    {
      name: 'Euro x Dólar',
      img1: 1,
      img2: 2,
      buy: '1.11 =',
      sell: '1.16 ='
    },
    {
      name: 'Pesos x Real',
      img1: 3,
      img2: 4,
      buy: '125 =',
      sell: '155 ='
    },
    {
      name: 'Sol x Peso',
      img1: 5,
      img2: 6,
      buy: '5.50 =',
      sell: '6.00 ='
    },
    {
      name: 'Dólar x Peso',
      img1: 7,
      img2: 8,
      buy: '5.1 =',
      sell: '6.7 ='
    }
  ]
}
</script>
<style lang="sass" scoped>
.arbitraje
  >footer
    display: flex
    align-items: center
    justify-content: space-between
    ul
      display: flex
      align-items: center
      justify-content: center
      li
        width: 34px
        height: 5px
        background: #000
        margin: 8px
        border-radius: 10px
        opacity: .2
        &.active
          opacity: 1

    button
      width: 50px
      height: 50px
      background: transparent
      border: 2px solid rgba(0,0,0,.05)
      border-radius: 20px
      cursor: pointer
      color: #000
      transition: all .25s ease
      fill: #000
      &:hover
        background: #000
        fill: #fff
      svg
        fill: inherit
  >header
    display: flex
    align-items: center
    justify-content: flex-start
    .con-btns
      display: flex
      align-items: center
      justify-content: flex-start
      padding: 10px 0px
      .button
        margin-right: 10px
.con-items
  header
    display: flex
    align-items: center
    justify-content: space-around
    h6
      padding: 10px
      text-align: left
      width: 50%
      font-size: .9rem
.con-item
  display: flex
  align-items: center
  justify-content: center
  background: -color(gray)
  margin-bottom: 15px
  border-radius: 22px
  cursor: pointer
  transition: all .25s ease
  box-shadow: 0px 0px 0px 0px rgba(0,0,0,.05)
  &:hover
    background: #fff
    box-shadow: 0px 6px 25px 0px rgba(0,0,0,.05)
    transform: translate(0, -4px)
.item
  height: 60px
  display: flex
  align-items: center
  justify-content: flex-start
  padding: 0px 6px
  position: relative
  width: 50%
  &:not(:last-child):after
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
      display: flex
      align-items: center
      justify-content: center
      flex-direction: column
      span
        font-size: .7rem
      b
        font-size: .8rem
// responsive

// @media (max-width: 812px), (pointer:none), (pointer:coarse)
</style>
