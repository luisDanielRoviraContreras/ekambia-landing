<template>
  <footer class="footer">
    <div class="con-logo">
      <img src="ekambia_logo_final.svg" alt="">
    </div>
    <div class="con-links">
      <ul>
        <li>
          <h4>Quienes somos</h4>
        </li>
        <li>
          <a href="">Misión</a>
        </li>
        <li>
          <a href="">Vision y valores</a>
        </li>
        <li>
          <a href="">Accionistas</a>
        </li>
        <li>
          <a href="">Empresas afiliadas</a>
        </li>
      </ul>
      <ul>
        <li>
          <h4>Mas de ekambia</h4>
        </li>
        <li>
          <a href="">Noticias relacionadas</a>
        </li>
        <li>
          <a href="">Descarga legal</a>
        </li>
        <li>
          <a href="">Preguntas frecuentes</a>
        </li>
        <li>
          <a href="">Garantía de seguridad del sistema</a>
        </li>
        <li>
          <a href="">Políticas de Privacidad</a>
        </li>
        <li>
          <a href="">Políticas de Cookies</a>
        </li>
      </ul>
      <ul>
        <li>
          <h4>Datos de contacto</h4>
        </li>
        <li>
          <p>
            +595 1222 34253
          </p>
        </li>
        <li>
          <p>
            cantact@ekambia.com
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <h4>Síguenos</h4>
        </li>
        <li>
          <div class="redes">
            redes
          </div>
        </li>
      </ul>
    </div>
    <div class="cinta">
      <p>
        © 2020 eKambia. All rights reserved.
      </p>
      <p>
        Al usar este sitio web estas aceptando los Términos y Condiciones, KYC & AML Policies Para mas información accede al CENTRO DE SOPORTE
      </p>
    </div>
  </footer>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class footerx extends Vue {}
</script>
<style lang="sass" scoped>
.footer
  width: 100%
  background: -color(black)
  color: #fff
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  position: relative
  z-index: 200
  .con-logo
    position: absolute
    bottom: 30px
    right: 10px
    img
      width: 75px
  .cinta
    display: flex
    align-items: center
    justify-content: space-between
    color: #fff
    width: 100%
    padding: 15px 20px
    p
      opacity: .4
      font-size: .75rem
  .con-links
    display: flex
    align-items: flex-start
    justify-content: space-around
    max-width: 1200px
    width: 100%
    padding-top: 60px
    padding-bottom: 60px
    ul
      li
        h4
          padding: 10px 0px
          font-size: 1.05rem
          position: relative
          &:after
            content: ''
            position: absolute
            left: 0px
            top: 0px
            width: 20px
            height: 2px
            background: -color(color)
        a, p
          list-style: none
          text-decoration: none
          color: #fff
          padding: 10px 0px
          display: block
          opacity: .5
          font-size: .85rem
          transition: all .2s ease
          &:hover
            opacity: 1
// responsive

@media (max-width: 1100px)
  .footer
    .cinta
      padding-bottom: 30px
      flex-direction: column
      text-align: center
@media (max-width: 950px)
  .footer
    padding-top: 30px
    .con-logo
      bottom: 80px
    .con-links
      flex-wrap: wrap
      padding: 20px
      ul
        width: calc(50% - 30px)
        margin: 15px
@media (max-width: 650px)
  .footer
    .cinta
      p
        font-size: .6rem
    .con-links
      ul
        width: calc(100% - 30px)
        margin: 15px
</style>
