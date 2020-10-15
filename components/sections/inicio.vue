<template>
  <div class="inicio">
    <div class="update">
      Ultima actualizacion de cotizaciones: <b>29/09/2002 - 13:30</b>
    </div>
    <img class="moneda1" src="moneda.svg" alt="">
    <img class="moneda2" src="moneda.svg" alt="">
    <img class="billete1" src="billete.svg" alt="">
    <img class="billete2" src="billete.svg" alt="">
    <div class="con-inicio">
      <div class="con-text">
        <img class="montana" src="/montana.svg" alt="">
        <div class="text">
          <h1>
            Con eKambia cambiar <br> dinero nunca fue tan fácil
          </h1>
          <div class="con-download">
            <btns-download />
          </div>
        </div>
      </div>
      <div class="con-change">
        <div class="change">
          <header>
            <h2>Cambiar dinero</h2>
          </header>


          <div class="change-form">
            <div class="con-price">
              <div class="price1 price">
                Compra: 3.455
              </div>
              <div class="price2 price">
                Venta: 4.890
              </div>
            </div>

            <div class="con-inputs">
              <div class="inputs">
                <div class="con-input">
                  <label for="">Yo tengo</label>
                  <input placeholder="0.00" type="text">
                  <select name="" id="">
                    <option value="1">Dollar</option>
                    <option value="2">Guarani</option>
                  </select>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.939 7.939L12 12.879 7.061 7.939 4.939 10.061 12 17.121 19.061 10.061z"/></svg>
                </div>
                <button class="btn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                    <g id="Stockholm-icons-_-Navigation-_-Up-down" data-name="Stockholm-icons-/-Navigation-/-Up-down" transform="translate(30) rotate(90)">
                      <rect id="Rectangle" width="2.5" height="15" rx="1.25" transform="translate(8.75 21.25) rotate(180)" opacity="0.3"/>
                      <path id="Path-104" d="M11.866,28.366a1.25,1.25,0,0,1,1.768,1.768l-3.75,3.75a1.25,1.25,0,0,1-1.768,0l-3.75-3.75a1.25,1.25,0,0,1,1.768-1.768L9,31.232Z" transform="translate(-1.5 -10.5)"/>
                      <rect id="Rectangle-Copy" width="2.5" height="15" rx="1.25" transform="translate(23.75 23.75) rotate(180)" opacity="0.3"/>
                      <path id="Path-104-Copy" d="M35.866-14.116a1.25,1.25,0,0,0,1.768,0,1.25,1.25,0,0,0,0-1.768l-3.75-3.75a1.25,1.25,0,0,0-1.768,0l-3.75,3.75a1.25,1.25,0,0,0,0,1.768,1.25,1.25,0,0,0,1.768,0L33-16.982Z" transform="translate(-10.5 26.25)"/>
                    </g>
                  </svg>
                </button>
                <div class="con-input">
                  <label for="">Yo recibo</label>
                  <input placeholder="0.00" type="text">
                  <select name="" id="">
                    <option value="1">Guarani</option>
                    <option value="2">Dollar</option>
                  </select>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.939 7.939L12 12.879 7.061 7.939 4.939 10.061 12 17.121 19.061 10.061z"/></svg>
                </div>
              </div>
              <Button yellow block>
                Iniciar operación
              </Button>
            </div>
          </div>

          <footer>
            <p>
              Los tipos de cambio están sujetos a fluctuaciones, sera de aplicación al tipo de cambio al confirmar la operación
            </p>

            <a href="#">Ver mas sobre los beneficios por tramos, en función a la cantidad</a>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class inicio extends Vue {}
</script>
<style lang="sass" scoped>
.update
  position: absolute
  top: 0px
  right: 0px
  padding: 8px
  font-size: .75rem
  margin: 12px
  border-radius: 12px
  background: -color(gray)
  color: -color(text, .6)
.moneda1
  position: absolute
  right: -80px
  top: 80px
  z-index: 10
  width: 200px
.moneda2
  position: absolute
  left: 80px
  bottom: 150px
  z-index: 10
  width: 170px
  transform: rotate(90deg)
