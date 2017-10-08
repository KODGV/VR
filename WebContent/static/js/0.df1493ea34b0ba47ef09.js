webpackJsonp([0],{

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(776)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(586),
  /* template */
  __webpack_require__(718),
  /* scopeId */
  "data-v-397f9022",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_img_inputer__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_img_inputer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_img_inputer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_quill_editor__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_quill_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_quill_editor__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        VueImgInputer: __WEBPACK_IMPORTED_MODULE_0_vue_img_inputer___default.a,
        quilEditor: __WEBPACK_IMPORTED_MODULE_1_vue_quill_editor___default.a
    },
    data() {
        return {
            hostURL: '/VR',
            //                hostURL:'http://116.56.140.85:8080/VR',
            imgSrc: "",
            subSuccess: false,
            edit: true,
            e_id: null,
            picValue: null,
            picTitle: '',
            title: '',
            op: 'post',
            userId: null,
            quillEditor: null,
            editorOption: {
                modules: {
                    toolbar: [[{ 'header': [2, 3, false] }], ['bold', 'italic'], [{ 'list': 'ordered' }, { 'list': 'bullet' }], ['image']]
                },
                placeholder: '请编写您的媒体自媒体测评...'
            }
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
        fileChange(picValue, name) {
            let self = this;
            console.log('picValue:', picValue);
            console.log('FileName:', name);
            console.log(picValue.imgSrc);
            let data = new FormData();
            //                    使用FormData.append来添加键/值对到表单里面;
            data.append('file', picValue);
            console.log(data);
            self.$axios({
                url: '/upload', //{uid}
                method: 'post',
                baseURL: self.hostURL,
                data: data
            }).then(response => {
                this.picTitle = response.data.object;
                console.log(this.picTitle);
            }).catch(error => {
                console.log(error);
            });
        },
        subMse() {
            let self = this;

            if (self.title && self.quillEditor && self.picTitle) {
                //                    post
                let mse = {
                    titlePic: self.picTitle,
                    evaluationTitle: self.title,
                    evaluationText: {
                        evaluationBody: self.quillEditor
                    }
                };
                /*if(self.op==='put'){
                    mse={
                        evaluationId:self.e_id,
                        titlePic: self.picTitle,
                        evaluationTitle: self.title,
                        authorId:self.userId,
                        evaluationText:{
                            evaluationBody:self.quillEditor
                        },
                        postTime: Date.parse(new Date())
                    }
                }*/
                //                    console.log(mse);
                /**/
                self.$axios({
                    url: '/evaluations/evaluation',
                    method: 'post',
                    baseURL: self.hostURL,
                    data: mse
                }).then(response => {
                    //                        console.log(response.data.object);
                    /*self.picValue = null;
                     self.picTitle = '';
                     self.title = '';
                     self.content = null;
                     self.$refs.ue.execCommand('cleardoc');*/
                    self.$notify({
                        title: '成功！',
                        message: '成功提交测评。',
                        type: 'success'
                    });

                    //                        self.edit = false;
                    /*if(self.op==='put'){
                        self.$router.push('/user/mse?' + self.e_id);
                    }else {*/
                    let res = response.data.object;
                    //                            console.log(res.evaluationId);
                    self.$router.push('/user/mse?' + res.evaluationId);
                    //                        }
                }).catch(error => {
                    console.log(error);
                    self.codeParsing(error.response.status);
                });
            } else {
                self.$notify({
                    title: '提示！',
                    message: '请填写媒体自评测的标题、标题图片及（或）文章内容后再进行提交。',
                    type: 'error'
                });
            }
        }
    },
    computed: {},
    mounted() {
        var self = this;
        var user_name = localStorage.getItem("ms_username");
        if (user_name == "") {
            this.$router.replace('/login');
        }
        /*var arr = location.href.split('?');
        if(arr.length != 1){
            var mse_id = arr[1];
            self.e_id = mse_id;
            console.log(mse_id);
            self.op = 'put';
            self.getMseData(mse_id);
        }*/
    }
});

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)(undefined);
// imports


// module
exports.push([module.i, ".vii div[data-v-397f9022]{margin:0 auto;display:block}.vii div div img[data-v-397f9022]{max-width:710px;max-height:300px}.title input[data-v-397f9022]{width:645px;font-size:24px;font-weight:400;color:#999;margin-top:20px;padding-right:0;line-height:36px;float:left;border:0}.ql[data-v-397f9022],.title[data-v-397f9022],.vii[data-v-397f9022]{margin-bottom:20px}.step[data-v-397f9022]{color:#5a5a5a}.subBtn[data-v-397f9022]{width:90px;height:34px;text-align:center;line-height:34px;color:#fff;background-color:#5a5a5a;border:0;margin-right:15px;font-size:14px;float:left}.active[data-v-397f9022]{background-color:#5188a6;cursor:pointer}", ""]);

// exports


/***/ }),

/***/ 718:
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
  }), _vm._v("媒体自评测")]), _vm._v(" "), _c('el-breadcrumb-item', {
    attrs: {
      "to": "/user/mse-list"
    }
  }, [_vm._v("媒体自评测")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("媒体自评测编辑")])], 1)], 1), _vm._v(" "), (_vm.edit) ? _c('div', [_c('el-row', {
    staticClass: "vii"
  }, [_c('form', {
    attrs: {
      "method": "POST",
      "action": "/VR/upload"
    }
  }, [_c('h3', {
    staticClass: "step"
  }, [_vm._v("1.请上传标题图像")]), _vm._v(" "), _c('VueImgInputer', {
    ref: "vii",
    attrs: {
      "imgSrc": _vm.imgSrc,
      "accept": "image/*",
      "theme": "light",
      "size": "large"
    },
    on: {
      "onChange": _vm.fileChange
    },
    model: {
      value: (_vm.picValue),
      callback: function($$v) {
        _vm.picValue = $$v
      },
      expression: "picValue"
    }
  })], 1)]), _vm._v(" "), _c('el-row', {
    staticClass: "title"
  }, [_c('h3', {
    staticClass: "step"
  }, [_vm._v("2.请设置标题")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.title),
      expression: "title"
    }],
    staticStyle: {
      "outline": "none"
    },
    attrs: {
      "type": "text",
      "placeholder": "文章标题"
    },
    domProps: {
      "value": (_vm.title)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.title = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('el-row', {
    staticClass: "ql"
  }, [_c('h3', {
    staticClass: "step",
    staticStyle: {
      "margin-bottom": "10px"
    }
  }, [_vm._v("3.请编写您的评测内容")]), _vm._v(" "), _c('div', {
    staticClass: "quill-editor"
  }, [_c('quill-editor', {
    attrs: {
      "red": "quil",
      "options": _vm.editorOption
    },
    model: {
      value: (_vm.quillEditor),
      callback: function($$v) {
        _vm.quillEditor = $$v
      },
      expression: "quillEditor"
    }
  })], 1)]), _vm._v(" "), _c('el-row', [_c('input', {
    staticClass: "subBtn active",
    attrs: {
      "type": "button",
      "value": "提交"
    },
    on: {
      "click": function($event) {
        _vm.subMse()
      }
    }
  })])], 1) : _c('div', [_c('p', [_vm._v("提交成功～")])])])
},staticRenderFns: []}

/***/ }),

/***/ 776:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(646);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(133)("460ec721", content, true);

/***/ })

});