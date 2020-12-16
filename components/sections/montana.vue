<template>
  <div class="inicio">
    <div  class="con-svg1">
      <div :style="{
      transform: `translate(-${x / 40}px, 0)`
    }" class="custom-shape-divider-top-1602088878">
          <!-- <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
      </svg> -->
         <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
    </div>

    <div class="con-inicio">
      <div class="con-text">
        <div class="text">
          <div class="con-btns-slide">
            <span @click="handleClick(0)" :class="{active: active == 0}"></span>
            <span @click="handleClick(1)" :class="{active: active == 1}"></span>
            <span @click="handleClick(2)" :class="{active: active == 2}"></span>
          </div>
          <div class="con-h1">
            <transition name="fade-h1">
              <h1 v-if="active == 0">
                Descarga la App y disfruta <br> de los beneficios que solo te <br> puede brindar <logo />
              </h1>
            </transition>
            <transition name="fade-h1">
              <h1 v-if="active == 1">
                Usa tus tarjetas para hacer <br> los cambios como y cuando lo necesites
              </h1>
            </transition>
            <transition name="fade-h1">
              <h1 v-if="active == 2">
                Cambia desde el lugar que <br> necesites tenemos la opción de delivery para ti
              </h1>
            </transition>
          </div>
          <div class="con-download">
            <btns-download />
          </div>
        </div>
      </div>

      <div class="con-images">
        <transition name="fade">
          <img v-show="active == 0" :src="`/${numberImage}.png`" alt="">
        </transition>
        <transition name="fade">
          <img v-show="active == 1" :src="`/${numberImage2}.png`" alt="">
        </transition>
        <transition name="fade">
          <img v-show="active == 2" :src="`/${numberImage3}.png`" alt="">
        </transition>
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
  numberImage: any = 0
  numberImage2: any = 0
  numberImage3: any = 0
  active: any = 0

  slide1: any = [
    // '1',
    '2',
    '6',
    '7',
    '10',
    '12'
  ]

  slide2: any = [
    '3',
    '4',
    '5',
    '9',
    '11'
  ]

  slide3: any = [
    '8',
  ]

  interval: any = null

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

  getImage() {
    this.numberImage = this.slide1[Math.floor((Math.random() * (4 - 0 + 0)) + 0)]
    this.numberImage2 = this.slide2[Math.floor((Math.random() * (4 - 0 + 0)) + 0)]
    this.numberImage3 = 8
  }

  // created() {
  //   this.getImage()
  // }

  handleClick(n) {
    this.active = n
    clearInterval(this.interval)
    this.initInterval()
  }

  initInterval() {
    if (this.$cookies.get('numberImage') == this.numberImage) {
      this.numberImage = this.slide1[Math.floor((Math.random() * (4 - 0 + 0)) + 0)]
    }

    setTimeout(() => {
      this.$cookies.set('numberImage', this.numberImage)
    }, 300);
    this.interval = setInterval(() => {
      if (this.active == 2) {
        this.active = 0
      } else {
        this.active += 1
      }
    }, 6000)
  }

  mounted() {
    this.getImage()
    this.initInterval()
    this.$nextTick(() => {
      this.getInnerWidth = window.innerWidth + 500
    })

    window.addEventListener('mousemove', this.handleMousemove)
  }
}
</script>
<style lang="sass" scoped>
.fade-enter-active, .fade-leave-active
  transition: all .25s ease-out

.fade-enter, .fade-leave-to
  opacity: 0
  transform-origin: bottom
  transform: scale(0)

.fade-h1-enter-active, .fade-h1-leave-active
  transition: all .25s ease-out

@media (min-width: 600px)
  .fade-h1-enter
    opacity: 0
    transform: translate(-100px)
  .fade-h1-leave-to
    opacity: 0
    transform: translate(100px)


.con-h1
  position: relative
  min-height: 150px
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  h1
    position: absolute

.con-btns-slide
  position: relative
  display: flex
  align-items: center
  justify-content: flex-start
  width: 100%
  margin-bottom: 10px
  span
    margin: 0px 8px
    width: 40px
    height: 5px
    display: block
    background: #000
    opacity: .15
    border-radius: 5px
    cursor: pointer
    &:first-child
      margin-left: 0px
    &.active
      opacity: 1

.con-svg1
  position: absolute
  width: 100%
  left: 0px
  bottom: 0px
  transform: translate(0,-100%) rotate(180deg)
  z-index: 200
  pointer-events: none
.line
  position: absolute
  top: -10px
  left: -10%
  width: 120%
  overflow: hidden
  line-height: 0
  transform: rotate(4deg)
  svg
    fill: transparent
    stroke: #000
    z-index: 20
.custom-shape-divider-top-1602088878
    position: absolute
    top: 0
    left: 0
    width: 120%
    overflow: hidden
    line-height: 0
    svg
      z-index: 10
      position: relative
      display: block
      width: calc(155% + 1.3px)
      height: 150px

.con-images
  width: 50vw
  margin-top: 50px
  margin-bottom: -50px
  min-height: 522px
  position: relative
  display: flex
  align-items: flex-end
  justify-content: center
  img
    width: 100%
    display: block
    position: absolute

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
    margin-bottom: 50px
    margin-top: 50px
  .con-text
    width: 50vw
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    .text
      bottom: 550px
      width: 100%
      max-width: 500px
      .con-download
        display: flex
        align-items: center
        justify-content: flex-start
        margin-top: 25px
      h1
        font-size: 2.2rem
        line-height: 3rem
        width: 500px
// responsive

@media (max-width: 1100px)
  .con-inicio
    flex-direction: column
    padding-top: 20px
    .con-btns-slide
      justify-content: center
    .con-text
      width: 100%
      .text
        width: 100%
        text-align: center
        .con-h1
          min-height: 100px
          h1
            width: 100%
        .con-download
          display: flex
          align-items: center
          justify-content: center
        br
          display: none
    .con-images
      width: 100%
      margin-bottom: -100px
      min-height: 365px
      // img
      //   position: relative
@media (max-width: 600px)
  .fade-h1-enter
    opacity: 0
    transform: translate(50px)
  .fade-h1-leave-to
    opacity: 0
    transform: translate(-50px)
  .custom-shape-divider-top-1602088878
    svg
      height: 60px
  .inicio
    .con-images
      img
        width: 130%
    .con-text
      .text
        padding: 0px 20px
        h1
          font-size: 1.5rem
          line-height: 1.5rem
          /deep/
            .logo
              svg
                height: 26px !important

</style>
