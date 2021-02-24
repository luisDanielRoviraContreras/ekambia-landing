<template>
  <footer class="footer">
    <div class="con-logo">
      <img src="ekambia_logo_final.svg" alt="">
    </div>
    <div class="con-links">
      <ul>
        <li>
          <h4>¿Quiénes somos?</h4>
        </li>
        <li @click="$parent.openMis()">
          <a>Misión</a>
        </li>
        <li @click="$parent.openVis()">
          <a>Visión</a>
        </li>
        <li @click="$parent.openVal()">
          <a>Valores y Principios</a>
        </li>
        <li @click="$parent.openEmp()">
          <a>La empresa</a>
        </li>
        <li @click="$parent.openAcc()">
          <a>Accionistas</a>
        </li>
      </ul>
      <ul>
        <li>
          <h4>Más de <logo white height="19px" /></h4>
        </li>
        <li>
          <a href="#faq">Preguntas frecuentes</a>
        </li>
        <li>
          <a target="_blank" href="https://soporte.ekambia.com">Centro de Soporte</a>
        </li>
        <li @click="$parent.openTerm()">
          <a>Términos y Condiciones</a>
        </li>
        <li @click="$parent.openPriv()">
          <a>Políticas de privacidad</a>
        </li>
        <li @click="$parent.openCook()">
          <a>Políticas de cookies</a>
        </li>
      </ul>
      <ul>
        <li>
          <h4>Datos de contacto</h4>
        </li>
        <li>
          <p>
            +595 992 923 106
          </p>
        </li>
        <li>
          <p>
            consultas@ekambia.com
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <h4>Ubicación</h4>
        </li>
        <li>
          <p>
            Av. Aviadores Del Chaco 2050, <br>
            complejo World Trade Center, <br>
            torre Byspania, planta baja.
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <h4>Seguinos</h4>
        </li>
        <li>
          <div class="redes">
            <a target="_blank" href="https://www.facebook.com/ekambiapy">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.397,20.997v-8.196h2.765l0.411-3.209h-3.176V7.548c0-0.926,0.258-1.56,1.587-1.56h1.684V3.127	C15.849,3.039,15.025,2.997,14.201,3c-2.444,0-4.122,1.492-4.122,4.231v2.355H7.332v3.209h2.753v8.202H13.397z"/></svg>
            </a>
            <a target="_blank" href="https://twitter.com/ekambiapy">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809	c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793	c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05	c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032	c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028	c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22	c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z"/></svg>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/ekambi%C3%A1-casa-de-cambios-global-s-a-b86a1a1b7/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="4.983" cy="5.009" r="2.188"/><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zM3.095 8.855H6.87V20.994H3.095z"/></svg>
            </a>
            <a target="_blank" href="https://www.instagram.com/ekambiapy/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.999,7.377c-2.554,0-4.623,2.07-4.623,4.623c0,2.554,2.069,4.624,4.623,4.624c2.552,0,4.623-2.07,4.623-4.624	C16.622,9.447,14.551,7.377,11.999,7.377L11.999,7.377z M11.999,15.004c-1.659,0-3.004-1.345-3.004-3.003	c0-1.659,1.345-3.003,3.004-3.003s3.002,1.344,3.002,3.003C15.001,13.659,13.658,15.004,11.999,15.004L11.999,15.004z"/><circle cx="16.806" cy="7.207" r="1.078"/><path d="M20.533,6.111c-0.469-1.209-1.424-2.165-2.633-2.632c-0.699-0.263-1.438-0.404-2.186-0.42	c-0.963-0.042-1.268-0.054-3.71-0.054s-2.755,0-3.71,0.054C7.548,3.074,6.809,3.215,6.11,3.479C4.9,3.946,3.945,4.902,3.477,6.111	c-0.263,0.7-0.404,1.438-0.419,2.186c-0.043,0.962-0.056,1.267-0.056,3.71c0,2.442,0,2.753,0.056,3.71	c0.015,0.748,0.156,1.486,0.419,2.187c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45	c0.963,0.042,1.268,0.055,3.71,0.055s2.755,0,3.71-0.055c0.747-0.015,1.486-0.157,2.186-0.419c1.209-0.469,2.164-1.424,2.633-2.633	c0.263-0.7,0.404-1.438,0.419-2.186c0.043-0.962,0.056-1.267,0.056-3.71s0-2.753-0.056-3.71C20.941,7.57,20.801,6.819,20.533,6.111z M19.315,15.643c-0.007,0.576-0.111,1.147-0.311,1.688c-0.305,0.787-0.926,1.409-1.712,1.711c-0.535,0.199-1.099,0.303-1.67,0.311	c-0.95,0.044-1.218,0.055-3.654,0.055c-2.438,0-2.687,0-3.655-0.055c-0.569-0.007-1.135-0.112-1.669-0.311	c-0.789-0.301-1.414-0.923-1.719-1.711c-0.196-0.534-0.302-1.099-0.311-1.669c-0.043-0.95-0.053-1.218-0.053-3.654	c0-2.437,0-2.686,0.053-3.655c0.007-0.576,0.111-1.146,0.311-1.687c0.305-0.789,0.93-1.41,1.719-1.712	c0.534-0.198,1.1-0.303,1.669-0.311c0.951-0.043,1.218-0.055,3.655-0.055c2.437,0,2.687,0,3.654,0.055	c0.571,0.007,1.135,0.112,1.67,0.311c0.786,0.303,1.407,0.925,1.712,1.712c0.196,0.534,0.302,1.099,0.311,1.669	c0.043,0.951,0.054,1.218,0.054,3.655c0,2.436,0,2.698-0.043,3.654H19.315z"/></svg>
            </a>
          </div>
        </li>
      </ul>
    </div>
    <div class="cinta">
      <p>
        © 2021 eKambia. Todos los derechos reservados.
      </p>
      <p>
        Al ingresar a este sitio web estás aceptando los términos y condiciones, <span class="link" @click="$parent.openKYC()">Políticas KYC & AML.</span> Para más información accede al Centro de Soporte.
      </p>
    </div>
  </footer>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class footerx extends Vue {
  openPrivacidad: boolean = false
}
</script>

