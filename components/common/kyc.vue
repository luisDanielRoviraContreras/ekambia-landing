<template>
<transition
    name="pri"
  >
  <div v-if="value" class="privacidad-content">
    <div @click="$emit('input', false)" class="bg"></div>
    <div class="privacidad">
      <h2>
        Políticas KYC & AML
      </h2>
      <p>
        En respuesta a la creciente preocupación de la comunidad internacional sobre el problema del lavado de activos y del financiamiento del terrorismo, muchos países del mundo están promulgando y fortaleciendo sus leyes sobre el tema, adecuándose y haciendo suyas las 40 recomendaciones emitidas por el Grupo de Acción Financiera Internacional (GAFI) y Paraguay no es ajeno a ello. <br><br>
Casa de Cambios Global, S.A. como integrante del sistema económico paraguayo, declara su compromiso en la lucha contra el lavado de activos y el financiamiento del terrorismo, habiendo establecido políticas internas que conlleven a combatirlos, a fin de impedir la incorporación, dentro de sus actividades, de fondos vinculados presuntamente al lavado de activos y que financien el terrorismo, resguardando su buena imagen y reputación, en concordancia con la aplicación de las normativas y regulaciones vigentes en la República del Paraguay y, en especial, a las emanadas tanto por la SEPRELAD como por el Banco Central del Paraguay. <br><br>
En línea con lo anteriormente enunciado y en cumplimiento de la normativa vigente, Casa de Cambios Global, S.A. ha establecido mecanismos de Conocimiento del Cliente – KYC (del inglés Know Your Customer), así como procedimientos para la Prevención del Lavado de Dinero – AML (del inglés Anti-Money Laundering), los cuales aplicamos antes de iniciar y durante la relación comercial, permitiéndonos identificar y establecer un perfil de nuestros clientes. Por ello requerimos la información y documentación en función del perfil del cliente para los distintos niveles operativos, los cuales necesariamente deben ser proporcionados, sin ellos no podrán completar el proceso de aceptación como cliente. <br><br>
En el desarrollo de la relación comercial, así como en la atención de alguna operación en particular, Casa de Cambios Global, S.A. podrá solicitar información y documentación adicional al cliente, quien se obliga a proporcionarla, caso contrario, Casa de Cambios Global, S.A. se reserva la potestad de mantener o no la relación comercial con el cliente, de acuerdo con lo establecido en nuestros “Términos y Condiciones”.
Queda establecido que Casa de Cambios Global, S.A; en cumplimiento de las normas sobre protección de datos personales, resguarda la información y/o documentación proporcionada por el cliente, bajo las pautas de la debida reserva y confidencialidad.
      </p>
    </div>
  </div>
  </transition>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class privacidad extends Vue {
  @Prop() value: any

  get active() {
    return this.$route.query.priv
  }
}
</script>
<style lang="sass" scoped>
.privacidad-content
  position: fixed
  width: 100%
  right: 0px
  top: 0px
  z-index: 600000
  height: 100vh
  overflow: hidden
  .bg
    height: 100vh
    width: 100%
    background: rgba(0,0,0,.5)
    transition: all .25s ease
.privacidad
  position: absolute
  width: 90%
  max-width: 600px
  right: 0px
  top: 0px
  background: rgba(0,0,0,.8)
  height: 100vh
  padding: 30px
  overflow: auto
  transition: all .25s ease
  font-size: .9rem
  color: #fff
  -webkit-backdrop-filter: saturate(180%) blur(30px)
  backdrop-filter: saturate(180%) blur(30px)
  h2
    padding: 15px 0px
    text-align: center
    font-size: 2rem
    position: relative
    &:after
      content: ''
      left: 50%
      top: 0px
      transform: translate(-50%)
      background: -color(color)
      width: 30px
      height: 3px
      position: absolute
      border-radius: 5px
  p
    font-size: .9rem

.pri-enter-active, .pri-leave-active
  transition: all .25s ease-in

.pri-enter, .pri-leave-to
  .bg
    opacity: 0
  .privacidad
    transform: translate(100%)
</style>
<style lang="sass" scoped>
.privacidad
  padding: 20px
  .MsoNormal
    margin-bottom: 15px
// responsive

// @media (max-width: 812px), (pointer:none), (pointer:coarse)
</style>
