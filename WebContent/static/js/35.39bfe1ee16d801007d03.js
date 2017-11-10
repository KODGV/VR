webpackJsonp([35],{519:function(e,t,a){a(808);var s=a(132)(a(594),a(751),null,null);e.exports=s.exports},594:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{hostURL:"/VR",datalist:[],cur_page:1,multipleSelection:[],select_cate:"",select_word:"",del_list:[],is_search:!1,del_succ:!0}},mounted:function(){var e=this;e.getNews(e.cur_page)},methods:{getNewsBySelector:function(e,t){var a=this;a.datalist=[],a.$axios({url:"/news_lists/"+e+"/"+t,method:"get",baseURL:a.hostURL}).then(function(e){0==e.data.length?1!=a.cur_page&&(a.cur_page=a.cur_page-1,a.$message({type:"info",message:"已经是最后一页了！"})):(a.datalist=[],a.datalist=e.data)}).catch(function(e){a.$message({type:"info",message:"connect fail"})})},newschange:function(){this.cur_page=1,this.getNewsBySelector(this.cur_page,this.select_cate)},codeParsing:function(e){var t=this,a=function(e,a){t.$notify({title:e,message:a,type:"error"})};switch(e){case-1:a("系统错误","未知错误，请上报管理员");break;case 201:a("输入域错误","验证码错误");break;case 300:a("输入域错误","邮箱或密码错误");break;case 301:a("权限问题","用户已禁用，请联系管理员");break;case 302:a("权限问题","用户未激活，请去邮箱激活用户");break;case 303:a("注册问题","邮箱已占用，请更改邮箱");break;case 304:a("注册问题","昵称已占用，请更改昵称");break;case 401:a("权限问题","用户无权访问，请联系管理员");break;case 402:a("操作错误","删除错误,请刷新重试");break;case 415:a("操作错误","文件类型错误，请上传正确文件类型");break;case 500:a("系统错误","未知错误，请上报管理员");break;case 600:a("TIME_OUT","访问超时，请检查网络连接");break;case 700:a("激活错误","非法激活链接，请联系管理员");break;case 800:a("激活错误","用户已被激活，请直接登录");break;case 1e3:a("系统错误","参数错误，上报管理员");break;case 1001:a("权限问题","用户未登录，请重新登录");break;case 1002:a("系统错误","参数错误，上报管理员")}},getNews:function(e){var t=this;t.$axios({url:"/news_lists/"+e+"/0",method:"get",baseURL:t.hostURL}).then(function(e){if(console.log("len="+e.data.length),0==e.data.length)1!=t.cur_page&&(t.cur_page=t.cur_page-1,t.$message({type:"info",message:"已经是最后一页了！"}));else{t.datalist=[];for(var a=[],s=[],l=[],n=[],c=[],i=[],o=0;o<e.data.length;o++)1==e.data[o].type?a.push(e.data[o]):2==e.data[o].type?s.push(e.data[o]):3==e.data[o].type?l.push(e.data[o]):4==e.data[o].type?n.push(e.data[o]):5==e.data[o].type?c.push(e.data[o]):6==e.data[o].type&&i.push(e.data[o]);t.datalist=a;for(var o=0;o<s.length;o++)t.datalist.push(s[o]);for(var o=0;o<l.length;o++)t.datalist.push(l[o]);for(var o=0;o<n.length;o++)t.datalist.push(n[o]);for(var o=0;o<c.length;o++)t.datalist.push(c[o]);for(var o=0;o<i.length;o++)t.datalist.push(i[o])}}).catch(function(e){console.log(e),t.$message({type:"info",message:"connect fail"})})},handleCurrentChange:function(){var e=this;console.log("current-Page:"),console.log(e.cur_page),""==e.select_cate?e.getNews(e.cur_page):e.getNewsBySelector(this.cur_page,this.select_cate)},search:function(){this.is_search=!0,console.log("is_search")},handleEdit:function(e,t){var a=this;a.$router.push("/admin/editor?"+a.datalist[e].id)},handleDelete:function(e,t){var a=this,s=this;s.$confirm("此操作将永久删除该条新闻，是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){s.$axios({url:"/news_delete/"+s.datalist[e].id,method:"get",baseURL:s.hostURL}).then(function(t){s.$message({type:"success",message:"删除成功！"}),s.datalist.splice(e,1)}).catch(function(e){s.$message({type:"info",message:"删除失败！"})})}).catch(function(){a.$message({type:"info",message:"已取消删除"})})},delAll:function(){var e=this;length=e.multipleSelection.length;for(var t=0;t<length;t++)e.delOne(e.multipleSelection[t]);1==e.del_succ&&(e.$message({type:"success",message:"删除成功！"}),e.datalist=e.datalist.filter(function(t){return!e.multipleSelection.some(function(e){return e.id===t.id})})),0==e.datalist.length&&e.getNews(e.cur_page)},delOne:function(e){var t=this;t.$axios({url:"/news_delete/"+e.id,method:"get",baseURL:t.hostURL}).then(function(e){}).catch(function(e){t.del_succ=!1,t.$message({type:"info",message:"connect fail"})})},handleSelectionChange:function(e){this.multipleSelection=e}}}},679:function(e,t,a){t=e.exports=a(58)(void 0),t.push([e.i,".content{float:left;width:70%}.handle-box{margin-bottom:20px}.handle-select{width:120px}.handle-input{width:300px;display:inline-block}",""])},751:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-menu"}),e._v(" 新闻管理")]),e._v(" "),a("el-breadcrumb-item",[e._v("新闻编辑")])],1)],1),e._v(" "),a("div",{staticClass:"handle-box"},[a("el-button",{staticClass:"handle-del mr10",attrs:{type:"primary",icon:"delete"},on:{click:e.delAll}},[e._v("批量删除")]),e._v(" "),a("el-select",{staticClass:"handle-select mr10",staticStyle:{width:"150px"},attrs:{placeholder:"筛选新闻类型"},on:{change:e.newschange},model:{value:e.select_cate,callback:function(t){e.select_cate=t},expression:"select_cate"}},[a("el-option",{key:"1",attrs:{label:"最新",value:"1"}}),e._v(" "),a("el-option",{key:"2",attrs:{label:"融资",value:"2"}}),e._v(" "),a("el-option",{key:"3",attrs:{label:"产业",value:"3"}}),e._v(" "),a("el-option",{key:"4",attrs:{label:"厂商",value:"4"}}),e._v(" "),a("el-option",{key:"5",attrs:{label:"专访",value:"5"}}),e._v(" "),a("el-option",{key:"6",attrs:{label:"技术",value:"6"}})],1)],1),e._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.datalist,border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"lastEditTime",label:"日期",sortable:"",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"author",label:"作者",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"title",label:"标题"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":e.cur_page,layout:"prev, next"},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.cur_page=t}}})],1)],1)},staticRenderFns:[]}},808:function(e,t,a){var s=a(679);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a(133)("977fecac",s,!0)}});