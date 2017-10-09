webpackJsonp([23],{

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(762)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(607),
  /* template */
  __webpack_require__(704),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_ui__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_element_ui__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        var checkPwd = (rule, value, callback) => {
            // console.log(value, this.register.password);
            if (value === '') {
                // console.log(value, this.register.password);
                callback(new Error('请再次输入密码!'));
            } else if (value !== this.register.password) {
                // console.log(value, this.register.password);
                callback(new Error('两次密码不相同!'));
            } else {
                // console.log(value, this.register.password);
                callback();
            }
        };

        var checkWord = (rule, value, callback) => {
            var reg = /^[a-zA-Z0-9]+$/;
            if (value.match(reg)) {
                callback();
            } else {
                callback(new Error('密码仅可由数字与字母组成'));
            }
        };

        var checkName = (rule, value, callback) => {
            // console.log(value.gblen());
            var reg = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？\\\\]");
            if (value.indexOf(" ") >= 0) {
                callback(new Error('请不要包含空格'));
            } else if (value.match(reg)) {
                callback(new Error('请不要输入特殊字符'));
            } else if (value.gblen() < 4 || value.gblen() > 16) {
                callback(new Error('请输入4-16位字符'));
            } else {
                callback();
            }
        };

        return {
            hostUrl: '/VR',
            imgUrl: '/VR/checkcode',
            data: {
                code: 200
            },
            addNewVisible: false,
            register: {
                username: '',
                nickname: '',
                password: '',
                repassword: '',
                verCode: ''
            },
            registerRules: {
                username: [{ required: true, message: '请输入Email', trigger: 'blur' }, { type: "email", message: '请输入正确的Email格式', trigger: 'change' }, { type: "email", message: '请输入正确的Email格式', trigger: 'blur' }],
                nickname: [{ required: true, message: '请输入昵称', trigger: 'blur' }, { validator: checkName, trigger: 'change' }, { validator: checkName, trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }, { validator: checkWord, trigger: 'change' }, { validator: checkWord, trigger: 'blur' }, { min: 6, max: 16, message: '长度在6-16之间', trigger: 'change' }, { min: 6, max: 16, message: '长度在6-16之间', trigger: 'blur' }],
                repassword: [
                // { required: true, message: '请确认密码', trigger: 'blur' },
                { validator: checkPwd, trigger: 'change' }, { validator: checkPwd, trigger: 'blur' }],
                verCode: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
            },

            itmpPageNum: 0,
            itmpPageTotal: 0,
            iupsaleText: '',
            iupPageNum: 1,
            iupPageTotal: 20,
            iupPageSize: 20,
            iupPages: 1,
            allData1: [{
                "id": 1, "activated": 1, "age": null, "banned": 0, "email": "1272623349@qq.com", "nickname": "dwerw",
                "password": "afb474cfdcabd182880cbe153d260ea8", "sex": null, "type": 0, "username": null, "votedflag": null, "checkcode": null
            }, {
                "id": 2, "activated": 1, "age": null, "banned": 0, "email": "1272623349@qq.com", "nickname": "ddsef",
                "password": "afb474cfdcabd182880cbe153d260ea8", "sex": null, "type": 0, "username": null, "votedflag": null, "checkcode": null
            }, {
                "id": 3, "activated": 0, "age": null, "banned": 0, "email": "1272623349@qq.com", "nickname": "eee",
                "password": "afb474cfdcabd182880cbe153d260ea8", "sex": null, "type": 0, "username": null, "votedflag": null, "checkcode": null
            }, {
                "id": 4, "activated": 1, "age": null, "banned": 0, "email": "1272623349@qq.com", "nickname": "kkk",
                "password": "afb474cfdcabd182880cbe153d260ea8", "sex": null, "type": 0, "username": null, "votedflag": null, "checkcode": null
            }, {
                "id": 5, "activated": 0, "age": null, "banned": 0, "email": "1272623349@qq.com", "nickname": "zzzz",
                "password": "afb474cfdcabd182880cbe153d260ea8", "sex": null, "type": 0, "username": null, "votedflag": null, "checkcode": null
            }, {
                "id": 6, "activated": 0, "age": null, "banned": 0, "email": "1272623349@qq.com", "nickname": "dwerw",
                "password": "afb474cfdcabd182880cbe153d260ea8", "sex": null, "type": 0, "username": null, "votedflag": null, "checkcode": null
            }, {
                "id": 7, "activated": 0, "age": null, "banned": 0, "email": "1272623349@qq.com", "nickname": "dwerw",
                "password": "afb474cfdcabd182880cbe153d260ea8", "sex": null, "type": 0, "username": null, "votedflag": null, "checkcode": null
            }, {
                "id": 8, "activated": 0, "age": null, "banned": 0, "email": "1272623349@qq.com", "nickname": "dwerw",
                "password": "afb474cfdcabd182880cbe153d260ea8", "sex": null, "type": 0, "username": null, "votedflag": null, "checkcode": null
            }, {
                "id": 9, "activated": 1, "age": null, "banned": 0, "email": "1272623349@qq.com", "nickname": "dwerw",
                "password": "afb474cfdcabd182880cbe153d260ea8", "sex": null, "type": 0, "username": null, "votedflag": null, "checkcode": null
            }, {
                "id": 10, "activated": 1, "age": null, "banned": 0, "email": "1272623349@qq.com", "nickname": "dwerw",
                "password": "afb474cfdcabd182880cbe153d260ea8", "sex": null, "type": 0, "username": null, "votedflag": null, "checkcode": null
            }, {
                "id": 11, "activated": 1, "age": null, "banned": 0, "email": "1272623349@qq.com", "nickname": "dwerw",
                "password": "afb474cfdcabd182880cbe153d260ea8", "sex": null, "type": 0, "username": null, "votedflag": null, "checkcode": null
            }, {
                "id": 12, "activated": 1, "age": null, "banned": 0, "email": "1272623349@qq.com", "nickname": "dwerw",
                "password": "afb474cfdcabd182880cbe153d260ea8", "sex": null, "type": 0, "username": null, "votedflag": null, "checkcode": null
            }, {
                "id": 13, "activated": 1, "age": null, "banned": 0, "email": "1272623349@qq.com", "nickname": "dwerw",
                "password": "afb474cfdcabd182880cbe153d260ea8", "sex": null, "type": 0, "username": null, "votedflag": null, "checkcode": null
            }, {
                "id": 14, "activated": 1, "age": null, "banned": 0, "email": "1272623349@qq.com", "nickname": "dwerw",
                "password": "afb474cfdcabd182880cbe153d260ea8", "sex": null, "type": 0, "username": null, "votedflag": null, "checkcode": null
            }, {
                "id": 15, "activated": 1, "age": null, "banned": 0, "email": "1272623349@qq.com", "nickname": "dwerw",
                "password": "afb474cfdcabd182880cbe153d260ea8", "sex": null, "type": 0, "username": null, "votedflag": null, "checkcode": null
            }, {
                "id": 16, "activated": 1, "age": null, "banned": 0, "email": "1272623349@qq.com", "nickname": "dwerw",
                "password": "afb474cfdcabd182880cbe153d260ea8", "sex": null, "type": 0, "username": null, "votedflag": null, "checkcode": null
            }, {
                "id": 17, "activated": 1, "age": null, "banned": 0, "email": "1272623349@qq.com", "nickname": "dwerw",
                "password": "afb474cfdcabd182880cbe153d260ea8", "sex": null, "type": 0, "username": null, "votedflag": null, "checkcode": null
            }, {
                "id": 18, "activated": 1, "age": null, "banned": 0, "email": "1272623349@qq.com", "nickname": "dwerw",
                "password": "afb474cfdcabd182880cbe153d260ea8", "sex": null, "type": 0, "username": null, "votedflag": null, "checkcode": null
            }, {
                "id": 19, "activated": 1, "age": null, "banned": 0, "email": "1272623349@qq.com", "nickname": "dwerw",
                "password": "afb474cfdcabd182880cbe153d260ea8", "sex": null, "type": 0, "username": null, "votedflag": null, "checkcode": null
            }, {
                "id": 20, "activated": 1, "age": null, "banned": 0, "email": "1272623349@qq.com", "nickname": "dwerw",
                "password": "afb474cfdcabd182880cbe153d260ea8", "sex": null, "type": 0, "username": null, "votedflag": null, "checkcode": null
            }, {
                "id": 21, "activated": 1, "age": null, "banned": 0, "email": "1272623349@qq.com", "nickname": "dwerw",
                "password": "afb474cfdcabd182880cbe153d260ea8", "sex": null, "type": 0, "username": null, "votedflag": null, "checkcode": null
            }, {
                "id": 22, "activated": 1, "age": null, "banned": 0, "email": "1272623349@qq.com", "nickname": "dwerw",
                "password": "afb474cfdcabd182880cbe153d260ea8", "sex": null, "type": 0, "username": null, "votedflag": null, "checkcode": null
            }, {
                "id": 23, "activated": 1, "age": null, "banned": 0, "email": "1272623349@qq.com", "nickname": "dwerw",
                "password": "afb474cfdcabd182880cbe153d260ea8", "sex": null, "type": 0, "username": null, "votedflag": null, "checkcode": null
            }, {
                "id": 24, "activated": 1, "age": null, "banned": 0, "email": "1272623349@qq.com", "nickname": "dwerw",
                "password": "afb474cfdcabd182880cbe153d260ea8", "sex": null, "type": 0, "username": null, "votedflag": null, "checkcode": null
            }, {
                "id": 25, "activated": 1, "age": null, "banned": 0, "email": "1272623349@qq.com", "nickname": "dwerw",
                "password": "afb474cfdcabd182880cbe153d260ea8", "sex": null, "type": 0, "username": null, "votedflag": null, "checkcode": null
            }],
            // multiSelection1:[],
            tableData1: []
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
        handleDisabled(index) {
            var self = this;
            console.log("activated: " + self.tableData1[index].activated);
            if (self.tableData1[index].activated == 1) {
                return true;
            } else return false;
        },

        // handleSelectionChange1(val){
        //     var self=this;
        //     self.multiSelection1=val;
        // },
        handleToOffsale1(index) {
            var self = this;
            // console.log(index);
            var item = [self.tableData1[index]];
            var tmp = self.allData1.find(t => item.some(s => s.id === t.id));
            var val = tmp.banned;
            // console.log(val);
            // console.log(self.tableData1[index].banned);
            // console.log(self.tableData1);
            self.tableData1[index].banned = val == 0 ? 1 : 0;
            self.allData1.find(t => item.some(s => s.id === t.id)).banned = val == 0 ? 1 : 0;

            //返回当前user给后端
            if (val == 0) {
                self.$axios({
                    url: 'admin/activatedUser/' + tmp.id,
                    //url: 'admin/getAllInOnePCAll?condition=0',
                    method: 'post',
                    baseURL: self.hostUrl
                }).then(response => {
                    console.log(tmp.id);
                    self.$message("用户" + tmp.nickname + "禁用成功！");
                }).catch(error => {
                    console.log(error);
                });
            } else if (val == 1) {
                self.$axios({
                    url: 'admin/banUser/' + tmp.id,
                    //url: 'admin/getAllInOnePCAll?condition=0',
                    method: 'post',
                    baseURL: self.hostUrl
                }).then(response => {
                    console.log(tmp.id);
                    self.$message("用户" + tmp.nickname + "激活成功！");
                }).catch(error => {
                    console.log(error);
                });
            }
        },
        handleDelete1(index) {
            var self = this;
            // self.tableData1.splice(index,1);
            var item = [self.tableData1[index]];
            var tmp = self.allData1.find(t => item.some(s => s.id === t.id));
            self.allData1 = self.allData1.filter(t => !item.some(s => s.id === t.id));
            // self.getPartProducts1(self.itmpPageNum);
            self.handleIUpsaleSearch();
            //返回当前user给后端
            self.$axios({
                url: 'admin/deleteUser/' + tmp.id,
                //url: 'admin/getAllInOnePCAll?condition=0',
                method: 'post',
                baseURL: self.hostUrl
            }).then(response => {
                self.data = response.data;
                if (self.data.code == 200) {
                    self.$message("用户" + tmp.nickname + "删除成功！");
                } else {
                    self.codeParsing(self.data.code);
                }
            }).catch(error => {
                console.log(error);
            });
        },
        //获取当前页的产品信息
        getPartProducts1(page) {
            console.log("page: " + page);
            var self = this;
            self.itmpPageNum = page;
            self.tableData1 = [];
            self.iupPageTotal = self.allData1.length;
            if (self.iupPageTotal != 0) {
                self.iupPages = Math.ceil(self.iupPageTotal / self.iupPageSize);
                var size = page == self.iupPages ? self.iupPageTotal % self.iupPageSize == 0 ? self.iupPageSize : self.iupPageTotal % self.iupPageSize : self.iupPageSize;
                console.log("size: " + size);
                for (var i = 0; i < size; i++) {
                    self.tableData1.push(self.allData1[(page - 1) * self.iupPageSize + i]);
                }
                console.log("succ");
            }
        },
        //更换页码
        handleIUpsaleChange() {
            var self = this;
            console.log("current-Page:");
            console.log(self.iupPageNum);
            self.getPartProducts1(self.iupPageNum);
        },
        //获取所有一体机产品信息
        getProducts1() {
            var self = this;
            //测试用数据
            // self.getPartProducts1(1);
            self.$axios({
                url: 'admin/getAllUsers',
                //url: 'admin/getAllInOnePCAll?condition=0',
                method: 'get',
                baseURL: self.hostUrl
            }).then(response => {
                self.data = response.data;
                if (self.data.code == 200) {
                    self.allData1 = response.data.object.users;
                    self.getPartProducts1(1);
                } else {
                    self.codeParsing(self.data.code);
                }
            }).catch(error => {
                console.log(error);
            });
        },
        //进行产品搜索
        handleIUpsaleSearch() {
            var self = this;
            console.log(self.iupsaleText);
            var text = self.iupsaleText.trim();
            if (text != "") {
                self.tableData1 = [];
                for (var i = 0; i < self.allData1.length; i++) {
                    if (self.allData1[i].nickname.toLowerCase().indexOf(text) != -1) {
                        self.tableData1.push(self.allData1[i]);
                    }
                }
                self.iupPageTotal = self.tableData1.length;
                self.iupPages = Math.ceil(self.iupPageTotal / self.iupPageSize);
            } else {
                self.iupPageTotal = self.itmpPageTotal;
                self.iupPages = Math.ceil(self.iupPageTotal / self.iupPageSize);
                self.getPartProducts1(self.itmpPageNum);
            }
        },
        //激活邮箱
        handleEmailState(index) {
            var self = this;
            var item = [self.tableData1[index]];
            var tmp = self.allData1.find(t => item.some(s => s.id === t.id));
            var val = tmp.activated;
            // console.log(val);
            // console.log(self.tableData1[index].banned);
            // console.log(self.tableData1);
            self.tableData1[index].activated = val == 0 ? 1 : 0;
            self.tableData1[index].disabled = val == 0 ? true : false;
            self.allData1.find(t => item.some(s => s.id === t.id)).activated = val == 0 ? 1 : 0;
            self.allData1.find(t => item.some(s => s.id === t.id)).disabled = val == 0 ? true : false;
            //返回当前tableData1给后端
            //返回当前user给后端
            self.$axios({
                url: 'admin/activeUser/' + tmp.id,
                //url: 'admin/getAllInOnePCAll?condition=0',
                method: 'post',
                baseURL: self.hostUrl
            }).then(response => {
                self.data = response.data;
                if (self.data.code == 200) {
                    self.$message("邮箱" + tmp.email + "激活成功！");
                } else {
                    self.codeParsing(self.data.code);
                }
            }).catch(error => {
                console.log(error);
            });
        },

        registerForm(formName) {
            const self = this;
            self.addNewVisible = false;

            self.$refs[formName].validate(valid => {
                if (valid) {
                    // 弹出注册详情
                    const h = this.$createElement;

                    this.$notify({
                        title: '注册信息',
                        message: h('pre', { style: 'color: teal' }, '\n邮箱: ' + this.register.username + '\n昵称: ' + this.register.nickname + '\n密码: ' + this.register.repassword)
                    });

                    // 网络请求
                    this.$axios({
                        url: '/admin/addUser',
                        method: 'post',
                        baseURL: this.hostUrl,

                        data: {
                            email: this.register.username,
                            password: this.register.password,
                            checkcode: this.register.verCode,
                            nickname: this.register.nickname
                        }
                    }).then(response => {
                        if (response.data.code === 200) {
                            this.$notify({
                                title: '成功',
                                message: '注册成功!',
                                type: 'success'
                            });
                            // self.goToLogin();
                            // self.login.username = self.register.username;
                            // self.login.password = self.register.password;
                            self.getVerCode(); // 手动更一次验证码
                            self.getProducts1();
                        } else {
                            console.log(response.data.code);
                            self.codeParsing(response.data.code);
                        }
                    }).catch(error => {
                        this.$notify({
                            title: '失败',
                            message: '注册失败: ' + '请重试!',
                            type: 'error'
                        });
                        console.log("【Error】:", error);
                    });
                } else {
                    console.log('error register!!');
                    this.$message({
                        title: '格式错误',
                        message: '请检查输入域是否正确',
                        type: 'error'
                    });
                    return false;
                }
            });
        },
        changeUrl() {
            var url = this.imgUrl;

            var timeStamp = new Date().valueOf();
            url = url.substring(0, 45);
            if (url.indexOf('&') >= 0) {
                url = url + 'xtamp=' + timeStamp;
            } else {
                url = url + '?timestamp=' + timeStamp;
            }

            return url;
        },
        getVerCode() {
            var self = this;
            self.imgUrl = self.changeUrl();
        }
    },
    mounted() {
        var self = this;
        // self.getProducts1();
        // console.log("get products list")
        // self.getProducts1();
    },
    created() {
        var self = this;
        console.log("get products list");
        self.getProducts1();
    }
});

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)(undefined);
// imports


