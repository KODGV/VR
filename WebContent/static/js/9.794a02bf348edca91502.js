webpackJsonp([9],{529:function(e,t,r){r(815);var l=r(132)(r(616),r(756),"data-v-b6248b6c",null);e.exports=l.exports},553:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"ElRow",componentName:"ElRow",props:{gutter:Number,type:String,justify:{type:String,default:"start"},align:{type:String,default:"top"}},computed:{style:function(){var e={};return this.gutter&&(e.marginLeft="-"+this.gutter/2+"px",e.marginRight=e.marginLeft),e}}}},555:function(e,t,r){var l=r(132)(r(553),r(556),null,null);e.exports=l.exports},556:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"el-row",class:["start"!==e.justify?"is-justify-"+e.justify:"","top"!==e.align?"is-align-"+e.align:"",{"el-row--flex":"flex"===e.type}],style:e.style},[e._t("default")],2)},staticRenderFns:[]}},616:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=r(555),o=function(e){return e&&e.__esModule?e:{default:e}}(l),s=r(188);t.default={components:{ElRow:o.default,quillEditor:s.quillEditor},data:function(){return{hostURL:"/VR",restSize:30,editorOption:{modules:{toolbar:[[{header:[2,3,!1]}],["bold","italic"],[{list:"ordered"},{list:"bullet"}],["image"]]},placeholder:"请编写您的内容..."},options:[{label:"讨论",name:"discussion"},{label:"分享",name:"share"},{label:"求助",name:"help"},{label:"教程",name:"tutorial"},{label:"评测",name:"evaluation"},{label:"手机VR",name:"phonevr"},{label:"电脑VR",name:"computervr"}],ruleForm:{theme:"",title:"",content:""},rules:{title:[{required:!0,message:"请输入帖子标题",trigger:"blur"},{min:5,max:30,message:"长度在 5 到 30 个字符",trigger:"blur"}],theme:[{required:!0,message:"请选择帖子主题",trigger:"change"}],content:[{required:!0,message:"请输入帖子内容",trigger:"blur"}]}}},methods:{postText:function(){var e=this;e.$axios({url:"/post_put/"+localStorage.getItem("ms_userid"),method:"post",baseURL:e.hostURL,data:{theme:this.ruleForm.theme,title:this.ruleForm.title,content:this.ruleForm.content}}).catch(function(t){console.log(t),e.$message({type:"error",message:"connect fail"})})},handlePost:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.postText(),t.$message({type:"success",message:"发帖成功，正在跳回论坛"}),t.$router.push("/user/BBS")})},computeRestSize:function(){this.ruleForm.title.length<=30?this.restSize=30-this.ruleForm.title.length:this.restSize=0},mounted:function(){""==localStorage.getItem("ms_username")&&this.$router.replace("/login")}}}},690:function(e,t,r){t=e.exports=r(58)(void 0),t.push([e.i,".crumbs[data-v-b6248b6c]{text-decoration:none}.title-size[data-v-b6248b6c]{font-size:14px;margin:7px 0 0 15px;color:#8391a5}.size-num[data-v-b6248b6c]{color:#434c52;margin:0 2px}",""])},756:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"crumbs"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:"/user/BBS"}},[r("i",{staticClass:"el-icon-date"}),e._v(" VR论坛")]),e._v(" "),r("el-breadcrumb-item",[e._v("发表帖子")])],1)],1),e._v(" "),r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules}},[r("el-row",[r("el-col",{attrs:{span:3}},[r("el-form-item",{attrs:{prop:"theme"}},[r("el-select",{attrs:{placeholder:"请选择主题分类"},model:{value:e.ruleForm.theme,callback:function(t){e.ruleForm.theme=t},expression:"ruleForm.theme"}},e._l(e.options,function(e){return r("el-option",{key:e.name,attrs:{label:e.label,value:e.name}})}))],1)],1),e._v(" "),r("el-col",{attrs:{span:11,offset:1}},[r("el-form-item",{attrs:{prop:"title"}},[r("el-input",{attrs:{placeholder:"请输入帖子标题",maxlength:30},on:{change:e.computeRestSize},model:{value:e.ruleForm.title,callback:function(t){e.ruleForm.title=t},expression:"ruleForm.title"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:5}},[r("div",{staticClass:"title-size"},[e._v("还可输入"),r("b",{staticClass:"size-num"},[e._v(e._s(e.restSize))]),e._v("个字符")])])],1),e._v(" "),r("el-form-item",{attrs:{prop:"content"}},[r("el-col",{attrs:{span:18}},[r("quill-editor",{staticStyle:{"line-height":"1"},attrs:{red:"quil",options:e.editorOption},model:{value:e.ruleForm.content,callback:function(t){e.ruleForm.content=t},expression:"ruleForm.content"}})],1)],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handlePost("ruleForm")}}},[e._v("发表帖子")])],1)],1)],1)},staticRenderFns:[]}},815:function(e,t,r){var l=r(690);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);r(133)("4870e42a",l,!0)}});