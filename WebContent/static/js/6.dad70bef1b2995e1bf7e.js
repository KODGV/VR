webpackJsonp([6],{

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(785)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(621),
  /* template */
  __webpack_require__(728),
  /* scopeId */
  "data-v-554b9645",
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

/***/ 562:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ElButton',

  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean
  },

  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
});

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_element_ui_packages_button_src_button__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_element_ui_packages_button_src_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_element_ui_packages_button_src_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_element_ui_packages_row_src_row__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_element_ui_packages_row_src_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__node_modules_element_ui_packages_row_src_row__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        ElRow: __WEBPACK_IMPORTED_MODULE_1__node_modules_element_ui_packages_row_src_row___default.a,
        ElButton: __WEBPACK_IMPORTED_MODULE_0__node_modules_element_ui_packages_button_src_button___default.a },
    data: function () {
        return {
            activeName2: 'first',
            allowSubmit: true,
            hostURL: "/VR",
            successType: "success",
            cancelType: "primary",

            tieZiData: {
                id: '1',
                theme: '讨论',
                good: false,
                title: '是的尽快发货健康就好刷卡的房间黑科技好看下次时代峰峻和新街口 ',
                contents: '开学到现在还没发过什么贴呢，然而我只爱吃。所以这是一个美食贴。fdvfdbf',
                date: '2017/8/10',
                posterId: 'kijj',
                posterName: '我',
                totalComments: '1',
                upvote: 0,
                downvote: 0
            },
            options: [{ label: '讨论', name: 'discussion' }, { label: '分享', name: 'share' }, { label: '求助', name: 'help' }, { label: '教程', name: 'tutorial' }, { label: '评测', name: 'evaluation' }, { label: '手机VR', name: 'phonevr' }, { label: '电脑VR', name: 'computervr' }],
            // uid:'1',
            textarea: "",
            display_hot: false,
            display_new: false,

            pro_thumbs: {
                type: "PC头显",
                upvote: 50,
                downvote: 10,
                state: 0
            },
            hot_data: {
                hot_comments: [{
                    id: 1,
                    user: {
                        id: 1,
                        nickname: null
                    },
                    message: "1",
                    upvote: 2,
                    belong: "8",
                    releasetime: null,
                    messageResponses: [{
                        user: {
                            id: 10,
                            nickname: null
                        },
                        messageResponse: "555",
                        releasetime: null
                    }],
                    state: 0
                }]
            },
            new_data: {
                new_comments: [{
                    id: 2,
                    user: {
                        id: 2,
                        nickname: null
                    },
                    message: "2",
                    upvote: 3,
                    belong: "4",
                    releasetime: null,
                    messageResponses: [{
                        user: {
                            id: 11,
                            nickname: null
                        },
                        messageResponse: "5555",
                        releasetime: null
                    }],
                    state: 0
                }]
            },
            hot_reply: {
                replys: [{
                    appear: 0,
                    textarea: ""
                }]
            },
            new_reply: {
                replys: [{
                    appear: 0,
                    textarea: ""
                }]
            }
        };
    },
    // computed:{
    //     reversedArr:function(){
    //         var arr={};
    //         arr=this.new_data.new_comments;
    //         return arr.reverse();
    //     },
    // },
    methods: {
        codeParsing(code) {
            var msg = (Title, MessageTitle, Message) => {
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
        //留言
        postTextArea() {
            var self = this;
            self.$axios({
                url: '/MessageLeaving/' + localStorage.getItem('ms_userid'), //{uid}
                method: 'post',
                baseURL: self.hostURL,
                data: {
                    content: self.textarea, //时间在后台取得
                    belong: 'T' + localStorage.getItem("tieZiID")
                }
            }).catch(error => {
                console.log(error);
            });
        },
        //评论数增加
        postResponse() {
            var self = this;
            self.$axios({
                url: '/post_comment/' + localStorage.getItem("tieZiID"), //{uid}
                method: 'post',
                baseURL: self.hostURL
            }).catch(error => {
                console.log(error);
            });
        },
        //处理评论
        refreshNewData() {
            var self = this;
            var text = self.textarea;
            //.log(text);
            if (text != "") {
                self.$message('评论成功！');
                self.postTextArea();
                self.postResponse();
                //新
                self.new_data.new_comments.reverse();
                self.new_data.new_comments.push({
                    id: "",
                    user: {
                        id: "",
                        nickname: localStorage.getItem("ms_username")
                    },
                    message: text,
                    upvote: "0",
                    belong: "0",
                    releasetime: "刚刚",
                    /*
                    messageResponses:[{
                        user:{
                            id:"",
                            nickname:null,
                        },
                        messageResponse:"",
                        releasetime:null
                    }],
                    */
                    state: 0
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

                //火
                self.hot_data.hot_comments.push({
                    id: "",
                    user: {
                        id: "",
                        nickname: localStorage.getItem("ms_username")
                    },
                    message: text,
                    upvote: "0",
                    belong: "0",
                    releasetime: "刚刚",
                    /*
                    messageResponses:[{
                        user:{
                            id:"",
                            nickname:null,
                        },
                        messageResponse:"",
                        releasetime:null
                    }],
                    */
                    state: 0
                });
                // console.log("self id:"+self.hot_data.hot_comments[0].id);
                var len = self.hot_data.hot_comments.length;
                self.hot_reply.replys = [];
                for (var i = 0; i < len; i++) self.hot_reply.replys.push({
                    appear: 0,
                    textarea: ""
                });
                self.textarea = "";
            }
        },
        //回复-热评
        replyHotClick(item, index) {
            var self = this;
            if (!self.hot_reply.replys[index].appear) {
                self.hot_reply.replys[index].appear = 1;
            } else {
                if (self.hot_reply.replys[index].textarea == '') self.hot_reply.replys[index].appear = 0;else {
                    //发送数据给后台
                    self.$axios({
                        url: '/MessageResponse/' + localStorage.getItem('ms_userid'), //{uid}
                        method: 'post',
                        baseURL: self.hostURL,
                        data: {
                            content: self.hot_reply.replys[index].textarea,
                            leavingid: item.id
                        }
                    }).catch(error => {
                        console.log(error);
                    });
                    self.$message('回复成功！');
                    self.hot_data.hot_comments[index].messageResponses.push({
                        user: {
                            id: "",
                            nickname: localStorage.getItem('ms_username')
                        },
                        messageResponse: self.hot_reply.replys[index].textarea,
                        releasetime: "刚刚"
                    });
                    self.hot_reply.replys[index].textarea = '';
                    self.hot_reply.replys[index].appear = 0;
                }
            }
        },
        //回复-最新评价
        replyNewClick(item, index) {
            var self = this;
            if (!self.new_reply.replys[index].appear) {
                self.new_reply.replys[index].appear = 1;
            } else {
                if (self.new_reply.replys[index].textarea == '') self.new_reply.replys[index].appear = 0;else {
                    //发送数据给后台
                    self.$axios({
                        url: '/MessageResponse/' + localStorage.getItem('ms_userid'), //{uid}
                        method: 'post',
                        baseURL: self.hostURL,
                        data: {
                            content: self.new_reply.replys[index].textarea,
                            leavingid: item.id
                        }
                    }).catch(error => {
                        console.log(error);
                    });
                    self.$message('回复成功！');
                    self.new_data.new_comments[index].messageResponses.push({
                        user: {
                            id: "",
                            nickname: localStorage.getItem('ms_username')
                        },
                        messageResponse: self.new_reply.replys[index].textarea,
                        releasetime: "刚刚"
                    });
                    self.new_reply.replys[index].textarea = '';
                    self.new_reply.replys[index].appear = 0;
                }
            }
        },
        /*获得评论*/
        //1.获得热评
        getHotComments() {
            var self = this;
            self.hot_data = {
                hot_comments: [{
                    id: "",
                    user: {
                        id: "",
                        nickname: null
                    },
                    message: "",
                    upvote: "",
                    belong: "",
                    releasetime: null,
                    messageResponses: [{
                        user: {
                            id: "",
                            nickname: null
                        },
                        messageResponse: "",
                        releasetime: null
                    }],
                    state: 0
                }]
            };
            self.hot_reply = {
                replys: [{
                    appear: 0,
                    textarea: ""
                }]
            };
            self.$axios({
                url: '/MessageLeaving/show/' + localStorage.getItem('ms_userid') + '?belong=T' + localStorage.getItem("tieZiID") + '&condition=hot',
                method: 'get',
                baseURL: self.hostURL
                // data:{
                // condition:"hot",
                // belong:localStorage.getItem("salesModel")
                // }
            }).then(response => {
                //console.log("resp hot id:"+response.data[0].id);
                //console.log("self hot id:"+self.hot_data.hot_comments[0].id);
                self.display_hot = true;
                self.hot_data.hot_comments = response.data;
                self.hot_data.hot_comments.reverse();
                //console.log("self hot id:"+self.hot_data.hot_comments[0].id);
                var len = self.hot_data.hot_comments.length;
                self.hot_reply.replys = [];
                for (var i = 0; i < len; i++) self.hot_reply.replys.push({
                    appear: 0,
                    textarea: ""
                });
            }).catch(error => {
                console.log(error);
            });
        },
        //2.获得最新评论
        getNewComments() {
            var self = this;
            self.new_data = {
                new_comments: [{
                    id: "",
                    user: {
                        id: "",
                        nickname: null
                    },
                    message: "",
                    upvote: "",
                    belong: "",
                    releasetime: null,
                    messageResponses: [{
                        user: {
                            id: "",
                            nickname: null
                        },
                        messageResponse: "",
                        releasetime: null
                    }],
                    state: 0
                }]
            };
            self.new_reply = {
                replys: [{
                    appear: 0,
                    textarea: ""
                }]
            };
            self.$axios({
                url: '/MessageLeaving/show/' + localStorage.getItem('ms_userid') + '?belong=T' + localStorage.getItem("tieZiID") + '&condition=time',
                method: 'get',
                baseURL: self.hostURL
                // data:{
                // condition:"time",
                // belong:localStorage.getItem("salesModel")
                // }
            }).then(response => {
                //.log("resp new id:"+response.data[0].id);
                //console.log("self new id:"+self.new_data.new_comments[0].id);
                self.display_new = true;
                self.new_data.new_comments = response.data;
                self.new_data.new_comments.reverse();
                //console.log("self new id:"+self.new_data.new_comments[0].id);
                var len = self.new_data.new_comments.length;
                self.new_reply.replys = [];
                for (var i = 0; i < len; i++) self.new_reply.replys.push({
                    appear: 0,
                    textarea: ""
                });
            }).catch(error => {
                console.log(error);
            });
        },

        //评论点赞（用于后台存储被点赞的评论）
        postCommLike(item, val) {
            var self = this;
            self.$axios({
                url: '/MessageLeaving/upvote/' + localStorage.getItem('ms_userid'),
                method: 'post',
                baseURL: self.hostURL,
                data: {
                    id: item.id,
                    value: val
                }
            }).catch(error => {
                console.log(error);
            });
        },
        commentLikeClick(item) {
            var self = this;
            item.state = item.state == 1 ? 0 : 1;
            var value = item.state == 1 ? 1 : -1;
            item.upvote += value;
            self.postCommLike(item, value);
        },

        //获取产品点赞数
        getProThumbs() {
            var self = this;
            self.pro_thumbs = {
                type: "PC头显",
                upvote: 10,
                downvote: 20,
                state: 0
            };
            //.log("proname: "+
            //    localStorage.getItem("tieZiID"));
            self.$axios({
                url: '/Thumbs/' + localStorage.getItem('ms_userid'),
                method: 'post',
                baseURL: self.hostURL,
                data: {
                    belong: localStorage.getItem("tieZiID")
                }
            }).then(response => {
                // self.pro_thumbs={};
                //console.log("response.data:upvote "+response.data.upvote);
                //console.log("self data:upvote "+self.pro_thumbs.upvote);
                self.pro_thumbs = response.data;
                //console.log("self data:upvote "+self.pro_thumbs.upvote);
            }).catch(error => {
                console.log(error);
            });
        },
        //点赞
        postProLike(val) {
            var self = this;
            self.$axios({
                url: '/posts/upvote/' + localStorage.getItem('tieZiID'),
                method: 'post',
                baseURL: self.hostURL,
                data: {
                    value: val
                }
            }).then(response => {
                localStorage.setItem("tieZiTotalUpVote", this.tieZiData.upvote);
            }).catch(error => {
                console.log(error);
            });
        },
        proLikeClick() {
            var self = this;
            self.pro_thumbs.state = self.pro_thumbs.state == 1 ? 0 : 1;
            var value = self.pro_thumbs.state == 1 ? 1 : -1;
            //self.pro_thumbs.upvote+=value;
            self.tieZiData.upvote += value;
            self.postProLike(value);
        },
        //点踩
        postProUnlike(val) {
            var self = this;
            self.$axios({
                url: '/posts/downvote/' + localStorage.getItem('tieZiID'),
                method: 'post',
                baseURL: self.hostURL,
                data: {
                    value: val
                }
            }).then(response => {
                localStorage.setItem("tieZiTotalDownVote", this.tieZiData.downvote);
            }).catch(error => {
                console.log(error);
            });
        },
        proUnlikeClick() {
            var self = this;
            self.pro_thumbs.state = self.pro_thumbs.state == -1 ? 0 : -1;
            var value = self.pro_thumbs.state == -1 ? 1 : -1;
            //self.pro_thumbs.downvote+=value;
            self.tieZiData.downvote += value;
            //console.log(self.pro_thumbs.state+" "+self.pro_thumbs.downvote);
            self.postProUnlike(value);
        },
        getTieZiData() {
            this.tieZiData.id = localStorage.getItem("tieZiID");
            this.tieZiData.theme = localStorage.getItem("tieZiTheme");
            this.tieZiData.good = localStorage.getItem("tieZiGood");
            this.tieZiData.title = localStorage.getItem("tieZiTitle");
            this.tieZiData.contents = localStorage.getItem("tieZiContents");
            this.tieZiData.date = localStorage.getItem("tieZiDate");
            this.tieZiData.posterId = localStorage.getItem("tieZiPosterId");
            this.tieZiData.posterName = localStorage.getItem("tieZiPosterName");
            this.tieZiData.totalComments = localStorage.getItem("tieZiTotalComments");
            this.tieZiData.upvote = parseInt(localStorage.getItem("tieZiTotalUpVote"));
            this.tieZiData.downvote = parseInt(localStorage.getItem("tieZiTotalDownVote"));
            //.log("tieZi");
            //console.log(this.tieZiData);
        }
        /*
         //获取帖子数据
         getTieZiData(str){
         var self = this;
         self.tieZiData=[];
         self.$axios({
         url:'/posts/'+str,
         method:'get',
         baseURL:self.hostURL
         }).then((response)=>{
         self.tieZiData = {};
         self.tieZiData = response.data;
         self.chTheme = "";
         console.log(self.tieZiData);
         for (let i=0; i<self.options.length;i++){
         if(self.options[i].name==self.tieZiData.theme){
         self.chTheme = self.options[i].label;
         }
         }
         console.log("theme:");
         console.log(self.chTheme);
         }).catch((error)=>{
         console.log(error);
         self.$message({
         type:'info',
         message:'connect fail'
         });
         });
         }
         */

        /*
         //获得产品简介
         getProIntro(){
         var self=this;
         self.pro_intro={};
         self.$axios({
         url:'/Profile',
         method:'get',
         baseURL: self.hostURL,
         data:{
         product:localStorage.getItem("salesModel")
         }
         }).then((response)=>{
         self.pro_intro= response.data;
         // self.intro.pic_location=localStorage.getItem("proPic");
         // self.intro.pro_name=localStorage.getItem("salesModel");
         }).catch((error)=>{
         console.log(error);
         });
         },
         */

        //获取进入页面时需要加载的所有数据
        // getData(){
        //     var self=this;
        //     self.getIntro();
        //     self.getProThumbs();
        //     self.getHotComments();
        //     self.getNewComments();
        // },
    },

    created() {
        this.getTieZiData();
    },

    mounted() {
        var self = this;
        var user_name = localStorage.getItem("ms_username");
        if (user_name == "") {
            this.$router.replace('/login');
        }
        //console.log("初始化");
        self.getProThumbs();
        self.getHotComments();
        self.getNewComments();
    }
});

/***/ }),

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)(undefined);
// imports


