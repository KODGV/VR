webpackJsonp([8],{

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(767)
__webpack_require__(768)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(611),
  /* template */
  __webpack_require__(709),
  /* scopeId */
  "data-v-1e39a916",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 611:
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
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function () {
        return {
            seen: false,
            activeName2: 'first',
            allowSubmit: true,
            hostURL: "/VR",
            id: "1",
            prop_id: "1",
            keyword: "",
            prop_keyword: "",
            content: "",
            upvote: 1,
            downvote: 1,
            changenote: "a1",
            encyclopedia_propData: [{
                id: "1",
                prop_id: "1",
                keyword: "",
                prop_keyword: "",
                content: "a",
                changenote: "a1"

            }, {
                id: "2",
                prop_id: "2",
                keyword: "",
                prop_keyword: "",
                content: "b",
                changenote: "b1"

            }]
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
        getEncyclopedia_propData(id) {
            var self = this;
            self.encyclopedia_propData = [];
            self.$axios({
                url: '/encyclopedia-prop/' + id,
                method: 'get',
                baseURL: self.hostURL
            }).then(response => {
                self.encyclopedia_propData = response.data;

                console.log(encyclopedia_propData);
            }).catch(error => {
                console.log(error);
            });
        },
        getEncyclopediaData(id) {
            var self = this;
            var encydata = {
                id: 1,
                keyword: '',
                type: '',
                changenote: '',
                upvote: 1,
                downvote: 1
            };
            self.$axios({
                url: '/encyclopedia-votedata/' + id,
                method: 'get',
                baseURL: self.hostURL
            }).then(response => {
                encydata = response.data;
                self.id = encydata.id;
                self.keyword = encydata.keyword;
                self.upvote = encydata.upvote;
                self.downvote = encydata.downvote;
            }).catch(error => {
                console.log(error);
            });
        },
        edit(encyclopedia_prop) {
            var self = this;
            self.seen = true;
            self.id = encyclopedia_prop.id;
            self.keyword = encyclopedia_prop.keyword;
            self.prop_id = encyclopedia_prop.prop_id;
            self.prop_keyword = encyclopedia_prop.prop_keyword;
            self.content = encyclopedia_prop.content;
            self.changenote = self.changenote;
        },
        close() {
            var self = this;
            self.seen = false;
        },
        submit() {
            var self = this;
            var submitdata = {
                id: "1",
                prop_id: "1",
                keyword: "",
                prop_keyword: "",
                content: "a",
                changenote: "a1"
            };
            submitdata.id = self.id;
            submitdata.prop_id = self.prop_id;
            submitdata.keyword = self.keyword;
            submitdata.prop_keyword = self.prop_keyword;
            submitdata.content = self.content;
            submitdata.changenote = localStorage.getItem('ms_username');
            self.$axios({
                url: '/encyclopedia-propChange',
                method: 'post',
                baseURL: self.hostURL,
                data: submitdata
            }).then(response => {
                var state = response.data;
                if (state == 1) {
                    self.$message({
                        type: 'info',
                        message: '提交成功'
                    });
                    self.close();
                }
            }).catch(error => {
                console.log(error);
            });
        },
        up() {
            var self = this;
            var sid = self.id;
            var username = localStorage.getItem('ms_username');
            var votenote = 'encyclopedia-vote' + sid;
            var flag = localStorage.getItem(votenote);
            if (username == flag) {
                self.$message({
                    type: 'info',
                    message: '您已经对该条百科做出评价'
                });
                return;
            }
            self.$axios({
                url: '/encyclopedia-up/' + sid,
                method: 'get',
                baseURL: self.hostURL
            }).then(response => {
                var state = response.data;
                if (state == 1) {
                    self.$message({
                        type: 'info',
                        message: '赞成功'
                    });
                    self.upvote = self.upvote + 1;
                    localStorage.setItem(votenote, username);
                }
            }).catch(error => {
                console.log(error);
            });
        },
        down() {
            var self = this;
            var sid = self.id;
            var username = localStorage.getItem('ms_username');
            var votenote = 'encyclopedia-vote' + sid;
            var flag = localStorage.getItem(votenote);
            if (username == flag) {
                self.$message({
                    type: 'info',
                    message: '您已经对该条百科做出评价'
                });
                return;
            }
            self.$axios({
                url: '/encyclopedia-down/' + sid,
                method: 'get',
                baseURL: self.hostURL
            }).then(response => {
                var state = response.data;
                if (state == 1) {
                    self.$message({
                        type: 'info',
                        message: '踩成功'
                    });
                    self.downvote = self.downvote + 1;
                    localStorage.setItem(votenote, username);
                }
            }).catch(error => {
                console.log(error);
            });
        }

    },
    mounted() {
        var self = this;
        var user_name = localStorage.getItem("ms_username");
        if (user_name == "") {
            this.$router.replace('/login');
        }
        self.encyclopedia_propData = [];
        console.log("2222");
        var arr = location.href.split('?');
        console.log(arr[1]);
        var encyclopedia_id = arr[1];
        self.id = encyclopedia_id;
        console.log(encyclopedia_id);
        self.getEncyclopedia_propData(encyclopedia_id);
        self.getEncyclopediaData(encyclopedia_id);
        var not = '';
        localStorage.setItem('encyclopedia-vote', not);
    }
});

/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)(undefined);
// imports


