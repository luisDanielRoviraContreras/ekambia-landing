<template>
  <div id="inicio" class="inicio">
    <liston relative black />

    <div class="update">
      Última actualización de cotizaciones: <b>15/12/2020 - 13:30</b>
    </div>
    <div class="con-inicio">
      <div class="con-text">
        <arbitraje />
      </div>
      <div class="con-change">
        <change />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class inicio extends Vue {
  x: any = 0
  y: any = 0
  getInnerWidth: any = 0
  handleMousemove(evt) {
    if (window.innerWidth > 812) {
      this.x = evt.x
      this.y = evt.y
    }
  }

  get getArray() {
    const picos = []
    for (let index = 0; index < 70; index++) {
      picos.push(Math.round(Math.random() * (15 - 0) + 0))
    }
    return picos
  }
  mounted() {
    this.$nextTick(() => {
      this.getInnerWidth = window.innerWidth + 500
    })

    window.addEventListener('mousemove', this.handleMousemove)
  }
}
</script>
<style lang="sass" scoped>
.chart
  position: absolute
  left: -100px
  width: calc(100% + 200px)
  bottom: 50px
.update
  position: absolute
  top: 120px
  left: 0px
  padding: 8px
  font-size: .75rem
  margin: 12px
  border-radius: 12px
  background: -color(gray)
  color: -color(text, .6)
.moneda1
  position: absolute
  right: -40px
  top: 80px
  z-index: 10
  width: 150px
.moneda2
  position: absolute
  left: 80px
  bottom: 150px
  z-index: 10
  width: 150px
  transform: rotate(90deg)
.billete1
  position: absolute
  right: 46%
  bottom: 400px
  z-index: 10
  width: 110px
  transform: rotate(50deg)
.billete2
  position: absolute
  left: 0px
  top: 40px
  z-index: 10
  width: 120px

.inicio
  width: 100%
  height: auto
  background: #fff
  // overflow: hidden
  position: relative
  display: flex
  align-items: center
  justify-content: center
  padding-top: 59px
  flex-direction: column
  .con-inicio
    display: flex
    align-items: center
    justify-content: center
    z-index: 100
    position: relative
    max-width: 1400px
  .con-change
    width: 50vw
    display: flex
    align-items: center
    justify-content: center
    position: relative
    z-index: 100
    padding-top: 100px
    margin-left: 40px
    margin-right: 40px
  .con-text
    padding-top: 100px
    width: 50vw
    display: flex
    align-items: center
    justify-content: center
    max-width: 500px
    // padding-top: 70px
    .text
      bottom: 550px
      padding: 0px 30px
      .con-download
        display: flex
        align-items: center
        justify-content: flex-start
        margin-top: 25px
      h1
        font-size: 3rem
        line-height: 3.5rem
  .montana
    position: absolute
    bottom: 0px
    left: -490px
    width: 2600px
    // transform: translate(0%,100%)
    pointer-events: none
// responsive
@media (max-width: 1480px)
  .inicio
    .con-text
      margin-right: 40px
      flex: 1
      margin-left: 40px
    .con-change
      width: auto
@media (max-width: 1275px)
  .inicio
    .con-text
      .text
        h1
          font-size: 2.5rem
          line-height: 2.5rem

@media (max-width: 1300px)
  .con-inicio
    width: 100%
@media (max-width: 1100px)
  .con-inicio
    flex-direction: column
    padding: 0px 30px
    .con-change
      padding-top: 80px
      order: -1
      padding-bottom: 0px
    .con-text
      width: 100%
      margin-top: 0px

@media (max-width: 1085px)
  .inicio
    .con-text
      .text
        h1
          font-size: 2.2rem
          line-height: 2.2rem
@media (max-width: 970px)
  .con-inicio
    flex-direction: column
    padding-bottom: 100px
    .con-change
      height: auto
      width: 100vw
      min-height: auto
      .change
        width: calc(100% - 40px)
        margin: 0px 20px
    .con-text
      min-height: auto
      height: auto
      padding-top: 70px
      padding-bottom: 50px
      .montana
        left: -100px
        width: 1200px
        bottom: 208px
      .text
        position: relative
        bottom: 0px
        h1
          font-size: 1.8rem
          line-height: 1.8rem
          text-align: center
@media (max-width: 600px)
  .update
    font-size: .6rem
    margin: 10px
    margin-left: 0px
    left: 50%
    transform: translate(-50%)
    width: 100%
    text-align: center
  .moneda2
    left: auto
    right: 0px
    bottom: 100px
    width: 100px
  .con-inicio
    padding-bottom: 150px
    padding: 0px 20px
    .con-text
      .montana
        left: -230px
        width: 1400px
        bottom: 250px
      .text
        h1
          font-size: 1.5rem
    .con-change
      .change
        margin: 0px
        width: 100%
        footer
          p
            font-size: .6rem
          a
            font-size: .6rem
            margin-top: 10px
      .change-form
        padding: 20px
        margin-top: 45px
        .con-price
          .price
            padding: 15px
</style>
