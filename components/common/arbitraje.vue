<template>
  <div class="arbitraje">
    <header>
      <div class="con-btns">
        <div class="div1">
          <!-- <Select :data="states" v-model="state" >
            <Option v-for="(item, i) in states" :key="i" :value="item.id" :text="item.alias" />
          </Select> -->
          
          <Button :border="!cotizacionActive" @click="cotizacionActive = true">
            Cotización
          </Button>
          <Button :border="cotizacionActive" @click="cotizacionActive = false">
            Arbitraje
          </Button>
        </div>
        <div class="div2">
          <Button @click="handleShare" border>
            <i class='bx bxs-share-alt'></i> <span>Compartir</span>
          </Button>
        </div>
      </div>
    </header>
    <!-- @mouseup="handleUp" @mousemove="handleMove" @mousedown="handleClickItems" -->
    <div  ref="conitems" class="con-items">
      <div class="items">
        <div class="con-item" v-for="(item, i) in coins" :key="i">
          <div class="item">
            <div v-if="item.MonId != 1" class="con-banderas">
              <img :src="`banderas/${item.MonId}.png`" alt="">
              <img :src="`banderas/${!cotizacionActive ? '2.png' : '1.svg'}`" alt="">
            </div>
            <div v-else class="con-banderas">
              <img :src="`banderas/1.svg`" alt="">
              <img :src="`banderas/${cotizacionActive ? '2.png' : '1.svg'}`" alt="">
            </div>

            <div class="con-names">
              {{ item.name }}
            </div>

            <div class="con-prices">
              <div class="buy price">
                <span>Compra</span>
                <b>
                  {{ cotizacionActive ? item.CotSucCotCom : item.CotSucArbCom }}
                </b>
              </div>
              <div class="sell price">
                <span>Venta</span>
                <b>
                  {{ cotizacionActive ? item.CotSucCotVen : item.CotSucArbVen }}
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <footer>
      <button @click="handlePrev">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.939 4.939L6.879 12 13.939 19.061 16.061 16.939 11.121 12 16.061 7.061z"></path></svg>
      </button>
      <ul>
        <li @click="handleClickLi(0)" :class="{active: scrollLeft < offsetWidth / 2}"></li>
        <li @click="handleClickLi(1)" :class="{active: scrollLeft > offsetWidth / 2 && scrollLeft < offsetWidth * 2}"></li>
        <li @click="handleClickLi(2)" :class="{active: scrollLeft > offsetWidth + (offsetWidth / 2)  && scrollLeft < offsetWidth * 3}"></li>
      </ul>
      <button @click="handleNext">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.061 19.061L17.121 12 10.061 4.939 7.939 7.061 12.879 12 7.939 16.939z"></path></svg>
      </button>
    </footer> -->
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from '@/plugins/axios'
@Component
export default class arbitraje extends Vue {
  state: any = 1
  offsetWidth: any = 0
  scrollLeft: any = 0
  coins: any = []
  cotizacionActive = true;

  handleShare() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'Ekambia',
        text: 'Cambia tu dinero como nunca antes!',
        url: 'https://ekambia.herokuapp.com/',
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    }
  }

  mounted() {
    this.offsetWidth = (this.$refs.conitems as any).offsetWidth;
    (this.$refs.conitems as any).addEventListener('scroll', (evt) => {
      this.scrollLeft = evt.target.scrollLeft
    })
    this.getData()
  }

  getData() {
    console.log('get data')
    axios.get('newcoins').then(({data}) => {
        this.coins = data.info.SDTCotizaciones
        console.log(this.coins)
      })
  }

  handleClickLi(n: any) {
    const scrollLeft = this.offsetWidth * n;
    (this.$refs.conitems as any).scrollTo(scrollLeft, 0)
  }

  handleNext() {
    const scrollLeft = this.scrollLeft += this.offsetWidth;
    (this.$refs.conitems as any).scrollTo(scrollLeft, 0)
  }
  handlePrev() {
    const scrollLeft = this.scrollLeft -= this.offsetWidth;
    (this.$refs.conitems as any).scrollTo(scrollLeft, 0)
  }

  states: any = [
    {
      alias:'Asunción',
      id: 1
    },
    {
      alias:'Caacupé',
      id: 2
    },
    {
      alias:'Pilar',
      id: 3
    },
    {
      alias:'Villa Hayes',
      id: 4
    },
    {
      alias:'Villarrica',
      id: 5
    }
  ]

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
  width: 100%
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
        transition: all .25s ease
        cursor: pointer
        &:hover
          opacity: .4
        &.active
          opacity: 1

    button
      width: 40px
      height: 45px
      background: transparent
      border: 2px solid rgba(0,0,0,.05)
      border-radius: 16px
      cursor: pointer
      color: #000
      transition: all .25s ease
      fill: #000
      &:hover
        background: #000
        fill: #fff
      svg
        fill: inherit
        margin-top: 4px
  >header
    display: flex
    align-items: center
    justify-content: flex-start
    .con-btns
      display: flex
      align-items: center
      justify-content: space-between
      padding: 10px 0px
      width: 100%
      .div1
        display: flex
        align-items: center
        justify-content: center
        i
          font-size: 1rem
          margin-right: 5px
        /deep/
          .select
            margin-right: 10px
            input
              width: 160px
              padding: 12px
              border-radius: 20px
              font-size: 14px
      .div2
        display: flex
        align-items: center
        justify-content: center
      .button
        margin-right: 10px
.con-items
  display: flex
  align-items: center
  justify-content: flex-start
  overflow: auto
  scroll-snap-type: x mandatory
  scroll-behavior: smooth
  .items
    min-width: 100%
    flex: 1
    scroll-snap-align: center
    margin-left: 15px
    &:first-child
      margin-left: 0px
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
  user-select: none
  &:hover
    background: #fff
    box-shadow: 0px 6px 25px 0px rgba(0,0,0,.05)
    transform: translate(0, -4px)
.item
  height: 60px
  display: flex
  align-items: center
  justify-content: space-between
  padding: 0px 6px
  position: relative
  width: 100%
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

@media (max-width: 660px)
  .arbitraje
    >header
      .con-btns
        flex-direction: column
        .div1
          width: 100%
          justify-content: space-between
          /deep/.select
            flex: 1
            input
              width: 100% !important
              max-width: 100%
          .button
            width: 44px
            height: 44px
            padding: 0px
            i
              margin-right: 0px
            span
              display: none
        .div2
          justify-content: flex-start
          width: 100%
          margin-top: 10px
          .button
            width: 100%
  .con-item
    flex-direction: column
    .item
      width: 100%
      justify-content: space-between
      &:not(:last-child):after
        width: 100%
        height: 1px
        bottom: 0px


</style>