// module
exports.push([module.i, ".crumbs[data-v-1e39a916]{text-decoration:none}.bread[data-v-1e39a916]{font-size:16px}.form-box[data-v-1e39a916]{width:300px;margin-top:50px;margin-left:0;box-shadow:0 0 8px 0 rgba(232,237,250,.9),0 2px 4px 0 rgba(232,237,250,.9);padding:50px 50px 50px 10px}.submit-btn[data-v-1e39a916]{width:220px;margin-left:80px}.submit-btn button[data-v-1e39a916]{width:100%}.news-box[data-v-1e39a916]{padding:28px;width:800px;border:1px solid #e1e1e1;box-shadow:0 0 2px rgba(0,0,0,.1)}.news-title[data-v-1e39a916]{font-size:22px;color:#287d7c;line-height:50px;font-weight:400;display:block}.borderline[data-v-1e39a916]{border-bottom:1px dotted #bfbfbf}.artinfo[data-v-1e39a916]{float:left;padding-bottom:5px;color:#999;margin:0;padding:0;display:block}.author[data-v-1e39a916]{color:#666}.article p[data-v-1e39a916]{padding:30px 0 50px;font-size:18px;color:#333;line-height:200%;text-indent:2em}.article[data-v-1e39a916]{display:inline-block;line-height:26px;padding-bottom:25px}.news-img[data-v-1e39a916]{text-align:center}.news-comment[data-v-1e39a916]{margin-top:20px;text-align:center}", ""]);

// exports


/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)(undefined);
// imports


// module
exports.push([module.i, ".crumbs[data-v-1e39a916]{text-decoration:none}.form-box[data-v-1e39a916]{width:300px;margin-top:50px;margin-left:0;box-shadow:0 0 8px 0 rgba(232,237,250,.9),0 2px 4px 0 rgba(232,237,250,.9);padding:50px 50px 50px 10px}.submit-btn[data-v-1e39a916]{width:220px;margin-left:80px}.submit-btn button[data-v-1e39a916]{width:100%}ul[data-v-1e39a916]{list-style:none;display:block;-webkit-margin-before:1em;-webkit-margin-after:1em;-webkit-margin-start:0;-webkit-margin-end:0;-webkit-padding-start:40px}li[data-v-1e39a916]{list-style-type:none;padding-bottom:10px;border-bottom:1px solid #ccc}a[data-v-1e39a916],a[data-v-1e39a916]:hover,a[data-v-1e39a916]:visited{text-decoration:none}.or-btn[data-v-1e39a916]{border:1px solid #f2af00;background:#f2af00}.eg-item[data-v-1e39a916],.news-item[data-v-1e39a916]{margin-bottom:24px;overflow:hidden}.news-list .news-item .link-tit[data-v-1e39a916]{color:#e9c06c}.news-list .news-item img[data-v-1e39a916]{display:block;float:left;margin-right:20px;width:200px}.eg-title[data-v-1e39a916],.news-list .news-item .news-title[data-v-1e39a916]{display:block;font-size:22px;font-weight:lighter;color:#3e3e3e;line-height:50px;height:50px;overflow:hidden}.news-list .news-desc[data-v-1e39a916]{display:block;height:60px;overflow:hidden;font-size:14px;color:#898989;line-height:1.5}.pagination[data-v-1e39a916]{margin-left:50px}.sidebar[data-v-1e39a916]{display:block;position:absolute;width:400px;right:0;top:0;bottom:0;background:#2e363f}.sidebar>ul[data-v-1e39a916]{height:100%}.events[data-v-1e39a916]{padding:0}.eg-title[data-v-1e39a916],.title[data-v-1e39a916]{font-size:2em;color:#789;margin-bottom:1em;font-family:Marvel,sans-serif}.news-title[data-v-1e39a916]{font-size:2em;color:#f2af00;font-family:Marvel,sans-serif}.event-text p[data-v-1e39a916]{font-size:1em;color:#777676;line-height:1.8em;margin-top:.5em}.event-text a[data-v-1e39a916]{font-size:.95em;color:#fff;background:#a2b040;padding:.5em 1em;display:inline-block;margin-top:.8em;border-radius:3px}.event-text a[data-v-1e39a916]:hover{background:#f2af00}.events-grid[data-v-1e39a916]{margin-bottom:3em}.wthree_head[data-v-1e39a916]{font-size:2em;color:#f2af00;text-align:center;text-transform:capitalize}.wthree_head i[data-v-1e39a916]{display:block;text-align:center;color:#fff;background:#ff0101;margin:0 auto;border-radius:25px;line-height:1.5;margin-bottom:.5em}.wthree_head span[data-v-1e39a916]{display:block;font-size:.5em;padding:.5em 0;border-top:1px solid #f2af00;border-bottom:1px solid #f2af00;width:11%;text-transform:uppercase;letter-spacing:5px;margin:0 auto}.el-input[data-v-1e39a916]{padding:8px;width:95%}#conSpace[data-v-1e39a916]{height:200px;width:380px;margin-left:10px}", ""]);