// module
exports.push([module.i, ".content{float:left;width:70%}.search-input{width:200px;margin-left:10px}.table-title{font-size:20px;color:#324157;font-weight:700;margin:10px}.operation{margin:0 0 10px 10px}", ""]);

// exports


/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-row', [_c('div', {
    staticClass: "table-title"
  }, [_vm._v("用户管理")]), _vm._v(" "), _c('div', {
    staticClass: "operation"
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.addNewVisible = true
      }
    }
  }, [_vm._v("新增用户")]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "填写新用户信息",
      "visible": _vm.addNewVisible
    },
    on: {
      "update:visible": function($event) {
        _vm.addNewVisible = $event
      }
    }
  }, [_c('el-form', {
    ref: "register",
    attrs: {
      "model": _vm.register,
      "rules": _vm.registerRules,
      "label-width": "0px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "prop": "username"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "邮箱"
    },
    model: {
      value: (_vm.register.username),
      callback: function($$v) {
        _vm.register.username = $$v
      },
      expression: "register.username"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "nickname"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "昵称"
    },
    model: {
      value: (_vm.register.nickname),
      callback: function($$v) {
        _vm.register.nickname = $$v
      },
      expression: "register.nickname"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "password"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "password",
      "placeholder": "请输入6-16位密码"
    },
    model: {
      value: (_vm.register.password),
      callback: function($$v) {
        _vm.register.password = $$v
      },
      expression: "register.password"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "repassword"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "password",
      "placeholder": "确认密码"
    },
    model: {
      value: (_vm.register.repassword),
      callback: function($$v) {
        _vm.register.repassword = $$v
      },
      expression: "register.repassword"
    }
  })], 1), _vm._v(" "), _c('el-form', {
    ref: "register",
    attrs: {
      "model": _vm.register,
      "rules": _vm.registerRules,
      "label-width": "0px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "prop": "verCode"
    }
  }, [_c('el-popover', {
    ref: "b",
    attrs: {
      "placement": "right-end",
      "trigger": "hover"
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.imgUrl,
      "alt": "验证码图片",
      "width": "200px"
    },
    on: {
      "click": _vm.getVerCode
    }
  })]), _vm._v(" "), _c('el-input', {
    directives: [{
      name: "popover",
      rawName: "v-popover:b",
      arg: "b"
    }],
    attrs: {
      "placeholder": "验证码"
    },
    model: {
      value: (_vm.register.verCode),
      callback: function($$v) {
        _vm.register.verCode = $$v
      },
      expression: "register.verCode"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.addNewVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.registerForm('register')
      }
    }
  }, [_vm._v("确 定")])], 1)], 1), _vm._v(" "), _c('el-input', {
    staticClass: "search-input",
    attrs: {
      "placeholder": "请输入用户名",
      "icon": "search",
      "on-icon-click": _vm.handleIUpsaleSearch
    },
    on: {
      "change": _vm.handleIUpsaleSearch
    },
    model: {
      value: (_vm.iupsaleText),
      callback: function($$v) {
        _vm.iupsaleText = $$v
      },
      expression: "iupsaleText"
    }
  })], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData1,
      "border": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "nickname",
      "label": "用户名",
      "width": "200"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "email",
      "label": "邮箱"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "activated",
      "label": "邮箱状态",
      "width": "150"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "disabled": _vm.handleDisabled(scope.$index),
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleEmailState(scope.$index)
            }
          }
        }, [_vm._v(_vm._s((_vm.tableData1[scope.$index].activated) == 0 ? "待激活" : "已激活"))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "width": "160",
      "label": "用户账号操作"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "plain": true,
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleToOffsale1(scope.$index)
            }
          }
        }, [_vm._v(_vm._s((_vm.tableData1[scope.$index].banned) == 1 ? "激活" : "禁用"))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "width": "120",
      "label": "操作"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "danger",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleDelete1(scope.$index)
            }
          }
        }, [_vm._v("删除")])]
      }
    }])
  })], 1)], 1), _vm._v(" "), _c('el-row', [_c('div', {
    staticClass: "pagination"
  }, [_c('el-pagination', {
    attrs: {
      "current-page": _vm.iupPageNum,
      "page-size": _vm.iupPageSize,
      "layout": "total, prev, pager, next",
      "total": _vm.iupPageTotal
    },
    on: {
      "current-change": _vm.handleIUpsaleChange,
      "update:currentPage": function($event) {
        _vm.iupPageNum = $event
      }
    }
  })], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(632);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(133)("b2691336", content, true);

/***/ })

});