<template>
    <div class="beta">
        Este sitio web se encuentra en estado <b>(Beta)</b>, los datos y funcionalidades no son reales, contacta directamente con ekambia si necesitas hacer alguna operacion.
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class footerx extends Vue {
  
}
</script>
<style lang="sass">
.beta
    position: fixed
    bottom: 0px
    z-index: 90000
    width: 100%
    padding: 20px
    background: #000
    color: #fff
    
</style>