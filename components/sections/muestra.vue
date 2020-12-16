<template>
  <div :class="{ visible }" id="como-cambiar" class="muestra">
    <!-- <img :style="{
      transform: `translate(-${x / 120}px, -${y / 120}px)`
    }" class="moneda1" src="monedas/svg1/1.svg" alt="">
    <img :style="{
      transform: `translate(-${x / 120}px, -${y / 120}px)`
    }" class="moneda2" src="monedas/svg1/5.svg" alt="">
    <img :style="{
      transform: `translate(${x / 90}px, ${y / 90}px)`
    }" class="planeta" src="planeta.svg" alt=""> -->

    <h2>Todo es más fácil con la App de <logo /></h2>
<!-- :style="{
      transform: `translate(-${x / 140}px, -${y / 140}px)`
    }" -->
    <div class="con-phone">
      <div  class="phone">
        <div class="tel">
          <img src="tel.png" alt="">
        </div>
        <div class="con-images">
          <img class="bg" src="/muestra/1.png" alt="">
          <transition name="img">
            <img v-show="active == 1" src="/muestra/1.png" key="1" alt="">
          </transition>
          <transition name="img">
            <img v-show="active == 2" src="/muestra/2.png" key="2" alt="">
          </transition>
          <transition name="img">
            <img v-show="active == 3" src="/muestra/3.png" key="3" alt="">
          </transition>
          <transition name="img">
            <img v-show="active == 4" src="/muestra/4.png" key="4" alt="">
          </transition>
          <transition name="img">
            <img v-show="active == 5" src="/muestra/5.png" key="5" alt="">
          </transition>
        </div>
      </div>
      <ul>
        <li @click="handleClick(1)" :class="{ active: active == 1 }">
          <p class="title">
            Paso 1 <span>Elegí la moneda y la cantidad que deseas cambiar</span>
          </p>
        </li>
        <li @click="handleClick(2)" :class="{ active: active == 2 }">
          <p class="title">
            Paso 2 <span>Inicia una nueva transacción</span>
          </p>
        </li>
        <li @click="handleClick(3)" :class="{ active: active == 3 }">
          <p class="title">
            Paso 3 <span>Agrega el comprobante de la transferencia</span>
          </p>
        </li>
        <li @click="handleClick(4)" :class="{ active: active == 4 }">
          <p class="title">
            Paso 4 <span>Verificación de transacción</span>
          </p>
        </li>
        <li @click="handleClick(5)" :class="{ active: active == 5 }">
          <p class="title">
            Listo! <span>transacción exitosa!</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class muestra extends Vue {
  active: number = 1
  visible: boolean = false
  x: any = 0
  y: any = 0

  handleMousemove(evt) {
    if (window.innerWidth > 812) {
      this.x = evt.x
      this.y = evt.y
    }
  }

  handleClick(val) {
    this.active = val
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
.moneda1
  position: absolute
  left: 100px
  top: 10px
  z-index: 10
  width: 125px
  z-index: 100
.moneda2
  position: absolute
  right: 100px
  bottom: 160px
  z-index: 10
  width: 125px
  z-index: 100
.img-enter-active, .img-leave-active
  transition: all .25s ease
.img-enter
  transform: translate(100%)
.img-leave-to
  transform: translate(-100%)

.planeta
  position: absolute
  top: 50px
  z-index: 10
  width: 600px
  left: -240px

.fade-enter-active, .fade-leave-active
  transition: all .25s ease

.fade-enter, .fade-leave-to
  opacity: 0

.muestra
  background: #fff
  padding-top: 130px
  padding-bottom: 200px
  position: relative
  &.visible
    h2
      opacity: 1
      transform: translate(0, 0px)
    .con-phone
      opacity: 1
      transform: translate(0, 0px)
  h2
    width: 100%
    padding: 20px
    text-align: center
    font-size: 2.5rem
    padding-bottom: 60px
    z-index: 100
    position: relative
    opacity: 0
    transition: all .35s ease
    transform: translate(0, 50px)
  .con-phone
    display: flex
    align-items: center
    justify-content: center
    z-index: 100
    position: relative
    padding: 0px 20px
    transition: all .25s ease
    opacity: 0
    transform: translate(0, 100px)
    ul
      margin-left: -20px
      z-index: 10
      position: relative
      li
        border-radius: 0px 25px 25px 0px
        margin-bottom: 20px
        cursor: pointer
        transition: all .25s ease
        position: relative
        background: #fff
        &:hover
          p
            background: rgba(0,0,0,0)
            border: 2px solid -color(black, .1)
            padding-left: 25px
        &:after
          content: ''
          position: absolute
          width: 0%
          height: 100%
          background: #000
          z-index: 10
          border-radius: inherit
          top: 0px
          left: 0px
          transition: all .25s ease
        &:before
          content: ''
          position: absolute
          width: 8px
          height: 8px
          background: -color(color)
          z-index: 20
          border-radius: 50%
          top: 15px
          right: 15px
          transition: all .35s ease
          transform: scale(0)
        p
          padding: 20px
          z-index: 20
          max-width: 300px
          margin-left: 130px
          border: 2px solid -color(black, .2)
          border-radius: 25px
          position: relative
          font-size: .95rem
          transition: all .25s ease
        &.active
          color: #fff
          &:after
            width: 100%
          &:before
            transform: scale(1)
    .phone
      position: relative
      width: 270px
      z-index: 100
      .tel
        width: 100%
        z-index: 100
        position: relative
        img
          width: 100%
      .con-images
        z-index: 10
        width: calc(100% - 30px)
        position: absolute
        top: 10px
        left: 15px
        border-radius: 30px
        overflow: hidden
        background: #fff
        .bg
          width: 100%
          position: relative
          left: 0px
          top: 0px
          z-index: 20
          display: block
          transform: translate(0%)
          visibility: hidden
        img
          width: 100%
          position: absolute
          left: 0px
          top: 0px
          z-index: 20
          display: block
          transition: all .25s ease
// responsive

@media (max-width: 730px)
  .muestra
    .con-phone
      ul
        li
          p
            margin-left: 40px
@media (max-width: 600px)
  .muestra
    padding-top: 80px
    .moneda1,.planeta
      display: none
    .con-phone
      ul
        li
          p
            font-size: .8rem
            padding: 15px
            span
              display: none
@media (max-width: 600px)
  .muestra
    padding-bottom: 100px
    h2
      font-size: 1.6rem
      padding-bottom: 40px
      /deep/
        .logo
          svg
            height: 25px !important
    .con-phone
      flex-direction: column
      padding: 0px
      padding-right: 0px
      align-items: flex-start
      .phone
        width: 100%
        max-width: 260px
        margin-left: calc(100% - 280px)
        left: 0px
      ul
        margin-left: 0px
        margin-top: 0px
        order: -1
        margin-bottom: 20px
        width: 80px
        position: absolute
        z-index: 200
        left: 0px
        li
          margin-bottom: 15px
          border-radius: 0px 20px 20px 0px
          &:hover
            p
              background: rgba(0,0,0,0)
              border: 2px solid -color(black, .1)
              padding-left: 15px
          &:before
            display: none
          &:after
            border-radius: 0px 20px 20px 0px !important
          .title
            border-radius: 0px 20px 20px 0px !important
            border-left: 0px
          .title
            border-radius: 20px
            width: 100%
            margin-left: 0px
            max-width: none

</style>
