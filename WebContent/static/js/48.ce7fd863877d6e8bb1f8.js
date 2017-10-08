webpackJsonp([48],{

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(802)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(576),
  /* template */
  __webpack_require__(746),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 576:
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
    data: function () {
        return {
            editorOption: {
                // something config
            },
            hostURL: '/VR',
            select_cast: '',
            news: {
                id: 3,
                tag: null,
                title: "痛失手机江山的联想，想要在VR热潮中分一杯羹",
                path: "D:\\VR新闻爬虫\\test2",
                lastEditTime: "2017-06-11",
                source: "来源：POPPUR",
                upvote: null,
                downvote: null,
                editorId: null,
                author: "百度VR",
                newsAbstract: "在很多人眼里，联想手机似乎是一个比较“玄学”的存在。在PC领域拼搏多年，联想终于打进智能手机市场。只",
                content: "在很多人眼里，联想手机似乎是一个比较“玄学”的存在。在PC领域拼搏多年，联想终于打进智能手机市场。只可惜初出茅庐的联想并没有什么经验，无奈在苹果和小米的拉锯战中成为了炮灰。虽然联想在2014年收购了手机界骨灰级元老摩托罗拉，但这条路始终还是没有想象中的那么好走。先是苹果傲视群雄，后来OPPO、vivo崛起，势单力薄的联想手机想要站稳脚跟还是有点难的。根据此前的消息，联想手机业务分支品牌ZUK已经暂停运营了。痛失手机江山之后，联想将落脚点放在了潜力巨大的虚拟现实领域。去年10月，联想与微软进行了合作，未来两者将会在混合现实领域(包括增强现实和虚拟现实)共同谋求发展，开辟新天地。随后联想也很快推出了一款主打入门的混合现实头显，斩获了不少用户的好评。而在最近的CES亚洲展上，联想还推出了首款背包VR PC——Avalon  VR。这款PC外观设计精致，虽然采用了金属机身的设计，但整机的重量也仅有2.5kg(包括电池)。配置方面，Avalon  VR最高支持英特尔酷睿i7处理器，32GB DDR4内存以及512GB PCI-E固态硬盘，同时内置AMD Radeon  RX480/580独立显卡，足以轻松应对市面上所有VR游戏。此外，该电脑还采用了双电池设计，并且支持热插拔，官方称其普通模式下的续航时间可达10小时，即使是在高性能下进行VR体验也能坚持1.5小时。而为了帮助主机散热，该机还配备了水冷散热系统，出风口也设置在了背对背部的位置，避免热风吹向人体。根据联想的介绍，之后张艺谋VR体验店会全线采用Avalon  VR背包电脑，可见联想在VR界的地位还是值得被肯定的。而随着与微软的合作更加深入之后，未来联想还会在增强现实乃至混合现实界混出一片天地。不知道未来的PC市场究竟会变成怎样呢?真是越来越期待了呀。Via：POPPUR",
                picLocation: "http://www.vrrb.cn/d/file/kuaixun/2017-06-11/74ba6748a8a88ed7b083e961a7ff9da4.jpg",
                isPush: null,
                type: 1
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
    components: {
        quillEditor: __WEBPACK_IMPORTED_MODULE_0_vue_quill_editor__["quillEditor"]
    },
    methods: {
        onEditorChange({ editor, html, text }) {
            this.content = html;
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
        getNewsData(id) {
            var self = this;
            self.news = {};
            self.$axios({
                url: '/news/' + id,
                method: 'get',
                baseURL: self.hostURL
            }).then(response => {
                self.news = response.data;
                self.news.type = self.news.type.toString();
            }).catch(error => {
                console.log(error);
            });
        },
        onSubmit(formName) {
            var self = this;
            self.$refs[formName].validate(valid => {
                if (valid) {
                    self.$axios({
                        url: '/NewsSubmit' + '?id=' + self.news.id + '&author=' + self.news.author + '&lastEditTime=' + self.news.lastEditTime + '&newsAbstract=' + self.news.newsAbstract + '&picLocation=' + self.news.picLocation + '&source=' + self.news.source + '&title=' + self.news.title + '&type=' + self.news.type + "&content=" + self.news.content + "&path=" + self.news.path,
                        method: 'post',
                        baseURL: self.hostURL
                    }).catch(error => {
                        console.log(error);
                    });
                    self.$message.success('修改成功！');
                    self.$router.push("/admin/news-editor");
                } else {
                    self.$message.error('请输入全部信息！');
                }
            });
        },
        onCancel() {
            this.$router.push("/admin/news-editor");
        }
    },
    mounted() {
        var self = this;
        var user_name = localStorage.getItem("ms_username");
        if (user_name == "") {
            this.$router.replace('/login');
        }
        var arr = location.href.split('?');
        var news_id = arr[1];
        console.log(news_id);
        self.getNewsData(news_id);
    }
});

/***/ }),

/***/ 672:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)(undefined);
// imports


// module
exports.push([module.i, ".content{float:left;width:70%}", ""]);

// exports


/***/ }),

/***/ 746:
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
  }), _vm._v(" 新闻编辑模块")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("新闻内容编辑")])], 1)], 1), _vm._v(" "), _c('div', {
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
      "width": "800px"
    },
    attrs: {
      "config": _vm.editorOption
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
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.onSubmit('news')
      }
    }
  }, [_vm._v("提交")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.onCancel
    }
  }, [_vm._v("取消")])], 1)], 1)], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 802:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(672);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(133)("7d09fa0b", content, true);

/***/ })

});