(function(win) {
  // return if library has already been loaded
  if (win._muiLoadedWC) return;
  else win._muiLoadedWC = true;

  // check browser support
  if (typeof HTMLElement === 'undefined' || !document.registerElement) {
    throw "MUI: Client does not support web components";
  }

  // imports
  var buttons = require('./buttons.js'),
      forms = require('./forms.js');

  // init
  buttons.registerElements();
  forms.registerElements();
})(window);
