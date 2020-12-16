<template>
  <div :class="{ visible }" class="download">
    <img class="nave" src="nave.svg" alt="">
    <img class="planeta" src="planeta.svg" alt="">
    <header>
      <h2>Descarga la App ahora mismo y cambia <br> tu dinero Como nunca antes!</h2>
      <div class="con-btns-download">
        <btns-download />
      </div>
    </header>

    <div class="con-img">
      <img  src="chica_ekambia.png" alt="">
    </div>

    <div  class="circle1">
    </div>
    <div class="circle2">
    </div>

    <liston />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class download extends Vue {
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

    const content = document.querySelector('.content')
    document.addEventListener('scroll', () => {
      if (window.pageYOffset > (this.$el as any).offsetTop - 500) {
        this.visible = true
      } else {
        this.visible = false
      }
    })
  }
}
</script>
<style lang="sass" scoped>
.nave
  position: absolute
  bottom: 0px
  transform: translate(-450px)
  width: 600px
.planeta
  position: absolute
  bottom: 0px
  transform: translate(450px)
  width: 700px
@keyframes scale
  0%
    transform: scale(1)
  50%
    transform: scale(1.4)
  100%
    transform: scale(1)
.download
  width: 100%
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  overflow: hidden
  position: relative
  padding-top: 50px
  background: #fff
  &.visible
    h2
      opacity: 1
      transform: translate(0)
    .con-btns-download
      opacity: 1
      transform: translate(0)
  .con-btns-download
    margin-top: 30px
    margin-bottom: 60px
    display: block
    opacity: 0
    transition: all .25s ease
    transform: translate(0, 100px)
  h2
    font-size: 2.8rem
    text-align: center
    padding: 0px 20px
    transition: all .25s ease
    transform: translate(0, 50px)
    opacity: 0
  .circle1
    width: 600px
    height: 600px
    border-radius: 50%
    background: -color(color)
    position: absolute
    bottom: -300px
    z-index: 10
    animation: scale 40s ease infinite
  .circle2
    width: 650px
    height: 650px
    border-radius: 50%
    background: #fff
    position: absolute
    bottom: -325px
    z-index: 5
    animation: scale 40s ease-out infinite
    border: 3px solid #000
  .con-img
    z-index: 100
    img
      width: 100%
      max-width: 500px
      display: block
// responsive

@media (max-width: 900px)
  .download
    h2
      font-size: 2rem
    .con-img
      img
        max-width: 400px
@media (max-width: 650px)
  .download
    .nave,.planeta
      display: none
    .circle1
      width: 400px
      height: 400px
      bottom: -200px
    .circle2
      width: 440px
      height: 440px
      bottom: -220px
    .con-img
      img
        max-width: 320px
    h2
      font-size: 1.5rem
      text-align: center
      br
        display: none

</style>
