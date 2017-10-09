webpackJsonp([11],{

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(780)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(617),
  /* template */
  __webpack_require__(722),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 617:
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
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function () {
        return {
            search: '',
            hostURL: '/VR',
            activePane: 'first',
            encyclopediaList: [{
                id: 1,
                keyword: 'fuuuuuuu',
                type: "",
                changenote: '11111111111111111111111111111111111111',
                firstprop: '2222222222222222'
            }, {
                id: 2,
                keyword: 'ffffffff',
                type: "",
                changenote: '1111111111111111111111111111111111',
                firstprop: '222222222222'
            }],
            pagination_show: false,
            pageNum: 1,
            pageTotal: 20,
            pageSize: 1
        };
    },
    methods: {
        codeParsing(code) {
            var msg = (Title, Message) => {
                this.$message({
                    title: Title,
                    message: Message,
                    type: 'error'
                });
            };
            switch (code) {
                case -1:
                    msg('系统错误', '未知错误，请上报管理员');
                    break;
                case 201:
                    msg('输入域错误', '验证码错误');
                    break;
                case 300:
                    msg('输入域错误', '邮箱或密码错误');
                    break;
                case 301:
                    msg('权限问题', '用户已禁用，请联系管理员');
                    break;
                case 302:
                    msg('权限问题', '用户未激活，请去邮箱激活用户');
                    break;
                case 303:
                    msg('注册问题', '邮箱已占用，请更改邮箱');
                    break;
                case 304:
                    msg('注册问题', '昵称已占用，请更改昵称');
                    break;
                case 400:
                    msg('权限问题', '用户未登录，请重新登录');
                    break;
                case 401:
                    msg('权限问题', '用户无权访问，请联系管理员');
                    break;
                case 402:
                    msg('操作错误', '删除错误,请刷新重试');
                    break;
                case 500:
                    msg('系统错误', '未知错误，请上报管理员');
                    break;
                case 600:
                    msg('TIME_OUT', '访问超时，请检查网络连接');
                    break;
                case 700:
                    msg('激活错误', '非法激活链接，请联系管理员');
                    break;
                case 800:
                    msg('激活错误', '用户已被激活，请直接登录');
                    break;
                default:
                    break;
            }
        },
        getEncyclopedia() {
            var self = this;
            self.encyclopediaList = [];
            var searchData = {
                keyword: "",
                pageNum: 1
            };
            searchData.keyword = self.search;
            searchData.pageNum = self.pageNum;
            self.$axios({
                url: '/encyclopediaSearch',
                method: 'post',
                baseURL: self.hostURL,
                data: searchData
            }).then(response => {
                self.encyclopediaList = [];
                self.encyclopediaList = response.data;
                self.pagination_show = true;
            }).catch(error => {
                self.$message({
                    type: 'info',
                    message: 'connect fail'
                });
            });
        },
        handleCurrentChange() {
            var self = this;
            console.log("current-Page:");
            console.log(self.pageNum);
            self.getEncyclopedia();
        },
        encyclopediaClick(item) {
            var self = this;
            console.log(item.id);
            self.$router.push('/user/encyclopedia-prop?' + item.id);
        }

    },

    mounted() {
        var self = this;
        var user_name = localStorage.getItem("ms_username");
        if (user_name == "") {
            this.$router.replace('/login');
        }
        self.encyclopediaList = [];
        if (self.encyclopediaList.length == 0) {
            self.pagination_show = false;
        }
    }
});

/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)(undefined);
// imports


// module
exports.push([module.i, ".crumbs{text-decoration:none}.banner{background:url(" + __webpack_require__(679) + ") no-repeat 0 0;background-size:cover;min-height:500px;min-width:640px}.banner h3{font-size:30px;padding-top:18%;font-weight:600}.banner h2,.banner h3{color:#fff;letter-spacing:1px;text-transform:uppercase;text-align:center}.banner h2{font-size:50px;font-weight:700;margin:30px 0}.banner h2 span{color:#00bcd4}.banner h4{color:#fff;font-size:14px;letter-spacing:1px;text-transform:uppercase;background:#00bcd4;width:20%;margin:0 auto;padding:10px 0;text-align:center}.awa{padding:50px 0;background:#789}.pedia-box{height:45px;width:800px;margin:0 10%;margin-top:0;position:relative}.pedia-box input{border:1px solid #e4e4e4;box-sizing:border-box;width:700px;height:45px;font-size:18px;float:left;padding-left:0;padding-right:10px;overflow:hidden}.search-btn{height:45px;width:100px;border:1px solid #ffc107;background-color:#ffc107;color:#fff;font-size:16px;font-weight:700;float:left;cursor:pointer}.link-tit{color:#e9c06c}#show-pedias{max-width:800px;margin:0 auto}.eg-item,.single-item{padding:20px;margin:20px 0;box-sizing:border-box;background:#eee;cursor:pointer}.pagination{margin-right:120px}", ""]);

// exports


/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/ab.20a7206.jpg";

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "crumbs"
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', {
    attrs: {
      "to": "/user/pedia"
    }
  }, [_c('i', {
    staticClass: "el-icon-date"
  }), _vm._v(" VR百科")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("百科搜索")])], 1)], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "awa",
    attrs: {
      "id": "about"
    }
  }, [_c('div', {
    staticClass: "pedia-container"
  }, [_c('div', {
    staticClass: "pedia-box"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.search),
      expression: "search"
    }],
    attrs: {
      "type": "text",
      "placeholder": " 输入词条关键字"
    },
    domProps: {
      "value": (_vm.search)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.search = $event.target.value
      }
    }
  }), _vm._v(" "), _c('el-button', {
    staticClass: "search-btn",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.getEncyclopedia()
      }
    }
  }, [_vm._v("搜索")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "id": "show-pedias"
    }
  }, _vm._l((_vm.encyclopediaList), function(item) {
    return _c('div', {
      staticClass: "single-item",
      on: {
        "click": function($event) {
          _vm.encyclopediaClick(item)
        }
      }
    }, [_c('a', {
      staticClass: "link-tit",
      attrs: {
        "href": "javascript:void(0);",
        "title": ""
      }
    }), _vm._v(" "), _c('h1', [_vm._v(_vm._s(item.keyword))]), _vm._v(" "), _c('article', [_vm._v(_vm._s(item.firstprop))])])
  }))]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.pagination_show),
      expression: "pagination_show"
    }],
    staticClass: "pagination"
  }, [_c('el-pagination', {
    attrs: {
      "current-page": _vm.pageNum,
      "layout": "prev, next"
    },
    on: {
      "current-change": _vm.handleCurrentChange,
      "update:currentPage": function($event) {
        _vm.pageNum = $event
      }
    }
  })], 1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "banner"
  }, [_c('h3', [_vm._v("KNOW MORE ABOUT")]), _vm._v(" "), _c('h2', [_c('span', [_vm._v("VR ")])]), _vm._v(" "), _c('h4', [_vm._v("Search for what you want to know")])])
}]}

/***/ }),

/***/ 780:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(650);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(133)("5c549a76", content, true);

/***/ })

});