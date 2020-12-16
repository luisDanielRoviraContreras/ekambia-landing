<template>
  <div class="astronauta">
    <div :style="{
      transform: `translate(-${x / 40}px, 0)`
    }" class="custom-shape-divider-top-1602088878">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
    </div>
    <!-- <div class="line">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
        </svg>
    </div> -->

    <!-- <div :style="{
      transform: `translate(-${x / 70}px, -${y / 70}px)`
    }" class="con-img">
      <img src="astronauta_levitando.svg" alt="">
    </div> -->
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class astronauta extends Vue {
  x: any = 0
  y: any = 0
  handleMousemove(evt) {
    if (window.innerWidth > 812) {
      this.x = evt.x
      this.y = evt.y
    }
  }
  mounted() {
    window.addEventListener('mousemove', this.handleMousemove)
  }
}
</script>
<style lang="sass" scoped>
.con-img
  z-index: 100
  margin-top: -250px
  img
    width: 400px
    max-width: 60vw

.custom-shape-divider-top-1602088878
    position: absolute
    top: -2px
    left: 0
    width: 120%
    overflow: hidden
    line-height: 0
    svg
      z-index: 10
      position: relative
      display: block
      width: calc(155% + 1.3px)
      height: 150px
.line
  position: absolute
  top: -20px
  left: -10%
  width: 120%
  overflow: hidden
  line-height: 0
  transform: rotate(1deg)
  svg
    fill: transparent
    stroke: #000
    z-index: 20
    position: relative
    display: block
    width: calc(155% + 1.3px)
    height: 150px

.astronauta
  width: 100%
  background: #fff
  position: relative
  display: flex
  align-items: center
  justify-content: center
  z-index: 200
// responsive

@media (max-width: 600px)
  .custom-shape-divider-top-1602088878,.line
    svg
      height: 60px
@media (max-width: 560px)
  .con-img
    margin-top: -120px
</style>