// module
exports.push([module.i, ".crumbs[data-v-554b9645]{text-decoration:none}.theme[data-v-554b9645]{height:28px;color:#fff;background-color:#ff6d6d;font-size:18px;font-weight:600;margin-right:8px;line-height:28px}.title[data-v-554b9645]{font-size:22px;color:#38444d;line-height:50px;font-weight:600;display:block}.borderline[data-v-554b9645]{border-bottom:1px dotted #bfbfbf}.artinfo[data-v-554b9645]{margin-top:5px;color:#999;display:block;font-size:13px}.author[data-v-554b9645]{color:#1e90ff}.article p[data-v-554b9645]{padding:20px 0 50px;font-size:18px;color:#333;line-height:180%}.article[data-v-554b9645]{line-height:26px;padding-bottom:25px}.tieZi-box[data-v-554b9645]{padding:28px;width:800px;border:1px solid #e1e1e1;box-shadow:0 0 2px rgba(0,0,0,.1)}.intro-header img[data-v-554b9645]{width:200px;height:200px;margin:0 -12% 0 0}.intro-header h3[data-v-554b9645]{margin-top:5px;font-size:20px;font-weight:700}.intro-body p[data-v-554b9645]{width:100%;font-size:15px;font-weight:lighter}.intro-body .btn[data-v-554b9645]{float:right}.tieZi-comment[data-v-554b9645]{margin-top:20px;width:100%;text-align:center}.comment[data-v-554b9645]{margin:20px;width:100%}.my-comment[data-v-554b9645]{float:left;width:80%}.comment-btn[data-v-554b9645]{margin-left:10px}.comment-content[data-v-554b9645]{display:flex;width:100%;padding:15px 5px 5px;border-bottom:1px solid #ddd}.user-name[data-v-554b9645]{font-size:15px;color:#666;width:15%;text-align:left}.comment-reply[data-v-554b9645]{width:70%}.user-comment[data-v-554b9645]{font-size:17px;text-align:left;width:100%;padding-bottom:15px}.reply-container[data-v-554b9645]{width:80%;margin:10px 0 0 50px;border-bottom:1px solid #ddd}.sub-reply-content[data-v-554b9645]{display:flex}.reply-name[data-v-554b9645]{color:#20a0ff;font-size:13px;text-align:right;flex:1}.reply-content[data-v-554b9645]{float:right;width:80%}.sub-reply-content[data-v-554b9645]{font-size:13px;text-align:left;width:100%}.reply-time[data-v-554b9645]{color:#666;width:100%;text-align:right;font-size:10px;padding:5px 0}.comment-time[data-v-554b9645]{color:#666;font-size:10px;width:100%;text-align:left;margin-top:10px}.comment-right[data-v-554b9645]{flex:1;padding:10px}.comment-content-btn[data-v-554b9645],.reply-btn[data-v-554b9645]{width:100%}", ""]);

