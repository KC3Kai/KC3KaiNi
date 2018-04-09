<template>
  <div>
    <ChromiumTheme>
      <template slot="logo">
        <img :src="bestImoutoUrl" class="kc3-logo">
      </template>
      <template slot="tabs">
        <ul class="kc3-tabs">
          <li class="kc3-tab" id="tab-1" data-tab-id="1" v-on:click="changeTab">github</li>
          <li class="kc3-tab" id="tab-2" data-tab-id="2" v-on:click="changeTab">google</li>
          <li class="kc3-tab" id="tab-3" data-tab-id="3" v-on:click="changeTab">dmm</li>
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
          <div class="kc3-viewport" id="viewport-1" v-show="shownViewport == 1">
            <webview src="https://github.com/KC3Kai/KC3KaiNi"></webview>
          </div>
          <div class="kc3-viewport" id="viewport-2" v-show="shownViewport == 2">
            <webview src="https://www.google.com"></webview>
          </div>
          <div class="kc3-viewport" id="viewport-3" v-show="shownViewport == 3">
            <webview src="https://www.dmm.com"></webview>
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
      bestImoutoUrl: BestImouto,
      shownViewport: 1
    }
  },
  watch: {
    hello: function(newValue) {
      console.log('hello variable change detected. it is now', newValue);
    },
  },
  methods: {
    changeLocale: function(localeName) {
      this.$i18n.locale = localeName
    },
    changeTab: function(evt) {
      this.shownViewport = parseInt(evt.srcElement.getAttribute('data-tab-id'), 10)
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
