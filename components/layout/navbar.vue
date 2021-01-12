<template>
  <div :class="{ scroll }" class="navbar">
    <div class="logo-menu">
      <div @click="$router.go()" class="con-logo">
        <img class="logo-web" src="ekambia_logo.svg" alt="">
        <img class="logo-responsive" src="ekambia_logo_final.svg" alt="">
      </div>

      <nav>
        <a class="inicio-btn active" :class="{active: $route.hash == '#inicio'}" href="#inicio">
          Inicio
        </a>
        <a class="como-cambiar-btn" href="#como-cambiar">
          ¿Cómo cambiar?
        </a>
        <a class="beneficios-btn" href="#beneficios">
          Beneficios
        </a>
        <a class="faq-btn" href="#faq">
          Preguntas frecuentes
        </a>
      </nav>
    </div>

    <div class="con-btns">
      <Button @click="handleClickLogin" border white>
        Iniciar sesión
      </Button>
      <Button @click="handleClickRegister" class="btn-2" yellow>
        Crear una cuenta
        <div class="effect" />
      </Button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class navbar extends Vue {
  scroll: boolean = false
  handleClickLogin() {
    window.open('https://ekambia.herokuapp.com/login/')
  }
  handleClickRegister() {
    window.open('https://ekambia.herokuapp.com/createAccount/')
  }

  mounted() {
    document.addEventListener('scroll', () => {
      const cambiar: any = document.querySelector('#como-cambiar')
      const beneficios: any = document.querySelector('#beneficios')
      const faq: any = document.querySelector('#faq').parentNode

      this.scroll = window.pageYOffset > 0

      if (window.pageYOffset > cambiar.offsetTop - 100) {
        document.querySelectorAll('.navbar a').forEach(item => item.classList.remove('active'))
        document.querySelector('.como-cambiar-btn').classList.add('active')
      } else {
        document.querySelectorAll('.navbar a').forEach(item => item.classList.remove('active'))
        document.querySelector('.inicio-btn').classList.add('active')
      }
      if (window.pageYOffset > beneficios.offsetTop - 100) {
        document.querySelectorAll('.navbar a').forEach(item => item.classList.remove('active'))
        document.querySelector('.beneficios-btn').classList.add('active')
      }
      if (window.pageYOffset > faq.offsetTop - 100) {
        document.querySelectorAll('.navbar a').forEach(item => item.classList.remove('active'))
        document.querySelector('.faq-btn').classList.add('active')
      }
    })
  }
}
</script>
<style lang="sass" scoped>
.effect
  width: 140%
  background: linear-gradient(45deg, transparent 20%, rgba(255,255,255,.4) 50%, rgba(255,255,255, .0001) 80%)
  height: 100%
  position: absolute
  animation: payEffect 6s ease infinite
  top: 0px
  left: 0px
  z-index: 200
@keyframes payEffect
  0%
    transform: translate(-100%)
  20%
    transform: translate(100%)
  100%
    transform: translate(100%)
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
  // &.scroll
  //   .button
  //     padding: 10px 20px
  //   nav
  //     a
  //       padding: 16px 20px
  .logo-menu
    display: flex
    align-items: center
    justify-content: flex-start
  .con-logo
    padding-left: 20px
    cursor: pointer
    .logo-responsive
      display: none
    img
      max-width: 140px
  &.scroll
    background: #000
  nav
    display: flex
    align-items: center
    justify-content: center
    margin-left: 30px
    a
      padding: 20px 20px
      color: -color(bg)
      cursor: pointer
      font-weight: bold
      display: flex
      align-items: center
      justify-content: center
      position: relative
      font-size: .9rem
      opacity: .7
      text-decoration: none
      transition: all .25s ease
      &:hover
        opacity: 1
        &:after
          width: 30px
          opacity: 1
      &.active
        opacity: 1
        color: -color(color)
      &:after
        opacity: 0
        width: 0px
        position: absolute
        content: ''
        background: -color(color)
        height: 10px
        top: -6px
        border-radius: 10px
        transition: all .25s ease
        z-index: -1
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
        z-index: -1

      &.active
        &:after
          width: 100%
          opacity: 1
        &:before
          width: 100%
  .con-btns
    display: flex
    align-items: center
    justify-content: center
    padding-right: 20px
    .btn-2
      margin-left: 10px
      overflow: hidden
      position: relative
// responsive

@media (max-width: 1200px)
  .navbar
    nav
      a
        font-size: .9rem
        padding: 23px 15px
        padding-bottom: 24px

@media (max-width: 1100px)
  .navbar
    nav
      margin-left: 10px
    .con-logo
      padding-left: 0px
      .logo-web
        display: none
      .logo-responsive
        display: block
        width: 60px

@media (max-width: 970px)
  .navbar
    min-height: 66px
    .con-btns
      padding-right: 10px
      .button
        font-size: .8rem
        padding: 10px 16px
    nav
      display: none
    .open
      display: block
@media (max-width: 812px)
  .effect
    display: none

</style>