<style lang="sass" scoped>
.link
  text-decoration: underline
  font-weight: bold
  cursor: pointer
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
      &:hover
        h4
          &:after
            background: -color(color)
      li
        max-width: 250px
        .redes
          display: flex
          align-items: center
          justify-content: center
          transform: translate(-10px)
          a
            display: flex
            align-items: center
            justify-content: center
            width: 40px
            height: 40px
            transition: all .25s ease
            cursor: pointer
            &:hover
              transform: scale(1.15)
              svg
                fill: -color(color)
            svg
              width: 24px
              fill: #fff
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
            background: #fff
            transition: all .25s ease
        >a, p
          list-style: none
          text-decoration: none
          color: #fff
          padding: 10px 0px
          display: block
          opacity: .5
          font-size: .85rem
          transition: all .2s ease
          cursor: pointer
          &:hover
            opacity: 1
// responsive

@media (max-width: 1100px)
  .footer
    .cinta
      padding-bottom: 30px
      flex-direction: column
      text-align: center
  .footer
    padding-top: 30px
    .con-logo
      bottom: 80px
    .con-links
      flex-wrap: wrap
      padding: 20px
      justify-content: flex-start
      ul
        width: calc(50% - 30px)
        margin: 15px
@media (max-width: 650px)
  .footer
    margin-bottom: 60px
    .redes
      justify-content: flex-start !important
      align-items: flex-start !important
    .cinta
      p
        font-size: .6rem
    .con-links
      ul
        width: calc(100% - 30px)
        margin: 15px
</style>
