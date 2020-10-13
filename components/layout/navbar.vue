<template>
  <div class="navbar">
    <div class="logo-menu">
      <div class="con-logo">
        <img class="logo-web" src="ekambia_logo.svg" alt="">
        <img class="logo-responsive" src="ekambia_logo_final.svg" alt="">
      </div>

      <nav>
        <a class="inicio-btn active" :class="{active: $route.hash == '#inicio'}" href="#inicio">
          inicio
        </a>
        <a class="como-cambiar-btn" href="#como-cambiar">
          Como cambiar
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
        Iniciar Sesión
      </Button>
      <Button @click="handleClickRegister" class="btn-2" yellow>
        Crear una Cuenta
      </Button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class navbar extends Vue {
  handleClickLogin() {
    window.open('https://ekambia.herokuapp.com/login/')
  }
  handleClickRegister() {
    window.open('https://ekambia.herokuapp.com/createAccount/')
  }

  mounted() {
    const content = document.querySelector('.content')
    content.addEventListener('scroll', () => {
      const scrollTop = content.scrollTop
      const cambiar: any = document.querySelector('#como-cambiar')
      const beneficios: any = document.querySelector('#beneficios')
      const faq: any = document.querySelector('#faq').parentNode

      if (scrollTop > cambiar.offsetTop - 100) {
        document.querySelectorAll('.navbar a').forEach(item => item.classList.remove('active'))
        document.querySelector('.como-cambiar-btn').classList.add('active')
      } else {
        document.querySelectorAll('.navbar a').forEach(item => item.classList.remove('active'))
        document.querySelector('.inicio-btn').classList.add('active')
      }
      if (scrollTop > beneficios.offsetTop - 100) {
        document.querySelectorAll('.navbar a').forEach(item => item.classList.remove('active'))
        document.querySelector('.beneficios-btn').classList.add('active')
      }
      if (scrollTop > faq.offsetTop - 100) {
        document.querySelectorAll('.navbar a').forEach(item => item.classList.remove('active'))
        document.querySelector('.faq-btn').classList.add('active')
      }
    })
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
  nav
    display: flex
    align-items: center
    justify-content: center
    margin-left: 30px
    a
      padding: 22px 20px
      color: -color(bg)
      cursor: pointer
      font-weight: bold
      display: flex
      align-items: center
      justify-content: center
      position: relative
      font-size: 1rem
      opacity: .7
      text-decoration: none
      &:hover
        opacity: 1
        &:after
          width: 30px
          opacity: 1
      &.active
        opacity: 1
      &:after
        opacity: 0
        width: 0px
        position: absolute
        content: ''
        background: -color(color)
        height: 10px
        top: -5px
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
    nav
      display: none
    .open
      display: block

</style>
