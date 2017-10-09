webpackJsonp([38],{

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(790)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(588),
  /* template */
  __webpack_require__(734),
  /* scopeId */
  "data-v-6a5faf9e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 588:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
                evaluationId: 12,
                titlePic: 'static/img/bg.jpg',
                authorId: '1',
                authorName: 'dawn',
                evaluationTitle: '很正经的文章标题很正经的文章标题很正经的文章标题很正经的文章标题很正经的文章标题很正经的文章标题',
                postTime: '2017/08/01',
                updateTime: '2017/08/01',
                type: null,
                evaluationText: '',
                ups: 2,
                downs: 5,
                comments: 2,
                view: 0
            }, {
                evaluationId: 1,
                titlePic: 'static/img/bg.jpg',
                authorId: '1',
                authorName: 'dawn',
                evaluationTitle: '很正经的文章标题',
                postTime: '2017/08/01',
                updateTime: '2017/08/01',
                type: null,
                evaluationText: '',
                ups: 2,
                downs: 5,
                comments: 2,
                view: 0
            }, {
                evaluationId: 1,
                titlePic: 'static/img/bg.jpg',
                authorId: '1',
                authorName: 'dawn',
                evaluationTitle: '很正经的文章标题',
                postTime: '2017/08/01',
                updateTime: '2017/08/01',
                type: null,
                evaluationText: '',
                ups: 2,
                downs: 5,
                comments: 2,
                view: 0
            }, {
                evaluationId: 1,
                titlePic: 'static/img/bg.jpg',
                authorId: '1',
                authorName: 'dawn',
                evaluationTitle: '很正经的文章标题',
                postTime: '2017/08/01',
                updateTime: '2017/08/01',
                type: null,
                evaluationText: '',
                ups: 2,
                downs: 5,
                comments: 2,
                view: 0
            }, {
                evaluationId: 1,
                titlePic: 'static/img/bg.jpg',
                authorId: '1',
                authorName: 'dawn',
                evaluationTitle: '很正经的文章标题',
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
            pageSize: 10
        };
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
                url: '/evaluations/list?size=10&page=' + pageNum,
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
        handleView(mse) {
            var self = this;
            console.log(mse);
            self.$router.push('/user/mse?' + mse.evaluationId);
        },
        handleEdit(mse) {
            var self = this;
            console.log(mse);
            self.$router.push('/user/mse-self-edit?' + mse.evaluationId);
        },
        handleDel(mse) {
            var self = this;
            self.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                self.$message({
                    type: 'success',
                    message: '删除成功!'
                });
                //del
                self.$axios({
                    url: '/evaluations/evaluation/' + mse.evaluationId,
                    method: 'DELETE',
                    baseURL: self.hostURL
                }).then(response => {
                    console.log(response.data.object);
                    /*self.picValue = null;
                     self.picTitle = '';
                     self.title = '';
                     self.content = null;
                     self.$refs.ue.execCommand('cleardoc');*/
                    self.$notify({
                        title: '成功！',
                        message: '测评删除成功。',
                        type: 'success'
                    });
                    self.getMseList(self.pageNum);
                }).catch(error => {
                    console.log(error);
                    self.codeParsing(error.response.status);
                });
            }).catch(() => {
                self.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
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

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)(undefined);
// imports


// module
exports.push([module.i, ".crumbs[data-v-6a5faf9e]{text-decoration:none}.pagination[data-v-6a5faf9e]{margin-left:50px}li[data-v-6a5faf9e],ul[data-v-6a5faf9e]{list-style:none;margin:0;padding:0}a[data-v-6a5faf9e]{cursor:pointer}a[data-v-6a5faf9e]:hover{text-decoration:none;color:#5188a6!important}.list-header[data-v-6a5faf9e]{margin-bottom:20px;color:#607590}.mse-item[data-v-6a5faf9e]{margin-bottom:15px;border-bottom:1px dotted #ccc}.title[data-v-6a5faf9e]{font-size:22px;font-weight:700;color:#48576a;display:block;position:relative;overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis}.time[data-v-6a5faf9e]{font-size:12px;color:#999}.cai-count[data-v-6a5faf9e],.comment-count[data-v-6a5faf9e],.zan-count[data-v-6a5faf9e]{color:#999;margin-right:8px}.not-found[data-v-6a5faf9e]{font-size:24px;color:#bac4ce;width:240px;margin:0 auto;padding-top:20px}", ""]);

// exports


/***/ }),

