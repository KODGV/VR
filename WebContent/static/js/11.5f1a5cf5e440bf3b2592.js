webpackJsonp([11],{549:function(a,t,e){e(807);var s=e(132)(e(636),e(748),"data-v-6f1fbf56",null);a.exports=s.exports},552:function(a,t){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADGklEQVRYR8VX0VUbMRDcqSBQAVABpIKQCrKqIKECnApwKoBUgKlAmwoIFRAqCK4goYLNm3uSn+5O8t2RD+7Hz7Yszc6MdseQN37wxufLIgCqqiLySUSOAZyX4N39p4g8A7AY44+5hc0CoKpfROQawMGcjd39L4BVjPFuav1eAKp6JiIRwHHa6ClVambGinePqpIRTcyc8gt3fxaRYGa/WkCaAAZVb919xVOnKuL3lArAjYgckQ0R+Wpmm9pvqwB4OIDbVMWdmVGCxY+qbgB8TvuQiVEBIwCJ9nvq7e7fzGw9PDmxcwmAEpFqUsy1owNUdQ3gKjHxcSjHCEAIgbqRumrlZVVDYO6+MbOLCuCOCXrCzE7K73sACuq3McZsvNJoWZoXdyczWVd+zvfv3H1EtaoeACBLLOyi9EMPQAiBhuEmvUUZQQiBm5y6O01Fk5XgVgCuReQhxtjrEcmYHfghCzsAvEYA7kWkWj03CSF40vzQzAi2BMAq//CDGGPV3IW89EJ3jUsANwAu3f27ma1qlg8hdD9qVMju+FtEXmKM1YalqqMzdgDS5h/cfYdu7r2jxiLCm3PWMm+SIbO8k6kEkPUf0bsPSHm4iLBTng/lyb9X1Y4lXkkzO+xJkPVt6dcCkZkj9enwZtstfZTPKRnoDLYEgKpm5886fApAluDEzNiMJp+aqyfkykbd3bT/MuFS2YqrPjZh7YpMUfAKAO1ryCEE4LHWr/cYsDNcjLEbSlNPIdn7PJSGrTgPomornjpgQv88R3qdtjqMUpIhyl67HbReDqsoIlxDwE3jpl7xyGS1dxila5IHTnW0Fk2lm/N838oNeW0IgTmBYfZpKFc1kABgz+dUbIJInulmw74GVOSHaq9oRbLcs7k50ZPiphw17RPttwAY5blPdcbsC6UEwcPJBPP+ek7MTkOHGfIqpWlWrsMUnUFPxnIATD1lzDZK5O7bfJWSHEw7OZrnNPWQ0vTyWD5wfI5cRzOvImP8uhXFyz1m/TMqnM+GQzB8ZZUZ0JZ/y1I6pnH3TsRXA5hZ/aJlixhYtPPMxf8AFMwlP+ff13EAAAAASUVORK5CYII="},636:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e(552),r=function(a){return a&&a.__esModule?a:{default:a}}(s);t.default={data:function(){return{checkVisible:!1,activeName2:"first",allowSubmit:!0,hostURL:"/VR",radio1:"yes",radio2:"yes",display1:!0,display2:!0,display3:!0,hint_logo:r.default,compare_data:{data:[{type:"svr",pic_location:"./static/img/img.jpg"}]},data:{id:1,remark:"remark",brand:"HTC",salesmodel:"salesmodel1",productmodel:"productmodel1",screentype:"screentype",monocularresolution:"monocaluarresolution",weight:1,workingtemperature:"workingtemperature",bluerayirradiance:"bluerayirradiance",soundpressurelevel:"soundpressurelevel",maximumoutputvoltage:"maximumoutputvoltage",broadbandcharacteristicvoltageofearphone:"bbcvop",boundarywarning:"bw",radiationdisturbance:"/static/img/img.jpg",electrostaticdischarge:"合格",fieldangle:"fieldangle",refreshrate:"rsr",systemdelay:"smy",trackingmode:"tm",trackingrange:"tr",meanchangeofvisualacuity:"mcova",ssqmean:"ssqmean",cvsmean:"cvsmean",picLocation:"/static/img/img.jpg",riskLevel:"低"}}},methods:{codeParsing:function(a){var t=this,e=function(a,e){t.$notify({title:a,message:e,type:"error"})};switch(a){case-1:e("系统错误","未知错误，请上报管理员");break;case 201:e("输入域错误","验证码错误");break;case 300:e("输入域错误","邮箱或密码错误");break;case 301:e("权限问题","用户已禁用，请联系管理员");break;case 302:e("权限问题","用户未激活，请去邮箱激活用户");break;case 303:e("注册问题","邮箱已占用，请更改邮箱");break;case 304:e("注册问题","昵称已占用，请更改昵称");break;case 401:e("权限问题","用户无权访问，请联系管理员");break;case 402:e("操作错误","删除错误,请刷新重试");break;case 415:e("操作错误","文件类型错误，请上传正确文件类型");break;case 500:e("系统错误","未知错误，请上报管理员");break;case 600:e("TIME_OUT","访问超时，请检查网络连接");break;case 700:e("激活错误","非法激活链接，请联系管理员");break;case 800:e("激活错误","用户已被激活，请直接登录");break;case 1e3:e("系统错误","参数错误，上报管理员");break;case 1001:e("权限问题","用户未登录，请重新登录");break;case 1002:e("系统错误","参数错误，上报管理员")}},getData:function(a){var t=this;t.data={id:1,remark:"remark",brand:"HTC",salesmodel:"salesmodel1",productmodel:"productmodel1",screentype:"screentype",monocularresolution:"monocaluarresolution",weight:1,workingtemperature:"workingtemperature",bluerayirradiance:"bluerayirradiance",soundpressurelevel:"soundpressurelevel",maximumoutputvoltage:"maximumoutputvoltage",broadbandcharacteristicvoltageofearphone:"bbcvop",boundarywarning:"bw",radiationdisturbance:"/static/img/img.jpg",electrostaticdischarge:"/static/img/img.jpg",fieldangle:"fieldangle",refreshrate:"rsr",systemdelay:"smy",trackingmode:"tm",trackingrange:"tr",meanchangeofvisualacuity:"mcova",ssqmean:"ssqmean",cvsmean:"cvsmean",picLocation:"/static/img/img.jpg",riskLevel:"低"},t.$axios({url:"/svr/"+localStorage.getItem("salesModel"),method:"get",baseURL:t.hostURL}).then(function(a){t.data=[],t.data=a.data.payload}).catch(function(a){console.log(a)})},refreshCompare:function(){this.compare_data=JSON.parse(localStorage.getItem("compare_data"))},compare:function(){var a=this,t=JSON.parse(localStorage.getItem("compare_data"));console.log("compare data: "+t);var e={id:localStorage.getItem("salesModel"),type:"svr",pic_location:localStorage.getItem("proPic")};a.checkCompare(localStorage.getItem("salesModel"))&&(0==t.data.length?(t.data.push(e),localStorage.setItem("compare_data",JSON.stringify(t)),localStorage.setItem("kind","svr"),a.refreshCompare()):t.data.length<4?e.type==t.data[0].type?(t.data.push(e),localStorage.setItem("compare_data",JSON.stringify(t)),localStorage.setItem("kind","svr"),a.refreshCompare()):a.$message("只有同类产品才能加入对比！"):a.$message("最多只能比较四个产品！"))},cancelCompare:function(a){var t=JSON.parse(localStorage.getItem("compare_data"));t.data.splice(a,1),localStorage.setItem("compare_data",JSON.stringify(t)),this.refreshCompare()},checkCompare:function(a){for(var t=JSON.parse(localStorage.getItem("compare_data")),e=0;e<t.data.length;e++)if(a==t.data[e].id)return!1;return!0},toCompareRes:function(){var a=this;0!=JSON.parse(localStorage.getItem("compare_data")).data.length?a.$router.push("/user/product-compare"):a.$message("您还没有加入对比的产品")},toSvr:function(){localStorage.setItem("activePane","svr")}},mounted:function(){var a=this;""==localStorage.getItem("ms_username")&&this.$router.replace("/login"),console.log("2222");var t=location.href.split("?"),e=t[1];console.log(e),a.getData(e),a.refreshCompare()}}},682:function(a,t,e){t=a.exports=e(58)(void 0),t.push([a.i,".crumbs[data-v-6f1fbf56]{text-decoration:none}.bread[data-v-6f1fbf56]{font-size:16px}.form-box[data-v-6f1fbf56]{width:300px;margin-top:50px;margin-left:0;box-shadow:0 0 8px 0 rgba(232,237,250,.9),0 2px 4px 0 rgba(232,237,250,.9);padding:50px 50px 50px 10px}.submit-btn[data-v-6f1fbf56]{width:220px;margin-left:80px}.submit-btn button[data-v-6f1fbf56]{width:100%}.product-box[data-v-6f1fbf56]{padding:28px;width:800px;border:1px solid #e1e1e1;box-shadow:0 0 2px rgba(0,0,0,.1)}.box-param[data-v-6f1fbf56]{width:100%;margin-top:5px}.param-title[data-v-6f1fbf56]{height:40px;border-top:none;border-bottom:1px solid #e6e6e6;text-align:center}.param-title h3[data-v-6f1fbf56]{padding:0 20px;font:normal 16px/40px Microsoft YaHei,arial}.param-tab table[data-v-6f1fbf56]{table-layout:fixed;width:100%;border-collapse:collapse;border:1px solid #e6e6e6;border-bottom:0 none}.param-tab th[data-v-6f1fbf56]{width:118px;padding:15px 0 0 20px;background:#fafafa;border-right:1px solid #e6e6e6;text-align:left;font:700 16px/26px Microsoft YaHei,arial;vertical-align:top}.param-tab td[data-v-6f1fbf56]{width:605px;padding:8px 0 6px;vertical-align:top}.tab-content[data-v-6f1fbf56]{padding:6px 20px 8px}ul[data-v-6f1fbf56]{list-style:none}.category li[data-v-6f1fbf56]{position:relative;padding:2px 0 2px 230px;line-height:26px;_zoom:1;word-wrap:break-word;font:14px/26px Microsoft YaHei,arial;color:#666;height:26px}.para-name[data-v-6f1fbf56]{position:absolute;top:2px;left:0;font-weight:700}.para-val[data-v-6f1fbf56]{position:relative;color:#666;border-bottom:1px dashed #0a50a1}.img-container[data-v-6f1fbf56]{max-width:50%}.img-container img[data-v-6f1fbf56]{width:100%}.text[data-v-6f1fbf56]{width:400px;font-size:15px}.btn[data-v-6f1fbf56]{margin-left:180px;margin-top:30px}.compare[data-v-6f1fbf56]{float:right;display:block;width:175px;bottom:300px;z-index:9999;top:128px;left:900px}#compare_box[data-v-6f1fbf56]{width:150px;border:1px solid #c0ccda;box-shadow:0 0 10px #c0ccda}#cancel-btn[data-v-6f1fbf56]{float:right;width:10px;height:50px;margin-top:40px;margin-left:15px;cursor:pointer}.compare_item[data-v-6f1fbf56]{float:left;width:90%;height:100px}.compare_item_img[data-v-6f1fbf56]{width:70%;height:80%;margin-left:10px;margin-top:10px}.compare_btn[data-v-6f1fbf56]{margin:20px 0 10px 30px}",""])},748:function(a,t){a.exports={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("div",{staticClass:"crumbs"},[e("el-breadcrumb",{attrs:{separator:"/"}},[e("el-breadcrumb-item",{attrs:{to:"/user/product-list"}},[e("i",{staticClass:"el-icon-date"}),a._v("产品中心")]),a._v(" "),e("el-breadcrumb-item",{attrs:{to:"/user/product-list"}},[e("span",{on:{click:a.toSvr}},[a._v("PC头显")])]),a._v(" "),e("el-breadcrumb-item",{attrs:{to:"/user/svr-comment"}},[a._v("产品简介")]),a._v(" "),e("el-breadcrumb-item",[a._v("详细参数")])],1)],1),a._v(" "),e("div",{staticClass:"compare"},[e("div",{attrs:{id:"compare_box"}},[a._l(a.compare_data.data,function(t,s){return e("div",{staticClass:"compare_item"},[e("div",[e("img",{staticClass:"compare_item_img",attrs:{src:t.pic_location}}),a._v(" "),e("div",{staticClass:"el-icon-circle-cross",attrs:{id:"cancel_btn"},on:{click:function(t){a.cancelCompare(s)}}})]),e("br")])}),a._v(" "),e("br"),a._v(" "),e("el-button",{staticClass:"compare_btn",attrs:{plain:!0,type:"warning"},on:{click:function(t){a.toCompareRes()}}},[a._v("查看对比")])],2)]),a._v(" "),e("div",{staticClass:"product-box"},[e("el-button",{staticStyle:{float:"right"},attrs:{plain:!0,type:"warning"},on:{click:function(t){a.compare()}}},[a._v("加入对比")]),a._v(" "),e("div",{staticClass:"box-param"},[e("div",{staticClass:"param-title"},[e("h3",[a._v(a._s(a.data.salesmodel))])]),a._v(" "),e("div",{staticClass:"param-tab"},[e("table",[e("tbody",[e("tr",[e("th",[a._v("产品外观")]),a._v(" "),e("td",[e("div",{staticClass:"tab-content"},[e("ul",{staticClass:"category"},[e("div",{staticClass:"img-container"},[e("img",{attrs:{src:a.data.picLocation}})])])])])])])]),a._v(" "),e("table",[e("tbody",[e("tr",[e("th",[a._v("品牌")]),a._v(" "),e("td",[e("div",{staticClass:"tab-content"},[e("ul",{staticClass:"category"},[e("span",{staticClass:"para-val"},[a._v(a._s(a.data.brand))])])])])])])]),a._v(" "),e("table",[e("tbody",[e("tr",[e("th",[a._v("销售型号（名）")]),a._v(" "),e("td",[e("div",{staticClass:"tab-content"},[e("ul",{staticClass:"category"},[e("span",{staticClass:"para-val"},[a._v(a._s(a.data.salesmodel))])])])])])])]),a._v(" "),e("table",[e("tbody",[e("tr",[e("th",[a._v("产品型号")]),a._v(" "),e("td",[e("div",{staticClass:"tab-content"},[e("ul",{staticClass:"category"},[e("span",{staticClass:"para-val"},[a._v(a._s(a.data.productmodel))])])])])])])]),a._v(" "),e("table",[e("tbody",[e("tr",[e("th",[a._v("产品配置")]),a._v(" "),e("td",[e("div",{staticClass:"tab-content"},[e("ul",{staticClass:"category"},[e("li",[e("span",{staticClass:"para-name"},[a._v("屏幕类型")]),a._v(" "),e("span",{staticClass:"para-val"},[a._v(a._s(a.data.screentype))])]),a._v(" "),e("li",[e("span",{staticClass:"para-name"},[a._v("单眼分辨率")]),a._v(" "),e("span",{staticClass:"para-val"},[a._v(a._s(a.data.monocularresolution))])]),a._v(" "),e("li",[e("span",{staticClass:"para-name"},[a._v("重量(kg)")]),a._v(" "),e("span",{staticClass:"para-val"},[a._v(a._s(a.data.weight))])])])])])])])]),a._v(" "),e("table",[e("tbody",[e("tr",[e("th",[a._v("安全性")]),a._v(" "),e("td",[e("div",{staticClass:"tab-content"},[e("ul",{staticClass:"category"},[e("li",[e("span",{staticClass:"para-name"},[a._v("工作温度(℃)\n                                            "),e("el-tooltip",{attrs:{content:"工作温度小于55℃表示正常",placement:"top"}},[e("img",{staticStyle:{width:"15px"},attrs:{src:a.hint_logo}})])],1),a._v(" "),e("span",{staticClass:"para-val"},[a._v(a._s(a.data.workingtemperature))])]),a._v(" "),e("li",[e("span",{staticClass:"para-name"},[a._v("蓝光辐照度（W·m^-2·sr^-1）")]),a._v(" "),e("span",{staticClass:"para-val"},[a._v(a._s(a.data.bluerayirradiance))])]),a._v(" "),e("li",[e("span",{staticClass:"para-name"},[a._v("声压级（dB(A)）\n                                            "),e("el-tooltip",{attrs:{content:"声压小于100dB表示正常",placement:"top"}},[e("img",{staticStyle:{width:"15px"},attrs:{src:a.hint_logo}})])],1),a._v(" "),e("span",{staticClass:"para-val"},[a._v(a._s(a.data.soundpressurelevel))])]),a._v(" "),e("li",[e("span",{staticClass:"para-name"},[a._v("播放器最大输出电压（mV）\n                                            "),e("el-tooltip",{attrs:{content:"最大输出电压小于150mV表示正常",placement:"top"}},[e("img",{staticStyle:{width:"15px"},attrs:{src:a.hint_logo}})])],1),a._v(" "),e("span",{staticClass:"para-val"},[a._v(a._s(a.data.maximumoutputvoltage))])]),a._v(" "),e("li",[e("span",{staticClass:"para-name"},[a._v("耳机的宽带特征电压（mV）\n                                            "),e("el-tooltip",{attrs:{content:"特征电压大于75mV表示正常",placement:"top"}},[e("img",{staticStyle:{width:"15px"},attrs:{src:a.hint_logo}})])],1),a._v(" "),e("span",{staticClass:"para-val"},[a._v(a._s(a.data.broadbandcharacteristicvoltageofearphone))])]),a._v(" "),e("li",[e("span",{staticClass:"para-name"},[a._v("边界警示")]),a._v(" "),e("span",{staticClass:"para-val"},[a._v(a._s(a.data.boundarywarning))])])])])])])])]),a._v(" "),e("table",[e("tbody",[e("tr",[e("th",[a._v("电磁兼容性")]),a._v(" "),e("td",[e("div",{staticClass:"tab-content"},[e("ul",{staticClass:"category"},[e("li",[e("span",{staticClass:"para-name"},[a._v("辐射骚扰")]),a._v(" "),e("el-button",{attrs:{type:"text"},on:{click:function(t){a.checkVisible=!0}}},[a._v("点击查看")]),a._v(" "),e("el-dialog",{attrs:{title:"辐射骚扰",visible:a.checkVisible},on:{"update:visible":function(t){a.checkVisible=t}}},[e("img",{attrs:{src:a.data.radiationdisturbance}}),a._v(" "),e("div",{staticClass:"dialog-footer",slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:function(t){a.checkVisible=!1}}},[a._v("确 定")])],1)])],1),a._v(" "),e("li",[e("span",{staticClass:"para-name"},[a._v("静电放电")]),a._v(" "),e("span",{staticClass:"para-val"},[a._v(a._s(a.data.electrostaticdischarge))])])])])])])])]),a._v(" "),e("table",[e("tbody",[e("tr",[e("th",[a._v("性能")]),a._v(" "),e("td",[e("div",{staticClass:"tab-content"},[e("ul",{staticClass:"category"},[e("li",[e("span",{staticClass:"para-name"},[a._v("视场角(°)\n                                                "),e("el-tooltip",{attrs:{content:"≥100为一级，＜100为二级",placement:"top"}},[e("img",{staticStyle:{width:"15px"},attrs:{src:a.hint_logo}})])],1),a._v(" "),e("span",{staticClass:"para-val"},[a._v(a._s(a.data.fieldangle))])]),a._v(" "),e("li",[e("span",{staticClass:"para-name"},[a._v("刷新率(Hz)\n                                                "),e("el-tooltip",{attrs:{content:"＞80为一级，≤80为二级",placement:"top"}},[e("img",{staticStyle:{width:"15px"},attrs:{src:a.hint_logo}})])],1),a._v(" "),e("span",{staticClass:"para-val"},[a._v(a._s(a.data.refreshrate))])]),a._v(" "),e("li",[e("span",{staticClass:"para-name"},[a._v("系统延迟(ms)\n                                                "),e("el-tooltip",{attrs:{content:"≤20为一级，＞20为二级",placement:"top"}},[e("img",{staticStyle:{width:"15px"},attrs:{src:a.hint_logo}})])],1),a._v(" "),e("span",{staticClass:"para-val"},[a._v(a._s(a.data.systemdelay))])]),a._v(" "),e("li",[e("span",{staticClass:"para-name"},[a._v("跟踪模式")]),a._v(" "),e("span",{staticClass:"para-val"},[a._v(a._s(a.data.trackingmode))])]),a._v(" "),e("li",[e("span",{staticClass:"para-name"},[a._v("跟踪范围（m）")]),a._v(" "),e("span",{staticClass:"para-val"},[a._v(a._s(a.data.trackingrange))])])])])])])])]),a._v(" "),e("table",[e("tbody",[e("tr",[e("th",[a._v("视疲劳（20min）")]),a._v(" "),e("td",[e("div",{staticClass:"tab-content"},[e("ul",{staticClass:"category"},[e("li",[e("span",{staticClass:"para-name"},[a._v("视力变化均值\n                                                "),e("el-tooltip",{attrs:{content:"＜0.1为一级，≥0.1为二级",placement:"top"}},[e("img",{staticStyle:{width:"15px"},attrs:{src:a.hint_logo}})])],1),a._v(" "),e("span",{staticClass:"para-val"},[a._v(a._s(a.data.meanchangeofvisualacuity))])]),a._v(" "),e("li",[e("span",{staticClass:"para-name"},[a._v("SSQ均值\n                                                "),e("el-tooltip",{attrs:{content:"≤90为一级，＞90为二级",placement:"top"}},[e("img",{staticStyle:{width:"15px"},attrs:{src:a.hint_logo}})])],1),a._v(" "),e("span",{staticClass:"para-val"},[a._v(a._s(a.data.ssqmean))])]),a._v(" "),e("li",[e("span",{staticClass:"para-name"},[a._v("CVS均值\n                                                "),e("el-tooltip",{attrs:{content:"≤80为一级，＞80为二级",placement:"top"}},[e("img",{staticStyle:{width:"15px"},attrs:{src:a.hint_logo}})])],1),a._v(" "),e("span",{staticClass:"para-val"},[a._v(a._s(a.data.cvsmean))])])])])])])])]),a._v(" "),e("table",[e("tbody",[e("tr",[e("th",[a._v("产品风险")]),a._v(" "),e("td",[e("div",{staticClass:"tab-content"},[e("ul",{staticClass:"category"},[e("li",[e("span",{staticClass:"para-name"},[a._v("产品风险等级\n                                                "),e("el-tooltip",{attrs:{content:"产品风险等级",placement:"top"}},[e("img",{staticStyle:{width:"15px"},attrs:{src:a.hint_logo}})])],1),a._v(" "),e("span",{staticClass:"para-val"},[a._v(a._s(a.data.riskLevel))])])])])])])])])])])],1)])},staticRenderFns:[]}},807:function(a,t,e){var s=e(682);"string"==typeof s&&(s=[[a.i,s,""]]),s.locals&&(a.exports=s.locals);e(133)("5be30b9d",s,!0)}});