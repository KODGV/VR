webpackJsonp([50],{

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(796)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(573),
  /* template */
  __webpack_require__(740),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 573:
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

/* harmony default export */ __webpack_exports__["default"] = ({

    data() {
        return {
            search: '',
            hostURL: '/VR',
            activePane: 'first',
            // data:[
            //     {"encyclopedia":
            //         {"id":2,
            //          "keyword":"VR应用",
            //          "type":"VR应用",
            //          "changenote":"changenote2",
            //          "upvote":1,
            //          "downvote":0},
            //          "encyclopedia_prop":[
            //              {"id":2,
            //               "prop_id":0,
            //               "prop_keyword":"1.地产漫游",
            //               "content":"在虚拟现实系统中自由行走、任意观看，冲击力强，能使客户获得身临其境的真实感受，促进了合同签约的速度。",
            //               "changenote":"changenote2.0"},
            //              {"id":2,
            //               "prop_id":1,
            //               "prop_keyword":"2.虚拟样板间",
            //               "content":"用于商业项目长期招商、招租、用于各类评比活动。一次性投入，可以应用在项目报批、建设、销售、招商招租等各个环节，并可以永久使用。",
            //               "changenote":"changenote2.1"},
            //              {"id":2,
            //               "prop_id":2,
            //               "prop_keyword":"3.多专业协调",
            //               "content":"多类型车辆行驶路线与其他布置、净空高度，如道路桥梁仿真。",
            //               "changenote":"changenote2.2"}]
            //         }],
            tableData: [],
            // tableData:[
            //     {"id":2,
            //      "keyword":"VR应用",
            //      "prop_keyword":"1.地产漫游"},
            //     {"id":2,
            //      "keyword":"VR应用",
            //      "prop_keyword":"2.虚拟样板间"},
            //     {"id":2,
            //      "keyword":"VR应用",
            //      "prop_keyword":"1.地产漫游"},
            //     {"id":2,
            //      "keyword":"VR应用",
            //      "prop_keyword":"2.虚拟样板间"},
            //      {"id":2,
            //      "keyword":"VR应用",
            //      "prop_keyword":"1.地产漫游"},
            //     {"id":2,
            //      "keyword":"VR应用",
            //      "prop_keyword":"2.虚拟样板间"},],
            // encyclopediaList:[
            //     {
            //         id:1,
            //         classify:'一级目录名',
            //         keyword:'二级目录名',
            //         type:"",
            //         changenote:'who change',
            //         firstprop:'2222222222222222',
            //     },
            //     {
            //         id:2,
            //         keyword:'ffffffff',
            //         type:"",
            //         changenote:'1111111111111111111111111111111111',
            //         firstprop:'222222222222',
            //     }
            // ],
            pageNum: 1
        };
    },
    methods: {
        handleCurrentChange() {
            console.log(this.pageNum);
            this.getData(this.pageNum);
        },
        deleteRow(index, encyclopediaList) {
            var self = this;
            var deleteData = {
                keyword: "",
                pageNum: 1
            };
            deleteData.keyword = tableData[index].keyword;
            deleteData.pageNum = tableData[index].id;
            self.$axios({
                url: '/encyclopediaDelete',
                method: 'post',
                baseURL: self.hostURL,
                data: deleteData
            }).then(response => {
                var state = response.data;
                if (state == 0) {
                    self.$message({
                        type: 'info',
                        message: '删除失败，该词条还有修改请 求未处理'
                    });
                } else {
                    self.$message({
                        type: 'info',
                        message: '删除成功'
                    });
                    self.tableData.splice(index, 1);
                }
            }).catch(error => {
                self.$message({
                    type: 'info',
                    message: 'connect fail'
                });
            });
        },
        getEncyclopedia() {
            var self = this;
            self.encyclopediaList = [];
            var searchData = {
                prop_keyword: "",
                pageNum: 1
            };
            searchData.prop_keyword = self.search;
            searchData.pageNum = self.pageNum;
            self.$axios({
                url: '/encyclopediaSearch',
                method: 'post',
                baseURL: self.hostURL,
                data: searchData
            }).then(response => {
                self.tableData = [];
                self.tableData = response.data;
            }).catch(error => {
                self.$message({
                    type: 'info',
                    message: 'connect fail'
                });
            });
        },
        getData(pn) {
            var self = this;
            self.$axios({
                url: '/encyclopedia/getall/' + pn,
                method: 'get',
                baseURL: self.hostURL
            }).then(response => {
                self.tableData = [];
                var data = response.data;
                for (var i = 0; i < data.length; i++) {
                    var sub = data[i].encyclopedia_prop;
                    for (var j = 0; j < sub.length; j++) {
                        self.tableData.push({ id: data[i].encyclopedia.id,
                            keyword: data[i].encyclopedia.keyword,
                            prop_keyword: sub[j].prop_keyword });
                    }
                }
            }).catch(error => {
                console.log(error);
            });
        }

    },
    mounted() {
        var self = this;
        // self.items=[];
        self.getData(self.pageNum);
    }
});

/***/ }),

/***/ 666:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)(undefined);
// imports


// module
exports.push([module.i, ".content{float:left;width:70%}.pagination{margin-left:50px}.crumbs{text-decoration:none}", ""]);

// exports


/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "crumbs"
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', [_c('i', {
    staticClass: "el-icon-edit"
  }), _vm._v(" 百科模块管理")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("词条删除")])], 1)], 1), _vm._v(" "), _c('el-input', {
    staticStyle: {
      "width": "500px",
      "margin-bottom": "20px"
    },
    attrs: {
      "placeholder": "请输入词条属性"
    },
    model: {
      value: (_vm.search),
      callback: function($$v) {
        _vm.search = $$v
      },
      expression: "search"
    }
  }), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "icon": "search"
    },
    on: {
      "click": function($event) {
        _vm.getEncyclopedia()
      }
    }
  }, [_vm._v("搜索")]), _vm._v(" "), _c('el-table', {
    attrs: {
      "data": _vm.tableData,
      "border": "",
      "width": "700",
      "max-height": "500"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "id",
      "label": "词条编号",
      "width": "130"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "keyword",
      "label": "词条名",
      "width": "200"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "prop_keyword",
      "label": "词条属性"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "120"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "danger",
            "size": "small"
          },
          nativeOn: {
            "click": function($event) {
              $event.preventDefault();
              _vm.deleteRow(scope.$index, _vm.tableData)
            }
          }
        }, [_vm._v("\r\n           删除\r\n         ")])]
      }
    }])
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "pagination"
  }, [_c('el-pagination', {
    attrs: {
      "current-page": _vm.pageNum,
      "layout": "prev, next"
    },
    on: {
      "current-change": _vm.handleCurrentChange,
      "update:currentPage": function($event) {
        _vm.pageNum = $event
      }
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 796:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(666);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(133)("668a8c93", content, true);

/***/ })

});