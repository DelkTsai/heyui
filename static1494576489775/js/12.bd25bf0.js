webpackJsonp([12],{202:function(e,t,n){var o=n(0)(n(771),n(970),null,null);o.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/src/components/demos/message/notice4.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] notice4.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},771:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{notice:function(){this.$Notice("这是一个不会自动关闭的通知",0)},notice2:function(){this.$Notice({title:"不会关闭",content:"这是一个不会自动关闭的消息",timeout:0})}}}},970:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("button",{staticClass:"h-btn",on:{click:function(t){e.notice()}}},[e._v("不自动关闭")]),n("button",{staticClass:"h-btn",on:{click:function(t){e.notice2()}}},[e._v("不自动关闭带标题")])])},staticRenderFns:[]},e.exports.render._withStripped=!0}});