<template>
  <div class="steps">
    <img class="star1" src="estrella.svg" alt="">
    <img class="star2" src="estrella.svg" alt="">
    <img class="star3" src="estrella.svg" alt="">
    <img class="star4" src="estrella.svg" alt="">
    <img class="star5" src="estrella.svg" alt="">
    <img class="star6" src="estrella.svg" alt="">
    <img class="star7" src="estrella.svg" alt="">
    <h2>Como realizar tus cambios</h2>
    <div class="con-cards">
      <div class="card">
        <div class="number">
          1
        </div>
        <img src="/1_descarga.svg" alt="">
        <h3>
          Descarga la App o continua desde aca
        </h3>
      </div>
      <div class="card">
        <div class="number">
          2
        </div>
        <img src="/2_telefono.svg" alt="">
        <h3>
          Solicita tu operación de cambio e identificación
        </h3>

        <svg class="svg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380.005 79.28">
          <path id="Trazado_7839" data-name="Trazado 7839" d="M199.033-1166.715s88.175,50.138,140.8,44.6,37.158-61.938,89.6-73.6,145.6,26.952,145.6,26.952" transform="translate(-196.988 1199.455)" fill="none" stroke="#ffda1a" stroke-linecap="round" stroke-width="3" stroke-dasharray="7"/>
        </svg>

        <svg class="svg2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 368.717 61.798">
          <path id="Trazado_7838" data-name="Trazado 7838" d="M192.633-1155.515s70.575,28.338,123.2,22.8,50.358-47.388,108.8-56.4,132.8,22.4,132.8,22.4" transform="translate(-190.682 1192.276)" fill="none" stroke="#ffda1a" stroke-linecap="round" stroke-width="3" stroke-dasharray="7"/>
        </svg>
      </div>
      <div class="card">
        <div class="number">
          3
        </div>
        <img src="/3_chico.svg" alt="">
        <h3>
          Recibe tu dinero en casa o en nuestras oficinas
        </h3>
      </div>
    </div>
    <h2 class="bottom">
      Ya esta! Asi de fácil! Asi de seguro! Asi de comodo!
    </h2>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class steps extends Vue {}
</script>
<style lang="sass" scoped>
.star1
  position: absolute
  left: 150px
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
  left: 650px
  width: 12px
  bottom: 100px
.steps
  width: 100%
  background: #000
  padding-top: 100px
  padding-top: 120px
  z-index: 200
  position: relative
  padding-bottom: 300px
  h2
    color: #fff
    width: 100%
    text-align: center
    font-size: 2.2rem
    padding: 20px
    padding-bottom: 80px
    position: relative
    &:after
      content: ''
      position: absolute
      left: 50%
      transform: translate(-50%)
      height: 4px
      width: 80px
      background: -color('color')
      top: -5px
    &.bottom
      padding-bottom: 20px
      padding-top: 80px
      &:after
        top: auto
        bottom: -5px
  .con-cards
    display: flex
    align-items: center
    justify-content: center
  .card
    color: #fff
    background: rgba(255,255,255,.1)
    width: 300px
    padding: 20px
    height: 400px
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    position: relative
    border-radius: 30px
    margin: 20px
    .svg1
      width: 300px
      position: absolute
      top: -25px
      left: -170px
    .svg2
      width: 300px
      position: absolute
      top: -25px
      left: 170px
    .number
      background: -color('color')
      color: #000
      width: 65px
      height: 65px
      border-radius: 20px
      display: flex
      align-items: center
      justify-content: center
      font-size: 2.5rem
      position: absolute
      top: -30px
      box-shadow: 0px 5px 25px 0px -color('color', .3)
    h3
      text-align: center
      width: 100%
      font-weight: normal
    img
      flex: 1
      max-width: 200px
// responsive

@media (max-width: 1100px)
  .steps
    .con-cards
      .card
        width: 33%
        .number
          z-index: 100
        img
          max-width: 140px
        .svg1
          width: 33vw
          left: -16vw
        .svg2
          width: 33vw
          left: 16vw

@media (max-width: 812px)
  .steps
    padding-bottom: 150px
    h2
      font-size: 1.7rem
    .con-cards
      flex-direction: column
      .card
        width: calc(100% - 40px)
        max-width: 500px
        margin: 20px
        .number
          z-index: 100
        img
          width: 100%
          max-width: 200px
        svg
          display: none
</style>
