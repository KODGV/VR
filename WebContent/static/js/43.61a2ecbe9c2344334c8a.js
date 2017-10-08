webpackJsonp([43],{

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(772)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(582),
  /* template */
  __webpack_require__(713),
  /* scopeId */
  "data-v-2f24cd76",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 582:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            successType: "success",
            cancelType: "primary",
            mse: {
                evaluationId: 1,
                titlePic: '',
                authorId: '',
                authorName: '',
                evaluationTitle: '',
                postTime: null,
                updateTime: '',
                type: null,
                evaluationText: {
                    id: 0,
                    evaluationBody: ''
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

            activeName2: 'first',
            textarea: "",
            display_hot: false,
            display_new: false,
            userCurrent: '',

            thumbs: -1,
            hot_data: {
                hot_comments: [{
                    id: "",
                    userId: '',
                    userName: '',
                    comment: "",
                    postTime: null,
                    view: 0,
                    ups: 0,
                    childComments: [{
                        userId: "",
                        userName: '',
                        comment: "",
                        postTime: null
                    }]
                }]
            },
            new_data: {
                new_comments: [{
                    id: "",
                    userId: '',
                    userName: '',
                    comment: "",
                    postTime: null,
                    view: -1,
                    ups: 0,
                    childComments: [{
                        userId: "",
                        userName: '',
                        comment: "",
                        postTime: null
                    }]
                }]
            },
            hot_reply: {
                replys: [{
                    appear: 0,
                    textarea: "",
                    postTime: null
                }]
            },
            new_reply: {
                replys: [{
                    appear: 0,
                    textarea: "",
                    postTime: null
                }]
            },

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
        timeFomat(date) {
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
        },
        timeFomatMse(str) {
            let self = this;
            let date = new Date(str);
            return '发布于 ' + self.timeFomat(date);
        },
        timeFomatComment(str) {
            let self = this;
            let curr = Date.parse(new Date());
            let date = new Date(str);
            let deta = curr - parseInt(str);
            if (parseInt(deta / 60000) === 0) {
                return '刚刚';
            } else if (parseInt(deta / 60000) < 11) {
                return parseInt(deta / 60000) + '分钟前';
            } else return self.timeFomat(date);
        },
        handleCurrentChange() {
            var self = this;
            console.log(self.e_id);
            self.getNewComments(self.e_id, self.pageNum_nc);
        },
        refreshComment() {
            var self = this;
            self.getHotComments(self.e_id, self.pageNum_hc);
            self.getNewComments(self.e_id, self.pageNum_nc);
        },
        //留言
        postTextArea(text) {
            var self = this;
            self.$axios({
                url: '/evaluations/' + self.mse.evaluationId + '/parentComment?content=' + self.textarea,
                method: 'post',
                baseURL: self.hostURL
            }).then(response => {
                console.log(response.data);
                self.userCurrent = response.data.object.userName;
                console.log(self.userCurrent);
                self.new_data.new_comments.reverse();
                console.log(response.data.object.id);
                self.new_data.new_comments.push({
                    id: response.data.object.id,
                    userId: response.data.object.userId,
                    userName: self.userCurrent,
                    comment: text,
                    postTime: response.data.object.postTime,
                    childComments: []
                });
                self.new_data.new_comments.reverse();
                // console.log("self id:"+self.hot_data.hot_comments[0].id);
                var len = self.new_data.new_comments.length;
                self.new_reply.replys = [];
                for (var i = 0; i < len; i++) self.new_reply.replys.push({
                    appear: 0,
                    textarea: ""
                });
                self.textarea = "";
                self.refreshComment();
            }).catch(error => {
                self.codeParsing(error.response.status);
                console.log(error);
            });
        },
        refreshNewData() {
            var self = this;
            var text = self.textarea;
            console.log(text);
            if (text != "") {
                self.$message('评论成功！');
                self.postTextArea(text);
            }
        },
        //回复-热评
        replyHotClick(item, index) {
            var self = this;
            if (!self.hot_reply.replys[index].appear) {
                self.hot_reply.replys[index].appear = 1;
            } else {
                if (self.hot_reply.replys[index].textarea == '') self.hot_reply.replys[index].appear = 0;else {
                    //                        let replyUser;
                    //发送数据给后台
                    self.$axios({
                        url: '/evaluations/comments/' + item.id + '/childComment?comment=' + self.hot_reply.replys[index].textarea,
                        method: 'post',
                        baseURL: self.hostURL
                    }).then(response => {
                        console.log(response.data);
                        let reply = response.data.object;
                        self.userCurrent = reply.userName;
                        self.$message('回复成功！');
                        if (!self.hot_data.hot_comments[index].childComments) {
                            self.hot_data.hot_comments[index].childComments = [{
                                userId: response.data.object.userId,
                                userName: self.userCurrent,
                                comment: reply.comment,
                                postTime: "刚刚"
                            }];
                            console.log(1);
                        } else {
                            self.hot_data.hot_comments[index].childComments.push({
                                userId: response.data.object.userId,
                                userName: self.userCurrent,
                                comment: reply.comment,
                                postTime: "刚刚"
                            });
                        }
                    }).catch(error => {
                        self.codeParsing(error.response.status);
                        console.log(error);
                    });

                    /*self.hot_data.hot_comments[index].messageResponses.push({
                     userName: self.userCurrent,
                     comment: self.hot_reply.replys[index].textarea,
                     postTime: "刚刚"
                     });*/
                    self.hot_reply.replys[index].textarea = '';
                    self.hot_reply.replys[index].appear = 0;
                }
            }
        },
        //回复-最新评价
        replyNewClick(item, index) {
            var self = this;
            console.log(item);
            if (!self.new_reply.replys[index].appear) {
                self.new_reply.replys[index].appear = 1;
            } else {
                if (self.new_reply.replys[index].textarea == '') self.new_reply.replys[index].appear = 0;else {
                    //                        let replyUser;
                    //发送数据给后台
                    self.$axios({
                        url: '/evaluations/comments/' + item.id + '/childComment?comment=' + self.new_reply.replys[index].textarea,
                        method: 'post',
                        baseURL: self.hostURL
                    }).then(response => {
                        console.log(response.data);
                        let reply = response.data.object;
                        self.userCurrent = reply.userName;

                        self.$message('回复成功！');
                        let i = self.new_data.new_comments.indexOf(item);
                        console.log(i);
                        /*self.new_data.new_comments[i].childComments=[{
                         userId: "",
                         userName:'',
                         comment: "",
                         postTime: null
                         }]*/
                        if (!item.childComments) {
                            console.log(item);
                            item.childComments = [{
                                userId: response.data.object.userId,
                                userName: self.userCurrent,
                                comment: reply.comment,
                                postTime: "刚刚"
                            }];
                            console.log(11111);
                            console.log(item);
                        } else {
                            self.new_data.new_comments[index].childComments.push({
                                userId: response.data.object.userId,
                                userName: self.userCurrent,
                                comment: reply.comment,
                                postTime: "刚刚"
                            });
                        }

                        console.log(self.new_data.new_comments[i].childComments);
                    }).catch(error => {
                        //                            self.codeParsing(error.response.status);
                        console.log(error);
                    });

                    self.new_reply.replys[index].textarea = '';
                    self.new_reply.replys[index].appear = 0;
                }
            }
        },
        /*获得评论*/
        //1.获得热评
        getHotComments(id) {
            var self = this;
            self.hot_data = {
                hot_comments: [{
                    id: "",
                    userId: '',
                    authorName: '',
                    comment: "",
                    postTime: null,
                    view: 0,
                    ups: 0,
                    childComments: [{
                        userId: "",
                        authorName: '',
                        comment: "",
                        postTime: null
                    }]
                }]
            };
            self.hot_reply = {
                replys: [{
                    appear: 0,
                    textarea: ""
                }]
            };
            self.$axios({
                url: '/evaluations/' + id + '/comments?orderType=2',
                method: 'get',
                baseURL: self.hostURL
            }).then(response => {
                let res = response.data.object;
                self.display_hot = true;
                self.hot_data.hot_comments = res.result;
                //                    self.hot_data.hot_comments.reverse();
                console.log(res);
                var len = self.hot_data.hot_comments.length;
                self.hot_reply.replys = [];
                for (var i = 0; i < len; i++) self.hot_reply.replys.push({
                    appear: 0,
                    textarea: ""
                });
            }).catch(error => {
                self.codeParsing(error.response.status);
                console.log(error);
            });
        },
        //2.获得最新评论
        getNewComments(id, pageNum) {
            var self = this;
            self.new_data = {
                new_comments: [{
                    id: "",
                    userId: '',
                    authorName: '',
                    comment: "",
                    postTime: null,
                    childComments: [{
                        userId: "",
                        authorName: '',
                        comment: "",
                        postTime: null
                    }]
                }]
            };
            self.new_reply = {
                replys: [{
                    appear: 0,
                    textarea: ""
                }]
            };
            self.$axios({
                url: '/evaluations/' + id + '/comments?page=' + pageNum,
                method: 'get',
                baseURL: self.hostURL
            }).then(response => {
                let res = response.data.object.result;
                console.log(response.data.object.result);
                if (!self.pageTotal_nc) self.pageTotal_nc = response.data.object.totalCount;
                self.display_new = true;
                self.new_data.new_comments = res;
                //                    self.new_data.new_comments.reverse();
                //                    console.log("self id:" + self.new_data.new_comments[0].id);
                var len = self.new_data.new_comments.length;
                self.new_reply.replys = [];
                for (var i = 0; i < len; i++) self.new_reply.replys.push({
                    appear: 0,
                    textarea: ""
                });
            }).catch(error => {
                self.codeParsing(error.response.status);
                console.log(error);
            });
        },

        //评论点赞（用于后台存储被点赞的评论）
        postCommLike(item, val) {
            var self = this;
            self.$axios({
                url: '/evaluations/comments/' + item.id + '/view?type=' + val,
                method: 'post',
                baseURL: self.hostURL
            }).then(response => {
                console.log(response);
            }).catch(error => {
                self.codeParsing(error.response.status);
                console.log(error);
            });
        },
        commentLikeClick(item) {
            var self = this;
            item.view = item.view == 0 ? -1 : 0;
            var value = item.view == 0 ? 1 : -1;
            item.ups += value;
            if (value == 1) self.postCommLike(item, 0);else {
                self.$axios({
                    url: '/evaluations/comments/' + item.id + '/view',
                    method: 'delete',
                    baseURL: self.hostURL
                }).then(response => {
                    console.log(response.data);
                }).catch(error => {
                    self.codeParsing(error.response.status);
                    console.log(error);
                });
            }
        },

        //看法
        postView(val) {
            var self = this;
            self.$axios({
                url: '/evaluations/' + self.mse.evaluationId + '/view?type=' + val,
                method: 'post',
                baseURL: self.hostURL
            }).then(response => {
                console.log(response.data);
            }).catch(error => {
                self.codeParsing(error.response.status);
                console.log(error);
            });
        },
        deleteView() {
            var self = this;
            self.$axios({
                url: '/evaluations/' + self.mse.evaluationId + '/view',
                method: 'delete',
                baseURL: self.hostURL
            }).then(response => {
                console.log(response.data);
            }).catch(error => {
                self.codeParsing(error.response.status);
                console.log(error);
            });
        },
        //点赞
        proLikeClick() {
            var self = this;
            self.thumbs = self.thumbs === 0 ? -1 : 0;
            if (self.thumbs === 0) {
                self.postView(0);
            } else {
                self.deleteView();
            }
            var value = self.thumbs === 0 ? 1 : -1;
            self.mse.ups += value;
        },
        //点踩
        proUnlikeClick() {
            var self = this;
            self.thumbs = self.thumbs === 1 ? -1 : 1;
            if (self.thumbs === 1) {
                self.postView(1);
            } else {
                self.deleteView();
            }
            var value = self.thumbs === 1 ? 1 : -1;
            self.mse.downs += value;
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
        var user_name = localStorage.getItem("ms_username");
        if (user_name == "") {
            this.$router.replace('/login');
        }
        var arr = location.href.split('?');
        var mse_id = arr[1];
        self.e_id = mse_id;
        console.log(mse_id);
        self.getMseData(mse_id);
        //        self.getProThumbs();
        self.getHotComments(mse_id, self.pageNum_hc);
        self.getNewComments(mse_id, self.pageNum_nc);
    }
});

/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)(undefined);
// imports


// module
exports.push([module.i, "a[data-v-2f24cd76]{color:#5188a6;text-decoration:none;cursor:pointer}.mse-img[data-v-2f24cd76]{width:710px;margin:0 auto}.mse-img img[data-v-2f24cd76]{max-width:710px;max-height:300px;display:block;margin:0 auto}.recommend_tab[data-v-2f24cd76]{line-height:1em;overflow:hidden;width:710px;margin:0 auto;padding-bottom:20px}.recommend_tab>span.mse-author[data-v-2f24cd76]{float:left;line-height:28px;width:600px;overflow:hidden;margin:0 auto}.mse-author[data-v-2f24cd76]{font-size:12px;float:left;line-height:24px;overflow:hidden;word-break:break-all;white-space:nowrap;text-overflow:ellipsis}.mse-author a[data-v-2f24cd76]{line-height:24px;margin-right:10px}.grey[data-v-2f24cd76]{color:#999}article>h1[data-v-2f24cd76]{font-size:28px;margin-bottom:20px;word-break:break-all;text-align:center}.mse-content[data-v-2f24cd76]{color:#333;line-height:24px;word-break:break-all;max-width:780px;margin:0 auto}.product-comment[data-v-2f24cd76]{padding-top:20px;width:100%;text-align:center;max-width:810px;margin:0 auto}.comment[data-v-2f24cd76]{margin:20px;width:100%}.my-comment[data-v-2f24cd76]{float:left;width:80%}.comment-btn[data-v-2f24cd76]{margin-left:10px}.comment-content[data-v-2f24cd76]{display:flex;width:100%;padding:15px 5px 5px;border-bottom:1px solid #ddd}.user-name[data-v-2f24cd76]{font-size:15px;color:#666;width:15%;text-align:left}.comment-reply[data-v-2f24cd76]{width:70%}.user-comment[data-v-2f24cd76]{font-size:17px;text-align:left;width:100%;padding-bottom:15px}.reply-container[data-v-2f24cd76]{width:80%;margin:10px 0 0 50px;border-bottom:1px solid #ddd}.sub-reply-content[data-v-2f24cd76]{display:flex}.reply-name[data-v-2f24cd76]{color:#20a0ff;font-size:13px;text-align:right;flex:1}.reply-content[data-v-2f24cd76]{float:right;width:80%}.sub-reply-content[data-v-2f24cd76]{font-size:13px;text-align:left;width:100%}.reply-time[data-v-2f24cd76]{color:#666;width:100%;text-align:right;font-size:10px;padding:5px 0}.comment-time[data-v-2f24cd76]{color:#666;font-size:10px;width:100%;text-align:left;margin-top:10px}.comment-right[data-v-2f24cd76]{flex:1;padding:10px}.comment-content-btn[data-v-2f24cd76],.reply-btn[data-v-2f24cd76]{width:100%}", ""]);

// exports


/***/ }),

