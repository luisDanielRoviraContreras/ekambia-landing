<template>
  <div class="navbar">
    <div class="logo-menu">
      <div class="con-logo">
        <img class="logo-web" src="ekambia_logo.svg" alt="">
        <img class="logo-responsive" src="ekambia_logo_final.svg" alt="">
      </div>

      <ul>
        <li @click="active = 'sec1'" :class="{ active: active == 'sec1' }">
          Inicio
        </li>
        <li @click="scrollToTop(300)" :class="{ active: active == 'sec2' }">
          Que es eKambia
        </li>
        <li @click="active = 'sec3'" :class="{ active: active == 'sec3' }">
          Beneficios
        </li>
        <li @click="active = 'sec4'" :class="{ active: active == 'sec4' }">
          Preguntas frecuentes
        </li>
      </ul>
    </div>

    <div class="con-btns">
      <Button border white>
        Iniciar Sesión
      </Button>
      <Button class="btn-2" yellow>
        Crear una Cuenta
      </Button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class navbar extends Vue {
  active: string = 'sec1'

  scrollToTop (duration) {
      // cancel if already on top
      if (document.scrollingElement.scrollTop === 0) return;

      const cosParameter = document.scrollingElement.scrollTop / 2;
      let scrollCount = 0, oldTimestamp = null;

      function step (newTimestamp) {
          if (oldTimestamp !== null) {
              // if duration is 0 scrollCount will be Infinity
              scrollCount += Math.PI * (newTimestamp - oldTimestamp) / duration;
              if (scrollCount >= Math.PI) return document.scrollingElement.scrollTop = 0;
              document.scrollingElement.scrollTop = cosParameter + cosParameter * Math.cos(scrollCount);
          }
          oldTimestamp = newTimestamp;
          window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
  }
}
</script>
<style lang="sass" scoped>
.navbar
  position: fixed
  left: 0px
  top: 0px
  width: 100%
  z-index: 2000
  background: #000
  display: flex
  align-items: center
  justify-content: space-between
  .logo-menu
    display: flex
    align-items: center
    justify-content: flex-start
  .con-logo
    padding-left: 20px
    .logo-responsive
      display: none
    img
      max-width: 160px
  &.scroll
    background: #000
  ul
    display: flex
    align-items: center
    justify-content: center
    margin-left: 30px
    li
      padding: 22px 20px
      color: -color(bg)
      cursor: pointer
      font-weight: bold
      display: flex
      align-items: center
      justify-content: center
      position: relative
      font-size: 1rem
      &:after
        width: 0px
        position: absolute
        content: ''
        background: -color(color)
        height: 10px
        top: -5px
        border-radius: 10px
        transition: all .25s ease
      &:before
        width: 0px
        position: absolute
        content: ''
        background: -color(color)
        height: 10px
        top: -20px
        border-radius: 10px
        height: 100%
        filter: blur(20px)
        opacity: .2
        transition: all .25s ease

      &.active
        &:after
          width: 100%
        &:before
          width: 100%
  .con-btns
    display: flex
    align-items: center
    justify-content: center
    padding-right: 20px
    .btn-2
      margin-left: 10px
// responsive

@media (max-width: 1200px)
  .navbar
    ul
      li
        font-size: .9rem
        padding: 23px 15px
        padding-bottom: 24px

@media (max-width: 1100px)
  .navbar
    ul
      margin-left: 10px
    .con-logo
      padding-left: 10px
      .logo-web
        display: none
      .logo-responsive
        display: block
        width: 65px

@media (max-width: 970px)
  .navbar
    min-height: 66px
    .con-btns
      padding-right: 10px
      .button
        font-size: .8rem
        padding: 10px 16px
    ul
      display: none
    .open
      display: block

</style>
