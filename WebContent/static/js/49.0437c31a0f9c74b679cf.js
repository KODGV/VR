webpackJsonp([49],{

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(773)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(575),
  /* template */
  __webpack_require__(715),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 575:
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
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({

  data: function () {
    return {
      msg: '',
      message: "",
      pageNum: 1,
      hostURL: '/VR',
      content_show: false,
      id: '1',
      prop_id: "0",
      keyword: "",
      prop_keyword: 'VR资讯',
      content: 'VR资源网产业新闻频道,为您带来最新的VR行业新闻、虚拟现实最新设备资讯、VR投资创业相关资讯。',
      changenote: "a",
      encyclopedia_propchangerequrire: [{
        requireid: "1",
        id: '1',
        prop_id: "0",
        keyword: "",
        prop_keyword: 'VR资讯',
        content: 'VR资源网产业新闻频道,为您带来最新的VR行业新闻、虚拟现实最新设备资讯、VR投资创业相关资讯。',
        changenote: "a"
      }, {
        requireid: "2",
        id: '1',
        prop_id: "1",
        keyword: "",
        prop_keyword: 'VR资讯',
        content: 'VR资源网产业新闻频道,为您带来最新的VR行业新闻、虚拟现实最新设备资讯、VR投资创业相关资讯。',
        changenote: "a"
      }]
    };
  },

  methods: {
    handleRowHandle(row, event, column) {
      console.log(row.content);
      this.message = row.content;
      this.id = row.id;
      this.prop_id = row.prop_id;
      this.keyword = row.keyword;
      this.prop_keyword = row.prop_keyword;
      this.content = row.content;
      this.changenote = row.changenote;
      this.content_show = true;
    },
    handleCurrentChange() {
      var self = this;
      console.log("current-Page:");
      console.log(self.pageNum);
      self.getRequireList();
      self.content_show = false;
    },
    open1() //通过按钮

    {
      var self = this;
      if (self.id == -1) {
        self.$message({
          type: 'info',
          message: '修改失败，请选择一项请求'
        });
        return;
      }

      var updatedata = {
        id: '1',
        prop_id: "0",
        prop_keyword: 'VR资讯',
        content: 'VR资源网产业新闻频道,为您带来最新的VR行业新闻、虚拟现实最新设备资讯、VR投资创业相关资讯。',
        changenote: "a"
      };
      updatedata.id = self.id;
      updatedata.prop_id = self.prop_id;
      updatedata.prop_keyword = self.prop_keyword;
      updatedata.content = self.content;
      updatedata.changenote = self.changenote;

      self.$axios({
        url: '/encyclopedia-propRequireOpen1',
        method: 'post',
        baseURL: self.hostURL,
        data: updatedata
      }).then(response => {
        var state = response.data;
        if (state == 1) {
          self.$message({
            type: 'info',
            message: '修改成功'
          });
          self.getRequireList();
          self.id = -1;
          self.prop_id = -1;
          self.message = '';
          self.content_show = false;
        } else {
          self.$message({
            type: 'info',
            message: '修改失败'
          });
        }
      }).catch(error => {
        console.log(error);
      });
    },
    open2() //不通过按钮
    {
      var self = this;
      if (self.id == -1) {
        self.$message({
          type: 'info',
          message: '删除失败，请选择一项请求'
        });
        return;
      }
      var updatedata = {
        id: '1',
        prop_id: "0",
        prop_keyword: 'VR资讯',
        content: 'VR资源网产业新闻频道,为您带来最新的VR行业新闻、虚拟现实最新设备资讯、VR投资创业相关资讯。',
        changenote: "a"
      };
      updatedata.id = self.id;
      updatedata.prop_id = self.prop_id;
      updatedata.prop_keyword = self.prop_keyword;
      updatedata.content = self.content;
      updatedata.changenote = self.changenote;
      self.$axios({
        url: '/encyclopedia-propRequireOpen2',
        method: 'post',
        baseURL: self.hostURL,
        data: updatedata
      }).then(response => {
        var state = response.data;
        if (state == 1) {
          self.$message({
            type: 'info',
            message: '删除成功'
          });
          self.getRequireList();
          self.id = -1;
          self.prop_id = -1;
          self.message = '';
          self.content_show = false;
        } else {
          self.$message({
            type: 'info',
            message: '删除失败'
          });
        }
      }).catch(error => {
        console.log(error);
      });
    },
    /*
            .then(() => {
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                });
              }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消删除'
                });
              });
            }
      */
    getRequireList() {
      var self = this;
      var page = self.pageNum;
      self.encyclopedia_propchangerequrire = [];
      self.$axios({
        url: '/encyclopedia-propRequire/' + page,
        method: 'get',
        baseURL: self.hostURL
      }).then(response => {
        self.encyclopedia_propchangerequrire = response.data;
      }).catch(error => {
        console.log(error);
      });
    }
  },
  mounted() {
    var self = this;
    self.getRequireList();
  }

});

/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)(undefined);
// imports


// module
exports.push([module.i, ".content{float:left;width:70%}.content_title{text-align:center;text-transform:uppercase;color:#a7c942}.content_p{text-indent:50px;text-align:justify;letter-spacing:3px}.pagination{margin-left:50px}.crumbs{text-decoration:none}", ""]);

// exports


/***/ }),

/***/ 715:
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
  }), _vm._v(" 百科模块管理")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("词条审核")])], 1)], 1), _vm._v(" "), [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.encyclopedia_propchangerequrire,
      "border": "",
      "max-height": "500"
    },
    on: {
      "row-click": _vm.handleRowHandle
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "requireid",
      "label": "请求号",
      "width": "120"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "keyword",
      "label": "词条名",
      "width": "300"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "prop_keyword",
      "label": "词条属性"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "100"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "size": "small"
          },
          on: {
            "click": _vm.handleClick
          }
        }, [_vm._v("查看")])]
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
  })], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.content_show),
      expression: "content_show"
    }]
  }, [_c('h2', {
    staticClass: "content_title"
  }, [_vm._v("  内容概述   ")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-top": "10px",
      "border": "1px solid #A7C942"
    }
  }, [_c('p', {
    staticClass: "content_p",
    staticStyle: {
      "margin": "10px"
    }
  }, [_vm._v(_vm._s(_vm.message))])]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('div', {
    staticStyle: {
      "float": "right"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "success"
    },
    on: {
      "click": _vm.open1
    }
  }, [_vm._v("通过")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "danger"
    },
    on: {
      "click": _vm.open2
    }
  }, [_vm._v("不通过")])], 1)])]], 2)
},staticRenderFns: []}

/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(643);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(133)("baf27fd8", content, true);

/***/ })

});