<template>
  <div id="como-cambiar" class="muestra">
    <img class="planeta" src="planeta.svg" alt="">

    <h2>Todo es muy fácil con la app de eKambia</h2>

    <div class="con-phone">
      <div class="phone">
        <div class="tel">
          <img src="tel.png" alt="">
        </div>
        <div class="con-images">
          <img v-if="active == 1" src="/muestra/1.png" key="1" alt="">
          <img v-else-if="active == 2" src="/muestra/2.png" key="2" alt="">
          <img v-else-if="active == 3" src="/muestra/3.png" key="3" alt="">
          <img v-else-if="active == 4" src="/muestra/4.png" key="4" alt="">
          <img v-else-if="active == 5" src="/muestra/5.png" key="5" alt="">
        </div>
      </div>
      <ul>
        <li @click="handleClick(1)" :class="{ active: active == 1 }">
          <p class="title">
            Escoja la moneda que deseas cambiar y la cantidad
          </p>
        </li>
        <li @click="handleClick(2)" :class="{ active: active == 2 }">
          <p class="title">
            Paso 1: Inicia una nueva transacción
          </p>
        </li>
        <li @click="handleClick(3)" :class="{ active: active == 3 }">
          <p class="title">
            Paso 2: Agrega el comprobante de la transferencia
          </p>
        </li>
        <li @click="handleClick(4)" :class="{ active: active == 4 }">
          <p class="title">
            Paso 3: Verificación de transacción
          </p>
        </li>
        <li @click="handleClick(5)" :class="{ active: active == 5 }">
          <p class="title">
            Listo! transacción exitosa!
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

  handleClick(val) {
    this.active = val
  }
}
</script>
<style lang="sass" scoped>
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
  h2
    width: 100%
    padding: 20px
    text-align: center
    font-size: 2.5rem
    padding-bottom: 60px
    z-index: 100
    position: relative
  .con-phone
    display: flex
    align-items: center
    justify-content: center
    z-index: 100
    position: relative
    padding: 0px 20px
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
        &.active
          color: #fff
          &:after
            width: 100%
          &:before
            transform: scale(1)
    .phone
      position: relative
      width: 300px
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
        img
          width: 100%
          position: relative
          left: 0px
          top: 0px
          z-index: 20
          display: block
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
    .con-phone
      ul
        li
          p
            font-size: .8rem
            padding: 15px
@media (max-width: 600px)
  .muestra
    h2
      font-size: 1.6rem
    .con-phone
      flex-direction: column
      .phone
        width: 100%
        max-width: 300px
      ul
        margin-left: 0px
        margin-top: 0px
        order: -1
        margin-bottom: 20px
        width: 100%
        li
          margin-bottom: 15px
          .title
            border-radius: 20px
            width: 100%
            margin-left: 0px
            max-width: none
          &:after
            border-radius: 20px

</style>
