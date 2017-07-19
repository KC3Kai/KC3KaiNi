import { PluginManager } from './plugins/PluginManager'
import { ThemeManager } from './themes/ThemeManager'
import { Browser } from './browser/Browser'
import Promise from 'bluebird'

class KC3Lib {

  constructor() {
    this.browser = new Browser()
    this.plugins = new PluginManager()
    this.themes = new ThemeManager()
  }

  boot() {
    return Promise.all([
      this.browser.boot(),
      this.plugins.boot(),
      this.themes.boot()
    ])
  }

}

export { KC3Lib }
