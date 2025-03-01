(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Products_Show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Show.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Show.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Show",
  computed: {
    currentUser: function currentUser() {
      return this.$store.getters.currentUser;
    },
    products: function products() {
      return this.$store.state.products;
    },
    product: function product() {
      var _this = this;

      return this.products.find(function (product) {
        return product.slug === _this.$route.params.slug;
      });
    }
  },
  methods: {
    formatCurrency: function formatCurrency(price) {
      price = price / 100;
      return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      });
    },
    addToCart: function addToCart(product) {
      this.$store.commit('addToCart', product);
      this.$toaster.info(product.name + " Added to the cart successfully :)");
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Products/Show.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Products/Show.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Show_vue_vue_type_template_id_3722748d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=3722748d&scoped=true& */ "./resources/js/components/Products/Show.vue?vue&type=template&id=3722748d&scoped=true&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/components/Products/Show.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Show_vue_vue_type_template_id_3722748d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Show_vue_vue_type_template_id_3722748d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3722748d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Products/Show.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Products/Show.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Products/Show.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Show.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Products/Show.vue?vue&type=template&id=3722748d&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Products/Show.vue?vue&type=template&id=3722748d&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_3722748d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_3722748d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_3722748d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=template&id=3722748d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Show.vue?vue&type=template&id=3722748d&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Show.vue?vue&type=template&id=3722748d&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Show.vue?vue&type=template&id=3722748d&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.product
    ? _c(
        "section",
        { staticClass: "text-gray-700 body-font overflow-hidden" },
        [
          _c("div", { staticClass: "container px-12 py-14 mx-auto" }, [
            _c("div", { staticClass: "lg:w-3/5 mx-auto flex flex-wrap" }, [
              _c("img", {
                staticClass:
                  "lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded",
                attrs: {
                  src:
                  _vm.product.imgUrl,
                  alt: "",
                  height: "640",
                  width: "640"
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"
                },
                [
                  _vm._l(_vm.product.categories, function(category) {
                    return _c("h2", {
                      staticClass:
                        "text-sm title-font text-gray-500 tracking-widest uppercase inline-block mr-0",
                      domProps: { textContent: _vm._s(category.name) }
                    })
                  }),
                  _vm._v(" "),
                  _c("h1", {
                    staticClass:
                      "text-gray-900 text-3xl title-font font-medium mb-2",
                    domProps: { textContent: _vm._s(_vm.product.name) }
                  }),
                  _vm._v(" "),
                  _c("p", {
                    staticClass: "leading-relaxed",
                    domProps: { textContent: _vm._s(_vm.product.description) }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "flex mt-6 pt-4 border-t-2 border-gray-200"
                    },
                    [
                      _c("span", {
                        staticClass:
                          "title-font font-medium text-2xl text-gray-900",
                        domProps: {
                          textContent: _vm._s(
                            _vm.formatCurrency(_vm.product.price)
                          )
                        }
                      }),
                      _vm._v(" "),
                      _vm.currentUser
                        ? _c(
                            "button",
                            {
                              staticClass:
                                "flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded",
                              on: {
                                click: function($event) {
                                  return _vm.addToCart(_vm.product)
                                }
                              }
                            },
                            [_vm._v("Add to Cart")]
                          )
                        : _c(
                            "router-link",
                            {
                              staticClass:
                                "flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded",
                              attrs: { to: { name: "auth.login" } }
                            },
                            [_vm._v("Login to add product into your cart")]
                          )
                    ],
                    1
                  )
                ],
                2
              )
            ])
          ])
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);