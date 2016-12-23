module.exports = function(){
  
  return {
    CONTEXT_CONTENT_SCRIPT: 'content_script',
    CONTEXT_BACKGROUND: 'background_service',
    CONTEXT_WINDOW: 'window',
    
    context: null,
    
    assets: require('assets/kc3-assets.js'),
    comm: require('communication/kc3-communications.js'),
    display: require('display/kc3-display.js'),
    locale: require('locale/kc3-locale.js'),
    modules: require('modules/kc3-modules.js'),
    storage: require('storage/kc3-storage.js'),
    windows: require('windows/kc3-windows.js')
  };
}();