webpackJsonp([43],{513:function(e,t,a){a(806);var i=a(132)(a(599),a(747),"data-v-6a842fe4",null);e.exports=i.exports},599:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(189),l=i(o),s=a(188),n=i(s);t.default={components:{VueImgInputer:l.default,quilEditor:n.default},data:function(){return{hostURL:"/VR",imgSrc:"",subSuccess:!1,edit:!0,e_id:null,userId:null,picValue:null,picTitle:"",title:null,quillEditor:null,editorOption:{modules:{toolbar:[[{header:[2,3,!1]}],["bold","italic"],[{list:"ordered"},{list:"bullet"}],["image"]]},placeholder:"请编写您的媒体自媒体测评..."}}},methods:{codeParsing:function(e){var t=this,a=function(e,a){t.$notify({title:e,message:a,type:"error"})};switch(e){case-1:a("系统错误","未知错误，请上报管理员");break;case 201:a("输入域错误","验证码错误");break;case 300:a("输入域错误","邮箱或密码错误");break;case 301:a("权限问题","用户已禁用，请联系管理员");break;case 302:a("权限问题","用户未激活，请去邮箱激活用户");break;case 303:a("注册问题","邮箱已占用，请更改邮箱");break;case 304:a("注册问题","昵称已占用，请更改昵称");break;case 401:a("权限问题","用户无权访问，请联系管理员");break;case 402:a("操作错误","删除错误,请刷新重试");break;case 415:a("操作错误","文件类型错误，请上传正确文件类型");break;case 500:a("系统错误","未知错误，请上报管理员");break;case 600:a("TIME_OUT","访问超时，请检查网络连接");break;case 700:a("激活错误","非法激活链接，请联系管理员");break;case 800:a("激活错误","用户已被激活，请直接登录");break;case 1e3:a("系统错误","参数错误，上报管理员");break;case 1001:a("权限问题","用户未登录，请重新登录");break;case 1002:a("系统错误","参数错误，上报管理员")}},fileChange:function(e,t){var a=this,i=this;console.log("picValue:",e),console.log("FileName:",t),console.log(e.imgSrc);var o=new FormData;o.append("file",e),i.$axios({url:"/upload",method:"post",baseURL:i.hostURL,data:o}).then(function(e){a.picTitle=e.data.object,console.log(a.picTitle)}).catch(function(e){console.log(e)})},subMse:function(){var e=this;if(e.title&&e.quillEditor&&e.picTitle){var t={evaluationId:e.e_id,titlePic:e.picTitle,evaluationTitle:e.title,authorId:e.userId,evaluationText:{evaluationBody:e.quillEditor},postTime:Date.parse(new Date)};console.log(t),e.$axios({url:"/admins/evaluations/evaluation",method:"put",baseURL:e.hostURL,data:t}).then(function(t){console.log(t.data.object),e.$notify({title:"成功！",message:"成功修改测评。",type:"success"}),e.$router.push("/admin/mseAdminView?"+e.e_id)}).catch(function(t){console.log(t),e.codeParsing(t.response.status)})}else e.$notify({title:"提示！",message:"请填写媒体自评测的标题、标题图片及（或）文章内容后再进行提交。",type:"error"})},getMseData:function(e){var t=this;t.$axios({url:"/evaluations/"+e,method:"GET",baseURL:t.hostURL}).then(function(e){var a=e.data.object.evaluation;console.log(a),t.picTitle=a.titlePic,t.imgSrc=a.titlePic,t.quillEditor=a.evaluationText,t.title=a.evaluationTitle,t.userId=a.authorId}).catch(function(e){t.codeParsing(e.response.status),console.log(e.response.status)})}},computed:{},mounted:function(){var e=this,t=location.href.split("?"),a=t[1];e.e_id=a,e.getMseData(a)}}},681:function(e,t,a){t=e.exports=a(58)(void 0),t.push([e.i,".vii div[data-v-6a842fe4]{margin:0 auto;display:block}.vii div div img[data-v-6a842fe4]{max-width:710px;max-height:300px}.title input[data-v-6a842fe4]{width:645px;font-size:24px;font-weight:400;color:#999;margin-top:20px;padding-right:0;line-height:36px;float:left;border:0}.ql[data-v-6a842fe4],.title[data-v-6a842fe4],.vii[data-v-6a842fe4]{margin-bottom:20px}.step[data-v-6a842fe4]{color:#5a5a5a}.subBtn[data-v-6a842fe4]{width:90px;height:34px;text-align:center;line-height:34px;color:#fff;background-color:#5a5a5a;border:0;margin-right:15px;font-size:14px;float:left}.active[data-v-6a842fe4]{background-color:#5188a6;cursor:pointer}",""])},747:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-date"}),e._v("管理员")]),e._v(" "),a("el-breadcrumb-item",{attrs:{to:"/admin/mseAdmin"}},[e._v("评测自媒体管理")]),e._v(" "),a("el-breadcrumb-item",[e._v("评测自媒体文章编辑")])],1)],1),e._v(" "),e.edit?a("div",[a("el-row",{staticClass:"vii"},[a("form",{attrs:{method:"POST",action:"/VR/upload"}},[a("h3",{staticClass:"step"},[e._v("1.标题图像")]),e._v(" "),a("VueImgInputer",{ref:"vii",attrs:{imgSrc:e.imgSrc,accept:"image/*",theme:"light",size:"large"},on:{onChange:e.fileChange},model:{value:e.picValue,callback:function(t){e.picValue=t},expression:"picValue"}})],1)]),e._v(" "),a("el-row",{staticClass:"title"},[a("h3",{staticClass:"step"},[e._v("2.评测标题")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],staticStyle:{outline:"none"},attrs:{type:"text",placeholder:"文章标题"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}})]),e._v(" "),a("el-row",{staticClass:"ql"},[a("h3",{staticClass:"step",staticStyle:{"margin-bottom":"10px"}},[e._v("3.评测内容")]),e._v(" "),a("div",{staticClass:"quill-editor"},[a("quill-editor",{attrs:{red:"quil",options:e.editorOption},model:{value:e.quillEditor,callback:function(t){e.quillEditor=t},expression:"quillEditor"}})],1)]),e._v(" "),a("el-row",[a("input",{staticClass:"subBtn active",attrs:{type:"button",value:"提交"},on:{click:function(t){e.subMse()}}})])],1):a("div",[a("p",[e._v("提交成功～")])])])},staticRenderFns:[]}},806:function(e,t,a){var i=a(681);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(133)("04c73a6e",i,!0)}});