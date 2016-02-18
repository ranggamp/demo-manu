var args = arguments[0] || {};

/**
 * Callback for Android OptionsMenu
 */
function onCreateOptionsMenu(e) {
  if (e.actionBar) {
    e.actionBar.title = "window2";
  }
}

/**
 * Cleans up the controller
 * 
 * http://www.tidev.io/2014/09/18/cleaning-up-alloy-controllers/
 */
function cleanup() {
  $.off();
}

/**
 * Initializes the controller
 */
function init() {

  $.on('createOptionsMenu', onCreateOptionsMenu);

}

// PUBLIC
exports.id = 'window2';
exports.cleanup = cleanup;
exports.init = init;