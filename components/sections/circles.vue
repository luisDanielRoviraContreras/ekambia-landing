<template>
  <div id="beneficios" class="circles">
    <img class="star1" src="estrella.svg" alt="">
    <img class="star2" src="estrella.svg" alt="">
    <img class="star3" src="estrella.svg" alt="">
    <img class="star4" src="estrella.svg" alt="">
    <img class="star5" src="estrella.svg" alt="">
    <img class="star6" src="estrella.svg" alt="">
    <img class="star7" src="estrella.svg" alt="">
    <div class="con-svg1">
      <div class="custom-shape-divider-top-1602088878">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
      </svg>
      </div>
      <div class="line">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
          </svg>
      </div>
    </div>
    <div class="circle">
      <div class="text">
        <h3>
          Con ekambia puedes operar y recibir tu dinero desde tu domicilio
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
          No tenes efectivo? No importa, con ekambia podes operar con tu tarjeta de crédito y/o débito, en nuestras oficinas y te acercamos el POS
        </h3>
      </div>
    </div>
    <div class="circle">
      <div class="text">
        <h3>
          Quieres ahorrar mas? Con ekambia nunca dejas de ahorrar, porque tu cotización mejora en función al monto a cambiar, y por ser cliente habitual
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
          <img src="circles/4tienda.svg" alt="">
          <img src="circles/4tienda.svg" class="blur" alt="">
        </div>
      </div>
      <div class="text">
        <h3>
          Obtener beneficios con nuestros comercios adheridos
        </h3>
      </div>
    </div>
    <div class="con-svg2">
      <div class="custom-shape-divider-top-1602088878">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
      </svg>
      </div>
      <div class="line">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
          </svg>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class circles extends Vue {}
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
.custom-shape-divider-top-1602088878
    position: absolute
    top: 0
    left: 0
    width: 100%
    overflow: hidden
    line-height: 0
    svg
      z-index: 10
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
  .circle
    position: relative
    width: 100%
    max-width: 900px
    color: #fff
    display: flex
    align-items: center
    justify-content: space-between
    padding: 40px
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
    .con-svg
      width: 250px
      height: 250px
      position: relative
      display: flex
      align-items: center
      justify-content: center
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
          border: 2px solid rgba(255,255,255,.03)
          position: absolute
          border-radius: 50%
          animation: circleAnimate 3s ease infinite alternate
        &:before
          content: ''
          width: 100%
          height: 100%
          transform: scale(.85)
          border: 2px solid rgba(255,255,255,.03)
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
@media (max-width: 540px)
  .circles
    padding-top: 80px
    padding-bottom: 80px
    .circle
      padding: 20px 10px
      .con-svg
        width: 140px
        height: 140px
        .icon
          img
            max-width: 60px
      .text
        font-size: .7rem
        padding: 0px 15px
</style>
