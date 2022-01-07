(self["webpackChunk"] = self["webpackChunk"] || []).push([["public_frontEnd_assets_js_custom_js"],{

/***/ "./public/frontEnd/assets/js/custom.js":
/*!*********************************************!*\
  !*** ./public/frontEnd/assets/js/custom.js ***!
  \*********************************************/
/***/ (() => {

$(document).ready(function () {
  // Bootstrap tooltip start.
  var tooltipTriggerList = [].slice.call($('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  }); // Bootstrap tooltip end.
  // Bootstrap popover start.

  var popoverTriggerList = [].slice.call($('[data-bs-toggle="popover"]'));
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  }); // Bootstrap popover end.
});

/***/ })

}]);