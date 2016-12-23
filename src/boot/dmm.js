(function(){
  'use strict';
  
  kc3.context = kc3.CONTEXT_CONTENT_SCRIPT;
  
  kc3.display.inject();
  
  kc3.comm.trigger('networkDebug');
  
})();