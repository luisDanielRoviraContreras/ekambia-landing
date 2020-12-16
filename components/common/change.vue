<template>
  <div class="change">
    <header>
      <h2>Cambiar dinero</h2>
    </header>


    <div class="change-form">
      <div class="con-price">
        <div class="price1 price">
          Compra: {{ purchase_price }}
        </div>
        <div class="price2 price">
          Venta: {{ sale_price }}
        </div>
      </div>

      <div class="con-inputs">
        <div class="inputs">
          <div class="con-input input-select">
            <c-input
              ref="send"
              v-model="form.send"
              inputmode="numeric"
              :type="$device.isDesktop ? 'number' : null"
              identificador="send"
              @change-value="handleFormSend"
            >
              Yo tengo
            </c-input>
            <Select esquina @change="handleChangeCoin" child="coin" :data="coins" placeholder="Moneda" block v-model="form.coinSend" :danger="!form.coinSend && send">
            <template>
              <Option :disabled="option.id == form.coinReceive" :key="i" v-for="(option, i) in coins" :value="option.id" :text="option.coin" />
            </template>
          </Select>
          </div>
          <button @click="handleChange" class="btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
              <g id="Stockholm-icons-_-Navigation-_-Up-down" data-name="Stockholm-icons-/-Navigation-/-Up-down" transform="translate(30) rotate(90)">
                <rect id="Rectangle" width="2.5" height="15" rx="1.25" transform="translate(8.75 21.25) rotate(180)" opacity="0.3"/>
                <path id="Path-104" d="M11.866,28.366a1.25,1.25,0,0,1,1.768,1.768l-3.75,3.75a1.25,1.25,0,0,1-1.768,0l-3.75-3.75a1.25,1.25,0,0,1,1.768-1.768L9,31.232Z" transform="translate(-1.5 -10.5)"/>
                <rect id="Rectangle-Copy" width="2.5" height="15" rx="1.25" transform="translate(23.75 23.75) rotate(180)" opacity="0.3"/>
                <path id="Path-104-Copy" d="M35.866-14.116a1.25,1.25,0,0,0,1.768,0,1.25,1.25,0,0,0,0-1.768l-3.75-3.75a1.25,1.25,0,0,0-1.768,0l-3.75,3.75a1.25,1.25,0,0,0,0,1.768,1.25,1.25,0,0,0,1.768,0L33-16.982Z" transform="translate(-10.5 26.25)"/>
              </g>
            </svg>
          </button>
          <div class="con-input input-select">
            <c-input
              ref="send"
              v-model="form.receive"
              inputmode="numeric"
              :type="$device.isDesktop ? 'number' : null"
              identificador="send"
              @change-value="handleFormSend"
            >
              Yo recibo
            </c-input>
              <Select esquina @change="handleChangeCoin" child="coin" :data="coins" placeholder="Moneda" block v-model="form.coinReceive" :danger="!form.coinReceive && send">
              <template>
                <Option :disabled="option.id == form.coinSend" :key="i" v-for="(option, i) in coins" :value="option.id" :text="option.coin" />
              </template>
            </Select>
            </Select>
          </div>
        </div>
        <Button yellow block>
          Iniciar operación
        </Button>
      </div>
    </div>

    <footer>
      <p>
        Los tipos de cambio están sujetos a fluctuaciones. Será de aplicación el tipo de cambio correspondiente al momento de confirmar la operación
      </p>

      <a href="#">Conocé más sobre los beneficios por tramos, en función de la cantidad operada</a>
    </footer>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from '@/plugins/axios'
@Component
export default class name extends Vue {
  coins: any = []
  sale_price: any = null
  purchase_price: any = null
  send: boolean = false

  form: any = {
    send: '',
    receive: '',
    coinSend: 2,
    coinReceive: 1
  }

  handleChange () {
    const oldForm = JSON.parse(JSON.stringify(this.form))
    this.form.send = `${oldForm.receive}`
    this.form.receive = `${oldForm.send}`
    this.form.coinSend = Number(`${oldForm.coinReceive}`)
    this.form.coinReceive = Number(`${oldForm.coinSend}`)
  }

  getCoins() {
    axios.get('/coins').then(({ data }) => {
      this.coins = data.info
      this.handleChangeCoin(2)
    })
  }

  handleFormSend(val) {
    if (this.form.coinReceive !== 1) {
      this.form.receive = (val / this.sale_price).toFixed(3)
    } else {
      this.form.receive = (val * this.sale_price).toFixed(3)
    }
  }

  handleChangeCoin(id) {
    axios.get(`/coins-show/${id}`).then(({ data }) => {
      this.purchase_price = data.info.purchase_price
      this.sale_price = data.info.sale_price
      if(this.form.send) {
        this.handleFormSend(this.form.send)
      }
    })
  }
  mounted() {
    this.getCoins()
  }
}
</script>
<style lang="sass" scoped>
.input-select
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  max-width: 100%
  position: relative
  &.readonly
    .select
      input
        border: 2px solid rgba(226, 231, 236, .5)
  .con-input
    position: relative
    z-index: 10
    .bg
      // border-radius: 24px 0px 0px 24px !important
      // border-right: 0px !important
  /deep/.select
    max-width: 140px
    position: absolute !important
    right: 0px
    z-index: 15
    i
      right: 15px !important
    input
      border-radius: 0px 24px 24px 0px !important
      border: 2px solid transparent !important
      width: 100%

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

@media (max-width: 768px)
  .con-inicio
    .con-change
      .change
        width: 100%
        max-width: none
      .change-form
        padding: 20px
</style>
