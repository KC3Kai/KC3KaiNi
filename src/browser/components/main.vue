<template>
  <div class="test">
    hello value change via interaction: <input v-model="hello" placeholder="edit me">
    <br />
    <br />
    Rendering hello variable: {{hello}}
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
.test {
  color: #0000ff;
}
</style>