/***/ 734:
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
  }), _vm._v("媒体自评测")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("我的媒体自评测")])], 1)], 1), _vm._v(" "), _c('el-row', {
    staticStyle: {
      "margin-top": "20px"
    }
  }, [(_vm.mseList.length) ? _c('el-col', [_c('el-row', {
    staticClass: "list-header",
    attrs: {
      "gutter": 20
    }
  }, [_c('el-col', {
    attrs: {
      "span": 11
    }
  }, [_c('div', [_c('span', {}, [_vm._v("\n                            文章标题\n                        ")])])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 4
    }
  }, [_c('div', [_c('span', {}, [_c('em', {
    staticClass: "left"
  }), _vm._v("发表时间"), _c('em', {
    staticClass: "right"
  })])])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 4
    }
  }, [_c('div', [_c('span', {}, [_vm._v("\n                            评测评价\n                        ")])])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 5
    }
  }, [_c('div', [_vm._v("\n                        操作\n                    ")])])], 1), _vm._v(" "), _c('ul', {}, _vm._l((_vm.mseList), function(mse) {
    return _c('li', {
      key: mse,
      staticClass: "mse-item"
    }, [_c('el-row', {
      attrs: {
        "gutter": 20
      }
    }, [_c('el-col', {
      attrs: {
        "span": 11
      }
    }, [_c('div', {
      staticClass: "grid-content"
    }, [_c('span', {
      staticClass: "title"
    }, [_c('p', [_vm._v(_vm._s(mse.evaluationTitle))])])])]), _vm._v(" "), _c('el-col', {
      attrs: {
        "span": 4
      }
    }, [_c('div', {
      staticClass: "grid-content"
    }, [_c('span', {
      staticClass: "time"
    }, [_vm._v(_vm._s(_vm.timeFomat(mse.updateTime)))])])]), _vm._v(" "), _c('el-col', {
      attrs: {
        "span": 4
      }
    }, [_c('div', {
      staticClass: "mse-info"
    }, [_c('span', {
      staticClass: "zan-count"
    }, [_c('i', {
      staticClass: "fa fa-thumbs-o-up"
    }), _vm._v(" "), _c('em', [_vm._v(_vm._s(mse.ups))])]), _vm._v(" "), _c('span', {
      staticClass: "cai-count"
    }, [_c('i', {
      staticClass: "fa fa-thumbs-o-down"
    }), _vm._v(" "), _c('em', [_vm._v(_vm._s(mse.downs))])]), _vm._v(" "), _c('span', {
      staticClass: "comment-count"
    }, [_c('i', {
      staticClass: "fa fa-commenting-o"
    }), _vm._v(" "), _c('em', [_vm._v(_vm._s(mse.comments))])])])]), _vm._v(" "), _c('el-col', {
      attrs: {
        "span": 5
      }
    }, [_c('div', [_c('el-button', {
      attrs: {
        "type": "primary",
        "size": "small"
      },
      on: {
        "click": function($event) {
          _vm.handleView(mse)
        }
      }
    }, [_vm._v("查看")]), _vm._v(" "), _c('el-button', {
      attrs: {
        "type": "",
        "size": "small"
      },
      on: {
        "click": function($event) {
          _vm.handleEdit(mse)
        }
      }
    }, [_vm._v("编辑")]), _vm._v(" "), _c('el-button', {
      attrs: {
        "type": "danger",
        "size": "small"
      },
      on: {
        "click": function($event) {
          _vm.handleDel(mse)
        }
      }
    }, [_vm._v("删除")])], 1)])], 1)], 1)
  })), _vm._v(" "), _c('div', {
    staticClass: "pagination"
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
  })], 1)], 1) : _c('p', {
    staticClass: "not-found"
  }, [_vm._v("\n            未找到相关内容。。。\n        ")])], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 790:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(660);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(133)("efcbbdc4", content, true);

/***/ })

});