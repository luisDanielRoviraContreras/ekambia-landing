<template>
  <div class="faq">
    <img class="moneda1" src="moneda.svg" alt="">
    <img class="moneda2" src="moneda.svg" alt="">
    <img class="billete1" src="billete.svg" alt="">
    <img class="billete2" src="billete.svg" alt="">
    <h2>Preguntas frecuentes</h2>
    <div class="con-faq">
      <div class="con-texts">
        <div v-if="active == 1" class="text-1">
          <h3>
            Como hago mi operación con ekambia
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita magni minus qui natus quod nihil iste. Praesentium placeat voluptatum delectus tempora odit quam laborum fugiat velit cum. Nemo, at fuga.
          </p>
        </div>
        <div v-else-if="active == 2" class="text-1">
          <h3>
            Como funciona el servicio a domicilio
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita magni minus qui natus quod nihil iste. Praesentium placeat voluptatum delectus tempora odit quam laborum fugiat velit cum. Nemo, at fuga.
          </p>
        </div>
        <div v-else-if="active == 3" class="text-1">
          <h3>
            Que coste tiene el servicio a domicilio
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita magni minus qui natus quod nihil iste. Praesentium placeat voluptatum delectus tempora odit quam laborum fugiat velit cum. Nemo, at fuga.
          </p>
        </div>
        <div v-else-if="active == 4" class="text-1">
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
              Como hago mi operación con ekambia
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
}
</script>
<style lang="sass" scoped>
.moneda1
  position: absolute
  left: 120px
  top: 0px
  z-index: 10
  width: 260px
.moneda2
  position: absolute
  right: -50px
  bottom: 10px
  z-index: 10
  width: 170px
  transform: rotate(90deg)
.billete1
  position: absolute
  right: 100px
  top: 100px
  z-index: 10
  width: 140px
  transform: rotate(50deg)
.billete2
  position: absolute
  left: -60px
  bottom: 180px
  z-index: 10
  width: 140px
.faq
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  padding-bottom: 150px
  position: relative
  padding: 0px 20px
  padding-top: 100px
  background: #fff
  .con-faq
    display: flex
    align-items: center
    justify-content: center
    max-width: 1000px
    z-index: 100
    position: relative
    .con-texts
      max-width: 550px
      padding: 20px
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
  .con-btns
    ul
      li
        border: 3px solid -color(black, .05)
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
          background: -color(black, .05)
          border: 3px solid transparent
          .number
            transform: translate(-6px) rotate(12deg)
        &.active
          background: -color(black)
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
    .con-btns
      ul
        li
          width: calc(100% - 20px)
          padding: 10px 20px

</style>
