<template>
  <div class="inicio">
    <!-- <trend
      class="chart"
      :data="getArray"
      gradientDirection="top"
      :gradient="['#ffda1a']"
      :padding="0"
      :radius="0"
      :stroke-width="1"
      stroke-linecap="round"
      :height="150"
      :width="getInnerWidth"
      :style="{
          transform: `translate(${x / 80}px, 0)`
        }"
      smooth>
    </trend> -->

    <img :style="{
      transform: `translate(-${x / 80}px, -${y / 80}px)`
    }" class="moneda1" src="monedas/svg1/1.svg" alt="">
    <img :style="{
      transform: `translate(-${x / 40}px, -${y / 40}px)`
    }" class="moneda2" src="monedas/svg1/4.svg" alt="">
    <!-- <img :style="{
      transform: `translate(${x / 60}px, ${y / 60}px)`
    }" class="billete1" src="monedas/svg1/2.svg" alt="">
    <img :style="{
      transform: `translate(${x / 70}px, ${y / 70}px)`
    }" class="billete2" src="monedas/svg1/4.svg" alt=""> -->

    <div class="con-inicio">
      <img :style="{
        transform: `translate(-${x / 80}px, 0)`
      }" class="montana" src="/montana.svg" alt="">
      <div class="con-text">
        <div class="text">
          <h1>
            Con <logo /> cambiar <br> dinero nunca fue tan fácil
          </h1>
          <div class="con-download">
            <btns-download />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class inicio extends Vue {
  x: any = 0
  y: any = 0
  getInnerWidth: any = 0
  handleMousemove(evt) {
    if (window.innerWidth > 812) {
      this.x = evt.x
      this.y = evt.y
    }
  }

  get getArray() {
    const picos = []
    for (let index = 0; index < 70; index++) {
      picos.push(Math.round(Math.random() * (15 - 0) + 0))
    }
    return picos
  }
  mounted() {
    this.$nextTick(() => {
      this.getInnerWidth = window.innerWidth + 500
    })

    window.addEventListener('mousemove', this.handleMousemove)
  }
}
</script>
<style lang="sass" scoped>
.chart
  position: absolute
  left: -100px
  width: calc(100% + 200px)
  bottom: 50px
.moneda1
  position: absolute
  left: 60px
  bottom: 180px
  z-index: 10
  width: 125px
.moneda2
  position: absolute
  right: 80px
  bottom: 70px
  z-index: 10
  width: 110px

.change
  width: 100%
  max-width: 440px
  z-index: 100
  position: relative
  h2
    text-align: center
    width: 100%
  footer
    padding: 20px
    padding-top: 30px
    padding-bottom: 0px
    p
      font-size: .7rem
      text-align: center
      opacity: .6
    a
      font-size: .7rem
      text-align: center
      color: #000
      display: block
      width: 100%
      margin-top: 20px

