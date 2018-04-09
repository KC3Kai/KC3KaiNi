<template>
  <div>
    hello value change via interaction: <input v-model="hello" placeholder="edit me">
    <br />
    <br />
    Rendering hello variable: <span class='strong'>{{ $t("HELLO", { name: hello }) }}</span>
    <br />
    <br />
    Language:
    <a href="#" v-on:click="changeLocale('en-US')">EN</a> /
    <a href="#" v-on:click="changeLocale('tl-PH')">PH</a>
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
    changeLocale: function(localeName) {
      this.$i18n.locale = localeName
    }
  }
}
</script>

<style lang="scss">
.strong {
  font-weight:bold;
}
</style>
