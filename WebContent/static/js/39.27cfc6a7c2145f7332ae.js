webpackJsonp([39],{

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(786)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(587),
  /* template */
  __webpack_require__(729),
  /* scopeId */
  "data-v-580fdefa",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 587:
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
            //                hostURL:'http://116.56.140.85:8080/VR',
            hostURL: '/VR',
            searchData: '',
            mseList: [{
                evaluationId: 1,
                titlePic: 'static/img/bg.jpg',
                authorId: 'dawn',
                authorName: '1',
                evaluationTitle: '',
                postTime: '2017/08/01',
                updateTime: '2017/08/01',
                type: null,
                evaluationText: '',
                ups: 2,
                downs: 5,
                comments: 2,
                view: 0
            }],
            pageNum: 1,
            pageTotal: 0,
            pageSize: 6
        };
    },
    computed: {
        search: function () {
            var searchData = this.searchData;

            if (searchData) {
                return this.mseList.filter(function (mse) {
                    return Object.keys(mse).some(function (key) {
                        return String(mse[key]).toLowerCase().indexOf(searchData) > -1;
                    });
                });
            }

            return this.mseList;
        }
    },
    methods: {
        codeParsing(code) {
            let self = this;
            var msg = (err_title, err_message) => {
                self.$notify({
                    title: err_title,
                    message: err_message,
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
        timeFomat(str) {
            if (str === '刚刚') return str;else {
                let date = new Date(str);
                let fmt = "yyyy-MM-dd hh:mm";
                var o = {
                    "M+": date.getMonth() + 1, //月份
                    "d+": date.getDate(), //日
                    "h+": date.getHours(), //小时
                    "m+": date.getMinutes(), //分
                    "s+": date.getSeconds(), //秒
                    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
                    "S": date.getMilliseconds() //毫秒
                };
                if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
                for (var k in o) if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
                return fmt;
            }
        },
        getMseList(pageNum) {
            var self = this;
            self.mseList = [];
            self.$axios({
                url: '/evaluations/list?size=6&page=' + pageNum,
                method: 'get',
                baseURL: self.hostURL
            }).then(response => {
                self.mseList = [];
                self.mseList = response.data.object['list'];
                console.log(response.data);
                self.pageTotal = response.data.object['page'].pageNum * self.pageSize;
                console.log(self.pageTotal);
            }).catch(error => {
                console.log(error);
                self.codeParsing(error.response.status);
            });
        },
        handleCurrentChange() {
            var self = this;
            console.log("current-Page:");
            console.log(self.pageNum);
            self.getMseList(self.pageNum);
        },
        mseClick(mse) {
            var self = this;
            console.log("click mse");
            console.log(mse);
            self.$router.push('/user/mse?' + mse.evaluationId);
        },
        goMseEdit() {
            var self = this;
            self.$router.push('/user/mse-edit');
        },
        mseInfo(str) {
            var start = str.indexOf('<p');
            var end = str.indexOf('</p>');
            return str.slice(start, end + 4);
        }
    },
    mounted() {
        var self = this;
        var user_name = localStorage.getItem("ms_username");
        if (user_name == "") {
            this.$router.replace('/login');
        }
        self.getMseList(self.pageNum);
    }
});

/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)(undefined);
// imports


// module
exports.push([module.i, ".crumbs[data-v-580fdefa]{text-decoration:none}.pagination[data-v-580fdefa]{margin-left:50px}li[data-v-580fdefa],ul[data-v-580fdefa]{list-style:none;margin:0;padding:0}a[data-v-580fdefa]{cursor:pointer}.search[data-v-580fdefa]{margin:0 auto;border:2px solid #dcdcdc;width:354px;background-color:#fff;border-radius:4px}.text_search[data-v-580fdefa]{border:0;padding-left:8px;width:320px;color:#999;-webkit-appearance:caret;height:36px;outline:none;font-size:20px}.search-icon[data-v-580fdefa]{width:16px;height:16px;border:0;float:right;margin:10px 10px 0 0;background-color:transparent;cursor:pointer;color:#ccc}.write-article[data-v-580fdefa]{margin-top:-39px;float:right;width:104px;height:30px;line-height:30px;border:1px solid #dcdcdc;text-align:center;font-size:14px;color:#333;border-radius:16px;-moz-border-radius:16px;-webkit-border-radius:16px}.write-article a[data-v-580fdefa]{color:#000}.write-article[data-v-580fdefa]:hover{border-color:#2e76a8;color:#2e76a8}a[data-v-580fdefa]:hover{text-decoration:none;color:#5188a6!important}.write-article i[data-v-580fdefa]{font-size:20px;vertical-align:-1px;margin-right:5px;display:inline-block}.card[data-v-580fdefa]{width:1095px;overflow:hidden}.card li[data-v-580fdefa]{width:320px;margin-right:45px;float:left;margin-bottom:30px}.item-pic[data-v-580fdefa]{width:320px;height:180px;margin-bottom:8px;display:block;position:relative;overflow:hidden}.item-pic img[data-v-580fdefa]{width:320px;height:180px;-webkit-transition:all .3s ease 0s;transition:all .3s ease 0s}.item-pic:hover img[data-v-580fdefa]{transform:scale(1.05);-webkit-transform:scale(1.05);-moz-transform:scale(1.05)}.item-pic .time[data-v-580fdefa]{position:absolute;bottom:0;right:10px;padding:0 6px 0 5px;font-size:10px;line-height:14px;background-color:#fff;background-color:hsla(0,0%,100%,.8);border-radius:3px 3px 0 0}.time[data-v-580fdefa]{font-size:12px;color:#999}.item-pic .time .left[data-v-580fdefa]{left:-2px;border-left:2px solid transparent}.item-pic .time .left[data-v-580fdefa],.item-pic .time .right[data-v-580fdefa]{position:absolute;bottom:0;width:0;height:0;border-bottom:2px solid hsla(0,0%,100%,.8)}.item-pic .time .right[data-v-580fdefa]{right:-2px;border-right:2px solid transparent}.item-info-box[data-v-580fdefa]{height:90px;overflow:hidden;margin-bottom:10px}.item-info-box .item-name[data-v-580fdefa]{line-height:20px;max-height:40px;overflow:hidden;margin-bottom:10px;display:block;font-weight:400;font-size:14px}.item-name a[data-v-580fdefa]{color:#333}.item-info-box .item-info[data-v-580fdefa]{max-height:60px;line-height:20px;color:#999;font-size:12px;margin-bottom:10px;overflow:hidden}.item-bot[data-v-580fdefa]{height:30px;border-bottom:2px solid #fff}.card li:hover .item-bot[data-v-580fdefa]{border-color:#347ac1}.item-bot span[data-v-580fdefa]{float:right;margin-left:15px;margin-top:1px}.item-bot span i[data-v-580fdefa]{vertical-align:-2px;margin-right:3px}.item-bot span em[data-v-580fdefa]{color:#333;font-size:12px;font-style:normal}.cai-count[data-v-580fdefa],.comment-count[data-v-580fdefa],.zan-count[data-v-580fdefa]{color:#999}.item-bot .nickname[data-v-580fdefa]{float:left;margin-left:0;max-width:160px;height:20px;line-height:20px;margin-top:0;color:#333;font-size:12px}.item-bot .nickname i[data-v-580fdefa]{width:20px;height:20px;vertical-align:middle;margin-right:7px;display:block;float:left;font-size:20px}.not-found[data-v-580fdefa]{font-size:24px;color:#bac4ce;width:240px;margin:0 auto;padding-top:20px}", ""]);

// exports


/***/ }),

