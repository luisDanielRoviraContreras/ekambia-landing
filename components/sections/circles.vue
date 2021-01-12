<template>
  <div :class="{ visible }" id="beneficios" class="circles">
    <div  class="con-svg1">
      <div :style="{
      transform: `translate(-${x / 40}px, 0)`
    }" class="custom-shape-divider-top-1602088878">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
      </svg>
      </div>
    </div>
    <div class="circle">
      <div class="text">
        <h3>
          Con <logo white height="20px" /> podés operar y recibir dinero desde tu casa.
        </h3>
      </div>

      <div class="con-svg">
        <div class="con-circles">
          <div class="circle1 cir"></div>
          <div class="circle2 cir"></div>
          <div class="circle3 cir"></div>
        </div>

        <div class="icon">
          <img src="circles/1casa.svg" alt="">
          <img src="circles/1casa.svg" class="blur" alt="">
        </div>
      </div>
    </div>
    <div class="circle">
      <div class="con-svg">
        <div class="con-circles">
          <div class="circle1 cir"></div>
          <div class="circle2 cir"></div>
          <div class="circle3 cir"></div>
        </div>

        <div class="icon">
          <img src="circles/2tarjeta.svg" alt="">
          <img src="circles/2tarjeta.svg" class="blur cards" alt="">
        </div>
      </div>
      <div class="text">
        <h3>
          ¿No tenés efectivo? ¡No importa! Podés operar con tu tarjeta de crédito o débito y acercamos el POS a tu domicilio.
        </h3>
      </div>
    </div>
    <div class="circle">
      <div class="text">
        <h3>
          ¿Querés ahorrar más? con <logo white height="20px" /> nunca dejás ahorrar porque tu cotización mejora en función al monto a cambiar y por ser cliente habitual.
        </h3>
      </div>

      <div class="con-svg">
        <div class="con-circles">
          <div class="circle1 cir"></div>
          <div class="circle2 cir"></div>
          <div class="circle3 cir"></div>
        </div>

        <div class="icon">
          <img src="circles/3ahorro.svg" alt="">
          <img src="circles/3ahorro.svg" class="blur" alt="">
        </div>
      </div>
    </div>
    <div class="circle">
      <div class="con-svg">
        <div class="con-circles">
          <div class="circle1 cir"></div>
          <div class="circle2 cir"></div>
          <div class="circle3 cir"></div>
        </div>

        <div class="icon">
          <img src="circles/4.svg" alt="">
          <img src="circles/4.svg" class="blur" alt="">
        </div>
      </div>
      <div class="text">
        <h3>
          Obtené beneficios a través de nuestros comercios adheridos.
        </h3>
      </div>
    </div>
    <div class="con-svg2">
      <div :style="{
      transform: `translate(-${x / 40}px, 0)`
    }" class="custom-shape-divider-top-1602088878">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
      <!-- <div :style="{
      transform: `translate(${x / 60}px, 0)`
    }" class="line">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div> -->
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class circles extends Vue {
  x: any = 0
  y: any = 0
  visible: boolean = false

  handleMousemove(evt) {
    if (window.innerWidth > 812) {
      this.x = evt.x
      this.y = evt.y
    }
  }
  mounted() {
    window.addEventListener('mousemove', this.handleMousemove)

    document.addEventListener('scroll', () => {
      if (window.pageYOffset > (this.$el as any).offsetTop - 400) {
        this.visible = true
      } else {
        this.visible = false
      }
    })
  }
}
</script>
<style lang="sass" scoped>
.star1
  position: absolute
  left: 150px
  top: 100px
  width: 20px
.star2
  position: absolute
  left: 300px
  width: 20px
  bottom: 400px
.star3
  position: absolute
  left: 350px
  width: 12px
  bottom: 450px
.star4
  position: absolute
  right: 350px
  width: 20px
  bottom: 150px
.star5
  position: absolute
  right: 150px
  width: 12px
  bottom: 650px
.star6
  position: absolute
  right: 550px
  width: 14px
  top: 150px
.star7
  position: absolute
  left: 150px
  width: 24px
  bottom: 30px


