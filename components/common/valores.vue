<template>
<transition
    name="pri"
  >
  <div v-if="value" class="privacidad-content">
    <div @click="$emit('input', false)" class="bg"></div>
    <div class="privacidad">
      <h2>
        Valores
      </h2>
      <p>
        - Transparencia e integridad. <br>
        - Confianza. <br>
        - Sentido de propiedad. <br>
        - Trabajo en equipo. <br>
        - Respeto. <br>
      </p>
      <h2>
        Principios
      </h2>
      <p>
        - Estricto 	cumplimiento de la legislación vigente y de las políticas más 	exigentes de Lavado de Activos y Financiamiento del Terrorismo. <br>
        - Competitividad económica y rapidez en el servicio. <br>
        - Responsabilidad social y corporativa. <br>
        - Inclusión y respeto para y por todos los individuos. <br>
        - Innovación. <br>
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
    font-size: 1rem
    padding-top: 10px

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
