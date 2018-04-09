<template>
  <div>
    <ChromiumTheme>
      <template slot="logo">
        <img :src="logoUrl" class="kc3-logo">
      </template>
      <template slot="tabs">
        <ul class="kc3-tabs">
          <li class="kc3-tab" v-for="(tab, tabId) in tabs.list" :id="'tab-'+tabId" :data-tab-id="tabId" v-on:click="changeTab">{{tab.title}}</li>
        </ul>
      </template>
      <template slot="addressbar">
        <input type="text" class="kc3-addressbar" :value="activeUrl" v-on:change="goToUrl">
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
          <ul>
            <li v-for="(tab, tabId) in tabs.list">
              <div class="kc3-viewport" :id="'viewport-' + tabId"  v-show="tabs.active == tabId" >
                <webview :src="tab.url"></webview>
              </div>
            </li>
          </ul>
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
      logoUrl: BestImouto,
      tabs: {
        active: 1,
        list: {
          '1': {
            title: 'kc3k2',
            url: 'https://github.com/KC3Kai/KC3KaiNi'
          },
          '2': {
            title: 'google.com',
            url: 'https://www.google.com'
          },
          '3': {
            title: 'dmm.com',
            url: 'https://www.dmm.com'
          }
        }
      }
    }
  },
  computed: {
    activeUrl: function(){
      return this.getActiveTab().url
    }
  },
  methods: {
    changeTab: function(evt) {
      this.tabs.active = parseInt(evt.srcElement.getAttribute('data-tab-id'), 10)
    },
    goToUrl: function(evt) {
      let activeTab = this.getActiveTab()
      activeTab.url = evt.srcElement.value
    },
    getActiveTab: function() {
      return this.tabs.list[this.tabs.active]
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
.kc3-addressbar {
  width:100%;
}
.kc3-viewports {
  position:relative;

  ul {

    li {
      list-style:none;

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
  }
}
</style>
