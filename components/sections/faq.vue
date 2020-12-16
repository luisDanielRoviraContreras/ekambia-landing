<template>
  <div :class="{ visible }" class="faq">
    <!-- <img :style="{
      transform: `translate(${x / 120}px, ${y / 120}px)`
    }" class="moneda1" src="monedas/svg1/1.svg" alt="">
    <img :style="{
      transform: `translate(${x / 80}px, ${y / 80}px)`
    }" class="billete1" src="monedas/svg1/2.svg" alt="">
    <img :style="{
      transform: `translate(-${x / 80}px, -${y / 80}px)`
    }" class="billete2" src="monedas/svg1/6.svg" alt=""> -->
    <h2 id="faq">Preguntas frecuentes</h2>
    <div class="con-faq">
      <div class="con-texts">
        <div v-if="$device.isDesktop ? active == 1 : true" class="text-1">
          <h3>
            Como hago mi operación con <logo height="24px" />
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita magni minus qui natus quod nihil iste. Praesentium placeat voluptatum delectus tempora odit quam laborum fugiat velit cum. Nemo, at fuga.
          </p>
        </div>
        <div v-if="$device.isDesktop ? active == 2 : true" class="text-1">
          <h3>
            Como funciona el servicio a domicilio
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita magni minus qui natus quod nihil iste. Praesentium placeat voluptatum delectus tempora odit quam laborum fugiat velit cum. Nemo, at fuga.
          </p>
        </div>
        <div v-if="$device.isDesktop ? active == 3 : true" class="text-1">
          <h3>
            Que coste tiene el servicio a domicilio
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita magni minus qui natus quod nihil iste. Praesentium placeat voluptatum delectus tempora odit quam laborum fugiat velit cum. Nemo, at fuga.
          </p>
        </div>
        <div v-if="$device.isDesktop ? active == 4 : true" class="text-1">
          <h3>
            Puedo operar con mi tarjeta de crédito y/o débito?
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita magni minus qui natus quod nihil iste. Praesentium placeat voluptatum delectus tempora odit quam laborum fugiat velit cum. Nemo, at fuga.
          </p>
        </div>
      </div>

      <div class="con-btns">
        <ul>
          <li @click="active = 1" :class="{ active: active == 1 }">
            <div class="number">
              1
            </div>
            <p class="title">
              Como hago mi operación con <logo white height="20px" />
            </p>
          </li>
          <li @click="active = 2" :class="{ active: active == 2 }">
            <div class="number">
              2
            </div>
            <p class="title">
              Como funciona el servicio a domicilio
            </p>
          </li>
          <li @click="active = 3" :class="{ active: active == 3 }">
            <div class="number">
              3
            </div>
            <p class="title">
              Que coste tiene el servicio a domicilio
            </p>
          </li>
          <li @click="active = 4" :class="{ active: active == 4 }">
            <div class="number">
              4
            </div>
            <p class="title">
              Puedo operar con mi tarjeta de crédito y/o débito?
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class faq extends Vue {
  active: number = 1
  x: any = 0
  y: any = 0
  visible: boolean = false

  handleMousemove(evt) {
    if (window.innerWidth > 812) {
      this.x = evt.x
      this.y = evt.y
    }
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
  left: 120px
  top: 200px
  z-index: 10
  width: 120px
.billete1
  position: absolute
  right: 100px
  top: 160px
  z-index: 10
  width: 120px
  transform: rotate(50deg)
.billete2
  position: absolute
  left: 50%
  bottom: -30px
  z-index: 10
  width: 120px
.faq
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  position: relative
  padding: 0px 20px
  padding-bottom: 150px
  padding-top: 80px
  background: #fff
  &.visible
    h2
      opacity: 1
      transform: translate(0)
    .con-faq
      opacity: 1
      transform: translate(0)
  .con-faq
    display: flex
    align-items: center
    justify-content: center
    max-width: 1000px
    z-index: 100
    position: relative
    transform: translate(0, 100px)
    opacity: 0
    transition: all .25s ease
    .con-texts
      max-width: 550px
      padding: 20px
      padding-right: 50px
      position: relative
      &:after
        content: ''
        position: absolute
        left: 20px
        top: 10px
        width: 40px
        height: 3px
        background: -color(color)
        border-radius: 5px
      h3
        padding-bottom: 20px
        font-size: 1.4rem
      p
        opacity: .5
  h2
    font-size: 2.5rem
    width: 100%
    text-align: center
    margin-bottom: 50px
    padding-top: 120px
    opacity: 0
    transform: translate(0, 50px)
    transition: all .25s ease
  .con-btns
    ul
      li
        border: 3px solid rgba(0,0,0,.05)
        padding: 20px
        margin: 20px
        border-radius: 25px
        display: flex
        align-items: center
        justify-content: flex-start
        cursor: pointer
        position: relative
        transition: all .25s ease
        background: #fff
        &:hover:not(.active)
          background: rgba(0,0,0,.05)
          border: 3px solid transparent
          .number
            transform: translate(-6px) rotate(12deg)
        &.active
          background: #000
          color: #fff
          .number
            transform: translate(-6px) rotate(12deg)
          &:after
            transform: scale(1)
            opacity: 1
        &:after
          content: ''
          position: absolute
          right: 0px
          top: 0px
          margin: 20px
          width: 7px
          height: 7px
          background: -color(color)
          border-radius: 50%
          transform: scale(.5)
          opacity: 0
          transition: all .25s ease
        .number
          font-size: 3rem
          padding-right: 20px
          transition: transform .2s ease
          font-family: 'Gilroy', sans-serif
// responsive

@media (max-width: 1000px)
  .faq
    .moneda1
      top: 0px
      left: 10px
      width: 150px
    .billete2
      bottom: 0px
    .con-texts
      width: 50%
    .con-btns
      width: 50%
@media (max-width: 860px)
  .faq
    padding-bottom: 100px
    .con-faq
      flex-direction: column
      width: 100%
      .con-texts
        width: 100%
        max-width: 100%
    .con-btns
      width: 100%
      order: -1
      ul
        display: flex
        flex-direction: row
        flex-wrap: wrap
        li
          margin: 10px
          width: calc(50% - 20px)
          box-sizing: border-box
          display: flex
          .title
            font-size: .85rem
@media (max-width: 600px)
  .faq
    padding-bottom: 60px
    h2
      padding-top: 50px
    .con-faq
      .con-texts
        padding: 0px 20px
        .text-1
          position: relative
          margin-top: 25px
          h3
            font-size: 1.2rem
            /deep/
              .logo
                svg
                  height: 20px !important
    .moneda1,.billete1,.billete2
      display: none
    .con-btns
      display: none
@media (max-width: 530px)
  .faq
    padding-left: 5px
    padding-right: 5px
    .billete1
      width: 80px
      top: 20px
    .billete2
      width: 100px
      left: 10px
    .moneda2
      width: 120px
      right: -40px
    .moneda1
      top: -160px
    h2
      font-size: 1.8rem

</style>