@keyframes circleAnimate
  0%
    transform: scale(.5)
    opacity: 0
  50%
    transform: scale(1.3)
    opacity: 1
  100%
    transform: scale(.5)
    opacity: 0
@keyframes circleRotate
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)

.con-img
  z-index: 100
  margin-top: -250px
  img
    width: 400px
.con-svg1
  .custom-shape-divider-top-1602088878
    top: -2px
.con-svg2
  .custom-shape-divider-top-1602088878
    top: -2px
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
    position: relative
    display: block
    width: calc(155% + 1.3px)
    height: 150px
.con-svg1
  position: absolute
  width: 100%
  left: 0px
  top: 0px
  transform: translate(0,-100%) rotate(180deg)
.con-svg2
  position: absolute
  width: 100%
  left: 0px
  bottom: 0px
  transform: translate(0,100%)
.circles
  width: 100%
  background: #000
  position: relative
  display: flex
  align-items: center
  justify-content: center
  z-index: 200
  padding-top: 200px
  padding-bottom: 200px
  flex-direction: column
  padding-top: 50px
  padding-bottom: 50px
  &.visible
    .circle
      opacity: 1
      transform: translate(0)
      .con-svg
        transform: scale(1)
  .circle
    position: relative
    width: 100%
    max-width: 900px
    color: #fff
    display: flex
    align-items: center
    justify-content: space-between
    padding: 40px
    transition: all .3s ease
    transform: translate(0, 100px)
    opacity: 0
    .text
      padding: 0px 40px
      flex: 1
      max-width: 500px
      position: relative
      &:after
        content: ''
        left: 40px
        top: -12px
        background: -color(color)
        width: 30px
        height: 3px
        position: absolute
        border-radius: 5px
    .con-svg
      width: 250px
      height: 250px
      position: relative
      display: flex
      align-items: center
      justify-content: center
      transition: all .3s ease
      transform: scale(.6)
      .con-circles
        width: 100%
        height: 100%
        position: absolute
        border: 3px solid #fff
        border-radius: 50%
        animation: circleRotate 40s linear infinite
        &:after
          content: ''
          width: 100%
          height: 100%
          transform: scale(1.25)
          border: 2px solid rgba(255,255,255,.15)
          position: absolute
          border-radius: 50%
          animation: circleAnimate 3s ease infinite alternate
        &:before
          content: ''
          width: 100%
          height: 100%
          transform: scale(.85)
          border: 2px solid rgba(255,255,255,.15)
          position: absolute
          border-radius: 50%
          animation: circleAnimate 5s ease infinite alternate
        .cir
          width: 16px
          height: 16px
          background: #fff
          border-radius: 50%
          position: absolute
          left: calc(50% - 8px)
          top: -8px
          &.circle2
            left: auto
            right: 6%
            top: auto
            bottom: 40px
          &.circle3
            left: 6%
            top: auto
            bottom: 40px
      .icon
        display: flex
        align-items: center
        justify-content: center
        img
          max-width: 120px
        .blur
          filter: blur(15px)
          position: absolute
          opacity: .55
          transform: scale(1.25)
          &.cards
            opacity: .35
// responsive

@media (max-width: 720px)
  .circles
    .circle
      padding: 20px
@media (max-width: 650px)
  .circles
    .circle
      .con-svg
        width: 200px
        height: 200px
        .con-circles
          .cir
            display: none
        .icon
          img
            max-width: 80px
      .text
        font-size: .8rem
        /deep/
          .logo
            transform: translate(0px, 5px) !important
            svg
              height: 18px !important
@media (max-width: 540px)
  .circles
    padding-top: 80px
    padding-bottom: 80px
    .circle
      padding: 20px 20px
      .con-svg
        width: 130px
        height: 130px
        .icon
          img
            max-width: 60px
      .text
        font-size: .7rem
        padding: 0px 15px
        /deep/
          .logo
            transform: translate(0px, 4px) !important
            svg
              height: 15px !important

@media (max-width: 600px)
  .custom-shape-divider-top-1602088878,.line
    svg
      height: 60px
</style>
