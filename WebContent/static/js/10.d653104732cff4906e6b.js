webpackJsonp([10],{541:function(e,t,a){a(780),a(781);var o=a(132)(a(628),a(721),"data-v-1e39a916",null);e.exports=o.exports},628:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{seen:!1,activeName2:"first",allowSubmit:!0,hostURL:"/VR",id:"1",prop_id:"1",keyword:"",prop_keyword:"",content:"",upvote:1,downvote:1,changenote:"a1",encyclopedia_propData:[{id:"1",prop_id:"1",keyword:"",prop_keyword:"",content:"a",changenote:"a1"},{id:"2",prop_id:"2",keyword:"",prop_keyword:"",content:"b",changenote:"b1"}]}},methods:{codeParsing:function(e){var t=this,a=function(e,a){t.$notify({title:e,message:a,type:"error"})};switch(e){case-1:a("系统错误","未知错误，请上报管理员");break;case 201:a("输入域错误","验证码错误");break;case 300:a("输入域错误","邮箱或密码错误");break;case 301:a("权限问题","用户已禁用，请联系管理员");break;case 302:a("权限问题","用户未激活，请去邮箱激活用户");break;case 303:a("注册问题","邮箱已占用，请更改邮箱");break;case 304:a("注册问题","昵称已占用，请更改昵称");break;case 401:a("权限问题","用户无权访问，请联系管理员");break;case 402:a("操作错误","删除错误,请刷新重试");break;case 415:a("操作错误","文件类型错误，请上传正确文件类型");break;case 500:a("系统错误","未知错误，请上报管理员");break;case 600:a("TIME_OUT","访问超时，请检查网络连接");break;case 700:a("激活错误","非法激活链接，请联系管理员");break;case 800:a("激活错误","用户已被激活，请直接登录");break;case 1e3:a("系统错误","参数错误，上报管理员");break;case 1001:a("权限问题","用户未登录，请重新登录");break;case 1002:a("系统错误","参数错误，上报管理员")}},getEncyclopedia_propData:function(e){var t=this;t.encyclopedia_propData=[],t.$axios({url:"/encyclopedia-prop/"+e,method:"get",baseURL:t.hostURL}).then(function(e){t.encyclopedia_propData=e.data,console.log(encyclopedia_propData)}).catch(function(e){console.log(e)})},getEncyclopediaData:function(e){var t=this,a={id:1,keyword:"",type:"",changenote:"",upvote:1,downvote:1};t.$axios({url:"/encyclopedia-votedata/"+e,method:"get",baseURL:t.hostURL}).then(function(e){a=e.data,t.id=a.id,t.keyword=a.keyword,t.upvote=a.upvote,t.downvote=a.downvote}).catch(function(e){console.log(e)})},edit:function(e){var t=this;t.seen=!0,t.id=e.id,t.keyword=e.keyword,t.prop_id=e.prop_id,t.prop_keyword=e.prop_keyword,t.content=e.content,t.changenote=t.changenote},close:function(){this.seen=!1},submit:function(){var e=this,t={id:"1",prop_id:"1",keyword:"",prop_keyword:"",content:"a",changenote:"a1"};t.id=e.id,t.prop_id=e.prop_id,t.keyword=e.keyword,t.prop_keyword=e.prop_keyword,t.content=e.content,t.changenote=localStorage.getItem("ms_username"),e.$axios({url:"/encyclopedia-propChange",method:"post",baseURL:e.hostURL,data:t}).then(function(t){1==t.data&&(e.$message({type:"info",message:"提交成功"}),e.close())}).catch(function(e){console.log(e)})},up:function(){var e=this,t=e.id,a=localStorage.getItem("ms_username"),o="encyclopedia-vote"+t,i=localStorage.getItem(o);if(a==i)return void e.$message({type:"info",message:"您已经对该条百科做出评价"});e.$axios({url:"/encyclopedia-up/"+t,method:"get",baseURL:e.hostURL}).then(function(t){1==t.data&&(e.$message({type:"info",message:"赞成功"}),e.upvote=e.upvote+1,localStorage.setItem(o,a))}).catch(function(e){console.log(e)})},down:function(){var e=this,t=e.id,a=localStorage.getItem("ms_username"),o="encyclopedia-vote"+t,i=localStorage.getItem(o);if(a==i)return void e.$message({type:"info",message:"您已经对该条百科做出评价"});e.$axios({url:"/encyclopedia-down/"+t,method:"get",baseURL:e.hostURL}).then(function(t){1==t.data&&(e.$message({type:"info",message:"踩成功"}),e.downvote=e.downvote+1,localStorage.setItem(o,a))}).catch(function(e){console.log(e)})}},mounted:function(){var e=this;""==localStorage.getItem("ms_username")&&this.$router.replace("/login"),e.encyclopedia_propData=[],console.log("2222");var t=location.href.split("?");console.log(t[1]);var a=t[1];e.id=a,console.log(a),e.getEncyclopedia_propData(a),e.getEncyclopediaData(a);localStorage.setItem("encyclopedia-vote","")}}},655:function(e,t,a){t=e.exports=a(58)(void 0),t.push([e.i,".crumbs[data-v-1e39a916]{text-decoration:none}.bread[data-v-1e39a916]{font-size:16px}.form-box[data-v-1e39a916]{width:300px;margin-top:50px;margin-left:0;box-shadow:0 0 8px 0 rgba(232,237,250,.9),0 2px 4px 0 rgba(232,237,250,.9);padding:50px 50px 50px 10px}.submit-btn[data-v-1e39a916]{width:220px;margin-left:80px}.submit-btn button[data-v-1e39a916]{width:100%}.news-box[data-v-1e39a916]{padding:28px;width:800px;border:1px solid #e1e1e1;box-shadow:0 0 2px rgba(0,0,0,.1)}.news-title[data-v-1e39a916]{font-size:22px;color:#287d7c;line-height:50px;font-weight:400;display:block}.borderline[data-v-1e39a916]{border-bottom:1px dotted #bfbfbf}.artinfo[data-v-1e39a916]{float:left;padding-bottom:5px;color:#999;margin:0;padding:0;display:block}.author[data-v-1e39a916]{color:#666}.article p[data-v-1e39a916]{padding:30px 0 50px;font-size:18px;color:#333;line-height:200%;text-indent:2em}.article[data-v-1e39a916]{display:inline-block;line-height:26px;padding-bottom:25px}.news-img[data-v-1e39a916]{text-align:center}.news-comment[data-v-1e39a916]{margin-top:20px;text-align:center}",""])},656:function(e,t,a){t=e.exports=a(58)(void 0),t.push([e.i,".crumbs[data-v-1e39a916]{text-decoration:none}.form-box[data-v-1e39a916]{width:300px;margin-top:50px;margin-left:0;box-shadow:0 0 8px 0 rgba(232,237,250,.9),0 2px 4px 0 rgba(232,237,250,.9);padding:50px 50px 50px 10px}.submit-btn[data-v-1e39a916]{width:220px;margin-left:80px}.submit-btn button[data-v-1e39a916]{width:100%}ul[data-v-1e39a916]{list-style:none;display:block;-webkit-margin-before:1em;-webkit-margin-after:1em;-webkit-margin-start:0;-webkit-margin-end:0;-webkit-padding-start:40px}li[data-v-1e39a916]{list-style-type:none;padding-bottom:10px;border-bottom:1px solid #ccc}a[data-v-1e39a916],a[data-v-1e39a916]:hover,a[data-v-1e39a916]:visited{text-decoration:none}.or-btn[data-v-1e39a916]{border:1px solid #f2af00;background:#f2af00}.eg-item[data-v-1e39a916],.news-item[data-v-1e39a916]{margin-bottom:24px;overflow:hidden}.news-list .news-item .link-tit[data-v-1e39a916]{color:#e9c06c}.news-list .news-item img[data-v-1e39a916]{display:block;float:left;margin-right:20px;width:200px}.eg-title[data-v-1e39a916],.news-list .news-item .news-title[data-v-1e39a916]{display:block;font-size:22px;font-weight:lighter;color:#3e3e3e;line-height:50px;height:50px;overflow:hidden}.news-list .news-desc[data-v-1e39a916]{display:block;height:60px;overflow:hidden;font-size:14px;color:#898989;line-height:1.5}.pagination[data-v-1e39a916]{margin-left:50px}.sidebar[data-v-1e39a916]{display:block;position:absolute;width:400px;right:0;top:0;bottom:0;background:#2e363f}.sidebar>ul[data-v-1e39a916]{height:100%}.events[data-v-1e39a916]{padding:0}.eg-title[data-v-1e39a916],.title[data-v-1e39a916]{font-size:2em;color:#789;margin-bottom:1em;font-family:Marvel,sans-serif}.news-title[data-v-1e39a916]{font-size:2em;color:#f2af00;font-family:Marvel,sans-serif}.event-text p[data-v-1e39a916]{font-size:1em;color:#777676;line-height:1.8em;margin-top:.5em}.event-text a[data-v-1e39a916]{font-size:.95em;color:#fff;background:#a2b040;padding:.5em 1em;display:inline-block;margin-top:.8em;border-radius:3px}.event-text a[data-v-1e39a916]:hover{background:#f2af00}.events-grid[data-v-1e39a916]{margin-bottom:3em}.wthree_head[data-v-1e39a916]{font-size:2em;color:#f2af00;text-align:center;text-transform:capitalize}.wthree_head i[data-v-1e39a916]{display:block;text-align:center;color:#fff;background:#ff0101;margin:0 auto;border-radius:25px;line-height:1.5;margin-bottom:.5em}.wthree_head span[data-v-1e39a916]{display:block;font-size:.5em;padding:.5em 0;border-top:1px solid #f2af00;border-bottom:1px solid #f2af00;width:11%;text-transform:uppercase;letter-spacing:5px;margin:0 auto}.el-input[data-v-1e39a916]{padding:8px;width:95%}#conSpace[data-v-1e39a916]{height:200px;width:380px;margin-left:10px}",""])},721:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:"/user/pedia"}},[a("i",{staticClass:"el-icon-date"}),e._v(" "),a("span",{staticClass:"bread"},[e._v("VR百科")])]),e._v(" "),a("el-breadcrumb-item",[a("span",{staticClass:"bread"},[e._v("百科知识")])])],1)],1),e._v(" "),e.seen?a("div",{staticClass:"sidebar"},[a("div",{staticClass:"container"},[e._m(0),e._v(" "),a("el-input",{attrs:{placeholder:"词条名",id:"keySpace"},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}}),e._v(" "),a("el-input",{attrs:{placeholder:"词条属性",id:"pkSpace"},model:{value:e.prop_keyword,callback:function(t){e.prop_keyword=t},expression:"prop_keyword"}}),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],attrs:{placeholder:"内容",id:"conSpace"},domProps:{value:e.content},on:{input:function(t){t.target.composing||(e.content=t.target.value)}}}),e._v(" "),a("el-button",{staticClass:"or-btn",staticStyle:{"margin-left":"30%","margin-top":"10px"},attrs:{type:"primary"},on:{click:function(t){e.submit()}}},[e._v("提交")]),e._v(" "),a("el-button",{staticClass:"or-btn",staticStyle:{"margin-top":"10px"},attrs:{type:"primary"},on:{click:function(t){e.close()}}},[e._v("关闭")])],1)]):e._e(),e._v(" "),a("div",{staticClass:"events"},[a("div",{staticClass:"container"},[a("div",{staticClass:"news-box"},[a("h2",{staticClass:"title"},[e._v(e._s(e.keyword))]),e._v(" "),e._m(1),e._v(" "),a("div",{staticClass:"article"},[a("ul",{staticClass:"news-list"},e._l(e.encyclopedia_propData,function(t){return a("li",{staticClass:"news-item"},[a("a",{staticClass:"link-tit",attrs:{href:"javascript:void(0);",title:""}},[a("span",{staticClass:"news-title"},[e._v(e._s(t.prop_keyword))]),e._v(" "),a("span",{staticClass:"news-desc"},[e._v(e._s(t.content))])]),e._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"warning"},on:{click:function(a){e.edit(t)}}},[e._v("编辑")])],1)}))]),e._v(" "),a("div",{staticClass:"news-comment"},[a("el-button-group",[a("el-button",{attrs:{type:"primary",icon:"circle-check"},on:{click:function(t){e.up()}}},[e._v("赞"+e._s(e.upvote))]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.down()}}},[e._v("踩"+e._s(e.downvote)),a("i",{staticClass:"el-icon-circle-cross el-icon--right"})])],1)],1)])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",{staticClass:"wthree_head"},[a("i",{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}}),e._v(" "),a("span",[e._v("编辑")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"borderline clearfix"},[a("p",{staticClass:"artinfo"},[a("span",{staticClass:"author"})])])}]}},780:function(e,t,a){var o=a(655);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a(133)("8ecedaa2",o,!0)},781:function(e,t,a){var o=a(656);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a(133)("8b1c3464",o,!0)}});