.billete1
  position: absolute
  right: 32%
  bottom: 400px
  z-index: 10
  width: 170px
  transform: rotate(50deg)
.billete2
  position: absolute
  left: -60px
  top: 40px
  z-index: 10
  width: 140px

.change
  width: 100%
  max-width: 440px
  z-index: 100
  position: relative
  h2
    text-align: center
    width: 100%
  footer
    padding: 20px
    padding-top: 30px
    padding-bottom: 0px
    p
      font-size: .7rem
      text-align: center
      opacity: .6
    a
      font-size: .7rem
      text-align: center
      color: #000
      display: block
      width: 100%
      margin-top: 20px

.change-form
  box-shadow: 0px 0px 30px 0px rgba(0,0,0,.05)
  border-radius: 30px
  padding: 40px
  position: relative
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  margin-top: 60px
  width: 100%
  background: #fff
  .button
    margin-top: 30px
    padding: 17px
  // button
  //   margin-top: 20px
  .con-inputs
    width: 100%
    padding-top: 35px
    .btn
      width: 54px
      height: 54px
      background: #000
      border-radius: 20px
      display: flex
      align-items: center
      justify-content: center
      border: 0px
      margin-left: auto
      margin-right: 30px
      margin-top: -10px
      margin-bottom: -10px
      cursor: pointer
      z-index: 100
      position: relative
      transition: all .25s ease
      &:hover
        transform: scale(1.1) rotate(8deg)
      svg
        transform: rotate(90deg)
        fill: #fff
        width: 30px
  .con-input
    display: flex
    align-items: center
    justify-content: center
    position: relative
    border: 2px solid rgba(0,0,0,.1)
    width: 100%
    border-radius: 20px
    z-index: 10
    label
      position: absolute
      left: 20px
      top: -12px
      background: #fff
      border-radius: 10px
      padding: 0px 8px
      font-weight: bold
      font-family: 'Gilroy', sans-serif
    input
      width: 100%
      padding: 18px
      border: 0px
      background: transparent
      font-weight: bold
      font-family: 'Gilroy', sans-serif
    svg
      width: 18px
      position: absolute
      right: 0px
      margin: 10px
      top: 4px
    select
      background: transparent
      padding: 18px
      padding-right: 40px
      border: 0px
      font-weight: bold
      font-family: 'Gilroy', sans-serif
      max-width: 140px
      border-radius: inherit
      -webkit-appearance: none
      -moz-appearance: none
      text-indent: 1px
      text-overflow: ''
      cursor: pointer
      &:hover
        background: -color(gray)
      &:-ms-expand
        display: none
  .con-price
    display: flex
    align-items: center
    justify-content: center
    position: absolute
    top: 0px
    background: #fff
    border-radius: 20px
    box-shadow: 0px 0px 30px 0px rgba(0,0,0,.05)
    transform: translate(0,-50%)
    padding: 0px 10px
    .price
      padding: 20px
      font-weight: bold
      position: relative
      display: flex
      align-items: center
      justify-content: center
      &:last-child
       &:after
         content: ''
         position: absolute
         left: 0px
         height: 30px
         width: 1px
         background: rgba(0,0,0,.1)

.inicio
  width: 100%
  height: auto
  background: #fff
  // overflow: hidden
  position: relative
  display: flex
  align-items: center
  justify-content: center
  .con-inicio
    display: flex
    align-items: center
    justify-content: center
    z-index: 100
    position: relative
    max-width: 1400px
  .con-change
    width: 50vw
    min-height: 800px
    display: flex
    align-items: center
    justify-content: center
    position: relative
    z-index: 100
  .con-text
    width: 50vw
    min-height: 800px
    display: flex
    align-items: flex-start
    justify-content: center
    padding-top: 70px
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
    bottom: 468px
    left: -490px
    width: 2600px
    transform: translate(0%,100%)
    pointer-events: none
// responsive

@media (max-width: 1275px)
  .inicio
    .con-text
      .text
        h1
          font-size: 2.5rem
          line-height: 2.5rem

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
      padding-bottom: 150px
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
  .moneda2
    left: auto
    right: 0px
    bottom: 100px
    width: 100px
  .con-inicio
    padding-bottom: 150px
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
