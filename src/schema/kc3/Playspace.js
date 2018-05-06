import lib from '@lib'
import PlayspaceWidget from './PlayspaceWidget.js'

class Playspace {
  get Widget(){ return PlayspaceWidget }

  constructor(spaceId) {
    if (typeof spaceId === 'string') {
      this.id = options.id
      this.load()
    } else {
      this.id = this.generateId()
    }
  }

  init() {

  }

  load() {


  }

  save() {

  }

  generateId() {

  }



}

export default Playspace

/*
Playspace: {
  widgets:
  update()
}
*/