/***/ 729:
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
  }), _vm._v("媒体自评测")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("媒体自评测")])], 1)], 1), _vm._v(" "), _c('el-row', [_c('a', {
    staticClass: "write-article",
    attrs: {
      "href": "javascript:void(0);"
    },
    on: {
      "click": function($event) {
        _vm.goMseEdit()
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-pencil"
  }), _vm._v("\n            写篇原创\n        ")])]), _vm._v(" "), _c('el-row', {
    staticStyle: {
      "margin-top": "20px"
    }
  }, [(_vm.search.length) ? _c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('ul', {
    staticClass: "card"
  }, _vm._l((_vm.search), function(mse) {
    return _c('li', {
      key: mse
    }, [_c('a', {
      staticClass: "item-pic",
      attrs: {
        "href": "javascript:void(0);"
      },
      on: {
        "click": function($event) {
          _vm.mseClick(mse)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": mse.titlePic
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "time"
    }, [_c('em', {
      staticClass: "left"
    }), _vm._v(_vm._s(_vm.timeFomat(mse.updateTime))), _c('em', {
      staticClass: "right"
    })])]), _vm._v(" "), _c('div', {
      staticClass: "item-info-box"
    }, [_c('h2', {
      staticClass: "item-name"
    }, [_c('a', {
      attrs: {
        "href": "javascript:void(0);",
        "title": ""
      },
      on: {
        "click": function($event) {
          _vm.mseClick(mse)
        }
      }
    }, [_vm._v(_vm._s(mse.evaluationTitle))])]), _vm._v(" "), _c('div', {
      staticClass: "item-info",
      domProps: {
        "innerHTML": _vm._s(_vm.mseInfo(mse.evaluationText))
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "item-bot"
    }, [_c('span', {
      staticClass: "comment-count"
    }, [_c('i', {
      staticClass: "fa fa-commenting-o"
    }), _vm._v(" "), _c('em', [_vm._v(_vm._s(mse.comments))])]), _vm._v(" "), _c('span', {
      staticClass: "cai-count"
    }, [_c('i', {
      staticClass: "fa fa-thumbs-o-down"
    }), _vm._v(" "), _c('em', [_vm._v(_vm._s(mse.downs))])]), _vm._v(" "), _c('span', {
      staticClass: "zan-count"
    }, [_c('i', {
      staticClass: "fa fa-thumbs-o-up"
    }), _vm._v(" "), _c('em', [_vm._v(_vm._s(mse.ups))])]), _vm._v(" "), _c('span', {
      staticClass: "nickname"
    }, [_c('i', {
      staticClass: "fa fa-user-circle-o"
    }), _vm._v(" "), _c('em', [_vm._v(_vm._s(mse.authorName))])])])])
  })), _vm._v(" "), _c('div', {
    staticClass: "pagination card"
  }, [_c('el-pagination', {
    attrs: {
      "current-page": _vm.pageNum,
      "page-size": _vm.pageSize,
      "layout": "prev, pager, next, jumper",
      "total": _vm.pageTotal
    },
    on: {
      "current-change": _vm.handleCurrentChange,
      "update:currentPage": function($event) {
        _vm.pageNum = $event
      }
    }
  })], 1)]) : _c('p', {
    staticClass: "not-found"
  }, [_vm._v("\n            未找到相关内容。。。\n        ")])], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 786:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(656);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(133)("811712b8", content, true);

/***/ })

});