<template>
  <div class="con-btns">
    <Button>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.665,16.811c-0.287,0.664-0.627,1.275-1.021,1.837c-0.537,0.767-0.978,1.297-1.316,1.592	c-0.525,0.482-1.089,0.73-1.692,0.744c-0.432,0-0.954-0.123-1.562-0.373c-0.61-0.249-1.17-0.371-1.683-0.371	c-0.537,0-1.113,0.122-1.73,0.371c-0.616,0.25-1.114,0.381-1.495,0.393c-0.577,0.025-1.154-0.229-1.729-0.764	c-0.367-0.32-0.826-0.87-1.377-1.648c-0.59-0.829-1.075-1.794-1.455-2.891c-0.407-1.187-0.611-2.335-0.611-3.447	c0-1.273,0.275-2.372,0.826-3.292c0.434-0.74,1.01-1.323,1.73-1.751C7.271,6.782,8.051,6.563,8.89,6.549	c0.46,0,1.063,0.142,1.81,0.422s1.227,0.422,1.436,0.422c0.158,0,0.689-0.167,1.593-0.498c0.853-0.307,1.573-0.434,2.163-0.384	c1.6,0.129,2.801,0.759,3.6,1.895c-1.43,0.867-2.137,2.08-2.123,3.637c0.012,1.213,0.453,2.222,1.317,3.023	c0.392,0.372,0.829,0.659,1.315,0.863C19.895,16.236,19.783,16.529,19.665,16.811L19.665,16.811z M15.998,2.38	c0,0.95-0.348,1.838-1.039,2.659c-0.836,0.976-1.846,1.541-2.941,1.452c-0.014-0.114-0.021-0.234-0.021-0.36	c0-0.913,0.396-1.889,1.103-2.688c0.352-0.404,0.8-0.741,1.343-1.009c0.542-0.264,1.054-0.41,1.536-0.435	C15.992,2.127,15.998,2.254,15.998,2.38L15.998,2.38z"/></svg>
      <div class="btn-text">
        <span>Download on the</span>
        <h5>App Store</h5>
      </div>
    </Button>
    <Button yellow>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.954 11.616l2.957-2.957L6.36 3.291c-.633-.342-1.226-.39-1.746-.016L12.954 11.616zM16.415 15.078l3.074-1.729c.6-.336.929-.812.929-1.34 0-.527-.329-1.004-.928-1.34l-2.783-1.563-3.133 3.132L16.415 15.078zM4.1 4.002C4.036 4.199 4 4.419 4 4.66v14.705c0 .381.084.709.236.97l8.097-8.098L4.1 4.002zM12.954 12.857L4.902 20.91C5.056 20.969 5.222 21 5.397 21c.312 0 .637-.092.968-.276l9.255-5.197L12.954 12.857z"/></svg>
      <i class='bx bxl-apple'></i>
      <div class="btn-text">
        <span>GET IT ON</span>
        <h5>Google Play</h5>
      </div>
    </Button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class btns extends Vue {}
</script>
<style lang="sass" scoped>
.con-btns
  display: flex
  align-items: center
  justify-content: center
  z-index: 100
  position: relative
  .button
    min-width: 190px
    display: flex
    align-items: center
    justify-content: space-between
    border-radius: 26px
    padding: 10px 20px
    &:nth-child(1)
      margin-right: 15px
    .btn-text
      padding-left: 10px
      text-align: left
      span
        font-size: .7rem
      h5
        font-size: 1rem !important
    svg
      width: 28px
    &:not(.yellow)
      svg
        fill: #fff
// responsive

@media (max-width: 600px)
  .con-btns
    .button
      min-width: 160px
      padding: 8px 15px
      svg
        width: 25px
      &:nth-child(1)
        margin-right: 10px
      .btn-text
        padding-left: 0px
        h5
          font-size: .85rem !important
</style>
