'use strict';
module.exports = function() {
  var map = {};

  return {
  	setValue : function (key, value) {
  		map[key] = value;
  	},
  	getValue : function (key) {
  		return typeof map[key] === 'undefined' ? null : map[key];
  	}
  };
};