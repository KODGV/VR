webpackJsonp([28],{532:function(t,e,a){a(779);var s=a(132)(a(619),a(720),null,null);t.exports=s.exports},619:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{hostURL:"/VR",uid:"1",data:{statistic:[{question:"1.你是谁？",onePercentage:"66.67",twoPercentage:"33.33"},{question:"2.我是谁？",onePercentage:"50.00",twoPercentage:"50.00"}]}}},methods:{codeParsing:function(t){var e=this,a=function(t,a){e.$notify({title:t,message:a,type:"error"})};switch(t){case-1:a("系统错误","未知错误，请上报管理员");break;case 201:a("输入域错误","验证码错误");break;case 300:a("输入域错误","邮箱或密码错误");break;case 301:a("权限问题","用户已禁用，请联系管理员");break;case 302:a("权限问题","用户未激活，请去邮箱激活用户");break;case 303:a("注册问题","邮箱已占用，请更改邮箱");break;case 304:a("注册问题","昵称已占用，请更改昵称");break;case 401:a("权限问题","用户无权访问，请联系管理员");break;case 402:a("操作错误","删除错误,请刷新重试");break;case 415:a("操作错误","文件类型错误，请上传正确文件类型");break;case 500:a("系统错误","未知错误，请上报管理员");break;case 600:a("TIME_OUT","访问超时，请检查网络连接");break;case 700:a("激活错误","非法激活链接，请联系管理员");break;case 800:a("激活错误","用户已被激活，请直接登录");break;case 1e3:a("系统错误","参数错误，上报管理员");break;case 1001:a("权限问题","用户未登录，请重新登录");break;case 1002:a("系统错误","参数错误，上报管理员")}},getData:function(){console.log("get statistic");var t=this;t.data={statistic:[]},t.$axios({url:"/Answer/statistic?producttype="+localStorage.getItem("pro_type"),method:"get",baseURL:t.hostURL}).then(function(e){console.log(e.data),t.data.statistic=e.data}).catch(function(t){console.log(t)})}},mounted:function(){var t=this;""==localStorage.getItem("ms_username")&&this.$router.replace("/login"),t.getData()}}},654:function(t,e,a){e=t.exports=a(58)(void 0),e.push([t.i,".crumbs{text-decoration:none}.bread{font-size:16px}#questions{margin-left:30px}.questionaire p{font-size:18px;margin-top:30px}.questionaire hr{width:72.7%}.submit_btn{margin-left:180px;margin-top:30px}.questionbox{padding:28px;width:800px;border:1px solid #e1e1e1;box-shadow:0 0 2px rgba(0,0,0,.1);margin-top:20px}.answer{width:100%;padding-left:15px}.radio{width:100%;display:flex}.text{width:20px}.percent{flex:1}",""])},720:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:"/user/questionaire"}},[a("i",{staticClass:"el-icon-date"}),t._v("满意度调查")]),t._v(" "),a("el-breadcrumb-item",{attrs:{to:"/user/questionaire"}},[t._v("问卷填写")]),t._v(" "),a("el-breadcrumb-item",[t._v("问卷结果")])],1)],1),t._v(" "),a("div",{staticClass:"questionaire"},[a("p",[t._v("问卷结果统计")]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"questionbox"},[a("form",{attrs:{id:"questions"}},t._l(t.data.statistic,function(e){return a("div",{staticClass:"single_question"},[a("p",{staticStyle:{"margin-bottom":"10px"}},[t._v(t._s(e.question))]),t._v(" "),a("div",{staticClass:"answer"},[a("div",{staticClass:"radio"},[a("div",{staticClass:"text"},[t._v("是")]),t._v(" "),a("div",{staticClass:"percent"},[a("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:e.onePercentage}})],1)]),t._v(" "),a("div",{staticClass:"radio"},[a("div",{staticClass:"text"},[t._v("否")]),t._v(" "),a("div",{staticClass:"percent"},[a("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:e.twoPercentage,status:"exception"}})],1)])])])}))])])])},staticRenderFns:[]}},779:function(t,e,a){var s=a(654);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(133)("89c15c80",s,!0)}});