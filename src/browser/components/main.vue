<template>
  <div>
    hello value change via interaction: <input v-model="hello" placeholder="edit me">
    <br />
    <br />
    Rendering hello variable: <span class='strong'>{{hello}}</span>
    <br />
    <br />
    <img :src="bestImoutoUrl">
  </div>
</template>

<script>
import BestImouto from '@img/bestimouto.png'

export default {
  data: function() {
    return {
      hello: 'worlds', // initial text
      bestImoutoUrl: BestImouto
    }
  },
  watch: {
    hello: function(newValue) {
      console.log('hello variable change detected. it is now', newValue);
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
.strong {
  font-weight:bold;
}
</style>
