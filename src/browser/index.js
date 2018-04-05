import Vue from 'vue'
import MainVue from '@vue/main.vue'

let main = document.createElement('div')
main.id = 'main'
document.body.appendChild(main)

let app = new Vue({
  el: '#main',
  template: '<MainVue></MainVue>',
  components: { MainVue: MainVue }
})
