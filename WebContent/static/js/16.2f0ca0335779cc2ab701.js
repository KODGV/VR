webpackJsonp([16],{548:function(e,t,a){a(788);var s=a(132)(a(623),a(728),null,null);e.exports=s.exports},623:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{activeName2:"first",allowSubmit:!0,hostURL:"/VR",successType:"success",cancelType:"primary",textarea:"",display_hot:!1,display_new:!1,compare_data:{data:[{type:"svr",pic_location:"./static/img/img.jpg"},{type:"svr",pic_location:"./static/img/img.jpg"}]},pro_intro:"",intro:{pic_location:"",pro_name:""},pro_thumbs:{type:"PC头显",upvote:50,downvote:10,state:0},hot_data:{hot_comments:[{id:1,user:{id:1,nickname:null},message:"1",upvote:2,belong:"8",releasetime:null,messageResponses:[{user:{id:10,nickname:null},messageResponse:"555",releasetime:null}],state:0}]},new_data:{new_comments:[{id:2,user:{id:2,nickname:null},message:"2",upvote:3,belong:"4",releasetime:null,messageResponses:[{user:{id:11,nickname:null},messageResponse:"5555",releasetime:null}],state:0}]},hot_reply:{replys:[{appear:0,textarea:""}]},new_reply:{replys:[{appear:0,textarea:""}]}}},methods:{codeParsing:function(e){var t=this,a=function(e,a){t.$notify({title:e,message:a,type:"error"})};switch(e){case-1:a("系统错误","未知错误，请上报管理员");break;case 201:a("输入域错误","验证码错误");break;case 300:a("输入域错误","邮箱或密码错误");break;case 301:a("权限问题","用户已禁用，请联系管理员");break;case 302:a("权限问题","用户未激活，请去邮箱激活用户");break;case 303:a("注册问题","邮箱已占用，请更改邮箱");break;case 304:a("注册问题","昵称已占用，请更改昵称");break;case 401:a("权限问题","用户无权访问，请联系管理员");break;case 402:a("操作错误","删除错误,请刷新重试");break;case 415:a("操作错误","文件类型错误，请上传正确文件类型");break;case 500:a("系统错误","未知错误，请上报管理员");break;case 600:a("TIME_OUT","访问超时，请检查网络连接");break;case 700:a("激活错误","非法激活链接，请联系管理员");break;case 800:a("激活错误","用户已被激活，请直接登录");break;case 1e3:a("系统错误","参数错误，上报管理员");break;case 1001:a("权限问题","用户未登录，请重新登录");break;case 1002:a("系统错误","参数错误，上报管理员")}},postTextArea:function(){var e=this;e.$axios({url:"/MessageLeaving/"+localStorage.getItem("ms_userid"),method:"post",baseURL:e.hostURL,data:{content:e.textarea,belong:"svr"+localStorage.getItem("salesModel")}}).catch(function(e){console.log(e)})},refreshNewData:function(){var e=this,t=e.textarea;if(""!=t){e.$message("评论成功！"),e.postTextArea(),e.new_data.new_comments.reverse(),e.new_data.new_comments.push({id:"",user:{id:"",nickname:localStorage.getItem("ms_username")},message:t,upvote:0,belong:"0",releasetime:"刚刚",messageResponses:[],state:0}),e.new_data.new_comments.reverse(),e.hot_data.hot_comments.push({id:"",user:{id:"",nickname:localStorage.getItem("ms_username")},message:t,upvote:0,belong:"0",releasetime:"刚刚",messageResponses:[],state:0});var a=e.new_data.new_comments.length;e.new_reply.replys=[];for(var s=0;s<a;s++)e.new_reply.replys.push({appear:0,textarea:""});a=e.hot_data.hot_comments.length,e.hot_reply.replys=[];for(var s=0;s<a;s++)e.hot_reply.replys.push({appear:0,textarea:""});e.textarea=""}},replyHotClick:function(e,t){var a=this;a.hot_reply.replys[t].appear?""==a.hot_reply.replys[t].textarea?a.hot_reply.replys[t].appear=0:(a.$axios({url:"/MessageResponse/"+localStorage.getItem("ms_userid"),method:"post",baseURL:a.hostURL,data:{content:a.hot_reply.replys[t].textarea,leavingid:e.id}}).catch(function(e){console.log(e)}),a.$message("回复成功！"),a.hot_data.hot_comments[t].messageResponses.push({user:{id:"",nickname:localStorage.getItem("ms_username")},messageResponse:a.hot_reply.replys[t].textarea,releasetime:"刚刚"}),a.hot_reply.replys[t].textarea="",a.hot_reply.replys[t].appear=0):a.hot_reply.replys[t].appear=1},replyNewClick:function(e,t){var a=this;a.new_reply.replys[t].appear?""==a.new_reply.replys[t].textarea?a.new_reply.replys[t].appear=0:(a.$axios({url:"/MessageResponse/"+localStorage.getItem("ms_userid"),method:"post",baseURL:a.hostURL,data:{content:a.new_reply.replys[t].textarea,leavingid:e.id}}).catch(function(e){console.log(e)}),a.$message("回复成功！"),a.new_data.new_comments[t].messageResponses.push({user:{id:"",nickname:localStorage.getItem("ms_username")},messageResponse:a.new_reply.replys[t].textarea,releasetime:"刚刚"}),a.new_reply.replys[t].textarea="",a.new_reply.replys[t].appear=0):a.new_reply.replys[t].appear=1},getHotComments:function(){var e=this;e.hot_data={hot_comments:[{id:"",user:{id:"",nickname:null},message:"",upvote:0,belong:"",releasetime:null,messageResponses:[{user:{id:"",nickname:null},messageResponse:"",releasetime:null}],state:0}]},e.hot_reply={replys:[{appear:0,textarea:""}]},e.$axios({url:"/MessageLeaving/show/"+localStorage.getItem("ms_userid")+"?belong=svr"+localStorage.getItem("salesModel")+"&condition=hot",method:"get",baseURL:e.hostURL}).then(function(t){e.display_hot=!0,e.hot_data.hot_comments=t.data,e.hot_data.hot_comments.reverse();var a=e.hot_data.hot_comments.length;e.hot_reply.replys=[];for(var s=0;s<a;s++)e.hot_reply.replys.push({appear:0,textarea:""})}).catch(function(e){console.log(e)})},getNewComments:function(){var e=this;e.new_data={new_comments:[{id:"",user:{id:"",nickname:null},message:"",upvote:0,belong:"",releasetime:null,messageResponses:[{user:{id:"",nickname:null},messageResponse:"",releasetime:null}],state:0}]},e.new_reply={replys:[{appear:0,textarea:""}]},e.$axios({url:"/MessageLeaving/show/"+localStorage.getItem("ms_userid")+"?belong=svr"+localStorage.getItem("salesModel")+"&condition=time",method:"get",baseURL:e.hostURL}).then(function(t){e.display_new=!0,e.new_data.new_comments=t.data,e.new_data.new_comments.reverse();var a=e.new_data.new_comments.length;e.new_reply.replys=[];for(var s=0;s<a;s++)e.new_reply.replys.push({appear:0,textarea:""})}).catch(function(e){console.log(e)})},postCommLike:function(e,t){var a=this;a.$axios({url:"/MessageLeaving/upvote/"+localStorage.getItem("ms_userid"),method:"post",baseURL:a.hostURL,data:{id:"svr"+e.id,value:t}}).catch(function(e){console.log(e)})},commentLikeClick:function(e){var t=this;e.state=1==e.state?0:1;var a=1==e.state?1:-1;e.upvote+=a,t.postCommLike(e,a)},getProThumbs:function(){var e=this;e.pro_thumbs={type:"PC头显",upvote:10,downvote:20,state:0},e.$axios({url:"/Thumbs/"+localStorage.getItem("ms_userid"),method:"post",baseURL:e.hostURL,data:{belong:"svr"+localStorage.getItem("salesModel")}}).then(function(t){e.pro_thumbs=t.data}).catch(function(e){console.log(e)})},postProLike:function(e){var t=this;t.$axios({url:"/Thumbs/upvote/"+localStorage.getItem("ms_userid"),method:"post",baseURL:t.hostURL,data:{name:"svr"+localStorage.getItem("salesModel"),value:e}}).catch(function(e){console.log(e)})},proLikeClick:function(){var e=this;e.pro_thumbs.state=1==e.pro_thumbs.state?0:1;var t=1==e.pro_thumbs.state?1:-1;e.pro_thumbs.upvote+=t,e.postProLike(t)},postProUnlike:function(e){var t=this;t.$axios({url:"/Thumbs/downvote/"+localStorage.getItem("ms_userid"),method:"post",baseURL:t.hostURL,data:{name:"svr"+localStorage.getItem("salesModel"),value:e}}).catch(function(e){console.log(e)})},proUnlikeClick:function(){var e=this;e.pro_thumbs.state=-1==e.pro_thumbs.state?0:-1;var t=-1==e.pro_thumbs.state?1:-1;e.pro_thumbs.downvote+=t,e.postProUnlike(t)},getProIntro:function(){var e=this;e.pro_intro={},e.$axios({url:"/Profile",method:"get",baseURL:e.hostURL,data:{product:localStorage.getItem("salesModel")}}).then(function(t){e.pro_intro=t.data}).catch(function(e){console.log(e)})},getDetail:function(){var e=this,t=location.href.split("?"),a=t[1];e.$router.push("/user/svr-comment/svr?"+a)},refreshCompare:function(){this.compare_data=JSON.parse(localStorage.getItem("compare_data"))},compare:function(){var e=this,t=JSON.parse(localStorage.getItem("compare_data")),a={id:localStorage.getItem("salesModel"),type:"svr",pic_location:localStorage.getItem("proPic")};e.checkCompare(localStorage.getItem("salesModel"))&&(0==t.data.length?(t.data.push(a),localStorage.setItem("compare_data",JSON.stringify(t)),localStorage.setItem("kind","svr"),e.refreshCompare()):t.data.length<4?a.type==t.data[0].type?(t.data.push(a),localStorage.setItem("compare_data",JSON.stringify(t)),localStorage.setItem("kind","svr"),e.refreshCompare()):e.$message("只有同类产品才能加入对比！"):e.$message("最多只能比较四个产品！"))},cancelCompare:function(e){var t=JSON.parse(localStorage.getItem("compare_data"));t.data.splice(e,1),localStorage.setItem("compare_data",JSON.stringify(t)),this.refreshCompare()},checkCompare:function(e){for(var t=JSON.parse(localStorage.getItem("compare_data")),a=0;a<t.data.length;a++)if(e==t.data[a].id)return!1;return!0},toCompareRes:function(){var e=this;0!=JSON.parse(localStorage.getItem("compare_data")).data.length?e.$router.push("/user/product-compare"):e.$message("您还没有加入对比的产品")},getIntro:function(){var e=this;e.intro.pic_location=localStorage.getItem("proPic"),e.intro.pro_name=localStorage.getItem("proName")},toSvr:function(){localStorage.setItem("activePane","svr")}},mounted:function(){var e=this;""==localStorage.getItem("ms_username")&&this.$router.replace("/login"),e.getProThumbs(),e.getHotComments(),e.getNewComments(),e.refreshCompare()},created:function(){this.getIntro()}}},659:function(e,t,a){t=e.exports=a(58)(void 0),t.push([e.i,".crumbs{text-decoration:none}.bread{font-size:16px}.form-box{width:300px;margin-top:50px;margin-left:0;box-shadow:0 0 8px 0 rgba(232,237,250,.9),0 2px 4px 0 rgba(232,237,250,.9);padding:50px 50px 50px 10px}.product-box{float:left;padding:28px;width:800px;border:1px solid #e1e1e1;box-shadow:0 0 2px rgba(0,0,0,.1)}.intro-box{height:350px;width:100%}.intro-header{text-align:center}.intro-header img{width:200px;height:200px;margin:0 -12% 0 0}.intro-header h3{margin-top:5px;font-size:20px;font-weight:700}.intro-body{margin-top:10px;margin-left:30%;width:40%}.intro-body p{width:100%;font-size:15px;font-weight:lighter}.intro-body .btn{float:right}.product-comment{margin-top:20px;width:100%;text-align:center}.comment{margin:20px;width:100%}.my-comment{float:left;width:80%}.comment-btn{margin-left:10px}.comment-content{display:flex;width:100%;padding:15px 5px 5px;border-bottom:1px solid #ddd}.user-name{font-size:15px;color:#666;width:15%;text-align:left}.comment-reply{width:70%}.user-comment{font-size:17px;text-align:left;width:100%;padding-bottom:15px}.reply-container{width:80%;margin:10px 0 0 50px;border-bottom:1px solid #ddd}.sub-reply-content{display:flex}.reply-name{color:#20a0ff;font-size:13px;text-align:right;flex:1}.reply-content{float:right;width:80%}.sub-reply-content{font-size:13px;text-align:left;width:100%}.reply-time{text-align:right;padding:5px 0}.comment-time,.reply-time{color:#666;width:100%;font-size:10px}.comment-time{text-align:left;margin-top:10px}.comment-right{flex:1;padding:10px}.comment-content-btn,.reply-btn{width:100%}.compare{float:right;display:block;width:175px;bottom:300px;z-index:9999;top:128px;left:900px}#compare_box{width:150px;border:1px solid #c0ccda;box-shadow:0 0 10px #c0ccda}#cancel-btn{float:right;width:10px;height:50px;margin-top:40px;margin-left:15px;cursor:pointer}.compare_item{float:left;width:90%;height:100px}.compare_item_img{width:70%;height:80%;margin-left:10px;margin-top:10px}.compare_btn{margin:20px 0 10px 30px}",""])},728:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:"/user/product-list"}},[a("i",{staticClass:"el-icon-date"}),e._v("产品中心")]),e._v(" "),a("el-breadcrumb-item",{attrs:{to:"/user/product-list"}},[a("span",{on:{click:e.toSvr}},[e._v("PC头显")])]),e._v(" "),a("el-breadcrumb-item",[e._v("产品简介")])],1)],1),e._v(" "),a("div",{staticClass:"compare"},[a("div",{attrs:{id:"compare_box"}},[e._l(e.compare_data.data,function(t,s){return a("div",{staticClass:"compare_item"},[a("div",[a("img",{staticClass:"compare_item_img",attrs:{src:t.pic_location}}),e._v(" "),a("div",{staticClass:"el-icon-circle-cross",attrs:{id:"cancel_btn"},on:{click:function(t){e.cancelCompare(s)}}})]),a("br")])}),e._v(" "),a("br"),e._v(" "),a("el-button",{staticClass:"compare_btn",attrs:{plain:!0,type:"warning"},on:{click:function(t){e.toCompareRes()}}},[e._v("查看对比")])],2)]),e._v(" "),a("div",{staticClass:"product-box"},[a("div",{staticClass:"intro-box"},[a("el-button",{staticStyle:{float:"right"},attrs:{plain:!0,type:"warning"},on:{click:function(t){e.compare()}}},[e._v("加入对比")]),e._v(" "),a("div",{staticClass:"intro-header"},[a("img",{attrs:{src:e.intro.pic_location}}),e._v(" "),a("h3",[e._v(e._s(e.intro.pro_name))])]),e._v(" "),a("div",{staticClass:"intro-body"},[a("p",[e._v(e._s(e.pro_intro))]),e._v(" "),a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"text"},on:{click:function(t){e.getDetail()}}},[e._v("查看详情")])],1)])],1),e._v(" "),a("div",{staticClass:"product-comment"},[a("div",{staticClass:"comment"},[a("div",{staticClass:"my-comment"},[a("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入您对该产品的评价",resize:"none"},model:{value:e.textarea,callback:function(t){e.textarea="string"==typeof t?t.trim():t},expression:"textarea"}})],1),e._v(" "),a("div",{staticClass:"comment-btn"},[a("el-button-group",{staticStyle:{"margin-bottom":"10px"}},[a("el-button",{attrs:{icon:"circle-check",size:"small",disabled:-1==e.pro_thumbs.state,type:1==e.pro_thumbs.state?e.successType:e.cancelType},on:{click:function(t){e.proLikeClick()}}},[e._v("\n                                赞"+e._s(e.pro_thumbs.upvote))]),e._v(" "),a("el-button",{attrs:{size:"small",disabled:1==e.pro_thumbs.state,type:-1==e.pro_thumbs.state?e.successType:e.cancelType},on:{click:function(t){e.proUnlikeClick()}}},[e._v("\n                                踩"+e._s(e.pro_thumbs.downvote)),a("i",{staticClass:"el-icon-circle-cross el-icon--right"})])],1),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.refreshNewData()}}},[e._v("发表评论")])],1)]),e._v(" "),a("el-tabs",{staticStyle:{width:"100%"},attrs:{type:"card"},model:{value:e.activeName2,callback:function(t){e.activeName2=t},expression:"activeName2"}},[a("el-tab-pane",{attrs:{label:"最热评论",name:"first"}},e._l(e.hot_data.hot_comments,function(t,s){return a("div",{directives:[{name:"show",rawName:"v-show",value:e.display_hot,expression:"display_hot"}],staticClass:"comment-content"},[a("p",{staticClass:"user-name"},[e._v(e._s(t.user.nickname))]),e._v(" "),a("div",{staticClass:"comment-reply"},[a("p",{staticClass:"user-comment"},[e._v(e._s(t.message))]),e._v(" "),a("el-input",{directives:[{name:"show",rawName:"v-show",value:e.hot_reply.replys[s].appear,expression:"hot_reply.replys[index].appear"}],staticStyle:{"{padding":"0 5px"},attrs:{type:"textarea",placeholder:"回复评论",resize:"none"},model:{value:e.hot_reply.replys[s].textarea,callback:function(t){e.hot_reply.replys[s].textarea="string"==typeof t?t.trim():t},expression:"hot_reply.replys[index].textarea"}}),e._v(" "),e._l(t.messageResponses,function(t){return a("div",{staticClass:"reply-container"},[a("div",{staticClass:"sub-reply-content"},[a("p",{staticClass:"reply-name"},[e._v(e._s(t.user.nickname)+"：")]),e._v(" "),a("div",{staticClass:"reply-content"},[a("p",{staticClass:"sub-reply-content"},[e._v(e._s(t.messageResponse))])])]),e._v(" "),a("p",{staticClass:"reply-time"},[e._v(e._s(t.releasetime))])])})],2),e._v(" "),a("div",{staticClass:"comment-right"},[a("div",{staticClass:"comment-content-btn"},[a("el-button",{attrs:{type:"primary",icon:"circle-check",size:"small",type:1==t.state?e.successType:e.cancelType},on:{click:function(a){e.commentLikeClick(t)}}},[e._v("赞"+e._s(t.upvote))]),e._v(" "),a("div",{staticClass:"reply-btn"},[a("el-button",{attrs:{type:"text"},on:{click:function(a){e.replyHotClick(t,s)}}},[e._v("回复")])],1)],1),e._v(" "),a("p",{staticClass:"comment-time"},[e._v(e._s(t.releasetime))])])])})),e._v(" "),a("el-tab-pane",{attrs:{label:"最新评论",name:"second"}},e._l(e.new_data.new_comments,function(t,s){return a("div",{directives:[{name:"show",rawName:"v-show",value:e.display_new,expression:"display_new"}],staticClass:"comment-content"},[a("p",{staticClass:"user-name"},[e._v(e._s(t.user.nickname))]),e._v(" "),a("div",{staticClass:"comment-reply"},[a("p",{staticClass:"user-comment"},[e._v(e._s(t.message))]),e._v(" "),a("el-input",{directives:[{name:"show",rawName:"v-show",value:e.new_reply.replys[s].appear,expression:"new_reply.replys[index].appear"}],staticStyle:{"{padding":"0 5px"},attrs:{type:"textarea",placeholder:"回复评论",resize:"none"},model:{value:e.new_reply.replys[s].textarea,callback:function(t){e.new_reply.replys[s].textarea="string"==typeof t?t.trim():t},expression:"new_reply.replys[index].textarea"}}),e._v(" "),e._l(t.messageResponses,function(t){return a("div",{staticClass:"reply-container"},[a("div",{staticClass:"sub-reply-content"},[a("p",{staticClass:"reply-name"},[e._v(e._s(t.user.nickname)+"：")]),e._v(" "),a("div",{staticClass:"reply-content"},[a("p",{staticClass:"sub-reply-content"},[e._v(e._s(t.messageResponse))])])]),e._v(" "),a("p",{staticClass:"reply-time"},[e._v(e._s(t.releasetime))])])})],2),e._v(" "),a("div",{staticClass:"comment-right"},[a("div",{staticClass:"comment-content-btn"},[a("el-button",{attrs:{type:"primary",icon:"circle-check",size:"small",type:1==t.state?e.successType:e.cancelType},on:{click:function(a){e.commentLikeClick(t)}}},[e._v("赞"+e._s(t.upvote))]),e._v(" "),a("div",{staticClass:"reply-btn"},[a("el-button",{attrs:{type:"text"},on:{click:function(a){e.replyNewClick(t,s)}}},[e._v("回复")])],1)],1),e._v(" "),a("p",{staticClass:"comment-time"},[e._v(e._s(t.releasetime))])])])}))],1)],1)])])},staticRenderFns:[]}},788:function(e,t,a){var s=a(659);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a(133)("36e9f0a4",s,!0)}});