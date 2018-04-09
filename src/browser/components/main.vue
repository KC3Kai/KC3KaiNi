<template>
  <div>
    <ChromiumTheme>
      <template slot="logo">
        <img :src="bestImoutoUrl" class="kc3-logo">
      </template>
      <template slot="tabs">
        <ul class="kc3-tabs">
          <li class="kc3-tab">tab1</li>
          <li class="kc3-tab">tab2</li>
          <li class="kc3-tab">tab3</li>
        </ul>
      </template>
      <template slot="addressbar">
        <input type="text" class="kc3-addressbar">
      </template>
      <template slot="toolbar">
        <ul class="kc3-toolbar">
          <li class="kc3-toolbar-item">tool1</li>
          <li class="kc3-toolbar-item">tool2</li>
          <li class="kc3-toolbar-item">tool3</li>
        </ul>
      </template>
      <template slot="viewport">
        <div class="kc3-viewports">
          <div class="kc3-viewport">
            <webview>
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
            </webview>
          </div>
          <div class="kc3-viewport">
            <webview src="https://www.google.com"></webview>
          </div>
        </div>
      </template>
    </ChromiumTheme>

  </div>
</template>

<script>
import BestImouto from '@img/bestimouto.png'
import ChromiumTheme from '@themes/chromium/browser.vue'

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
  },
  components: {
    ChromiumTheme: ChromiumTheme
  }
}
</script>

<style lang="scss">
body {
  padding:0;
  margin:0;
}
</style>

<style lang="scss" scoped>
.kc3-viewports {
  position:relative;

  .kc3-viewport {
    top:0;
    bottom:0;
    left:0;
    right:0;
    position:absolute;

    webview {
      top:0;
      bottom:0;
      left:0;
      right:0;
      position:absolute;
    }
  }
}
</style>
