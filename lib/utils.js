"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDisplayName = exports.isDOMAvailable = void 0;

/**
 * Returns true is the DOM is available. Returns
 * false when called in the server.
 *
 * @returns {Boolean}
 */
var isDOMAvailable = function isDOMAvailable() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
};
/**
 * Returns the display name of a React components.
 * @param {Object} WrappedComponent
 * @returns {String}
 */


exports.isDOMAvailable = isDOMAvailable;

var getDisplayName = function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

exports.getDisplayName = getDisplayName;