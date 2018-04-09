<template>
  <div>
    <ChromiumTheme>
      <template slot="logo">
        <img :src="logoUrl" class="kc3-logo">
      </template>
      <template slot="tabs">
        <ul class="kc3-tabs">
          <li :class="['kc3-tab', activeTabClass(tabId)]" v-for="(tab, tabId) in tabs.list" :id="'tab-'+tabId" :data-tab-id="tabId" v-on:click="changeTab">{{tab.title}}</li>
          <li class="kc3-tab-add" v-on:click="addTab('https://www.google.com')"></li>
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
          <div v-for="(tab, tabId) in tabs.list" class="kc3-viewport" :key="tabId" :id="'viewport-' + tabId"  v-show="tabs.active == tabId">
            <webview :src="tab.url" partition="persist:kc3" class="kc3-webview" :data-tab-id="tabId" v-on:page-title-updated="titleChange"></webview>
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
      logoUrl: BestImouto,
      tabs: {
        active: 1,
        idHead: 0,
        list: { }
      }
    }
  },
  computed: {
    activeUrl: function(){
      return this.getActiveTab() ? this.getActiveTab().url : null
    }
  },
  methods: {
    addTab: function(url) {
      this.tabs.idHead += 1
      let newTabInfo = {
        id: this.tabs.idHead,
        title: 'New Tab',
        url: url
      }
      this.$set(this.tabs.list, String(this.tabs.idHead), newTabInfo)
      this.$nextTick(()=>{ this.changeTabById(this.tabs.idHead) })
    },
    changeTab: function(evt) {
      this.changeTabById(evt.srcElement.getAttribute('data-tab-id'))
    },
    changeTabById: function(tabId) {
      this.tabs.active = tabId
    },
    goToUrl: function(evt) {
      let activeTab = this.getActiveTab()
      activeTab.url = evt.srcElement.value
    },
    titleChange: function(evt) {
      let tabId = parseInt(evt.srcElement.getAttribute('data-tab-id'), 10)
      this.tabs.list[tabId].title = evt.title
    },
    getActiveTab: function() {
      return this.tabs.list[this.tabs.active] || null
    },
    activeTabClass(tabId) {
      return this.tabs.active == tabId ? 'active' : ''
    }
  },
  components: {
    ChromiumTheme: ChromiumTheme
  },
  mounted: function() {
    this.addTab('https://www.google.com')
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
