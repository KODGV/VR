webpackJsonp([3],{

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(566),
  /* template */
  __webpack_require__(703),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            name: 'root',
            hostUrl: '/VR'
        };
    },
    computed: {
        username() {
            let username = localStorage.getItem('ms_username');
            return username ? username : this.name;
        }
    },
    methods: {
        handleCommand(command) {
            if (command == 'loginout') {
                this.$axios({
                    url: '/user/logoff',
                    method: 'get',
                    baseURL: this.hostUrl
                }).then(response => {
                    localStorage.removeItem('ms_username');
                    sessionStorage.clear();
                    this.$router.push('/login');
                }).catch(error => {
                    localStorage.removeItem('ms_username');
                    sessionStorage.clear();
                    this.$router.push('/login');
                });
            }
        }
    }
});

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adminHeader_vue__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adminHeader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__adminHeader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adminSidebar_vue__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adminSidebar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__adminSidebar_vue__);
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



/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        vHead: __WEBPACK_IMPORTED_MODULE_0__adminHeader_vue___default.a, vSidebar: __WEBPACK_IMPORTED_MODULE_1__adminSidebar_vue___default.a
    },
    mounted() {
        console.log("home active");
        // console.log(sessionStorage.getItem('ms_type'));
        // var sessionType = sessionStorage.getItem('ms_type')
        // if(sessionType != 1){
        //     this.$router.push('/nologin');
        // }
    }

});

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            hello: "hahahaha",
            items: [
            // {
            //     icon: 'el-icon-menu',
            //     index: '/admin/administrator',
            //     title: '用户管理'
            // },

            {
                icon: 'el-icon-menu',
                index: '1',
                title: '新闻模块管理',
                subs: [{
                    index: '/admin/news-editor',
                    title: '新闻编辑'
                }, {
                    index: '/admin/news-release',
                    title: '新闻发布'
                }]
            }, {
                icon: 'el-icon-menu',
                index: '/admin/UploadFile',
                title: '产品模块管理'
            }, {
                icon: 'el-icon-menu',
                index: '/admin/bbs',
                title: '论坛模块管理'
            }, {
                icon: 'el-icon-menu',
                index: '2',
                title: '百科模块管理',
                subs: [{
                    index: '/admin/Encyclopedia',
                    title: '审核'
                }, {
                    index: '/admin/encyclopediaDelete',
                    title: '删除'
                }]
            }, {
                icon: 'el-icon-menu',
                index: '/admin/Questionaire',
                title: '问卷模块管理'
            }, {
                icon: 'el-icon-menu',
                index: '/admin/User',
                title: '用户模块管理'
            },
            // {
            //     icon: 'el-icon-menu',
            //     index: '5',
            //     title: '评价模块管理'
            // },
            {
                icon: 'el-icon-menu',
                index: '/admin/mseAdmin',
                title: '媒体自评测模块管理'
            }]
        };
    },
    computed: {
        onRoutes() {
            // return this.$route.path.replace('/','');
        }
    }
});

/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)(undefined);
// imports


// module
exports.push([module.i, ".sidebar[data-v-130e8dbb]{display:block;position:relative;float:left;width:250px;background:#324157;bottom:0;height:100%}.sidebar>ul[data-v-130e8dbb]{height:100%}.subsidebar[data-v-130e8dbb]{display:block;position:fixed;float:left;width:250px;top:70px;background:#324157;bottom:0;height:100%}", ""]);

// exports


/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)(undefined);
// imports


// module
exports.push([module.i, ".header[data-v-5be75804]{position:relative}.header[data-v-5be75804],.subheader[data-v-5be75804]{box-sizing:border-box;width:100%;height:70px;font-size:22px;line-height:70px;color:#fff;overflow:auto}.subheader[data-v-5be75804]{z-index:50;position:fixed;top:0}.subheader .logo[data-v-5be75804]{float:left;width:100%;background-color:#324157;text-align:left}.user-info[data-v-5be75804]{float:right;padding-right:50px;font-size:16px;color:#fff}.user-info .el-dropdown-link[data-v-5be75804]{position:relative;display:inline-block;padding-left:50px;color:#fff;cursor:pointer;vertical-align:middle}.user-info .user-logo[data-v-5be75804]{position:absolute;left:0;top:15px;width:40px;height:40px;border-radius:50%}.el-dropdown-menu__item[data-v-5be75804]{text-align:center}", ""]);

// exports


/***/ }),

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(787)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(565),
  /* template */
  __webpack_require__(730),
  /* scopeId */
  "data-v-5be75804",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 689:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(760)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(567),
  /* template */
  __webpack_require__(701),
  /* scopeId */
  "data-v-130e8dbb",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "sidebar"
  }, [_c('div', {
    staticClass: "subsidebar"
  }, [_c('el-menu', {
    staticClass: "el-menu-vertical-demo",
    attrs: {
      "default-active": _vm.onRoutes,
      "theme": "dark",
      "unique-opened": "",
      "router": ""
    }
  }, [_vm._l((_vm.items), function(item) {
    return [(item.subs) ? [_c('el-submenu', {
      attrs: {
        "index": item.index
      }
    }, [_c('template', {
      slot: "title"
    }, [_c('i', {
      class: item.icon
    }), _vm._v(_vm._s(item.title))]), _vm._v(" "), _vm._l((item.subs), function(subItem, i) {
      return _c('el-menu-item', {
        key: i,
        attrs: {
          "index": subItem.index
        }
      }, [_vm._v(_vm._s(subItem.title) + "\n                    ")])
    })], 2)] : [_c('el-menu-item', {
      attrs: {
        "index": item.index
      }
    }, [_c('i', {
      class: item.icon
    }), _vm._v(_vm._s(item.title) + "\n                ")])]]
  })], 2)], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('v-head'), _vm._v(" "), _c('v-sidebar'), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('transition', {
    attrs: {
      "name": "move",
      "mode": "out-in"
    }
  }, [_c('router-view')], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 730:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "subheader"
  }, [_c('div', {
    staticClass: "logo"
  }, [_vm._v("   虚拟现实产品质量评估平台(管理员)")])])])
}]}

/***/ }),

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(630);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(133)("af2899d8", content, true);

/***/ }),

/***/ 787:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(657);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(133)("0b3ed198", content, true);

/***/ })

});