/***/ 713:
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
  }, [_vm._v("媒体自评测")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("媒体自评测文章")])], 1)], 1), _vm._v(" "), _c('el-row', [_c('div', {
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
  }, [_vm._v("\n                        " + _vm._s(_vm.timeFomatMse(_vm.mse.updateTime)) + "\n                    ")])])]), _vm._v(" "), _c('article', [_c('h1', {
    staticClass: "mse-title"
  }, [_vm._v(_vm._s(_vm.mse.evaluationTitle))]), _vm._v(" "), _c('div', {
    staticClass: "mse-content",
    domProps: {
      "innerHTML": _vm._s(_vm.mseContent(_vm.mse.evaluationText))
    }
  })])])]), _vm._v(" "), _c('el-row', [_c('div', {
    staticClass: "product-comment"
  }, [_c('div', {
    staticClass: "comment"
  }, [_c('div', {
    staticClass: "my-comment"
  }, [_c('el-input', {
    attrs: {
      "type": "textarea",
      "rows": 3,
      "placeholder": "请输入您对该产品的评价",
      "resize": "none"
    },
    model: {
      value: (_vm.textarea),
      callback: function($$v) {
        _vm.textarea = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "textarea"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "comment-btn"
  }, [_c('el-button-group', {
    staticStyle: {
      "margin-bottom": "10px"
    }
  }, [_c('el-button', {
    attrs: {
      "icon": "circle-check",
      "size": "small",
      "disabled": _vm.thumbs == 1 ? true : false,
      "type": _vm.thumbs == 0 ? _vm.successType : _vm.cancelType
    },
    on: {
      "click": function($event) {
        _vm.proLikeClick()
      }
    }
  }, [_vm._v("\n                            赞" + _vm._s(_vm.mse.ups) + "\n                        ")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small",
      "disabled": _vm.thumbs == 0 ? true : false,
      "type": _vm.thumbs == 1 ? _vm.successType : _vm.cancelType
    },
    on: {
      "click": function($event) {
        _vm.proUnlikeClick()
      }
    }
  }, [_vm._v("\n                            踩" + _vm._s(_vm.mse.downs)), _c('i', {
    staticClass: "el-icon-circle-cross el-icon--right"
  })])], 1), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.refreshNewData()
      }
    }
  }, [_vm._v("发表评论")])], 1)]), _vm._v(" "), _c('el-tabs', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "type": "card"
    },
    on: {
      "tab-click": _vm.refreshComment
    },
    model: {
      value: (_vm.activeName2),
      callback: function($$v) {
        _vm.activeName2 = $$v
      },
      expression: "activeName2"
    }
  }, [_c('el-tab-pane', {
    attrs: {
      "label": "最热评论",
      "name": "first"
    }
  }, _vm._l((_vm.hot_data.hot_comments), function(hot, index) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.display_hot),
        expression: "display_hot"
      }],
      staticClass: "comment-content"
    }, [_c('p', {
      staticClass: "user-name"
    }, [_vm._v(_vm._s(hot.userName))]), _vm._v(" "), _c('div', {
      staticClass: "comment-reply"
    }, [_c('p', {
      staticClass: "user-comment"
    }, [_vm._v(_vm._s(hot.comment))]), _vm._v(" "), _c('el-input', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.hot_reply.replys[index].appear),
        expression: "hot_reply.replys[index].appear"
      }],
      staticStyle: {
        "{padding": "0 5px"
      },
      attrs: {
        "type": "textarea",
        "placeholder": "回复评论",
        "resize": "none"
      },
      model: {
        value: (_vm.hot_reply.replys[index].textarea),
        callback: function($$v) {
          _vm.hot_reply.replys[index].textarea = (typeof $$v === 'string' ? $$v.trim() : $$v)
        },
        expression: "hot_reply.replys[index].textarea"
      }
    }), _vm._v(" "), _vm._l((hot.childComments), function(reply) {
      return _c('div', {
        staticClass: "reply-container"
      }, [_c('div', {
        staticClass: "sub-reply-content"
      }, [_c('p', {
        staticClass: "reply-name"
      }, [_vm._v(_vm._s(reply.userName) + "：")]), _vm._v(" "), _c('div', {
        staticClass: "reply-content"
      }, [_c('p', {
        staticClass: "sub-reply-content"
      }, [_vm._v(_vm._s(reply.comment))])])]), _vm._v(" "), _c('p', {
        staticClass: "reply-time"
      }, [_vm._v(_vm._s(_vm.timeFomatComment(reply.postTime)))])])
    })], 2), _vm._v(" "), _c('div', {
      staticClass: "comment-right"
    }, [_c('div', {
      staticClass: "comment-content-btn"
    }, [_c('el-button', {
      attrs: {
        "type": "primary",
        "icon": "circle-check",
        "size": "small",
        "type": hot.view == 0 ? _vm.successType : _vm.cancelType
      },
      on: {
        "click": function($event) {
          _vm.commentLikeClick(hot)
        }
      }
    }, [_vm._v("赞" + _vm._s(hot.ups) + "\n                                ")]), _vm._v(" "), _c('div', {
      staticClass: "reply-btn"
    }, [_c('el-button', {
      attrs: {
        "type": "text"
      },
      on: {
        "click": function($event) {
          _vm.replyHotClick(hot, index)
        }
      }
    }, [_vm._v("回复")])], 1)], 1), _vm._v(" "), _c('p', {
      staticClass: "comment-time"
    }, [_vm._v(_vm._s(_vm.timeFomatComment(hot.postTime)))])])])
  })), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "最新评论",
      "name": "second"
    }
  }, [_vm._l((_vm.new_data.new_comments), function(new_, index) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.display_new),
        expression: "display_new"
      }],
      staticClass: "comment-content"
    }, [_c('p', {
      staticClass: "user-name"
    }, [_vm._v(_vm._s(new_.userName))]), _vm._v(" "), _c('div', {
      staticClass: "comment-reply"
    }, [_c('p', {
      staticClass: "user-comment"
    }, [_vm._v(_vm._s(new_.comment))]), _vm._v(" "), _c('el-input', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.new_reply.replys[index].appear),
        expression: "new_reply.replys[index].appear"
      }],
      staticStyle: {
        "{padding": "0 5px"
      },
      attrs: {
        "type": "textarea",
        "placeholder": "回复评论",
        "resize": "none"
      },
      model: {
        value: (_vm.new_reply.replys[index].textarea),
        callback: function($$v) {
          _vm.new_reply.replys[index].textarea = (typeof $$v === 'string' ? $$v.trim() : $$v)
        },
        expression: "new_reply.replys[index].textarea"
      }
    }), _vm._v(" "), _vm._l((new_.childComments), function(reply) {
      return _c('div', {
        staticClass: "reply-container"
      }, [_c('div', {
        staticClass: "sub-reply-content"
      }, [_c('p', {
        staticClass: "reply-name"
      }, [_vm._v(_vm._s(reply.userName) + "：")]), _vm._v(" "), _c('div', {
        staticClass: "reply-content"
      }, [_c('p', {
        staticClass: "sub-reply-content"
      }, [_vm._v(_vm._s(reply.comment))])])]), _vm._v(" "), _c('p', {
        staticClass: "reply-time"
      }, [_vm._v(_vm._s(_vm.timeFomatComment(reply.postTime)))])])
    })], 2), _vm._v(" "), _c('div', {
      staticClass: "comment-right"
    }, [_c('div', {
      staticClass: "comment-content-btn"
    }, [_c('el-button', {
      attrs: {
        "type": "primary",
        "icon": "circle-check",
        "size": "small",
        "type": new_.view == 0 ? _vm.successType : _vm.cancelType
      },
      on: {
        "click": function($event) {
          _vm.commentLikeClick(new_)
        }
      }
    }, [_vm._v("赞" + _vm._s(new_.ups) + "\n                                ")]), _vm._v(" "), _c('div', {
      staticClass: "reply-btn"
    }, [_c('el-button', {
      attrs: {
        "type": "text"
      },
      on: {
        "click": function($event) {
          _vm.replyNewClick(new_, index)
        }
      }
    }, [_vm._v("回复")])], 1)], 1), _vm._v(" "), _c('p', {
      staticClass: "comment-time"
    }, [_vm._v(_vm._s(_vm.timeFomatComment(new_.postTime)))])])])
  }), _vm._v(" "), _c('div', {
    staticClass: "pagination card"
  }, [_c('el-pagination', {
    attrs: {
      "current-page": _vm.pageNum_nc,
      "page-size": _vm.pageSize,
      "layout": "prev, pager, next, jumper",
      "total": _vm.pageTotal_nc
    },
    on: {
      "current-change": _vm.handleCurrentChange,
      "update:currentPage": function($event) {
        _vm.pageNum_nc = $event
      }
    }
  })], 1)], 2)], 1)], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(642);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(133)("02b39dbe", content, true);

/***/ })

});