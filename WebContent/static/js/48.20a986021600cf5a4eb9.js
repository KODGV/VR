webpackJsonp([48],{506:function(e,t,a){a(784);var s=a(132)(a(591),a(725),"data-v-38565817",null);e.exports=s.exports},591:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{activeName2:"first",allowSubmit:!0,hostURL:"/VR",successType:"success",cancelType:"primary",textarea:"",display_hot:!1,display_new:!1,newsData:{id:3,tag:null,title:"痛失手机江山的联想，想要在VR热潮中分一杯羹",path:"D:\\VR新闻爬虫\\test2",lastEditTime:"发布时间：2017-06-11 12:13:35",source:"来源：POPPUR",upvote:null,downvote:null,editor_id:null,author:"作者：",news_abstract:"在很多人眼里，联想手机似乎是一个比较“玄学”的存在。在PC领域拼搏多年，联想终于打进智能手机市场。只",content:"在很多人眼里，联想手机似乎是一个比较“玄学”的存在。在PC领域拼搏多年，联想终于打进智能手机市场。只可惜初出茅庐的联想并没有什么经验，无奈在苹果和小米的拉锯战中成为了炮灰。虽然联想在2014年收购了手机界骨灰级元老摩托罗拉，但这条路始终还是没有想象中的那么好走。先是苹果傲视群雄，后来OPPO、vivo崛起，势单力薄的联想手机想要站稳脚跟还是有点难的。根据此前的消息，联想手机业务分支品牌ZUK已经暂停运营了。痛失手机江山之后，联想将落脚点放在了潜力巨大的虚拟现实领域。去年10月，联想与微软进行了合作，未来两者将会在混合现实领域(包括增强现实和虚拟现实)共同谋求发展，开辟新天地。随后联想也很快推出了一款主打入门的混合现实头显，斩获了不少用户的好评。而在最近的CES亚洲展上，联想还推出了首款背包VR PC——Avalon  VR。这款PC外观设计精致，虽然采用了金属机身的设计，但整机的重量也仅有2.5kg(包括电池)。配置方面，Avalon  VR最高支持英特尔酷睿i7处理器，32GB DDR4内存以及512GB PCI-E固态硬盘，同时内置AMD Radeon  RX480/580独立显卡，足以轻松应对市面上所有VR游戏。此外，该电脑还采用了双电池设计，并且支持热插拔，官方称其普通模式下的续航时间可达10小时，即使是在高性能下进行VR体验也能坚持1.5小时。而为了帮助主机散热，该机还配备了水冷散热系统，出风口也设置在了背对背部的位置，避免热风吹向人体。根据联想的介绍，之后张艺谋VR体验店会全线采用Avalon  VR背包电脑，可见联想在VR界的地位还是值得被肯定的。而随着与微软的合作更加深入之后，未来联想还会在增强现实乃至混合现实界混出一片天地。不知道未来的PC市场究竟会变成怎样呢?真是越来越期待了呀。Via：POPPUR",pic_location:"http://www.vrrb.cn/d/file/kuaixun/2017-06-11/74ba6748a8a88ed7b083e961a7ff9da4.jpg",is_push:null},news_thumbs:{upvote:50,downvote:10,state:0},hot_data:{hot_comments:[{id:1,user:{id:1,nickname:"lalala"},message:"1",upvote:2,belong:"8",releasetime:"2017-8-17",messageResponses:[{user:{id:10,nickname:"heiheihei"},messageResponse:"555",releasetime:"2017-8-17"}],state:0}]},new_data:{new_comments:[{id:2,user:{id:2,nickname:null},message:"2",upvote:3,belong:"4",releasetime:null,messageResponses:[{user:{id:11,nickname:null},messageResponse:"5555",releasetime:null}],state:0}]},hot_reply:{replys:[{appear:0,textarea:""}]},new_reply:{replys:[{appear:0,textarea:""}]}}},methods:{codeParsing:function(e){var t=this,a=function(e,a){t.$notify({title:e,message:a,type:"error"})};switch(e){case-1:a("系统错误","未知错误，请上报管理员");break;case 201:a("输入域错误","验证码错误");break;case 300:a("输入域错误","邮箱或密码错误");break;case 301:a("权限问题","用户已禁用，请联系管理员");break;case 302:a("权限问题","用户未激活，请去邮箱激活用户");break;case 303:a("注册问题","邮箱已占用，请更改邮箱");break;case 304:a("注册问题","昵称已占用，请更改昵称");break;case 401:a("权限问题","用户无权访问，请联系管理员");break;case 402:a("操作错误","删除错误,请刷新重试");break;case 415:a("操作错误","文件类型错误，请上传正确文件类型");break;case 500:a("系统错误","未知错误，请上报管理员");break;case 600:a("TIME_OUT","访问超时，请检查网络连接");break;case 700:a("激活错误","非法激活链接，请联系管理员");break;case 800:a("激活错误","用户已被激活，请直接登录");break;case 1e3:a("系统错误","参数错误，上报管理员");break;case 1001:a("权限问题","用户未登录，请重新登录");break;case 1002:a("系统错误","参数错误，上报管理员")}},postProLike:function(e){var t=this;t.$axios({url:"/Thumbs/upvote/"+localStorage.getItem("ms_userid"),method:"post",baseURL:t.hostURL,data:{name:"firm"+localStorage.getItem("salesModel"),value:e}}).catch(function(e){console.log(e)})},proLikeClick:function(){var e=this;e.news_thumbs.state=1==e.news_thumbs.state?0:1;var t=1==e.news_thumbs.state?1:-1;e.news_thumbs.upvote+=t,e.postProLike(t)},postProUnlike:function(e){var t=this;t.$axios({url:"/Thumbs/downvote/"+localStorage.getItem("ms_userid"),method:"post",baseURL:t.hostURL,data:{name:"firm"+localStorage.getItem("salesModel"),value:e}}).catch(function(e){console.log(e)})},proUnlikeClick:function(){var e=this;e.news_thumbs.state=-1==e.news_thumbs.state?0:-1;var t=-1==e.news_thumbs.state?1:-1;e.news_thumbs.downvote+=t,e.postProUnlike(t)},postTextArea:function(){var e=this;e.$axios({url:"/MessageLeaving/"+localStorage.getItem("ms_userid"),method:"post",baseURL:e.hostURL,data:{content:e.textarea,belong:"firm"+e.newsData.id}}).catch(function(e){console.log(e)})},refreshNewData:function(){var e=this,t=e.textarea;if(""!=t){e.$message("评论成功！"),e.postTextArea(),e.new_data.new_comments.reverse(),e.new_data.new_comments.push({id:"",user:{id:"",nickname:localStorage.getItem("ms_username")},message:t,upvote:0,belong:"0",releasetime:"刚刚",messageResponses:[],state:0}),e.new_data.new_comments.reverse(),e.hot_data.hot_comments.push({id:"",user:{id:"",nickname:localStorage.getItem("ms_username")},message:t,upvote:0,belong:"0",releasetime:"刚刚",messageResponses:[],state:0});var a=e.new_data.new_comments.length;e.new_reply.replys=[];for(var s=0;s<a;s++)e.new_reply.replys.push({appear:0,textarea:""});a=e.hot_data.hot_comments.length,e.hot_reply.replys=[];for(var s=0;s<a;s++)e.hot_reply.replys.push({appear:0,textarea:""});e.textarea=""}},replyHotClick:function(e,t){var a=this;a.hot_reply.replys[t].appear?""==a.hot_reply.replys[t].textarea?a.hot_reply.replys[t].appear=0:(a.$axios({url:"/MessageResponse/"+localStorage.getItem("ms_userid"),method:"post",baseURL:a.hostURL,data:{content:a.hot_reply.replys[t].textarea,leavingid:e.id}}).catch(function(e){console.log(e)}),a.$message("回复成功！"),a.hot_data.hot_comments[t].messageResponses.push({user:{id:"",nickname:localStorage.getItem("ms_username")},messageResponse:a.hot_reply.replys[t].textarea,releasetime:"刚刚"}),a.hot_reply.replys[t].textarea="",a.hot_reply.replys[t].appear=0):a.hot_reply.replys[t].appear=1},replyNewClick:function(e,t){var a=this;a.new_reply.replys[t].appear?""==a.new_reply.replys[t].textarea?a.new_reply.replys[t].appear=0:(a.$axios({url:"/MessageResponse/"+localStorage.getItem("ms_userid"),method:"post",baseURL:a.hostURL,data:{content:a.new_reply.replys[t].textarea,leavingid:e.id}}).catch(function(e){console.log(e)}),a.$message("回复成功！"),a.new_data.new_comments[t].messageResponses.push({user:{id:"",nickname:localStorage.getItem("ms_username")},messageResponse:a.new_reply.replys[t].textarea,releasetime:"刚刚"}),a.new_reply.replys[t].textarea="",a.new_reply.replys[t].appear=0):a.new_reply.replys[t].appear=1},getHotComments:function(e){var t=this;t.hot_data={hot_comments:[]},t.hot_reply={replys:[{appear:0,textarea:""}]},t.$axios({url:"/MessageLeaving/show/"+localStorage.getItem("ms_userid")+"?belong=firm"+e+"&condition=hot",method:"get",baseURL:t.hostURL}).then(function(e){t.display_hot=!0,t.hot_data.hot_comments=e.data,t.hot_data.hot_comments.reverse();var a=t.hot_data.hot_comments.length;t.hot_reply.replys=[];for(var s=0;s<a;s++)t.hot_reply.replys.push({appear:0,textarea:""})}).catch(function(e){console.log(e)})},getNewsData:function(e){var t=this;t.newsData={},t.$axios({url:"/news/"+e,method:"get",baseURL:t.hostURL}).then(function(e){t.newsData=e.data,t.news_thumbs.upvote=e.data.upvote,t.news_thumbs.downvote=e.data.downvote}).catch(function(e){console.log(e)})},getNewComments:function(e){var t=this;t.new_data={new_comments:[]},t.new_reply={replys:[{appear:0,textarea:""}]},t.$axios({url:"/MessageLeaving/show/"+localStorage.getItem("ms_userid")+"?belong=firm"+e+"&condition=time",method:"get",baseURL:t.hostURL}).then(function(e){t.display_new=!0,t.new_data.new_comments=e.data,t.new_data.new_comments.reverse();var a=t.new_data.new_comments.length;t.new_reply.replys=[];for(var s=0;s<a;s++)t.new_reply.replys.push({appear:0,textarea:""})}).catch(function(e){console.log(e)})},getProThumbs:function(){var e=this;e.pro_thumbs={},e.$axios({url:"/Thumbs/"+localStorage.getItem("ms_userid"),method:"post",baseURL:e.hostURL,data:{belong:"firm"+localStorage.getItem("salesModel")}}).then(function(t){e.pro_thumbs=t.data}).catch(function(e){console.log(e)})},postCommLike:function(e,t){var a=this;a.$axios({url:"/MessageLeaving/upvote/"+localStorage.getItem("ms_userid"),method:"post",baseURL:a.hostURL,data:{id:"firm"+e.id,value:t}}).catch(function(e){console.log(e)})},commentLikeClick:function(e){var t=this;e.state=1==e.state?0:1;var a=1==e.state?1:-1;e.upvote+=a,t.postCommLike(e,a)},upNumber:function(e){var t=this;t.$axios({url:"/news/upvote/"+e,method:"get",baseURL:t.hostURL}).then(function(e){t.upnumber=e.data}).catch(function(e){console.log(e)})},downNumber:function(e){var t=this;t.$axios({url:"/news/downvote/"+e,method:"get",baseURL:t.hostURL}).then(function(e){t.downnumber=e.data}).catch(function(e){console.log(e)})}},mounted:function(){var e=this;""==localStorage.getItem("ms_username")&&this.$router.replace("/login");var t=location.href.split("?"),a=t[1];e.getProThumbs(),e.getNewsData(a),e.getHotComments(a),e.getNewComments(a)}}},661:function(e,t,a){t=e.exports=a(58)(void 0),t.push([e.i,".crumbs[data-v-38565817]{text-decoration:none}.bread[data-v-38565817]{font-size:16px}.form-box[data-v-38565817]{width:300px;margin-top:50px;margin-left:0;box-shadow:0 0 8px 0 rgba(232,237,250,.9),0 2px 4px 0 rgba(232,237,250,.9);padding:50px 50px 50px 10px}.submit-btn[data-v-38565817]{width:220px;margin-left:80px}.submit-btn button[data-v-38565817]{width:100%}.news-box[data-v-38565817]{padding:28px;width:800px;border:1px solid #e1e1e1;box-shadow:0 0 2px rgba(0,0,0,.1)}.news-title[data-v-38565817]{font-size:22px;color:#287d7c;line-height:50px;font-weight:400;display:block;text-align:center}.borderline[data-v-38565817]{border-bottom:1px dotted #bfbfbf}.comment-content[data-v-38565817]{display:flex;width:100%;padding:15px 5px 5px;border-bottom:1px solid #ddd}.comment-reply[data-v-38565817]{width:70%}.user-comment[data-v-38565817]{font-size:17px;text-align:left;width:100%;padding-bottom:15px}.reply-container[data-v-38565817]{width:80%;margin:10px 0 0 50px;border-bottom:1px solid #ddd}.sub-reply-content[data-v-38565817]{display:flex}.reply-name[data-v-38565817]{color:#20a0ff;font-size:13px;text-align:right;flex:1}.reply-content[data-v-38565817]{float:right;width:80%}.sub-reply-content[data-v-38565817]{font-size:13px;text-align:left;width:100%}.reply-time[data-v-38565817]{color:#666;width:100%;text-align:right;font-size:10px;padding:5px 0}.comment-time[data-v-38565817]{color:#666;font-size:10px;width:100%;text-align:left;margin-top:10px}.comment-right[data-v-38565817]{flex:1;padding:10px}.user-name[data-v-38565817]{font-size:15px;color:#666;width:15%;text-align:center}.artinfo[data-v-38565817]{float:left;padding-bottom:5px;color:#999;margin:0;padding:0;display:block;text-align:center;margin-top:15px;width:800px}.author[data-v-38565817]{color:#666}.article p[data-v-38565817]{padding:30px 0 50px;font-size:18px;color:#333;line-height:200%;text-indent:2em}.article[data-v-38565817]{display:inline-block;line-height:26px;padding-bottom:25px}.news-img[data-v-38565817]{text-align:center}.news-comment[data-v-38565817]{margin-top:20px;text-align:center;width:100%}.comment-btn[data-v-38565817]{margin-left:10px}.item[data-v-38565817]{margin-top:10px;margin-right:40px}.comment[data-v-38565817]{margin:20px;width:100%}.my-comment[data-v-38565817]{float:left;width:80%}",""])},725:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:"/user/news-firm"}},[a("i",{staticClass:"el-icon-date"}),e._v(" "),a("span",{staticClass:"bread"},[e._v("VR资讯")])]),e._v(" "),a("el-breadcrumb-item",[a("span",{staticClass:"bread"},[e._v("厂商")])])],1)],1),e._v(" "),a("div",{staticClass:"news-box"},[a("h2",{staticClass:"news-title"},[e._v(e._s(e.newsData.title))]),e._v(" "),a("div",{staticClass:"borderline clearfix"},[a("p",{staticClass:"artinfo"},[a("span",{staticClass:"author"},[e._v("来源："+e._s(e.newsData.source))]),e._v("   发布时间："+e._s(e.newsData.lastEditTime))])]),e._v(" "),a("div",{staticClass:"article"},[a("p",{domProps:{innerHTML:e._s(e.newsData.content)}})]),e._v(" "),a("div",{staticClass:"news-comment"},[a("div",{staticClass:"comment"},[a("div",{staticClass:"my-comment"},[a("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入您对该产品的评价",resize:"none"},model:{value:e.textarea,callback:function(t){e.textarea="string"==typeof t?t.trim():t},expression:"textarea"}},[e._v(">\n                        ")])],1),e._v(" "),a("div",{staticClass:"comment-btn"},[a("el-button-group",{staticStyle:{"margin-bottom":"10px"}},[a("el-button",{attrs:{icon:"circle-check",size:"small",disabled:-1==e.news_thumbs.state,type:1==e.news_thumbs.state?e.successType:e.cancelType},on:{click:function(t){e.proLikeClick()}}},[e._v("\n                                赞"+e._s(e.news_thumbs.upvote))]),e._v(" "),a("el-button",{attrs:{size:"small",disabled:1==e.news_thumbs.state,type:-1==e.news_thumbs.state?e.successType:e.cancelType},on:{click:function(t){e.proUnlikeClick()}}},[e._v("\n                                踩"+e._s(e.news_thumbs.downvote)),a("i",{staticClass:"el-icon-circle-cross el-icon--right"})])],1),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.refreshNewData()}}},[e._v("发表评论")])],1)])]),e._v(" "),a("div",[a("el-tabs",{staticStyle:{width:"100%"},attrs:{type:"card"},model:{value:e.activeName2,callback:function(t){e.activeName2=t},expression:"activeName2"}},[a("el-tab-pane",{attrs:{label:"最热评论",name:"first"}},e._l(e.hot_data.hot_comments,function(t,s){return a("div",{directives:[{name:"show",rawName:"v-show",value:e.display_hot,expression:"display_hot"}],staticClass:"comment-content"},[a("p",{staticClass:"user-name"},[e._v(e._s(t.user.nickname))]),e._v(" "),a("div",{staticClass:"comment-reply"},[a("p",{staticClass:"user-comment"},[e._v(e._s(t.message))]),e._v(" "),a("el-input",{directives:[{name:"show",rawName:"v-show",value:e.hot_reply.replys[s].appear,expression:"hot_reply.replys[index].appear"}],staticStyle:{"{padding":"0 5px"},attrs:{type:"textarea",placeholder:"回复评论",resize:"none"},model:{value:e.hot_reply.replys[s].textarea,callback:function(t){e.hot_reply.replys[s].textarea="string"==typeof t?t.trim():t},expression:"hot_reply.replys[index].textarea"}}),e._v(" "),e._l(t.messageResponses,function(t){return a("div",{staticClass:"reply-container"},[a("div",{staticClass:"sub-reply-content"},[a("p",{staticClass:"reply-name"},[e._v(e._s(t.user.nickname)+"：")]),e._v(" "),a("div",{staticClass:"reply-content"},[a("p",{staticClass:"sub-reply-content"},[e._v(e._s(t.messageResponse))])])]),e._v(" "),a("p",{staticClass:"reply-time"},[e._v(e._s(t.releasetime))])])})],2),e._v(" "),a("div",{staticClass:"comment-right"},[a("div",{staticClass:"comment-content-btn"},[a("el-button",{attrs:{type:"primary",icon:"circle-check",size:"small",type:1==t.state?e.successType:e.cancelType},on:{click:function(a){e.commentLikeClick(t)}}},[e._v("赞"+e._s(t.upvote))]),e._v(" "),a("div",{staticClass:"reply-btn"},[a("el-button",{attrs:{type:"text"},on:{click:function(a){e.replyHotClick(t,s)}}},[e._v("回复")])],1)],1),e._v(" "),a("p",{staticClass:"comment-time"},[e._v(e._s(t.releasetime))])])])})),e._v(" "),a("el-tab-pane",{attrs:{label:"最新评论",name:"second"}},e._l(e.new_data.new_comments,function(t,s){return a("div",{directives:[{name:"show",rawName:"v-show",value:e.display_new,expression:"display_new"}],staticClass:"comment-content"},[a("p",{staticClass:"user-name"},[e._v(e._s(t.user.nickname))]),e._v(" "),a("div",{staticClass:"comment-reply"},[a("p",{staticClass:"user-comment"},[e._v(e._s(t.message))]),e._v(" "),a("el-input",{directives:[{name:"show",rawName:"v-show",value:e.new_reply.replys[s].appear,expression:"new_reply.replys[index].appear"}],staticStyle:{"{padding":"0 5px"},attrs:{type:"textarea",placeholder:"回复评论",resize:"none"},model:{value:e.new_reply.replys[s].textarea,callback:function(t){e.new_reply.replys[s].textarea="string"==typeof t?t.trim():t},expression:"new_reply.replys[index].textarea"}}),e._v(" "),e._l(t.messageResponses,function(t){return a("div",{staticClass:"reply-container"},[a("div",{staticClass:"sub-reply-content"},[a("p",{staticClass:"reply-name"},[e._v(e._s(t.user.nickname)+"：")]),e._v(" "),a("div",{staticClass:"reply-content"},[a("p",{staticClass:"sub-reply-content"},[e._v(e._s(t.messageResponse))])])]),e._v(" "),a("p",{staticClass:"reply-time"},[e._v(e._s(t.releasetime))])])})],2),e._v(" "),a("div",{staticClass:"comment-right"},[a("div",{staticClass:"comment-content-btn"},[a("el-button",{attrs:{type:"primary",icon:"circle-check",size:"small",type:1==t.state?e.successType:e.cancelType},on:{click:function(a){e.commentLikeClick(t)}}},[e._v("赞"+e._s(t.upvote))]),e._v(" "),a("div",{staticClass:"reply-btn"},[a("el-button",{attrs:{type:"text"},on:{click:function(a){e.replyNewClick(t,s)}}},[e._v("回复")])],1)],1),e._v(" "),a("p",{staticClass:"comment-time"},[e._v(e._s(t.releasetime))])])])}))],1)],1)])])},staticRenderFns:[]}},784:function(e,t,a){var s=a(661);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a(133)("0ba4aea0",s,!0)}});