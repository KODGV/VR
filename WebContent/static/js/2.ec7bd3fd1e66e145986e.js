webpackJsonp([2],{

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(569),
  /* template */
  __webpack_require__(731),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 568:
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
            hostUrl: '/VR',
            activeIndex: '/user/news-list',
            items: [{
                icon: 'el-icon-menu',
                index: '0',
                title: '产品中心',
                subs: [{
                    index: '/user/product-list',
                    title: '产品列表'
                }]
            }, {
                icon: 'el-icon-menu',
                index: '1',
                title: '产品对比',
                subs: [{
                    index: '/user/product-compare',
                    title: '查看对比'
                }]
            }, {
                icon: 'el-icon-menu',
                index: '2',
                title: 'VR资讯',
                subs: [{
                    index: '/user/news-list',
                    title: '最新'
                }, {
                    index: '/user/news-finance',
                    title: '融资'
                }, {
                    index: '/user/news-industry',
                    title: '产业'
                }, {
                    index: '/user/news-firm',
                    title: '厂商'
                }, {
                    index: '/user/news-interview',
                    title: '专访'
                }, {
                    index: '/user/news-technology',
                    title: '技术'
                }]
            }, {
                icon: 'el-icon-menu',
                index: '3',
                title: 'VR论坛',
                subs: [{
                    index: '/user/BBS',
                    title: '进入论坛'
                }]
            }, {
                icon: 'el-icon-menu',
                index: '4',
                title: 'VR百科',
                subs: [{
                    index: '/user/pedia',
                    title: '百科搜索'
                }, {
                    index: '/user/pedia2',
                    title: '目录浏览'
                }]
            }, {
                icon: 'el-icon-menu',
                index: '5',
                title: '媒体自评测',
                subs: [{
                    index: '/user/mse-list',
                    title: '媒体自评测'
                }, {
                    index: '/user/mse-self',
                    title: '我的媒体自评测'
                }]
            }, {
                icon: 'el-icon-menu',
                index: '6',
                title: '满意度调查',
                subs: [{
                    index: '/user/questionaire',
                    title: '问卷填写'
                }]
            }, {
                icon: 'el-icon-setting',
                index: '7',
                title: '个人信息管理',
                subs: [{
                    index: '/user/change-nick',
                    title: '修改昵称'
                }, {
                    index: '/user/change-password',
                    title: '修改密码'
                }]
            }]
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
        },
        check(item) {
            if (item.title == '查看对比') {
                var t = JSON.parse(localStorage.getItem('compare_data'));
                if (t.data.length == 0) {
                    this.$message("您还没有加入对比的产品");
                } else {
                    this.$router.push('/user/product-compare');
                }
            }
        },
        onRoutes() {}
    },
    mounted() {
        var s = this.$route.path.split('/');
        var route = s[s.length - 1].split('?')[0];
        var res;
        /*switch (route)
        {
        case 'product-compare':
        res = '1';
        break;
        case 'news-list':
        case 'news-finance':
        case 'news-industry':
        case 'news-firm':
        case 'news-interview':
        case 'news-technology':
        res = '2';
        break;
        case 'BBS':
        res = '3';
        break;
        case 'pedia':
        case 'pedia':
        res = '4';
        break;
        case 'mse-list':
        case 'mse':
        case 'mse-self':
        case 'mse-edit':
        res = '5';
        break;
        case 'questionaire':
        res = '6';
        break;
        case 'change-nick':
        case 'change-password':
        res = '7';
        break;
        default:
        res = '0';
        break;
        }
        console.log(res);*/
        this.activeIndex = '/user/' + route;
    }
});

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__userHeader_vue__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__userHeader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__userHeader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userSidebar_vue__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userSidebar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__userSidebar_vue__);
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
        vHead: __WEBPACK_IMPORTED_MODULE_0__userHeader_vue___default.a
    },
    mounted() {
        console.log("home active");

        // console.log(sessionStorage.getItem('ms_type'));
        // var sessionType = sessionStorage.getItem('ms_type')
        // if(sessionType != 0){
        //     this.$router.push('/nologin');
        // }
    }
});

/***/ }),

