webpackJsonp([7],{

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(800)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(599),
  /* template */
  __webpack_require__(744),
  /* scopeId */
  "data-v-b6248b6c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 551:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ElRow',

  componentName: 'ElRow',

  props: {
    gutter: Number,
    type: String,
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    }
  },

  computed: {
    style() {
      var ret = {};

      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`;
        ret.marginRight = ret.marginLeft;
      }

      return ret;
    }
  }
});

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(551),
  /* template */
  __webpack_require__(558),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 558:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "el-row",
    class: [
      _vm.justify !== 'start' ? 'is-justify-' + _vm.justify : '',
      _vm.align !== 'top' ? 'is-align-' + _vm.align : '',
      {
        'el-row--flex': _vm.type === 'flex'
      }
    ],
    style: (_vm.style)
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_element_ui_packages_row_src_row__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_element_ui_packages_row_src_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_element_ui_packages_row_src_row__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        ElRow: __WEBPACK_IMPORTED_MODULE_0__node_modules_element_ui_packages_row_src_row___default.a },
    data() {
        return {
            hostURL: '/VR',
            restSize: 30,
            options: [{ label: '讨论', name: 'discussion' }, { label: '分享', name: 'share' }, { label: '求助', name: 'help' }, { label: '教程', name: 'tutorial' }, { label: '评测', name: 'evaluation' }, { label: '手机VR', name: 'phonevr' }, { label: '电脑VR', name: 'computervr' }],
            ruleForm: {
                theme: '',
                title: '',
                content: ''
            },
            rules: {
                title: [{ required: true, message: '请输入帖子标题', trigger: 'blur' }, { min: 5, max: 30, message: '长度在 5 到 30 个字符', trigger: 'blur' }],
                theme: [{ required: true, message: '请选择帖子主题', trigger: 'change' }],
                content: [{ required: true, message: '请输入帖子内容', trigger: 'blur' }]
            }
        };
    },
    methods: {
        //发数据给后台
        postText() {
            var self = this;
            self.$axios({
                url: '/post_put/' + localStorage.getItem('ms_userid'), //{uid}
                method: 'post',
                baseURL: self.hostURL,
                data: {
                    theme: this.ruleForm.theme,
                    title: this.ruleForm.title,
                    content: this.ruleForm.content
                }
            }).catch(error => {
                console.log(error);
                self.$message({
                    type: 'error',
                    message: 'connect fail'
                });
            });
        },

        //处理发帖按钮
        handlePost(formName) {
            const self = this;
            self.$refs[formName].validate(valid => {
                if (valid) {
                    this.postText();
                    this.$message({
                        type: 'success',
                        message: '发帖成功，正在跳回论坛'
                    });
                    this.$router.push('/user/BBS');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },

        //计算标题还可输入多少个字符
        computeRestSize() {
            if (this.ruleForm.title.length <= 30) this.restSize = 30 - this.ruleForm.title.length;else this.restSize = 0;
        },

        mounted() {
            var user_name = localStorage.getItem("ms_username");
            if (user_name == "") {
                this.$router.replace('/login');
            }
        }
    }
});

/***/ }),

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)(undefined);
// imports


// module
exports.push([module.i, ".crumbs[data-v-b6248b6c]{text-decoration:none}.title-size[data-v-b6248b6c]{font-size:14px;margin:7px 0 0 15px;color:#8391a5}.size-num[data-v-b6248b6c]{color:#434c52;margin:0 2px}", ""]);

// exports


/***/ }),

/***/ 744:
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
      "to": "/user/BBS"
    }
  }, [_c('i', {
    staticClass: "el-icon-date"
  }), _vm._v(" VR论坛")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("发表帖子")])], 1)], 1), _vm._v(" "), _c('el-form', {
    ref: "ruleForm",
    attrs: {
      "model": _vm.ruleForm,
      "rules": _vm.rules
    }
  }, [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 3
    }
  }, [_c('el-form-item', {
    attrs: {
      "prop": "theme"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择主题分类"
    },
    model: {
      value: (_vm.ruleForm.theme),
      callback: function($$v) {
        _vm.ruleForm.theme = $$v
      },
      expression: "ruleForm.theme"
    }
  }, _vm._l((_vm.options), function(item) {
    return _c('el-option', {
      key: item.name,
      attrs: {
        "label": item.label,
        "value": item.name
      }
    })
  }))], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 11,
      "offset": 1
    }
  }, [_c('el-form-item', {
    attrs: {
      "prop": "title"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入帖子标题",
      "maxlength": 30
    },
    on: {
      "change": _vm.computeRestSize
    },
    model: {
      value: (_vm.ruleForm.title),
      callback: function($$v) {
        _vm.ruleForm.title = $$v
      },
      expression: "ruleForm.title"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 3
    }
  }, [_c('div', {
    staticClass: "title-size"
  }, [_vm._v("还可输入"), _c('b', {
    staticClass: "size-num"
  }, [_vm._v(_vm._s(_vm.restSize))]), _vm._v("个字符")])])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "content"
    }
  }, [_c('el-col', {
    attrs: {
      "span": 18
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea",
      "rows": 20,
      "placeholder": "请输入帖子内容",
      "resize": "none"
    },
    model: {
      value: (_vm.ruleForm.content),
      callback: function($$v) {
        _vm.ruleForm.content = $$v
      },
      expression: "ruleForm.content"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.handlePost('ruleForm')
      }
    }
  }, [_vm._v("发表帖子")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 800:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(670);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(133)("4870e42a", content, true);

/***/ })

});