<template>
  <div class="content">
    <beta/>
    <navbar />
    <!-- <banner-prices /> -->
    <inicio />
    <montana />
    <steps />
    <astronauta />
    <muestra />
    <circles />
    <faq />
    <download />
    <Footer />
    <privacidad v-model="visiblePriv"/>
    <cookies v-model="visibleCook"/>
    <mision v-model="visibleMis"/>
    <vision v-model="visibleVis"/>
    <valores v-model="visibleVal"/>
    <empresa v-model="visibleEmp"/>
    <kyc v-model="visibleKYC"/>
    <c-term v-model="visibleTerm"/>
    <acc v-model="visibleAcc"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class index extends Vue {
  visiblePriv: any = false
  visibleCook: any = false
  visibleMis: any = false
  visibleVis: any = false
  visibleVal: any = false
  visibleEmp: any = false
  visibleKYC: any = false
  visibleTerm: any = false
  visibleAcc: any = false
  openPriv() {
    this.visiblePriv = true
  }
  openCook() {
    this.visibleCook = true
  }
  openMis() {
    this.visibleMis = true
  }
  openVis() {
    this.visibleVis = true
  }
  openVal() {
    this.visibleVal = true
  }
  openEmp() {
    this.visibleEmp = true
  }
  openKYC() {
    this.visibleKYC = true
  }
  openTerm() {
    this.visibleTerm = true
  }
  openAcc() {
    this.visibleAcc = true
  }
}
</script>
<style lang="sass">
.p5Canvas
  position: absolute
  bottom: 0px
  z-index: 10
  height: 100% !important
// @import url('../static/Gilroy-Bold.ttf');
@font-face
  font-family: 'Gilroy'
  font-style: normal
  font-weight: 400
  font-display: swap
  src: url('~assets/Gilroy-Bold.ttf') format('truetype')

\:root
  --bg: 255,255,255
  --color: 255, 218, 26
  --black: 0, 0, 0
  --text: 21, 22, 22
  --gray: 245, 247, 248
  --gray-2: 238, 240, 241

.content
  // padding-top: 66px
  scroll-behavior: smooth
html
  scroll-behavior: smooth
body
  background: #000
  font-family: 'Open Sans', sans-serif
  scroll-behavior: smooth
  font-size: 15px

h1,h2,h3,h4,h5,h6,.title
  font-family: 'Gilroy', sans-serif
*
  list-style: none
  outline: none
  padding: 0px
  margin: 0px
  box-sizing: border-box
  -webkit-tap-highlight-color: rgba(0,0,0,0)
  outline-color: transparent
  outline-style: none
  outline: none !important
  &:focus
    outline: none !important
    -webkit-tap-highlight-color: rgba(0,0,0,0)
  .content
    overflow: auto
    overflow-x: hidden
    // height: 100vh

*::-webkit-scrollbar
  width: 5px
  height: 5px
  display: block
  background: -color('bg')

*::-webkit-scrollbar-thumb
  background: -color('black', .2)
  border-radius: 5px
  &:hover
    background: -color('black', .6)
// responsive

// @media (max-width: 812px), (pointer:none), (pointer:coarse)
</style>
