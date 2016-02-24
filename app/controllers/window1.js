var args = arguments[0] || {};

/**
 * Callback for Android OptionsMenu
 */
function onCreateOptionsMenu(e) {
  if (e.actionBar) {
    e.actionBar.title = "window1";
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
function does(){
	var win2 = Ti.UI.createWindow();
	var win2 = Alloy.createController('window2').getView();
	//Ti.UI.Window.open(Alloy.createController('window2'));
	//Alloy.Globals.open(Alloy.createController('window2'),true);
	win2.open();
}

// PUBLIC
exports.id = 'window1';
exports.cleanup = cleanup;
exports.init = init;