// exports


/***/ }),

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(562),
  /* template */
  __webpack_require__(714),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "el-button",
    class: [
      _vm.type ? 'el-button--' + _vm.type : '',
      _vm.size ? 'el-button--' + _vm.size : '',
      {
        'is-disabled': _vm.disabled,
        'is-loading': _vm.loading,
        'is-plain': _vm.plain
      }
    ],
    attrs: {
      "disabled": _vm.disabled,
      "autofocus": _vm.autofocus,
      "type": _vm.nativeType
    },
    on: {
      "click": _vm.handleClick
    }
  }, [(_vm.loading) ? _c('i', {
    staticClass: "el-icon-loading"
  }) : _vm._e(), _vm._v(" "), (_vm.icon && !_vm.loading) ? _c('i', {
    class: 'el-icon-' + _vm.icon
  }) : _vm._e(), _vm._v(" "), (_vm.$slots.default) ? _c('span', [_vm._t("default")], 2) : _vm._e()])
},staticRenderFns: []}

/***/ }),

/***/ 728:
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
  }), _vm._v(" VR论坛")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("查看内容")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "tieZi-box"
  }, [_c('h2', {
    staticClass: "title"
  }, [_c('el-tag', {
    staticClass: "theme"
  }, [_vm._v(_vm._s(_vm.tieZiData.theme))]), _vm._v(_vm._s(_vm.tieZiData.title))], 1), _vm._v(" "), _c('div', {
    staticClass: "borderline"
  }), _vm._v(" "), _c('div', {
    staticClass: "artinfo"
  }, [_c('pre', [_c('span', {
    staticClass: "author"
  }, [_vm._v(_vm._s(_vm.tieZiData.posterName))]), _vm._v("    发表于" + _vm._s(_vm.tieZiData.date))])]), _vm._v(" "), _c('div', {
    staticClass: "article"
  }, [_c('p', [_vm._v("\n        " + _vm._s(_vm.tieZiData.contents) + "\n      ")])]), _vm._v(" "), _c('div', {
    staticClass: "tieZi-comment"
  }, [_c('div', {
    staticClass: "comment"
  }, [_c('div', {
    staticClass: "my-comment"
  }, [_c('el-input', {
    attrs: {
      "type": "textarea",
      "rows": 3,
      "placeholder": "请输入您对该贴的评价",
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
      "disabled": _vm.pro_thumbs.state == -1 ? true : false,
      "type": _vm.pro_thumbs.state == 1 ? _vm.successType : _vm.cancelType
    },
    on: {
      "click": function($event) {
        _vm.proLikeClick()
      }
    }
  }, [_vm._v("\n              赞" + _vm._s(_vm.tieZiData.upvote))]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small",
      "disabled": _vm.pro_thumbs.state == 1 ? true : false,
      "type": _vm.pro_thumbs.state == -1 ? _vm.successType : _vm.cancelType
    },
    on: {
      "click": function($event) {
        _vm.proUnlikeClick()
      }
    }
  }, [_vm._v("\n              踩" + _vm._s(_vm.tieZiData.downvote)), _c('i', {
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
    }, [_vm._v(_vm._s(hot.user.nickname))]), _vm._v(" "), _c('div', {
      staticClass: "comment-reply"
    }, [_c('p', {
      staticClass: "user-comment"
    }, [_vm._v(_vm._s(hot.message))]), _vm._v(" "), _c('el-input', {
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
    }), _vm._v(" "), _vm._l((hot.messageResponses), function(reply) {
      return _c('div', {
        staticClass: "reply-container"
      }, [_c('div', {
        staticClass: "sub-reply-content"
      }, [_c('p', {
        staticClass: "reply-name"
      }, [_vm._v(_vm._s(reply.user.nickname) + "：")]), _vm._v(" "), _c('div', {
        staticClass: "reply-content"
      }, [_c('p', {
        staticClass: "sub-reply-content"
      }, [_vm._v(_vm._s(reply.messageResponse))])])]), _vm._v(" "), _c('p', {
        staticClass: "reply-time"
      }, [_vm._v(_vm._s(reply.releasetime))])])
    })], 2), _vm._v(" "), _c('div', {
      staticClass: "comment-right"
    }, [_c('div', {
      staticClass: "comment-content-btn"
    }, [_c('el-button', {
      attrs: {
        "type": "primary",
        "icon": "circle-check",
        "size": "small",
        "type": hot.state == 1 ? _vm.successType : _vm.cancelType
      },
      on: {
        "click": function($event) {
          _vm.commentLikeClick(hot)
        }
      }
    }, [_vm._v("赞" + _vm._s(hot.upvote))]), _vm._v(" "), _c('div', {
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
    }, [_vm._v(_vm._s(hot.releasetime))])])])
  })), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "最新评论",
      "name": "second"
    }
  }, _vm._l((_vm.new_data.new_comments), function(new_, index) {
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
    }, [_vm._v(_vm._s(new_.user.nickname))]), _vm._v(" "), _c('div', {
      staticClass: "comment-reply"
    }, [_c('p', {
      staticClass: "user-comment"
    }, [_vm._v(_vm._s(new_.message))]), _vm._v(" "), _c('el-input', {
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
    }), _vm._v(" "), _vm._l((new_.messageResponses), function(reply) {
      return _c('div', {
        staticClass: "reply-container"
      }, [_c('div', {
        staticClass: "sub-reply-content"
      }, [_c('p', {
        staticClass: "reply-name"
      }, [_vm._v(_vm._s(reply.user.nickname) + "：")]), _vm._v(" "), _c('div', {
        staticClass: "reply-content"
      }, [_c('p', {
        staticClass: "sub-reply-content"
      }, [_vm._v(_vm._s(reply.messageResponse))])])]), _vm._v(" "), _c('p', {
        staticClass: "reply-time"
      }, [_vm._v(_vm._s(reply.releasetime))])])
    })], 2), _vm._v(" "), _c('div', {
      staticClass: "comment-right"
    }, [_c('div', {
      staticClass: "comment-content-btn"
    }, [_c('el-button', {
      attrs: {
        "type": "primary",
        "icon": "circle-check",
        "size": "small",
        "type": new_.state == 1 ? _vm.successType : _vm.cancelType
      },
      on: {
        "click": function($event) {
          _vm.commentLikeClick(new_)
        }
      }
    }, [_vm._v("赞" + _vm._s(new_.upvote))]), _vm._v(" "), _c('div', {
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
    }, [_vm._v(_vm._s(new_.releasetime))])])])
  }))], 1)], 1)])])
},staticRenderFns: []}

/***/ }),

/***/ 785:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(655);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(133)("232d8f6b", content, true);

/***/ })

});