<template>
  <div :class="{ relative, black }" class="liston">
    <div ref="items" class="con-items">
      <div v-for="(item, i) in 2" :key="i" class="content" :class="`content${i}`">
        <div v-for="(item, ix) in coins" :key="ix+i" class="item">
          <div class="con-banderas">
            <img :src="`banderas/${item.MonId}.png`" alt="">
          </div>

          <div class="con-names">
            {{ names[item.MonId] }}
          </div>

          <div class="con-prices">
            <div class="buy price">
              <span>Compra</span>
              <b>
                {{ item.CotSucArbCom }}
              </b>
            </div>
            <div class="sell price">
              <span>Venta</span>
              <b>
                {{ item.CotSucArbVen }}
              </b>
            </div>
          </div>
        </div>
        <div v-for="(item, ix) in coins" :key="ix+i+'x1'" class="item">
          <div class="con-banderas">
            <img :src="`banderas/${item.MonId}.png`" alt="">
          </div>

          <div class="con-names">
            {{ names[item.MonId] }}
          </div>

          <div class="con-prices">
            <div class="buy price">
              <span>Compra</span>
              <b>
                {{ item.CotSucArbCom }}
              </b>
            </div>
            <div class="sell price">
              <span>Venta</span>
              <b>
                {{ item.CotSucArbVen }}
              </b>
            </div>
          </div>
        </div>
        <div v-for="(item, ix) in coins" :key="ix+i+'x3'" class="item">
          <div class="con-banderas">
            <img :src="`banderas/${item.MonId}.png`" alt="">
          </div>

          <div class="con-names">
            {{ names[item.MonId] }}
          </div>

          <div class="con-prices">
            <div class="buy price">
              <span>Compra</span>
              <b>
                {{ item.CotSucArbCom }}
              </b>
            </div>
            <div class="sell price">
              <span>Venta</span>
              <b>
                {{ item.CotSucArbVen }}
              </b>
            </div>
          </div>
        </div>
        <div v-for="(item, ix) in coins" :key="ix+i+'x4'" class="item">
          <div class="con-banderas">
            <img :src="`banderas/${item.MonId}.png`" alt="">
          </div>

          <div class="con-names">
            {{ names[item.MonId] }}
          </div>

          <div class="con-prices">
            <div class="buy price">
              <span>Compra</span>
              <b>
                {{ item.CotSucArbCom }}
              </b>
            </div>
            <div class="sell price">
              <span>Venta</span>
              <b>
                {{ item.CotSucArbVen }}
              </b>
            </div>
          </div>
        </div>
        <div v-for="(item, ix) in coins" :key="ix+i+'x5'" class="item">
          <div class="con-banderas">
            <img :src="`banderas/${item.MonId}.png`" alt="">
          </div>

          <div class="con-names">
            {{ names[item.MonId] }}
          </div>

          <div class="con-prices">
            <div class="buy price">
              <span>Compra</span>
              <b>
                {{ item.CotSucArbCom }}
              </b>
            </div>
            <div class="sell price">
              <span>Venta</span>
              <b>
                {{ item.CotSucArbVen }}
              </b>
            </div>
          </div>
        </div>
        <div v-for="(item, ix) in coins" :key="ix+i+'x6'" class="item">
          <div class="con-banderas">
            <img :src="`banderas/${item.MonId}.png`" alt="">
          </div>

          <div class="con-names">
            {{ names[item.MonId] }}
          </div>

          <div class="con-prices">
            <div class="buy price">
              <span>Compra</span>
              <b>
                {{ item.CotSucArbCom }}
              </b>
            </div>
            <div class="sell price">
              <span>Venta</span>
              <b>
                {{ item.CotSucArbVen }}
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import axios from '~/plugins/axios'
@Component
export default class bannerPrices extends Vue {
  interval: any = null
  @Prop({ type: Boolean }) relative: boolean
  @Prop({ type: Boolean }) black: boolean
  stop() {
    clearInterval(this.interval)
  }

  names: any = [
    '',
    'GUARANIES',
    'DOLARES AMERICANOS',
    'PESOS ARGENTINOS',
    'REALES',
    'EUROS',
    '',
    'YEN JAPONES',
    'LIBRAS ESTERLINAS',
    'FRANCO SUIZO',
  ]
  coins = [];

  mounted() {
    axios.get('cotizaciones').then(({data}) => {
      this.coins = data.info.SDTCotizaciones
    })
  }
}
</script>
<style lang="sass" scoped>

.content0
  animation: animateAll 100s linear infinite
.content1
  animation: animateAll 100s linear infinite

@keyframes animateAll
  0%
    transform: translate(0)
  100%
    transform: translate(-100%)

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
  height: 70px
  display: flex
  align-items: center
  justify-content: flex-start
  overflow: hidden
  border-bottom: 1px solid rgba(0,0,0,.05)
  position: absolute
  bottom: -2px
  z-index: 500
  background: rgba(0,0,0,.7)
  -webkit-backdrop-filter: saturate(180%) blur(30px)
  backdrop-filter: saturate(180%) blur(30px)
  &:hover
    .content0, .content1
      animation-play-state: paused
  &.black
    -webkit-backdrop-filter: none
    backdrop-filter: none
    border-top: 2px solid rgb(40,40,40)
    background: rgba(0,0,0,1)
  &.relative
    position: relative
    height: 60px
    bottom: auto
    top: 0px
  .con-items
    display: flex
    align-items: center
    flex: 1
    justify-content: flex-start
    overflow: hidden
    height: 70px
    width: auto
    position: absolute
    .content
      position: relative
      display: flex
      align-items: center
      flex: 1
      justify-content: flex-start
      overflow: hidden
    // scroll-behavior: smooth
    // transition: all .25s linear
    .item
      height: 70px
      display: flex
      align-items: center
      justify-content: center
      padding: 0px 15px
      position: relative
      color: #fff
      // max-width: 300px
      transition: all .25s ease
      &:hover
        background: rgba(255,255,255,.15)
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
          display: block
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

@media (max-width: 600px)
  .content0
    animation: animateAll 100s linear infinite
  .content1
    animation: animateAll 100s linear infinite
  .liston
    height: 60px
    .con-items
      .item
        height: 60px
        padding: 0px 10px
        .con-banderas
          img
            width: 30px

</style>