.change-form
  box-shadow: 0px 0px 30px 0px rgba(0,0,0,.05)
  border-radius: 30px
  padding: 40px
  position: relative
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  margin-top: 60px
  width: 100%
  background: #fff
  .button
    margin-top: 30px
    padding: 17px
  // button
  //   margin-top: 20px
  .con-inputs
    width: 100%
    padding-top: 35px
    .btn
      width: 54px
      height: 54px
      background: #000
      border-radius: 20px
      display: flex
      align-items: center
      justify-content: center
      border: 0px
      margin-left: auto
      margin-right: 30px
      margin-top: -10px
      margin-bottom: -10px
      cursor: pointer
      z-index: 100
      position: relative
      transition: all .25s ease
      &:hover
        transform: scale(1.1) rotate(8deg)
      svg
        transform: rotate(90deg)
        fill: #fff
        width: 30px
  .con-input
    display: flex
    align-items: center
    justify-content: center
    position: relative
    border: 2px solid rgba(0,0,0,.1)
    width: 100%
    border-radius: 20px
    z-index: 10
    label
      position: absolute
      left: 20px
      top: -12px
      background: #fff
      border-radius: 10px
      padding: 0px 8px
      font-weight: bold
      font-family: 'Gilroy', sans-serif
    input
      width: 100%
      padding: 18px
      border: 0px
      background: transparent
      font-weight: bold
      font-family: 'Gilroy', sans-serif
    svg
      width: 18px
      position: absolute
      right: 0px
      margin: 10px
      top: 4px
    select
      background: transparent
      padding: 18px
      padding-right: 40px
      border: 0px
      font-weight: bold
      font-family: 'Gilroy', sans-serif
      max-width: 140px
      border-radius: inherit
      -webkit-appearance: none
      -moz-appearance: none
      text-indent: 1px
      text-overflow: ''
      cursor: pointer
      &:hover
        background: -color(gray)
      &:-ms-expand
        display: none
  .con-price
    display: flex
    align-items: center
    justify-content: center
    position: absolute
    top: 0px
    background: #fff
    border-radius: 20px
    box-shadow: 0px 0px 30px 0px rgba(0,0,0,.05)
    transform: translate(0,-50%)
    padding: 0px 10px
    .price
      padding: 20px
      font-weight: bold
      position: relative
      display: flex
      align-items: center
      justify-content: center
      &:last-child
       &:after
         content: ''
         position: absolute
         left: 0px
         height: 30px
         width: 1px
         background: rgba(0,0,0,.1)

.inicio
  width: 100%
  height: auto
  background: #fff
  // overflow: hidden
  position: relative
  display: flex
  align-items: center
  justify-content: center
  .con-inicio
    display: flex
    align-items: center
    justify-content: flex-end
    z-index: 100
    position: relative
    max-width: 1400px
    width: 100%
  .con-change
    width: 50vw
    min-height: 800px
    display: flex
    align-items: center
    justify-content: center
    position: relative
    z-index: 100
  .con-text
    width: 50vw
    display: flex
    align-items: center
    justify-content: center
    padding-top: 200px
    padding-bottom: 200px
    .text
      bottom: 550px
      padding: 0px 30px
      .con-download
        display: flex
        align-items: center
        justify-content: flex-start
        margin-top: 25px
      h1
        font-size: 2.7rem
        line-height: 3.5rem
  .montana
    position: absolute
    bottom: 0px
    left: -490px
    width: 2600px
    // transform: translate(0%,100%)
    pointer-events: none
// responsive

@media (max-width: 1275px)
  .inicio
    .con-text
      .text
        h1
          font-size: 2.5rem
          line-height: 2.5rem

@media (max-width: 1085px)
  .inicio
    .con-text
      .text
        h1
          font-size: 2.2rem
          line-height: 2.2rem
@media (max-width: 970px)
  .con-inicio
    flex-direction: column
    padding-bottom: 100px
    .con-change
      height: auto
      width: 100vw
      padding-bottom: 150px
      min-height: auto
      .change
        width: calc(100% - 40px)
        margin: 0px 20px
    .con-text
      min-height: auto
      height: auto
      padding-top: 70px
      padding-bottom: 50px
      .montana
        left: -100px
        width: 1200px
        bottom: 208px
      .text
        position: relative
        bottom: 0px
        h1
          font-size: 1.8rem
          line-height: 1.8rem
          text-align: center
@media (max-width: 600px)
  .update
    font-size: .6rem
    margin: 10px
  .moneda2
    left: auto
    right: 0px
    bottom: 100px
    width: 100px
  .con-inicio
    padding-bottom: 150px
    .con-text
      .montana
        left: -230px
        width: 1400px
        bottom: 250px
      .text
        h1
          font-size: 1.5rem
    .con-change
      .change
        margin: 0px
        width: 100%
        footer
          p
            font-size: .6rem
          a
            font-size: .6rem
            margin-top: 10px
      .change-form
        padding: 20px
        margin-top: 45px
        .con-price
          .price
            padding: 15px
</style>
