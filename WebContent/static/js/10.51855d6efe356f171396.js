webpackJsonp([10],{

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(784)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(618),
  /* template */
  __webpack_require__(727),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 618:
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
            pageNum: 1,
            pageTotal: 20,
            pageSize: 1,
            hostURL: '/VR',

            items: [{
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
            type: 'VR简介',
            typeList: ['VR简介', 'VR应用', 'VR历史']
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
        getTypes() {
            var self = this;
            self.typeList = [];
            self.$axios({
                url: '/encyclopediaDir',
                method: 'post',
                baseURL: self.hostURL,
                data: "notype"
            }).then(response => {
                self.typeList = response.data;
            }).catch(error => {
                self.$message({
                    type: 'info',
                    message: 'connect fail'
                });
            });
        },
        search(onetype, pageNum) {
            var self = this;
            //self.items=[];
            var dirtype = {
                type: "",
                pageNum: 1
            };
            dirtype.type = onetype;
            dirtype.pageNum = pageNum;
            self.$axios({
                url: '/encyclopediaTypeDir',
                method: 'post',
                baseURL: self.hostURL,
                data: dirtype
            }).then(response => {
                self.items = response.data;
            }).catch(error => {
                self.$message({
                    type: 'info',
                    message: 'connect fail'
                });
            });
        },
        selected(onetype) {
            var self = this;
            self.type = onetype;
            self.search(onetype, 1);
        },
        handleCurrentChange() {
            var self = this;
            console.log("current-Page:");
            console.log(self.pageNum);
            var type = self.type;
            var pageNum = self.pageNum;
            self.search(type, pageNum);
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
        //$(function(){ $(window).scrollTop(0)});
        //self.getTypes();
        self.selected("VR简介");
    }
});

/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)(undefined);
// imports


// module
exports.push([module.i, ".crumbs{text-decoration:none}.banner{background:url(" + __webpack_require__(680) + ") no-repeat 0 0;background-size:cover;min-height:600px;min-width:850px}.banner h3{font-size:30px;padding-top:18%;font-weight:600}.banner h2,.banner h3{color:#fff;letter-spacing:1px;text-transform:uppercase;text-align:center}.banner h2{font-size:50px;font-weight:700;margin:30px 0}.banner h2 span{color:#00bcd4}.banner h4{color:#fff;font-size:14px;letter-spacing:1px;text-transform:uppercase;background:#00bcd4;width:20%;margin:0 auto;padding:10px 0;text-align:center}.about-w3-agile{padding:50px 0}.about-w3-agile box{color:#000;text-transform:uppercase;font-size:25px;letter-spacing:2px;font-weight:700;text-align:left;position:relative;margin-bottom:50px}.about-w3-agile box:before{background:#d9d9d9;width:45%}.about-w3-agile box:before,.about-w3-agile h3:after{content:\"\";height:3px;position:absolute;top:170%;left:0}.about-w3-agile h3:after{background:#fff;width:10%}.about-w3-agile h3:before{width:25%}.about-w3-agile h3{margin-top:30px}.eg-item{padding:20px;margin:20px 0;box-sizing:border-box;background:#eee}#navigation{float:left;width:200px;font-family:Arial}#navigation ul{list-style-type:none;margin:0;padding:0}#navigation li{border-bottom:1px solid #fff;height:45px;display:block;padding:5px 5px 5px .5em;text-decoration:none;border-left:12px solid #00bcd4;border-right:1px solid #fff;background-color:#789;color:#fff}#navigation li:link,#navigation li a:visited{background-color:#c11136;color:#fff}#navigation li :hover{background-color:#ffc107;color:#ff0}#show-items{max-width:800px;margin:0 auto;cursor:pointer}.sing-item{padding:20px;margin:20px 0;box-sizing:border-box;background:#eee}.pagination{margin-left:50px}", ""]);

// exports


/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ 727:
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
  }), _vm._v("VR百科 ")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("目录浏览")])], 1)], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "about-w3-agile",
    attrs: {
      "id": "about"
    }
  }, [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('div', {
    attrs: {
      "id": "navigation"
    }
  }, [_c('div', {
    staticClass: "collection"
  }, [_c('ul', _vm._l((_vm.typeList), function(onetype) {
    return _c('a', {
      staticClass: "collection-item",
      class: {
        active: _vm.type == onetype
      },
      attrs: {
        "href": "#/user/pedia2"
      },
      on: {
        "click": function($event) {
          _vm.selected(onetype)
        }
      }
    }, [_c('li', [_vm._v(_vm._s(onetype))])])
  }))])])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 18
    }
  }, [_c('div', {
    attrs: {
      "id": "show-items"
    }
  }, _vm._l((_vm.items), function(item) {
    return _c('div', {
      staticClass: "sing-item",
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
  }))])], 1)], 1), _vm._v(" "), _c('div', {
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
  })], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "banner"
  }, [_c('h3', [_vm._v("KNOW MORE ABOUT")]), _vm._v(" "), _c('h2', [_c('span', [_vm._v("VR ")])])])
}]}

/***/ }),

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(654);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(133)("599a01ca", content, true);

/***/ })

});