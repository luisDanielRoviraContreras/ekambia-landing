<template>
<transition
    name="pri"
  >
  <div v-if="value" class="privacidad-content">
    <div @click="$emit('input', false)" class="bg"></div>
    <div class="privacidad">
      <h2>
        Ekambia
      </h2>
      <p>
        Ekambiá Casa de Cambio Global S.A. es una entidad financiera dedicada a la compra y venta de divisas. <br><br>

        Con un equipo con más de 15 años de experiencia en el mercado financiero y cambiario internacional, su objetivo es brindar un servicio rápido, seguro, global y, sobre todo, cómodo a través de nuestras oficinas físicas o, incluso, pudiendo operar desde su propio domicilio. <br><br>

        Ofrecemos a nuestros clientes una amplia gama de servicios en condiciones de máxima seguridad y comodidad, generando sinergia entre la oferta y la demanda global; y productos de inclusión financiera para así brindarles los mejores precios y condiciones en sus operaciones físicas o virtuales.
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
