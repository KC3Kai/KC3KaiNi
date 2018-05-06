import ElectronWindowManager from './electron/ElectronWindowManager'

export default {
  ForMain: ElectronWindowManager,
  ForRenderer: ElectronWindowManager,
  ForPlugin: ElectronWindowManager
}