/***/ 570:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            hello: "hahahaha",
            items: [{
                icon: 'el-icon-menu',
                index: '1',
                title: 'VR资讯',
                subs: [{
                    index: '/user/news-list',
                    title: '新闻资讯'
                }]
            }, {
                icon: 'el-icon-setting',
                index: '2',
                title: '个人信息管理',
                subs: [{
                    index: '/user/change-nick',
                    title: '修改昵称'
                }, {
                    index: '/user/change-password',
                    title: '修改密码'
                }]
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

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)(undefined);
// imports


// module
exports.push([module.i, ".header[data-v-0d928ae6]{z-index:1290;margin:0 auto;min-width:1400px;position:relative;box-sizing:border-box;width:100%;height:70px;font-size:22px;line-height:70px;color:#fff}.header .logo[data-v-0d928ae6]{float:left;width:300px;text-align:center;left:auto;top:auto;margin:0;position:relative}.nav-menu[data-v-0d928ae6]{float:left;margin-top:10px;line-height:70px;position:absolute;left:300px}.user-info[data-v-0d928ae6]{float:right;padding-right:50px;font-size:16px;color:#fff}.user-info .el-dropdown-link[data-v-0d928ae6]{position:relative;display:inline-block;padding-left:50px;color:#fff;cursor:pointer;vertical-align:middle}.user-info .user-logo[data-v-0d928ae6]{position:absolute;left:0;top:15px;width:40px;height:40px;border-radius:50%}.el-dropdown-menu__item[data-v-0d928ae6]{text-align:center}.nav-tab[data-v-0d928ae6]{font-size:16px}", ""]);

// exports


/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)(undefined);
// imports


// module
exports.push([module.i, ".sidebar[data-v-484f33d3]{display:block;position:absolute;width:250px;left:0;top:70px;bottom:0;background:#2e363f}.sidebar>ul[data-v-484f33d3]{height:100%}", ""]);

// exports


/***/ }),

/***/ 690:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(757)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(568),
  /* template */
  __webpack_require__(698),
  /* scopeId */
  "data-v-0d928ae6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(779)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(570),
  /* template */
  __webpack_require__(721),
  /* scopeId */
  "data-v-484f33d3",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "logo"
  }, [_vm._v("虚拟现实产品质量评估平台")]), _vm._v(" "), _c('div', {
    staticClass: "nav-menu"
  }, [_c('el-menu', {
    staticClass: "el-menu-demo",
    attrs: {
      "theme": "dark",
      "default-active": _vm.activeIndex,
      "mode": "horizontal",
      "id": "navigator",
      "unique-opened": "",
      "router": ""
    },
    on: {
      "select": _vm.onRoutes
    }
  }, [_vm._l((_vm.items), function(item) {
    return [(item.subs) ? [_c('el-submenu', {
      attrs: {
        "index": item.index
      }
    }, [_c('template', {
      slot: "title"
    }, [_c('span', {
      staticClass: "nav-tab"
    }, [_vm._v(_vm._s(item.title))])]), _vm._v(" "), _vm._l((item.subs), function(subItem, i) {
      return _c('el-menu-item', {
        key: i,
        attrs: {
          "index": subItem.index
        },
        on: {
          "click": function($event) {
            _vm.check(subItem)
          }
        }
      }, [_c('span', [_vm._v(_vm._s(subItem.title))])])
    })], 2)] : [_c('el-menu-item', {
      attrs: {
        "index": item.index
      }
    }, [_c('i', {
      class: item.icon
    }), _vm._v(_vm._s(item.title) + "\n                ")])]]
  })], 2)], 1), _vm._v(" "), _c('div', {
    staticClass: "user-info"
  }, [_c('el-dropdown', {
    attrs: {
      "trigger": "hover"
    },
    on: {
      "command": _vm.handleCommand
    }
  }, [_c('span', {
    staticClass: "el-dropdown-link"
  }, [_vm._v("\n                " + _vm._s(_vm.username) + "\n            ")]), _vm._v(" "), _c('el-dropdown-menu', {
    slot: "dropdown"
  }, [_c('el-dropdown-item', {
    attrs: {
      "command": "loginout"
    }
  }, [_vm._v("注销")])], 1)], 1)], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 721:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "sidebar"
  }, [_c('el-menu', {
    staticClass: "el-menu-vertical-demo",
    attrs: {
      "default-active": _vm.onRoutes,
      "id": "navigator",
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
  })], 2)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 731:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('v-head'), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('transition', {
    attrs: {
      "name": "move"
    }
  }, [_c('router-view')], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 757:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(627);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(133)("54ff7226", content, true);

/***/ }),

/***/ 779:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(649);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(133)("8fef0c40", content, true);

/***/ })

});