webpackJsonp([24],{

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(781)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(606),
  /* template */
  __webpack_require__(723),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 606:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function () {
        return {
            hostUrl: '/VR',
            activePane: 'modify',
            data: {
                code: 200,
                statistic: []
            },
            dynamicValidateForm: {
                domains: [{
                    value: '你是谁？',
                    type: 'single'
                }, {
                    value: '你对某个产品有什么建议？',
                    type: 'essay'
                }]
            },
            ques_data: {
                questions: [{
                    id: 1,
                    question: "你是谁？",
                    questiontype: "single"
                }, {
                    id: 3,
                    question: "你对某个产品有什么建议？",
                    questiontype: "essay"
                }]
            },
            pro_type: {
                opts: [{
                    value: 'AllInOnePc',
                    label: '一体机'
                }, {
                    value: 'PcheadSet',
                    label: 'PC头显'
                }, {
                    value: 'MobileBox',
                    label: '手机盒子'
                }],
                value: ''
            },
            pro_sales: {
                opts: [{
                    value: '',
                    label: ''
                }],
                value: ''
            },
            pro_sales_disable: true
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
        tabClick(val) {
            var self = this;
            switch (val.index) {
                case "0":
                    self.getQuestions();
                    break;
                case "1":
                    break;
                default:
                    break;
            }
        },
        getQuestions() {
            var self = this;
            self.dynamicValidateForm.domains = [];
            self.$axios({
                url: '/Question',
                method: 'get',
                baseURL: self.hostUrl
            }).then(response => {
                for (var i = 0; i < response.data.length; i++) {
                    self.dynamicValidateForm.domains.push({
                        value: response.data[i].question, type: response.data[i].questiontype });
                }
                //self.dynamicValidateForm.domains= response.data;
                console.log(self.dynamicValidateForm.domains);
            }).catch(error => {
                console.log(error);
            });
        },
        submitForm(formName) {
            // console.log(formName);
            this.$refs[formName].validate(valid => {
                if (valid) {
                    var postData = [];
                    for (var i = 0; i < this.dynamicValidateForm.domains.length; i++) {
                        postData.push({ question: this.dynamicValidateForm.domains[i].value,
                            questiontype: this.dynamicValidateForm.domains[i].type });
                    }
                    console.log(postData);
                    this.$axios({
                        url: '/admin/Question/modify',
                        method: 'post',
                        baseURL: this.hostUrl,
                        data: postData
                    }).then(response => {
                        this.data.code = response.data.code;
                        if (this.data.code == 200) {
                            this.$message("问卷提交成功！");
                        } else {
                            this.codeParsing(this.data.code);
                        }
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        removeDomain(item) {
            var index = this.dynamicValidateForm.domains.indexOf(item);
            if (index !== -1) {
                this.dynamicValidateForm.domains.splice(index, 1);
            }
        },
        addDomain() {
            this.dynamicValidateForm.domains.push({
                value: '',
                type: 'single',
                key: Date.now()
            });
        },
        getStatistic() {
            var self = this;
            self.data = {
                statistic: []
                // {
                //     question:"你是谁？",
                //     onePercentage:"66.67",
                //     twoPercentage:"33.33"
                // },{
                //     question:"我是谁？",
                //     onePercentage:"50.00",
                //     twoPercentage:"50.00"
                // }]
            };
            self.$axios({
                url: '/Answer/statistic?productname=' + self.pro_sales.value + '&producttype=' + self.pro_type.value,
                method: 'get',
                baseURL: self.hostUrl
            }).then(response => {
                console.log(response.data);
                self.data.statistic = response.data;
            }).catch(error => {
                console.log(error);
            });
        },
        sendProType() {
            var self = this;
            console.log("type");
            self.$axios({
                url: '/Question/type?type=' + self.pro_type.value,
                method: 'get',
                baseURL: self.hostUrl
            }).then(response => {
                self.pro_sales.opts = [];
                for (var i = 0; i < response.data.length; i++) {
                    self.pro_sales.opts.push({ value: response.data[i], label: response.data[i] });
                }
                self.pro_sales.value = response.data[0];
                self.pro_sales_disable = false;
            });
        }

    },
    mounted() {
        var self = this;
        self.getQuestions();
    },
    created() {
        var self = this;
    }
});

/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)(undefined);
// imports


// module
exports.push([module.i, ".content{float:left;width:70%}.switch{margin-left:10px;margin-right:10px}.hint{font-size:13px;color:#8492a6;margin-bottom:20px}#questions{margin-left:30px}.questionbox{padding:28px;width:800px;margin-top:20px}.single_question{margin:0 0 10px;font-size:17px}.answer{width:100%;padding-left:15px}.radio{width:100%;display:flex}.text{width:20px}.percent{flex:1}.selector{width:700px;margin-top:20px;display:flex}.protype_selector{margin-left:50px;float:left}.prosales_selector{margin-left:40px;flex:1}", ""]);

// exports


/***/ }),

/***/ 723:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-row', [_c('div', {
    staticClass: "list-wrap",
    attrs: {
      "p": ""
    }
  }, [_c('el-tabs', {
    on: {
      "tab-click": _vm.tabClick
    },
    model: {
      value: (_vm.activePane),
      callback: function($$v) {
        _vm.activePane = $$v
      },
      expression: "activePane"
    }
  }, [_c('el-tab-pane', {
    attrs: {
      "label": "修改问卷",
      "name": "modify"
    }
  }, [_c('p', {
    staticClass: "hint"
  }, [_vm._v("*所有修改在点击提交问卷按钮后才生效")]), _vm._v(" "), _c('el-form', {
    ref: "dynamicValidateForm",
    staticClass: "demo-dynamic",
    attrs: {
      "model": _vm.dynamicValidateForm,
      "label-width": "100px"
    }
  }, [_vm._l((_vm.dynamicValidateForm.domains), function(domain, index) {
    return _c('el-form-item', {
      key: domain.key,
      attrs: {
        "label": '问题' + (index + 1),
        "prop": 'domains.' + index + '.value',
        "rules": {
          required: true,
          message: '问题不能为空',
          trigger: 'blur'
        }
      }
    }, [_c('el-input', {
      staticStyle: {
        "width": "300px"
      },
      model: {
        value: (domain.value),
        callback: function($$v) {
          domain.value = $$v
        },
        expression: "domain.value"
      }
    }), _vm._v(" "), _c('el-switch', {
      staticClass: "switch",
      attrs: {
        "width": "75",
        "on-value": "single",
        "off-value": "essay",
        "on-text": "单选题",
        "off-text": "问答题",
        "on-color": "#13ce66",
        "off-color": "#ff4949"
      },
      model: {
        value: (domain.type),
        callback: function($$v) {
          domain.type = $$v
        },
        expression: "domain.type"
      }
    }), _vm._v(" "), _c('el-button', {
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.removeDomain(domain)
        }
      }
    }, [_vm._v("删除")])], 1)
  }), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.submitForm('dynamicValidateForm')
      }
    }
  }, [_vm._v("提交")]), _vm._v(" "), _c('el-button', {
    on: {
      "click": _vm.addDomain
    }
  }, [_vm._v("新增问题")])], 1)], 2)], 1), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "问卷结果统计",
      "name": "statistic"
    }
  }, [_c('div', {
    staticClass: "selector"
  }, [_c('div', {
    staticClass: "protype_selector"
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择产品类型"
    },
    on: {
      "change": function($event) {
        _vm.sendProType()
      }
    },
    model: {
      value: (_vm.pro_type.value),
      callback: function($$v) {
        _vm.pro_type.value = $$v
      },
      expression: "pro_type.value"
    }
  }, _vm._l((_vm.pro_type.opts), function(item) {
    return _c('el-option', {
      key: item.value,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    })
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "prosales_selector"
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择产品型号",
      "disabled": _vm.pro_sales_disable
    },
    on: {
      "change": function($event) {
        _vm.getStatistic()
      }
    },
    model: {
      value: (_vm.pro_sales.value),
      callback: function($$v) {
        _vm.pro_sales.value = $$v
      },
      expression: "pro_sales.value"
    }
  }, _vm._l((_vm.pro_sales.opts), function(item) {
    return _c('el-option', {
      key: item.value,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    })
  }))], 1)]), _vm._v(" "), _c('div', {
    staticClass: "questionbox"
  }, [_c('form', {
    attrs: {
      "id": "questions"
    }
  }, _vm._l((_vm.data.statistic), function(a, index) {
    return _c('div', {
      staticStyle: {
        "margin-bottom": "20px"
      }
    }, [_c('p', {
      staticClass: "single_question"
    }, [_vm._v(_vm._s("问题" + (index + 1) + ". " + a.question))]), _vm._v(" "), _c('div', {
      staticClass: "answer"
    }, [_c('div', {
      staticClass: "radio"
    }, [_c('div', {
      staticClass: "text"
    }, [_vm._v("是")]), _vm._v(" "), _c('div', {
      staticClass: "percent"
    }, [_c('el-progress', {
      attrs: {
        "text-inside": true,
        "stroke-width": 18,
        "percentage": a.onePercentage
      }
    })], 1)]), _vm._v(" "), _c('div', {
      staticClass: "radio"
    }, [_c('div', {
      staticClass: "text"
    }, [_vm._v("否")]), _vm._v(" "), _c('div', {
      staticClass: "percent"
    }, [_c('el-progress', {
      attrs: {
        "text-inside": true,
        "stroke-width": 18,
        "percentage": a.twoPercentage,
        "status": "exception"
      }
    })], 1)])])])
  }))])])], 1)], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 781:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(651);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(133)("4e6acc48", content, true);

/***/ })

});