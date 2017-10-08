webpackJsonp([40],{

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(782)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(585),
  /* template */
  __webpack_require__(724),
  /* scopeId */
  "data-v-524e36ff",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 585:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function () {
        return {
            allowSubmit: true,
            hostURL: "/VR",
            //                hostURL:"http://116.56.140.85:8080/VR",
            mse: {
                evaluationId: 1,
                titlePic: '',
                authorId: 'ff',
                authorName: 'ff',
                evaluationTitle: 'fffff',
                postTime: null,
                updateTime: '',
                type: null,
                evaluationText: {
                    id: 0,
                    evaluationBody: '<p>fff</p>'
                },
                ups: 0,
                downs: 0,
                comments: 0,
                view: -1
            },

            pageNum_nc: 1,
            pageTotal_nc: null,
            pageNum_hc: 1,
            pageTotal_hc: null,
            pageSize: 10,

            userCurrent: '',
            e_id: null
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

        // 设置文章样式
        mseContent(str) {
            var res = String(str).replace(/<p/g, "<p style=\"margin-bottom\:20px\"");
            res = res.replace(/<h2/g, "<h2 style=\"margin-bottom\:20px\"");
            res = res.replace(/<h3/g, "<h3 style=\"margin-bottom\:20px\"");
            res = res.replace(/<img/g, "<img style=\"display\:block\;margin\: auto\"");
            return res;
        },
        //get文章
        getMseData(id) {
            var self = this;
            self.mse = {};
            self.$axios({
                url: '/evaluations/' + id,
                method: 'GET',
                baseURL: self.hostURL
            }).then(response => {
                self.mse = response.data.object.evaluation;
                //                    console.log(response.data);
                self.thumbs = self.mse.view;
                console.log(self.mse.view);
            }).catch(error => {
                self.codeParsing(error.response.status);
                console.log(error.response.status);
            });
        }
    },
    computed: {},
    mounted() {
        var self = this;
        var arr = location.href.split('?');
        var mse_id = arr[1];
        self.e_id = mse_id;
        console.log(mse_id);
        self.getMseData(mse_id);
    }
});

/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)(undefined);
// imports


// module
exports.push([module.i, "a[data-v-524e36ff]{color:#5188a6;text-decoration:none;cursor:pointer}.mse-img[data-v-524e36ff]{width:710px;margin:0 auto}.mse-img img[data-v-524e36ff]{max-width:710px;max-height:300px;display:block;margin:0 auto}.recommend_tab[data-v-524e36ff]{line-height:1em;overflow:hidden;width:710px;margin:0 auto;padding-bottom:20px}.recommend_tab>span.mse-author[data-v-524e36ff]{float:left;line-height:28px;width:600px;overflow:hidden;margin:0 auto}.mse-author[data-v-524e36ff]{font-size:12px;float:left;line-height:24px;overflow:hidden;word-break:break-all;white-space:nowrap;text-overflow:ellipsis}.mse-author a[data-v-524e36ff]{line-height:24px;margin-right:10px}.grey[data-v-524e36ff]{color:#999}article>h1[data-v-524e36ff]{font-size:28px;margin-bottom:20px;word-break:break-all;text-align:center}.mse-content[data-v-524e36ff]{color:#333;line-height:24px;word-break:break-all;max-width:780px;margin:0 auto}", ""]);

// exports


/***/ }),

/***/ 724:
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
  }), _vm._v("管理员")]), _vm._v(" "), _c('el-breadcrumb-item', {
    attrs: {
      "to": "/admin/mseAdmin"
    }
  }, [_vm._v("媒体自评测管理模块")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("媒体自评测文章查看")])], 1)], 1), _vm._v(" "), _c('el-row', [_c('div', {
    staticClass: "abstract"
  }, [_c('div', {
    staticClass: "mse-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.mse.titlePic,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "recommend_tab"
  }, [_c('span', {
    staticClass: "mse-author"
  }, [_c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v(_vm._s(_vm.mse.authorName))]), _vm._v(" "), _c('span', {
    staticClass: "grey"
  }, [_vm._v("\n                        " + _vm._s(_vm.timeFomat(_vm.mse.updateTime)) + "\n                    ")])])]), _vm._v(" "), _c('article', [_c('h1', {
    staticClass: "mse-title"
  }, [_vm._v(_vm._s(_vm.mse.evaluationTitle))]), _vm._v(" "), _c('div', {
    staticClass: "mse-content",
    domProps: {
      "innerHTML": _vm._s(_vm.mseContent(_vm.mse.evaluationText))
    }
  })])])])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 782:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(652);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(133)("aa64a54c", content, true);

/***/ })

});