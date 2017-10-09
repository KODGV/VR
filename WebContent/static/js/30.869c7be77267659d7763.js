webpackJsonp([30],{

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(806)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(597),
  /* template */
  __webpack_require__(750),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_quill_editor__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_quill_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_quill_editor__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        quillEditor: __WEBPACK_IMPORTED_MODULE_0_vue_quill_editor__["quillEditor"]
    },
    data: function () {
        return {
            hostURL: '/VR',
            load: false,
            select_cast: '',
            news: {
                id: null,
                tag: null,
                title: null,
                path: null,
                lastEditTime: null,
                source: null,
                upvote: null,
                downvote: null,
                editorId: null,
                author: null,
                newsAbstract: null,
                content: null,
                picLocation: null,
                isPush: null,
                type: null
            },
            editorOption: {
                modules: {
                    toolbar: [[{ 'header': [2, 3, false] }], ['bold', 'italic'], [{ 'list': 'ordered' }, { 'list': 'bullet' }], ['image']]
                },
                placeholder: '请编写您的新闻内容...'
            },
            rules: {
                title: [{ required: true, message: '请输入新闻标题', trigger: 'blur' }],
                type: [{ required: true, message: '请选择新闻类型', trigger: 'change' }],
                author: [{ required: true, message: '请输入作者', trigger: 'blur' }],
                source: [{ required: true, message: '请输入来源', trigger: 'blur' }],
                lastEditTime: [{ required: true, message: '请输入时间', trigger: 'blur' }],
                picLocation: [{ required: true, type: 'url', message: '请输入图片的URL', trigger: 'blur' }],
                newsAbstract: [{ required: true, message: '请输入新闻概述', trigger: 'blur' }, { min: 5, max: 100, message: '长度在5到100个字符', trigger: 'blur' }],
                content: [{ required: true, message: '请输入新闻内容', trigger: 'blur' }]
            }
        };
    },
    computed: {
        editor() {
            return this.$refs.myTextEditor.quillEditor;
        }
    },

    methods: {
        onEditorChange({ editor, html, text }) {
            this.news.content = html;
        },
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
                    msg('1输入域错误', '邮箱或密码错误');
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
        onSubmit(formName) {
            var self = this;
            self.$refs[formName].validate(valid => {
                if (valid) {
                    self.$axios({
                        url: '/NewsRelease' + '?author=' + self.news.author + '&lastEditTime=' + self.news.lastEditTime + '&newsAbstract=' + self.news.newsAbstract + '&picLocation=' + self.news.picLocation + '&source=' + self.news.source + '&title=' + self.news.title + '&type=' + self.news.type + "&content=" + self.news.content + "&path=" + self.news.path,
                        method: 'post',
                        baseURL: self.hostURL
                    }).catch(error => {
                        console.log(error);
                    });
                    self.$message.success('发布成功！');
                    self.$refs[formName].resetFields();
                    self.$router.push('/admin/news-editor');
                } else {
                    self.$message.error('请输入全部信息！');
                }
            });
            // self.load = true;
            // self.$message.success(self.news.content);
            // self.load = false;
        },
        resetForm(formName) {
            var self = this;
            self.$refs[formName].resetFields();
        }
    }
});

/***/ }),

/***/ 676:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)(undefined);
// imports


// module
exports.push([module.i, ".content{float:left;width:70%}", ""]);

// exports


/***/ }),

/***/ 750:
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
  }), _vm._v(" 新闻编辑模块")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("新闻发布")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-box"
  }, [_c('el-form', {
    ref: "news",
    attrs: {
      "rules": _vm.rules,
      "model": _vm.news,
      "label-width": "80px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "新闻标题",
      "prop": "title"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入新闻标题"
    },
    model: {
      value: (_vm.news.title),
      callback: function($$v) {
        _vm.news.title = $$v
      },
      expression: "news.title"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "新闻类型",
      "prop": "type"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择新闻类型"
    },
    model: {
      value: (_vm.news.type),
      callback: function($$v) {
        _vm.news.type = $$v
      },
      expression: "news.type"
    }
  }, [_c('el-option', {
    key: "1",
    attrs: {
      "label": "最新",
      "value": "1"
    }
  }), _vm._v(" "), _c('el-option', {
    key: "2",
    attrs: {
      "label": "融资",
      "value": "2"
    }
  }), _vm._v(" "), _c('el-option', {
    key: "3",
    attrs: {
      "label": "产业",
      "value": "3"
    }
  }), _vm._v(" "), _c('el-option', {
    key: "4",
    attrs: {
      "label": "厂商",
      "value": "4"
    }
  }), _vm._v(" "), _c('el-option', {
    key: "5",
    attrs: {
      "label": "专访",
      "value": "5"
    }
  }), _vm._v(" "), _c('el-option', {
    key: "6",
    attrs: {
      "label": "技术",
      "value": "6"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "作者",
      "prop": "author"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "placeholder": "请输入作者"
    },
    model: {
      value: (_vm.news.author),
      callback: function($$v) {
        _vm.news.author = $$v
      },
      expression: "news.author"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "来源",
      "prop": "source"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "placeholder": "请输入来源"
    },
    model: {
      value: (_vm.news.source),
      callback: function($$v) {
        _vm.news.source = $$v
      },
      expression: "news.source"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "发布时间",
      "prop": "lastEditTime"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "placeholder": "yyyy-mm-dd"
    },
    model: {
      value: (_vm.news.lastEditTime),
      callback: function($$v) {
        _vm.news.lastEditTime = $$v
      },
      expression: "news.lastEditTime"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "标题图",
      "prop": "picLocation"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "600px"
    },
    attrs: {
      "placeholder": "请输入图片的URL"
    },
    model: {
      value: (_vm.news.picLocation),
      callback: function($$v) {
        _vm.news.picLocation = $$v
      },
      expression: "news.picLocation"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "内容概述",
      "prop": "newsAbstract"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "600px"
    },
    attrs: {
      "type": "textarea",
      "placeholder": "请输入新闻概述"
    },
    model: {
      value: (_vm.news.newsAbstract),
      callback: function($$v) {
        _vm.news.newsAbstract = $$v
      },
      expression: "news.newsAbstract"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "新闻内容",
      "prop": "content"
    }
  }, [_c('quill-editor', {
    ref: "myTextEditor",
    staticStyle: {
      "line-height": "1",
      "width": "800px"
    },
    attrs: {
      "options": _vm.editorOption
    },
    model: {
      value: (_vm.news.content),
      callback: function($$v) {
        _vm.news.content = $$v
      },
      expression: "news.content"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary",
      "loading": _vm.load
    },
    on: {
      "click": function($event) {
        _vm.onSubmit('news')
      }
    }
  }, [_vm._v("发布")]), _vm._v(" "), _c('el-button', {
    on: {
      "click": function($event) {
        _vm.resetForm('news')
      }
    }
  }, [_vm._v("重置")])], 1)], 1)], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 806:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(676);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(133)("acb128de", content, true);

/***/ })

});