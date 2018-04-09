import Vue from 'vue'
import VueI18n from 'vue-i18n'

import MainVue from '@vue/main.vue'
import locales from '../locales'

import '@scss/global.scss'

Vue.use(VueI18n)

let main = document.createElement('div')
main.id = 'main'
document.body.appendChild(main)

let app = new Vue({
  el: '#main',
  template: '<MainVue></MainVue>',
  components: { MainVue: MainVue },
  i18n: new VueI18n({ messages: locales })
})
