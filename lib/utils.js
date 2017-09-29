'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Returns true is the DOM is available. Returns
 * false when called in the server.
 *
 * @returns {Boolean}
 */
var isDOMAvailable = exports.isDOMAvailable = function isDOMAvailable() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
};

/**
 * Returns the display name of a React components.
 * @param {Object} WrappedComponent
 * @returns {String}
 */
var getDisplayName = exports.getDisplayName = function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};