// exports


/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "crumbs"
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', [_c('i', {
    staticClass: "el-icon-date"
  }), _vm._v(" "), _c('span', {
    staticClass: "bread"
  }, [_vm._v("VR百科")])]), _vm._v(" "), _c('el-breadcrumb-item', [_c('span', {
    staticClass: "bread"
  }, [_vm._v("百科知识")])])], 1)], 1), _vm._v(" "), (_vm.seen) ? _c('div', {
    staticClass: "sidebar"
  }, [_c('div', {
    staticClass: "container"
  }, [_vm._m(0), _vm._v(" "), _c('el-input', {
    attrs: {
      "placeholder": "词条名",
      "id": "keySpace"
    },
    model: {
      value: (_vm.keyword),
      callback: function($$v) {
        _vm.keyword = $$v
      },
      expression: "keyword"
    }
  }), _vm._v(" "), _c('el-input', {
    attrs: {
      "placeholder": "词条属性",
      "id": "pkSpace"
    },
    model: {
      value: (_vm.prop_keyword),
      callback: function($$v) {
        _vm.prop_keyword = $$v
      },
      expression: "prop_keyword"
    }
  }), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.content),
      expression: "content"
    }],
    attrs: {
      "placeholder": "内容",
      "id": "conSpace"
    },
    domProps: {
      "value": (_vm.content)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.content = $event.target.value
      }
    }
  }), _vm._v(" "), _c('el-button', {
    staticClass: "or-btn",
    staticStyle: {
      "margin-left": "30%",
      "margin-top": "10px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.submit()
      }
    }
  }, [_vm._v("提交")]), _vm._v(" "), _c('el-button', {
    staticClass: "or-btn",
    staticStyle: {
      "margin-top": "10px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.close()
      }
    }
  }, [_vm._v("关闭")])], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "events"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "news-box"
  }, [_c('h2', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.keyword))]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "article"
  }, [_c('ul', {
    staticClass: "news-list"
  }, _vm._l((_vm.encyclopedia_propData), function(encyclopedia_prop) {
    return _c('li', {
      staticClass: "news-item"
    }, [_c('a', {
      staticClass: "link-tit",
      attrs: {
        "href": "javascript:void(0);",
        "title": ""
      }
    }, [_c('span', {
      staticClass: "news-title"
    }, [_vm._v(_vm._s(encyclopedia_prop.prop_keyword))]), _vm._v(" "), _c('span', {
      staticClass: "news-desc"
    }, [_vm._v(_vm._s(encyclopedia_prop.content))])]), _vm._v(" "), _c('el-button', {
      staticStyle: {
        "float": "right"
      },
      attrs: {
        "type": "warning"
      },
      on: {
        "click": function($event) {
          _vm.edit(encyclopedia_prop)
        }
      }
    }, [_vm._v("编辑")])], 1)
  }))]), _vm._v(" "), _c('div', {
    staticClass: "news-comment"
  }, [_c('el-button-group', [_c('el-button', {
    attrs: {
      "type": "primary",
      "icon": "circle-check"
    },
    on: {
      "click": function($event) {
        _vm.up()
      }
    }
  }, [_vm._v("赞" + _vm._s(_vm.upvote))]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.down()
      }
    }
  }, [_vm._v("踩" + _vm._s(_vm.downvote)), _c('i', {
    staticClass: "el-icon-circle-cross el-icon--right"
  })])], 1)], 1)])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h3', {
    staticClass: "wthree_head"
  }, [_c('i', {
    staticClass: "fa fa-envelope",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('span', [_vm._v("编辑")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "borderline clearfix"
  }, [_c('p', {
    staticClass: "artinfo"
  }, [_c('span', {
    staticClass: "author"
  })])])
}]}

/***/ }),

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(637);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(133)("8ecedaa2", content, true);

/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(638);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(133)("8b1c3464", content, true);

/***/ })

});