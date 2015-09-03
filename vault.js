'use strict';
module.exports = function() {
  var map = {};		// can be an array: []

  return {
  	setValue : function (key, value) {
  		// use array notation, NOT dot notation!
  		map[key] = value;
  	},
  	getValue : function (key) {
  		return typeof map[key] === 'undefined' ? null : map[key];
  	}
  };
};