// Vendor
window.accounting = require('accounting');
window.SuperAgent = require('superagent');
require('./vendor/es5-shim.min');
require('./vendor/es5-sham.min');
require('./vendor/html5shiv');
require('./vendor/paymill');
require('./vendor/placeholders.min');

// Engine
window.JSE = require('jekyll-store-engine');
require('jekyll-store-display');
require('jekyll-store-visited');
require('jekyll-store-favourites');

// Helpers
window.toggle = require('./helpers/toggle');
window.loadJSON = require('./helpers/loadJSON');

// After Load
var afterLoad = require('reflux').joinLeading(
	JSE.Stores.Products,
	JSE.Stores.Countries,
	JSE.Stores.DeliveryMethods
);

afterLoad.listen(function() {
	require('./renderComponents');
	require('./pages/product');
	window.submitPurchase = require('./pages/checkout').submitPurchase;
});
